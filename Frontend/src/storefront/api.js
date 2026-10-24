const base = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
let user = null;
let pending = Promise.resolve();
let productsPromise;
let syncError;
const keys = ['profile', 'cart', 'wishlist', 'addresses', 'orders'];
const cache = (field, value) => localStorage.setItem(`sixg-${field}`, JSON.stringify(value));
function readList(field) {
  try { const value = JSON.parse(localStorage.getItem(`sixg-${field}`) || '[]'); return Array.isArray(value) ? value : []; }
  catch { return []; }
}
export async function request(path, { method = 'GET', body, ...options } = {}) {
  let response;
  try {
    response = await fetch(`${base}/api${path}`, {
      ...options, method, credentials: 'include', keepalive: method !== 'GET',
      headers: body === undefined ? {} : { 'Content-Type': 'application/json' },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    });
  } catch {
    throw new Error('Cannot reach the store server. Please try again.');
  }
  const data = await response.json().catch(() => {
    throw new Error('The server did not return a valid API response. Check that the frontend is connected to the backend.');
  });
  if (!response.ok) {
    const error = new Error(data.message || 'The request failed. Please try again.');
    error.status = response.status;
    throw error;
  }
  return data;
}
function apply(state) {
  if (!state.profile?.id) throw new Error('The server did not verify your account. Please log in again.');
  for (const field of keys) if (state[field] !== undefined) cache(field, state[field]);
  user = state.profile;
}
export const api = {
  get user() { return user; },
  async load() {
    productsPromise ||= request('/products').then((data) => data.products).catch((error) => { productsPromise = null; throw error; });
    const products = await productsPromise;
    await pending;
    try { apply(await request('/account')); }
    catch (error) {
      if (error.status !== 401) throw error;
      if (user || localStorage.getItem('sixg-account-owner')) {
        for (const key of keys) localStorage.removeItem(`sixg-${key}`);
      }
      user = null;
      localStorage.removeItem('sixg-account-owner');
      for (const key of ['profile', 'addresses', 'orders']) localStorage.removeItem(`sixg-${key}`);
      const valid = readList('cart').filter((item) => {
        const product = products.find((p) => p.id === item?.id);
        return product?.inStock && product.sizes.includes(item.size) && product.colors.includes(item.color) && Number.isInteger(item.qty) && item.qty > 0 && item.qty <= 99;
      }).slice(0, 100);
      cache('cart', valid);
      cache('wishlist', readList('wishlist').filter((id) => products.some((p) => p.id === id)).slice(0, 100));
    }
    if (user) localStorage.setItem('sixg-account-owner', user.id);
    syncError = null;
    return products;
  },
  save(field, value) {
    if (!user) return Promise.resolve();
    const snapshot = JSON.parse(JSON.stringify(value));
    const operation = pending.then(() => request(`/account/${field}`, {
      method: field === 'profile' ? 'PATCH' : 'PUT', body: field === 'profile' ? snapshot : { [field]: snapshot },
    }));
    pending = operation.then(() => { syncError = null; }, (error) => { syncError = error; });
    return operation;
  },
  async authenticate(mode, body) {
    const guestCart = user ? [] : readList('cart');
    const guestWishlist = user ? [] : readList('wishlist');
    const result = await request(`/auth/${mode}`, { method: 'POST', body });
    if (!result.success || !result.user?.id) throw new Error('The server did not confirm your account. Please try again.');
    if (mode === 'register') {
      for (const field of user ? keys : ['profile', 'addresses', 'orders']) localStorage.removeItem(`sixg-${field}`);
      localStorage.removeItem('sixg-account-owner');
      user = null;
      return result;
    }
    const state = await request('/account');
    apply(state);
    localStorage.setItem('sixg-account-owner', user.id);
    const merged = [...state.cart];
    for (const item of guestCart) {
      const existing = merged.find((entry) => entry.id === item.id && entry.size === item.size && entry.color === item.color);
      if (existing) existing.qty = Math.min(99, existing.qty + item.qty);
      else merged.push(item);
    }
    const wishlist = [...new Set([...state.wishlist, ...guestWishlist])];
    await this.save('cart', merged);
    await this.save('wishlist', wishlist);
    cache('cart', merged);
    cache('wishlist', wishlist);
  },
  async checkout() {
    await pending;
    if (syncError) throw syncError;
    const result = await request('/account/orders', { method: 'POST', body: {} });
    cache('cart', result.cart);
    cache('orders', result.orders);
    return result;
  },
  async logout() {
    await pending.catch(() => {});
    await request('/auth/logout', { method: 'POST', body: {} });
    user = null;
    for (const key of keys) localStorage.removeItem(`sixg-${key}`);
    localStorage.removeItem('sixg-account-owner');
  },
};
