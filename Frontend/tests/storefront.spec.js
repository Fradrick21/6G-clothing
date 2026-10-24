import { test, expect } from "@playwright/test";

const base = "http://127.0.0.1:5173";
const stored = (page, key) =>
  page.evaluate((key) => JSON.parse(localStorage.getItem(key)), key);

test.beforeEach(async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(base);
  await page.evaluate(() => {
    window.__navigationMarker = true;
  });
  // Every test also checks React runtime errors and navigation without reloads.
  page.on("close", () => expect(errors).toEqual([]));
});

test("cart and wishlist survive navigation, refresh, and checkout", async ({
  page,
}) => {
  const email = `checkout-${Date.now()}@example.com`;
  await page.request.post(`${base}/api/auth/register`, { data: { name: "Checkout Shopper", email, password: "Password1!" } });
  await page.request.post(`${base}/api/auth/login`, { data: { email, password: "Password1!" } });
  await page.request.put(`${base}/api/account/addresses`, { data: { addresses: [{ id: "checkout_address", name: "Checkout Shopper", phone: "9876543210", line1: "123 Main Street", city: "Chennai", state: "Tamil Nadu", pincode: "600001", type: "Home", isDefault: true }] } });
  await page.reload();
  await page.evaluate(() => { window.__navigationMarker = true; });
  const card = page.locator("#featuredGrid article").first();
  await card.locator("[data-add-cart]").click();
  await expect(page.locator(".cart-btn b")).toHaveText("1");
  await card.locator("[data-wish]").click();
  await expect(page.locator(".wishlist-icon b")).toHaveText("1");
  await page.locator(".wishlist-icon").click();
  await expect(page.locator(".saved-card")).toHaveCount(1);
  await expect
    .poll(() => page.evaluate(() => window.__navigationMarker))
    .toBe(true);
  await page.locator(".cart-btn").click();
  await expect(page.locator(".cart-row")).toHaveCount(1);
  await page.locator('[data-qty="1"]').click();
  await expect(page.locator(".cart-row .qty span")).toHaveText("2");
  await page.reload();
  await expect(page.locator(".cart-row .qty span")).toHaveText("2");
  await page.locator(".checkout-btn").click();
  await expect(page.locator(".cart-row")).toHaveCount(0);
  expect(await stored(page, "sixg-orders")).toHaveLength(1);
  await page.locator('.main-nav a[href="tshirts.html"]').click();
  await page.locator(".user-icon").click();
  await expect(page.locator(".order-list article")).toHaveCount(1);
});

test("shop search, pagination, sorting, and mobile filters work", async ({
  page,
}) => {
  await page.locator('.main-nav a[href="tshirts.html"]').click();
  await expect(page.locator(".tshirt-grid .product-card")).toHaveCount(12);
  await page.locator('[data-page="2"]').click();
  await expect(page.locator(".tshirt-grid .product-card")).toHaveCount(8);
  await page.locator(".search-box input").fill("manga");
  await expect(page.locator(".tshirt-grid .product-card")).toHaveCount(1);
  await expect(page.locator(".tshirt-grid")).toContainText("Manga Panel Tee");
  await page.locator(".search-box input").fill("");
  await page
    .locator(".product-bar select")
    .selectOption({ label: "Price: Low to High" });
  await expect(
    page.locator(".tshirt-grid .product-card").first(),
  ).toContainText("Rs599");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator("#filterToggleBtn").click();
  await expect(page.locator("#filtersDrawer")).toHaveClass(/open/);
  await page
    .locator('[data-filter-group="category"] input[value="Anime"]')
    .check();
  await page.keyboard.press("Escape");
  await expect(page.locator("#filtersDrawer")).not.toHaveClass(/open/);
  await expect(page.locator(".tshirt-grid .product-card")).toHaveCount(2);
  await expect(page.locator("body")).toHaveCSS("overflow", "visible");
});

test("product query, gallery, size, color, quantity, and buy now are preserved", async ({
  page,
}) => {
  await page.goto(`${base}/product.html?id=manga-panel-tee`);
  await expect(page.locator(".product-info h1")).toHaveText("Manga Panel Tee");
  await expect(page).toHaveTitle("Manga Panel Tee | 6G Clothing");
  await page.locator('[data-size-option="XL"]').click();
  await page.locator('[data-product-color][data-color-name="Red"]').click();
  await page.locator(".product-page .qty button").last().click();
  await page.locator(".buy-action").click();
  await expect(page).toHaveURL(/cart\.html/);
  const cart = await stored(page, "sixg-cart");
  expect(cart).toEqual([
    expect.objectContaining({
      id: "manga-panel-tee",
      qty: 2,
      size: "XL",
      color: "Red",
    }),
  ]);
});

test("registration validation, profile updates, and address CRUD remain functional", async ({
  page,
}) => {
  await page.locator(".user-icon").click();
  await page.locator('[data-auth-tab="register"]').click();
  await page.locator('[data-auth-form="register"] [type="submit"]').click();
  await expect(page.locator("#reg-name-err")).toHaveText(
    "Full name is required.",
  );
  await page.locator("#reg-name").fill("Test Shopper");
  const email = `test-${Date.now()}@example.com`;
  await page.locator("#reg-email").fill(email);
  await page.locator("#reg-password").fill("Password1!");
  await page.locator("#reg-confirm").fill("Password1!");
  await page.locator('[data-auth-form="register"] [type="submit"]').click();
  await expect(page.locator('[data-auth-message]')).toContainText('Please log in');
  await expect(page.locator('[data-auth-form="login"]')).toBeVisible();
  expect((await page.request.get(`${base}/api/account`)).status()).toBe(401);
  await page.locator('[data-auth-form="login"] [name="password"]').fill('Password1!');
  await page.locator('[data-auth-form="login"] [type="submit"]').click();
  await expect(page.locator("[data-account-name]")).toHaveText("Test Shopper");
  await page.locator("[data-edit-profile-btn]").click();
  await page.locator("#profileNameInput").fill("Updated Shopper");
  await page.locator('#profileForm [type="submit"]').click();
  await expect(page.locator("[data-account-name]")).toHaveText(
    "Updated Shopper",
  );
  await page.locator("[data-add-address-btn]").first().click();
  await page.locator("#addressNameInput").fill("Updated Shopper");
  await page.locator("#addressPhoneInput").fill("9876543210");
  await page.locator("#addressLine1Input").fill("123 Main Street");
  await page.locator("#addressCityInput").fill("Chennai");
  await page.locator("#addressStateInput").selectOption("Tamil Nadu");
  await page.locator("#addressPincodeInput").fill("600001");
  await page.locator('#addressForm [type="submit"]').click();
  await expect(page.locator("[data-address-content]")).toContainText(
    "123 Main Street",
  );
  await page.locator("[data-edit-default-address]").click();
  await page.locator("#addressLine1Input").fill("456 Updated Street");
  await page.locator('#addressForm [type="submit"]').click();
  await expect(page.locator("[data-address-content]")).toContainText(
    "456 Updated Street",
  );
  await page.locator("[data-delete-default-address]").click();
  await expect.poll(() => stored(page, "sixg-addresses")).toEqual([]);
});

test("repeated route changes and browser history do not duplicate handlers or styles", async ({
  page,
}) => {
  for (let i = 0; i < 3; i++) {
    await page.locator('.main-nav a[href="about.html"]').click();
    await expect(page.locator("[data-page-styles]")).toHaveCount(1);
    await page.locator('.main-nav a[href="tshirts.html"]').click();
    await expect(page.locator(".tshirt-grid .product-card")).toHaveCount(12);
  }
  await page.locator(".tshirt-grid [data-add-cart]").first().click();
  await expect(page.locator(".cart-btn b")).toHaveText("1");
  expect(await stored(page, "sixg-cart")).toHaveLength(1);
  await page.goBack();
  await expect(page).toHaveURL(/about\.html/);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator("#menuBtn").click();
  await expect(page.locator(".main-nav")).toHaveClass(/open/);
  await page.locator("#menuBtn").click();
  await expect(page.locator(".main-nav")).not.toHaveClass(/open/);
  expect(await page.evaluate(() => window.__navigationMarker)).toBe(true);
});

test('registration requires login, guest cart merges on login and logout protects account', async ({ page }) => {
  const email = `guest-${Date.now()}@example.com`;
  await page.locator('#featuredGrid [data-add-cart]').first().click();
  await expect(page.locator('.cart-btn b')).toHaveText('1');
  await page.locator('.user-icon').click();
  await page.locator('[data-auth-tab="register"]').click();
  await page.locator('#reg-name').fill('Guest Shopper');
  await page.locator('#reg-email').fill(email);
  await page.locator('#reg-password').fill('Password1!');
  await page.locator('#reg-confirm').fill('Password1!');
  await page.locator('[data-auth-form="register"] [type="submit"]').click();
  await expect(page.locator('[data-auth-message]')).toContainText('Please log in');
  expect((await page.request.get(`${base}/api/account`)).status()).toBe(401);
  expect(await stored(page, 'sixg-profile')).toBeNull();
  await page.goto(`${base}/account.html`);
  await expect(page).toHaveURL(/login\.html/);
  await page.locator('[data-auth-form="login"] [name="email"]').fill(email);
  await page.locator('[data-auth-form="login"] [name="password"]').fill('Password1!');
  await page.locator('[data-auth-form="login"] [type="submit"]').click();
  await expect(page.locator('[data-account-name]')).toHaveText('Guest Shopper');
  const state = await (await page.request.get(`${base}/api/account`)).json();
  expect(state.cart).toHaveLength(1);
  await page.locator('[data-logout-btn]').click();
  await page.locator('#confirmLogoutBtn').click();
  await expect(page).toHaveURL(/login\.html/);
  await page.locator('[data-auth-form="login"] [name="email"]').fill(email);
  await page.locator('[data-auth-form="login"] [name="password"]').fill('WrongPassword1!');
  await page.locator('[data-auth-form="login"] [type="submit"]').click();
  await expect(page.locator('.app-toast')).toContainText('Invalid email or password');
  await expect(page).toHaveURL(/login\.html/);
  await page.locator('[data-auth-form="login"] [name="password"]').fill('Password1!');
  await page.locator('[data-auth-form="login"] [type="submit"]').click();
  await expect(page.locator('[data-account-name]')).toHaveText('Guest Shopper');
  await expect(page.locator('.cart-btn b')).toHaveText('1');
  await page.request.post(`${base}/api/auth/logout`, { data: {} });
  await page.goto(`${base}/account.html`);
  await expect(page).toHaveURL(/login\.html/);
  expect(await stored(page, 'sixg-profile')).toBeNull();
});

test('contact and newsletter forms show server confirmation', async ({ page }) => {
  await page.goto(`${base}/contact.html`);
  const contact = page.locator('.message-form form');
  await contact.locator('[type="text"]').fill('Test Customer');
  await contact.locator('[type="email"]').fill('contact@example.com');
  await contact.locator('select').selectOption({ label: 'Order Support' });
  await contact.locator('textarea').fill('Please help with my order.');
  await contact.locator('[type="submit"]').click();
  await expect(page.locator('.message-form .form-status')).toHaveText('Your message has been received.');
  await page.goto(base);
  const subscribe = page.locator('#subscribeForm');
  await subscribe.locator('[type="email"]').fill('subscriber@example.com');
  await subscribe.locator('button').click();
  await expect(page.locator('.form-status')).toHaveText('Thanks for joining the 6G community.');
});

test('failed cart writes roll back and failed forms do not report success', async ({ page }) => {
  const email = `failure-${Date.now()}@example.com`;
  await page.request.post(`${base}/api/auth/register`, { data: { name: 'Failure Test', email, password: 'Password1!' } });
  await page.request.post(`${base}/api/auth/login`, { data: { email, password: 'Password1!' } });
  await page.reload();
  await page.route('**/api/account/cart', (route) => route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ message: 'Cart temporarily unavailable' }) }));
  await page.locator('#featuredGrid [data-add-cart]').first().click();
  await expect(page.locator('.app-toast')).toContainText('Cart temporarily unavailable');
  await expect(page.locator('.cart-btn b')).toHaveText('0');
  const account = await (await page.request.get(`${base}/api/account`)).json();
  expect(account.cart).toEqual([]);
  await page.route('**/api/newsletter', (route) => route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ message: 'Please try subscribing later' }) }));
  const subscribe = page.locator('#subscribeForm');
  await subscribe.locator('[type="email"]').fill('failure@example.com');
  await subscribe.locator('button').click();
  await expect(page.locator('.app-toast')).toContainText('Please try subscribing later');
  await expect(page.locator('.form-status')).toBeEmpty();
  await expect(subscribe.locator('[type="email"]')).toHaveValue('failure@example.com');
});

test('local profile cannot grant dashboard access and failed registration stays on the form', async ({ page }) => {
  await page.evaluate(() => localStorage.setItem('sixg-profile', JSON.stringify({ name: 'Local Only', email: 'local@example.com' })));
  await page.goto(`${base}/account.html`);
  await expect(page).toHaveURL(/login\.html/);
  expect(await stored(page, 'sixg-profile')).toBeNull();
  await page.locator('[data-auth-tab="register"]').click();
  await page.locator('#reg-name').fill('Failed Registration');
  await page.locator('#reg-email').fill('not-saved@example.com');
  await page.locator('#reg-password').fill('Password1!');
  await page.locator('#reg-confirm').fill('Password1!');
  await page.route('**/api/auth/register', (route) => route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ message: 'Registration could not be saved' }) }));
  await page.locator('[data-auth-form="register"] [type="submit"]').click();
  await expect(page.locator('.app-toast')).toContainText('Registration could not be saved');
  await expect(page.locator('[data-auth-form="register"]')).toBeVisible();
  await expect(page.locator('[data-auth-message]')).toHaveCount(0);
  expect((await page.request.get(`${base}/api/account`)).status()).toBe(401);
});
