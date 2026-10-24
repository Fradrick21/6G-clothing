import { api, request } from "./api";

export function createStorefront(navigate) {
  const controller = new AbortController();
  const timers = new Set();
  const animations = new Set();
  let loadingStatus;
  const listen = (node, type, callback, options = {}) =>
    node.addEventListener(type, callback, {
      ...options,
      signal: controller.signal,
    });
  const schedule = (callback, delay) => {
    const timer = window.setTimeout(() => {
      timers.delete(timer);
      callback();
    }, delay);
    timers.add(timer);
    return timer;
  };
  const img = "assets/";
  const fallbackImage = "assets/images/single-product-wave-no-logo.png";
  const shopPageSize = 12;
  let shopPage = 1;
  const money = (value) => `Rs${value.toLocaleString("en-IN")}`;
  const byId = (id) => document.getElementById(id);
  const read = (key, fallback) => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  };
  const write = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));

  let catalog = [];

  const styles = [
    ["Oversized T-Shirts", "Oversized"],
    ["Regular Fit T-Shirts", "Regular Fit"],
    ["Graphic T-Shirts", "Graphic"],
    ["Minimal T-Shirts", "Minimal"],
    ["New Arrivals", "New"],
    ["Best Sellers", "Best Seller"],
  ];

  const benefits = [
    [
      "icons/premium-quality.svg",
      "Premium Quality",
      "Carefully selected fabrics",
    ],
    [
      "icons/comfortable-fit.svg",
      "Comfortable Fit",
      "Designed for everyday wear",
    ],
    ["icons/modern-designs.svg", "Modern Designs", "Minimal yet bold"],
    ["icons/delivery.svg", "Fast Delivery", "Across India"],
    ["icons/easy-returns.svg", "Easy Returns", "Hassle-free shopping"],
    ["icons/made-for-you.svg", "Made for You", "A brand that listens"],
  ];

  const reviews = [
    [
      "Arun P",
      "Amazing quality and perfect fit. 6G is now my favourite brand!",
    ],
    ["Siva K", "Loved the minimal designs. Super comfortable for daily wear."],
    ["Harish M", "Fast delivery and great fabric. Definitely buying again!"],
  ];

  function cart() {
    return read("sixg-cart", []);
  }

  function wishlist() {
    return read("sixg-wishlist", []);
  }

  function orders() {
    return read("sixg-orders", []);
  }

  function addresses() {
    return read("sixg-addresses", []);
  }

  function profile() {
    return read("sixg-profile", {
      name: "Account Holder",
      email: "Add your email",
      phone: "",
    });
  }

  async function setAddresses(items) {
    await api.save("addresses", items);
    write("sixg-addresses", items);
  }

  async function setProfile(data) {
    await api.save("profile", data);
    write("sixg-profile", data);
  }

  function setCart(items) {
    const previous = cart();
    write("sixg-cart", items);
    api.save("cart", items).catch((error) => {
      write("sixg-cart", previous);
      updateBadges();
      renderCartPage();
      toast(error.message);
    });
    updateBadges();
  }

  function setWishlist(items) {
    const previous = wishlist();
    write("sixg-wishlist", items);
    api.save("wishlist", items).catch((error) => {
      write("sixg-wishlist", previous);
      updateBadges();
      renderWishlistPage();
      syncWishButtons();
      toast(error.message);
    });
    updateBadges();
  }

  function cartCount() {
    return cart().reduce((sum, item) => sum + item.qty, 0);
  }

  function updateBadges() {
    document.querySelectorAll(".user-icon").forEach((link) => { link.href = "account.html"; });
    const cartTotal = cartCount();
    document.querySelectorAll(".cart-btn b").forEach((node) => {
      node.textContent = cartTotal;
      node.classList.toggle("is-empty", cartTotal === 0);
    });
    document.querySelectorAll(".wishlist-icon").forEach((link) => {
      link.classList.add("wish-nav");
      let badge = link.querySelector("b");
      if (!badge) {
        badge = document.createElement("b");
        link.appendChild(badge);
      }
      const wishlistTotal = wishlist().length;
      badge.textContent = wishlistTotal;
      badge.classList.toggle("is-empty", wishlistTotal === 0);
    });
  }

  function findProduct(id) {
    return catalog.find((product) => product.id === id) || catalog[0];
  }

  function addToCart(
    id,
    qty = 1,
    options = {},
    source = null,
    afterAdd = null,
  ) {
    const product = findProduct(id);
    if (!product.inStock) { toast('This product is out of stock.'); return; }
    const commit = () => {
      const items = cart();
      const size = options.size || product.size;
      const color = options.color || product.color;
      const existing = items.find(
        (item) => item.id === id && item.size === size && item.color === color,
      );
      if (existing) existing.qty = Math.min(99, existing.qty + qty);
      else items.push({ id, qty: Math.min(99, qty), size, color, selected: true });
      setCart(items);
      toast(`${product.name} added to cart`);
      if (afterAdd) afterAdd();
    };
    flyToHeader(source, ".cart-btn", "cart", commit);
  }

  function toggleWishlist(id, source = null) {
    const items = wishlist();
    const isSaved = items.includes(id);
    const commit = () => {
      const current = wishlist();
      const next = isSaved
        ? current.filter((item) => item !== id)
        : [...new Set([...current, id])];
      setWishlist(next);
      renderWishlistPage();
      syncWishButtons();
    };
    if (isSaved) commit();
    else flyToHeader(source, ".wishlist-icon", "heart", commit);
  }

  function productUrl(id) {
    return `product.html?id=${encodeURIComponent(id)}`;
  }

  function swatches(product) {
    return product.swatches
      .map((color) => `<span style="background:${color}"></span>`)
      .join("");
  }

  function productPageSelections() {
    const page = document.querySelector(".product-page");
    return {
      color: page?.querySelector("[data-product-color].active")?.dataset
        .colorName,
      size: page?.querySelector("[data-size-option].active")?.dataset
        .sizeOption,
    };
  }

  function setProductGalleryImage(index) {
    const gallery = document.querySelector(".gallery");
    if (!gallery) return;
    const thumbs = [...gallery.querySelectorAll("[data-gallery-index]")];
    const total = thumbs.length;
    if (!total) return;
    const nextIndex = (index + total) % total;
    const active = thumbs[nextIndex];
    const image = gallery.querySelector(".main-product-image img");
    if (image) {
      image.src = active.dataset.image;
      image.alt = active.dataset.alt || image.alt;
    }
    thumbs.forEach((button) =>
      button.classList.toggle("active", button === active),
    );
    gallery.dataset.galleryIndex = String(nextIndex);
  }

  function productCard(product, extra = "") {
    const saved = wishlist().includes(product.id) ? "saved" : "";
    const visibleSwatches = product.swatches.slice(0, 4);
    const remainingSwatches = Math.max(
      0,
      product.swatches.length - visibleSwatches.length,
    );
    return `
      <article class="product-card ${extra}" data-product-id="${product.id}" data-product-url="${productUrl(product.id)}">
        <div class="card-media">
          ${product.badge ? `<span class="badge ${product.badge === "Best Seller" ? "red" : ""}">${product.badge}</span>` : ""}
          <button class="wish ${saved}" data-wish="${product.id}" aria-label="Save ${product.name}">${saved ? "♥" : "♡"}</button>
          <img class="card-product-img" src="${product.image}" alt="${product.name}">
        </div>
        <div class="thumb-row">${visibleSwatches.map((color, index) => `<span class="${index === 0 ? "active" : ""}" style="background:${color}" data-preview-image="${product.image}" data-preview-color="${color}"><img src="${product.image}" alt=""></span>`).join("")}</div>
        <div class="card-body">
          <h3>${product.name}</h3>
          <p class="card-copy">${product.copy}</p>
          <div class="price-row"><strong>${money(product.price)}</strong><del>${money(product.mrp)}</del></div>
          <div class="swatch-line">${visibleSwatches.map((color, index) => `<i class="${index === 0 ? "active" : ""}" style="background:${color}" data-preview-image="${product.image}" data-preview-color="${color}"></i>`).join("")}${remainingSwatches ? `<em>+${remainingSwatches}</em>` : ""}</div>
          <div class="rating-row"><b>★ ${product.rating}</b><span>(${product.reviews} reviews)</span></div>
          <button class="add-cart" data-add-cart="${product.id}"><img src="assets/icons/shopping-bag.svg" alt=""><span>Add to Cart</span></button>
        </div>
      </article>
    `;
  }

  function homeCard(product) {
    const saved = wishlist().includes(product.id) ? "saved" : "";
    return `
      <article class="product-card" data-product-id="${product.id}" data-product-url="${productUrl(product.id)}">
        <div class="product-img-wrap">
          ${product.badge ? `<span class="badge ${product.badge === "Best Seller" ? "red" : ""}">${product.badge}</span>` : ""}
          <img src="${product.image}" alt="${product.name}">
          <button class="wish ${saved}" data-wish="${product.id}" aria-label="Save ${product.name}">${saved ? "♥" : "♡"}</button>
        </div>
        <h3 class="product-title">${product.name}</h3>
        <p class="price">${money(product.price)}</p>
        <div class="swatches">${swatches(product)}</div>
        <div class="rating"><b>★ ${product.rating} <span>(${product.reviews})</span></b></div>
        <button class="add-cart" data-add-cart="${product.id}"><img src="assets/icons/shopping-bag.svg" alt=""><span>Add to Cart</span></button>
      </article>
    `;
  }

  function renderHome() {
    const styleGrid = byId("styleGrid");
    if (styleGrid) {
      styleGrid.innerHTML = styles
        .map(
          ([title, filter], index) => `
        <a class="style-card" href="tshirts.html?filter=${encodeURIComponent(filter)}">
          <div class="style-text">${title.replace(" ", "<br>")}<span>→</span></div>
          <img src="${catalog[index % catalog.length].image}" alt="${title}">
        </a>
      `,
        )
        .join("");
    }

    const featured = byId("featuredGrid");
    if (featured)
      featured.innerHTML = catalog.slice(0, 5).map(homeCard).join("");
    const seller = byId("sellerGrid");
    if (seller)
      seller.innerHTML = catalog
        .filter((product) => product.badge || product.rating >= 4.8)
        .slice(0, 5)
        .map(homeCard)
        .join("");
    const benefitList = byId("benefitList");
    if (benefitList) {
      benefitList.innerHTML = benefits
        .map(
          ([icon, title, text]) => `
        <article class="benefit-card">
          <span class="benefit-icon"><img src="${img + icon}" alt="${title} icon"></span>
          <h3>${title}</h3><p>${text}</p>
        </article>
      `,
        )
        .join("");
    }
    const arrivalGallery = byId("arrivalGallery");
    if (arrivalGallery) {
      arrivalGallery.innerHTML = catalog
        .slice(0, 5)
        .map(
          (product) => `
        <article class="arrival-item" style="--dot:${product.swatches[0]}">
          <img src="${product.image}" alt="${product.name}">
          <p>${product.color}</p>
        </article>
      `,
        )
        .join("");
    }
    const insta = byId("instaStrip");
    if (insta)
      insta.innerHTML = catalog
        .slice(0, 7)
        .map(
          (product, index) =>
            `<img src="${product.image}" alt="6G Clothing outfit ${index + 1}">`,
        )
        .join("");
    const reviewGrid = byId("reviewGrid");
    if (reviewGrid) {
      reviewGrid.innerHTML = reviews
        .map(
          ([name, text]) => `
        <article class="review-card">
          <div class="avatar">${name
            .split(" ")
            .map((part) => part[0])
            .join("")}</div>
          <div><h3>${name}</h3><div class="stars">★★★★★</div><p>"${text}"</p></div>
        </article>
      `,
        )
        .join("");
    }
  }

  function valuesForGroup(group) {
    return [
      ...document.querySelectorAll(
        `[data-filter-group="${group}"] input[type='checkbox']:checked`,
      ),
    ]
      .map((input) => input.value)
      .filter(Boolean);
  }

  function activeButtonValues(selector, key) {
    return [...document.querySelectorAll(`${selector}.active`)]
      .map((button) => button.dataset[key])
      .filter(Boolean);
  }

  function shopState() {
    const category = valuesForGroup("category").filter(
      (value) => value !== "All T-Shirts",
    );
    const priceInput = document.querySelector("[data-price-range]");
    return {
      search: (document.querySelector(".search-box input")?.value || "")
        .trim()
        .toLowerCase(),
      category,
      sizes: activeButtonValues("[data-size]", "size"),
      colors: activeButtonValues("[data-color]", "color"),
      fabrics: valuesForGroup("fabric"),
      printTypes: valuesForGroup("print"),
      inStockOnly: valuesForGroup("availability").includes("In Stock"),
      maxPrice: Number(priceInput?.value || 999),
    };
  }

  function hasAnyActiveFilters(state = shopState()) {
    return Boolean(
      state.search ||
      state.category.length ||
      state.sizes.length ||
      state.colors.length ||
      state.fabrics.length ||
      state.printTypes.length ||
      state.inStockOnly ||
      state.maxPrice < 999,
    );
  }

  function productMatchesCategory(product, selected) {
    if (!selected.length) return true;
    return selected.some((filter) => {
      if (filter === "New") return product.badge === "New";
      if (filter === "Best Seller") return product.badge === "Best Seller";
      return product.category === filter || product.fit === filter;
    });
  }

  function filteredProducts() {
    const state = shopState();
    let items = catalog.filter((product) => {
      const haystack =
        `${product.name} ${product.category} ${product.fit} ${product.color} ${(product.colors || []).join(" ")} ${product.fabric} ${product.printType} ${product.badge || ""}`.toLowerCase();
      const matchesSearch = !state.search || haystack.includes(state.search);
      const matchesCategory = productMatchesCategory(product, state.category);
      const matchesSize =
        !state.sizes.length ||
        state.sizes.some((size) =>
          (product.sizes || [product.size]).includes(size),
        );
      const matchesColor =
        !state.colors.length ||
        state.colors.some((color) =>
          (product.colors || [product.color]).includes(color),
        );
      const matchesFabric =
        !state.fabrics.length || state.fabrics.includes(product.fabric);
      const matchesPrint =
        !state.printTypes.length ||
        state.printTypes.includes(product.printType);
      const matchesAvailability = !state.inStockOnly || product.inStock;
      const matchesPrice = product.price <= state.maxPrice;
      return (
        matchesSearch &&
        matchesCategory &&
        matchesSize &&
        matchesColor &&
        matchesFabric &&
        matchesPrint &&
        matchesAvailability &&
        matchesPrice
      );
    });
    const sort = document.querySelector(".product-bar select")?.value || "";
    if (sort.includes("Low to High"))
      items = items.sort((a, b) => a.price - b.price);
    else if (sort.includes("High to Low"))
      items = items.sort((a, b) => b.price - a.price);
    if (sort.includes("Rated"))
      items = items.sort(
        (a, b) => b.rating - a.rating || b.reviews - a.reviews,
      );
    if (sort.includes("Newest"))
      items = items.sort((a, b) => (b.badge === "New") - (a.badge === "New"));
    return items;
  }

  function updateFilterUi() {
    const state = shopState();
    const priceLabel = document.querySelector("[data-price-label]");
    if (priceLabel) priceLabel.textContent = `Rs299 - ${money(state.maxPrice)}`;
    document.querySelectorAll(".filters label").forEach((label) => {
      const input = label.querySelector("input");
      label.classList.toggle("active", Boolean(input?.checked));
    });
    document
      .querySelectorAll(".category-strip [data-strip-filter]")
      .forEach((link) => {
        const value = link.dataset.stripFilter;
        const active =
          value === "All T-Shirts"
            ? !state.category.length
            : state.category.includes(value);
        link.classList.toggle("active", active);
      });
    document
      .querySelector("[data-clear-filters]")
      ?.toggleAttribute("disabled", !hasAnyActiveFilters(state));
  }

  function scrollShopToTop() {
    const target =
      document.querySelector(".product-bar") ||
      document.querySelector(".tshirt-grid");
    if (!target) return;
    const headerOffset =
      document.querySelector(".site-header")?.offsetHeight || 0;
    const top =
      target.getBoundingClientRect().top + window.scrollY - headerOffset - 14;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }

  function renderPagination(totalItems) {
    const pagination = document.querySelector(".pagination");
    if (!pagination) return;
    const totalPages = Math.ceil(totalItems / shopPageSize);
    if (totalPages <= 1) {
      pagination.innerHTML = "";
      pagination.hidden = true;
      return;
    }
    pagination.hidden = false;
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    pagination.innerHTML = `
      <button type="button" data-page-action="prev" ${shopPage === 1 ? "disabled" : ""} aria-label="Previous page">&lt;</button>
      ${pages.map((page) => `<button type="button" class="${page === shopPage ? "active" : ""}" data-page="${page}" aria-label="Page ${page}">${page}</button>`).join("")}
      <button type="button" data-page-action="next" ${shopPage === totalPages ? "disabled" : ""} aria-label="Next page">&gt;</button>
    `;
  }

  function renderShop(options = {}) {
    const grid = document.querySelector(".tshirt-grid");
    if (!grid) return;
    if (options.resetPage) shopPage = 1;
    updateFilterUi();
    const items = filteredProducts();
    const totalPages = Math.max(1, Math.ceil(items.length / shopPageSize));
    shopPage = Math.min(shopPage, totalPages);
    const pageStart = (shopPage - 1) * shopPageSize;
    const pageItems = items.slice(pageStart, pageStart + shopPageSize);
    grid.innerHTML = pageItems.length
      ? pageItems.map((product) => productCard(product)).join("")
      : `<div class="empty-state"><h3>No T-shirts found</h3><p>Try clearing a few filters or widening the price range.</p><button type="button" data-clear-filters>Clear Filters</button></div>`;
    const bar = document.querySelector(".product-bar p");
    if (bar) {
      const shownStart = items.length ? pageStart + 1 : 0;
      const shownEnd = Math.min(pageStart + pageItems.length, items.length);
      bar.textContent = `Showing ${shownStart}-${shownEnd} of ${items.length} products`;
    }
    renderPagination(items.length);
    syncWishButtons();
    if (options.scrollToTop) scrollShopToTop();
  }

  function renderProductPage() {
    if (!document.querySelector(".product-page")) return;
    const params = new URLSearchParams(location.search);
    const product = findProduct(params.get("id") || "wave-graphic-tee");
    const galleryItems = (
      product.swatches.length ? product.swatches : ["#eef2f4"]
    )
      .slice(0, 5)
      .map((color, index) => ({
        image: product.image,
        color,
        alt: `${product.name} view ${index + 1}`,
      }));
    document.title = `${product.name} | 6G Clothing`;
    document.querySelector(".crumbs b").textContent = product.name;
    document.querySelector(".product-info h1").textContent = product.name;
    document.querySelector(".product-copy").textContent = product.copy;
    document.querySelector(".brand-line").textContent =
      `${product.category} | ${product.fit}`;
    document.querySelector(".price-line strong").textContent = money(
      product.price,
    );
    document.querySelector(".price-line del").textContent = money(product.mrp);
    document.querySelector(".rating-line b").textContent = product.rating;
    document.querySelector(".rating-line em").textContent =
      `(${product.reviews} reviews)`;
    const mainImage = document.querySelector(".main-product-image img");
    if (mainImage) {
      mainImage.src = product.image;
      mainImage.alt = product.name;
    }
    const gallery = document.querySelector(".gallery");
    if (gallery) gallery.dataset.galleryIndex = "0";
    const thumbRow = document.querySelector(".gallery .thumb-row");
    if (thumbRow) {
      thumbRow.innerHTML = galleryItems
        .map(
          (item, index) => `
        <button type="button" class="${index === 0 ? "active" : ""}" data-gallery-index="${index}" data-image="${item.image}" data-alt="${item.alt}" style="--thumb-color:${item.color}">
          <img src="${item.image}" alt="${item.alt}" />
        </button>
      `,
        )
        .join("");
    }
    const colorText = document.querySelector(".option-block h2 span");
    if (colorText) colorText.textContent = product.color;
    const colorOptions = document.querySelector(".color-options");
    if (colorOptions) {
      colorOptions.innerHTML = (product.colors || [product.color])
        .map(
          (colorName, index) => `
        <button type="button" class="${index === 0 ? "active" : ""}" data-product-color data-color-name="${colorName}" style="background:${product.swatches[index % product.swatches.length] || "#fff"}" aria-label="${colorName}"></button>
      `,
        )
        .join("");
    }
    const sizeText = document.querySelector(".size-block h2 span");
    if (sizeText) sizeText.textContent = product.size;
    const sizeOptions = document.querySelector(".size-options");
    if (sizeOptions) {
      const sizes = product.sizes || [product.size];
      sizeOptions.innerHTML = ["S", "M", "L", "XL", "XXL"]
        .map(
          (size) => `
        <button type="button" class="${size === product.size ? "active" : ""}" data-size-option="${size}" ${sizes.includes(size) ? "" : "disabled"}>${size}</button>
      `,
        )
        .join("");
    }
    const related = document.querySelector(".related-grid");
    if (related)
      related.innerHTML = catalog
        .filter((item) => item.id !== product.id)
        .slice(0, 4)
        .map(
          (item) => `
      <article data-product-id="${item.id}" data-product-url="${productUrl(item.id)}">
        <button data-wish="${item.id}">${wishlist().includes(item.id) ? "♥" : "♡"}</button>
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3><p><b>${money(item.price)}</b><span>★ ${item.rating} (${item.reviews})</span></p>
        <a href="#" data-add-cart="${item.id}">Add to Cart</a>
      </article>
    `,
        )
        .join("");
    document
      .querySelector(".cart-action")
      ?.setAttribute("data-add-cart", product.id);
    document
      .querySelector(".buy-action")
      ?.setAttribute("data-buy-now", product.id);
    document
      .querySelector(".image-wish")
      ?.setAttribute("data-wish", product.id);
  }

  function renderCartPage() {
    const shell = document.querySelector(".cart-shell");
    if (!shell) return;
    const rows = cart();
    const itemsWrap = document.querySelector(".cart-items");
    const selected = rows.filter((item) => item.selected !== false);
    const subtotal = selected.reduce(
      (sum, item) => sum + findProduct(item.id).price * item.qty,
      0,
    );
    const discount = subtotal >= 1800 ? 200 : subtotal >= 1200 ? 100 : 0;
    const shipping = subtotal - discount >= 999 || subtotal === 0 ? 0 : 79;
    const total = Math.max(0, subtotal - discount + shipping);

    itemsWrap.innerHTML = `
      <div class="cart-toolbar">
        <label><input type="checkbox" data-select-all ${rows.every((item) => item.selected !== false) ? "checked" : ""}> <span>Select All (${cartCount()} items)</span></label>
        <button type="button" data-remove-selected><img src="assets/icons/trash.svg" alt="">Remove Selected</button>
      </div>
      ${
        rows.length
          ? rows
              .map((item) => {
                const product = findProduct(item.id);
                return `
          <article class="cart-row" data-cart-row="${item.id}" data-size="${item.size}" data-color="${item.color}">
            <input type="checkbox" ${item.selected !== false ? "checked" : ""} data-select-item aria-label="Select ${product.name}">
            <a class="item-thumb" href="${productUrl(product.id)}" aria-label="View ${product.name}"><img src="${product.image}" alt="${product.name}"></a>
            <div class="item-copy"><h2>${product.name}</h2><p>${product.copy}</p><div><span class="dot" style="background:${product.swatches[0]}"></span>Color: ${item.color}<em>Size: ${item.size}</em></div></div>
            <div class="item-price"><b>${money(product.price)}</b><del>${money(product.mrp)}</del></div>
            <div class="qty" aria-label="Quantity"><button data-qty="-1">-</button><span>${item.qty}</span><button data-qty="1">+</button></div>
            <button class="trash" data-remove-item aria-label="Remove ${product.name}"><img src="assets/icons/trash.svg" alt=""></button>
          </article>
        `;
              })
              .join("")
          : `<div class="empty-state">Your cart is empty. Add a T-shirt to start your order.</div>`
      }
      <p class="coupon-bar">Automatic discount: Rs100 from Rs1,200; Rs200 from Rs1,800.</p>
    `;

    const summary = document.querySelector(".summary-card");
    summary.innerHTML = `
      <h2>Order Summary</h2>
      <dl>
        <div><dt>Subtotal (${cartCount()} items)</dt><dd>${money(subtotal)}</dd></div>
        <div><dt>Discount</dt><dd class="green">- ${money(discount)}</dd></div>
        <div><dt>Shipping</dt><dd>${money(shipping)} ${shipping ? "" : "<span>FREE</span>"}</dd></div>
      </dl>
      <div class="summary-total"><b>Total</b><strong>${money(total)}</strong></div>
      <a class="checkout-btn" href="#" data-checkout>Proceed to Checkout <span>→</span></a>
      <p>Payment: Cash on delivery. Your default account address is used for shipping.</p>
      <div class="summary-perks"><span>Secure<br>Payment</span><span>Easy<br>Returns</span><span>COD<br>Available</span></div>
    `;
    const recommend = document.querySelector(".cart-product-grid");
    if (recommend)
      recommend.innerHTML = catalog
        .filter((product) => !rows.some((item) => item.id === product.id))
        .slice(0, 6)
        .map(
          (product) => `
      <article data-product-id="${product.id}" data-product-url="${productUrl(product.id)}">
        <button class="heart-pill" data-wish="${product.id}">${wishlist().includes(product.id) ? "♥" : "♡"}</button>
        <h3>${product.name}</h3><p><b>${money(product.price)}</b><span>★ ${product.rating} (${product.reviews})</span></p>
        <button data-add-cart="${product.id}">Add to Cart</button>
      </article>
    `,
        )
        .join("");
  }

  function renderWishlistPage() {
    const grid = document.querySelector(".saved-grid");
    if (!grid) return;
    const ids = wishlist();
    const products = ids.map(findProduct);
    document.querySelector(".wishlist-toolbar h2 span").textContent =
      `(${products.length} items)`;
    grid.innerHTML = products.length
      ? products
          .map(
            (product) => `
      <article class="saved-card" data-product-id="${product.id}" data-product-url="${productUrl(product.id)}">
        <button class="heart-pill saved" data-wish="${product.id}" aria-label="Remove ${product.name}">♥</button>
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <b class="saved-price">${money(product.price)}</b>
        <div class="swatches">${swatches(product)}<em>+${Math.max(1, product.swatches.length - 2)}</em></div>
        <div class="saved-rating">★ ${product.rating} <span>(${product.reviews})</span></div>
        <button class="cart-red" data-add-cart="${product.id}">Add to Cart</button>
      </article>
    `,
          )
          .join("")
      : `<div class="empty-state">Your wishlist is empty. Tap the heart on any T-shirt to save it here.</div>`;

    const recommend = document.querySelector(".recommend-grid");
    if (recommend)
      recommend.innerHTML = catalog
        .filter((product) => !ids.includes(product.id))
        .slice(0, 6)
        .map(
          (product) => `
      <article data-product-id="${product.id}" data-product-url="${productUrl(product.id)}">
        <button class="heart-pill" data-wish="${product.id}">♡</button>
        <h3>${product.name}</h3><div><b>${money(product.price)}</b><span>★ ${product.rating} (${product.reviews})</span></div>
        <button data-add-cart="${product.id}">Add to Cart</button>
      </article>
    `,
        )
        .join("");
  }

  function syncWishButtons() {
    const ids = wishlist();
    document.querySelectorAll("[data-wish]").forEach((button) => {
      const saved = ids.includes(button.dataset.wish);
      button.classList.toggle("saved", saved);
      const img = button.querySelector("img");
      if (img) {
        button.innerHTML = `${img.outerHTML}${saved ? "Saved" : "Add to Wishlist"}`;
      } else {
        button.textContent = saved ? "♥" : "♡";
      }
    });
  }

  function flyToHeader(source, targetSelector, type, done) {
    const target = document.querySelector(targetSelector);
    if (!source || !target) {
      done();
      return;
    }
    const from = source.getBoundingClientRect();
    const to = target.getBoundingClientRect();
    const node = document.createElement("span");
    node.className = `fly-token ${type === "heart" ? "heart" : "cart"}`;
    node.innerHTML =
      type === "heart"
        ? "♥"
        : `<img src="assets/icons/shopping-bag.svg" alt="">`;
    node.style.left = `${from.left + from.width / 2}px`;
    node.style.top = `${from.top + from.height / 2}px`;
    document.body.appendChild(node);
    source.classList.add("is-flying");

    const startX = from.left + from.width / 2;
    const startY = from.top + from.height / 2;
    const endX = to.left + to.width / 2;
    const endY = to.top + to.height / 2;
    const lift = Math.min(90, Math.abs(endY - startY) * 0.28 + 34);
    const animation = node.animate(
      [
        { transform: "translate3d(0,0,0) scale(.72)", opacity: 0 },
        {
          transform: "translate3d(0,-10px,0) scale(1)",
          opacity: 1,
          offset: 0.12,
        },
        {
          transform: `translate3d(${(endX - startX) * 0.62}px, ${(endY - startY) * 0.62 - lift}px, 0) scale(.92)`,
          opacity: 1,
          offset: 0.68,
        },
        {
          transform: `translate3d(${endX - startX}px, ${endY - startY}px, 0) scale(.34)`,
          opacity: 0,
        },
      ],
      {
        duration: 720,
        easing: "cubic-bezier(.2,.82,.22,1)",
        fill: "forwards",
      },
    );

    animations.add(animation);
    animation.onfinish = () => {
      node.remove();
      source.classList.remove("is-flying");
      target.classList.add("badge-pop");
      done();
      schedule(() => target.classList.remove("badge-pop"), 280);
    };
  }

  function toast(message) {
    let node = document.querySelector(".app-toast");
    if (!node) {
      node = document.createElement("div");
      node.className = "app-toast";
      document.body.appendChild(node);
    }
    node.textContent = message;
    node.classList.add("show");
    clearTimeout(node.timer);
    node.timer = schedule(() => node.classList.remove("show"), 1600);
  }

  function clearShopFilters() {
    document
      .querySelectorAll(".filters input[type='checkbox']")
      .forEach((input) => {
        input.checked = input.value === "All T-Shirts";
      });
    document
      .querySelectorAll("[data-size], [data-color]")
      .forEach((button) => button.classList.remove("active"));
    const priceInput = document.querySelector("[data-price-range]");
    if (priceInput) priceInput.value = priceInput.max || "999";
    const searchInput = document.querySelector(".search-box input");
    if (searchInput) searchInput.value = "";
    renderShop({ scrollToTop: true, resetPage: true });
  }

  function setCategoryFilter(value) {
    const inputs = [
      ...document.querySelectorAll('[data-filter-group="category"] input'),
    ];
    inputs.forEach((input) => {
      input.checked =
        value === "All T-Shirts"
          ? input.value === "All T-Shirts"
          : input.value === value;
    });
    renderShop({ scrollToTop: true, resetPage: true });
  }

  function handleFilterCheckbox(input) {
    const group = input.closest("[data-filter-group]")?.dataset.filterGroup;
    if (group === "category") {
      const all = document.querySelector(
        '[data-filter-group="category"] input[value="All T-Shirts"]',
      );
      if (input.value === "All T-Shirts" && input.checked) {
        document
          .querySelectorAll(
            '[data-filter-group="category"] input:not([value="All T-Shirts"])',
          )
          .forEach((item) => (item.checked = false));
      } else if (all) {
        all.checked = !document.querySelectorAll(
          '[data-filter-group="category"] input:not([value="All T-Shirts"]):checked',
        ).length;
      }
    }
    renderShop({ scrollToTop: true, resetPage: true });
  }

  function attachEvents() {
    const menu = byId("menuBtn");
    if (menu && !menu.dataset.menuBound) {
      menu.dataset.menuBound = "true";
      listen(menu, "click", () =>
        document.querySelector(".main-nav")?.classList.toggle("open"),
      );
    }

    listen(document, "click", (event) => {
      // Eye toggle
      const eyeBtn = event.target.closest(".eye-btn");
      if (eyeBtn) {
        const input = document.getElementById(eyeBtn.dataset.eye);
        if (input) {
          const isVisible = input.type === "text";
          input.type = isVisible ? "password" : "text";
          eyeBtn.classList.toggle("is-visible", !isVisible);
          eyeBtn.setAttribute(
            "aria-label",
            isVisible ? "Show password" : "Hide password",
          );
          input.focus();
        }
        return;
      }
      const wish = event.target.closest("[data-wish]");
      if (wish) {
        event.preventDefault();
        event.stopPropagation();
        toggleWishlist(wish.dataset.wish, wish);
        return;
      }
      const add = event.target.closest("[data-add-cart]");
      if (add) {
        event.preventDefault();
        event.stopPropagation();
        const qty = Number(
          document.querySelector(".product-page .qty span")?.textContent || 1,
        );
        addToCart(
          add.dataset.addCart,
          qty,
          productPageSelections(),
          add,
          renderCartPage,
        );
        return;
      }
      const preview = event.target.closest("[data-preview-image]");
      if (preview) {
        event.preventDefault();
        event.stopPropagation();
        const card = preview.closest(".product-card");
        const image = card?.querySelector(".card-product-img");
        if (image) image.src = preview.dataset.previewImage;
        card?.querySelectorAll("[data-preview-image]").forEach((item) => {
          item.classList.toggle(
            "active",
            item.dataset.previewColor === preview.dataset.previewColor,
          );
        });
        return;
      }
      const buy = event.target.closest("[data-buy-now]");
      if (buy) {
        const qty = Number(
          document.querySelector(".product-page .qty span")?.textContent || 1,
        );
        addToCart(buy.dataset.buyNow, qty, productPageSelections(), buy, () => {
          navigate("cart.html");
        });
        return;
      }
      const galleryThumb = event.target.closest("[data-gallery-index]");
      if (galleryThumb) {
        event.preventDefault();
        setProductGalleryImage(Number(galleryThumb.dataset.galleryIndex));
        return;
      }
      const gallerySlide = event.target.closest(".main-product-image .slide");
      if (gallerySlide) {
        event.preventDefault();
        const current = Number(
          document.querySelector(".gallery")?.dataset.galleryIndex || 0,
        );
        setProductGalleryImage(
          current + (gallerySlide.classList.contains("next") ? 1 : -1),
        );
        return;
      }
      const expand = event.target.closest(".main-product-image .expand");
      if (expand) {
        event.preventDefault();
        const image = document.querySelector(".main-product-image img");
        if (image) window.open(image.src, "_blank", "noopener");
        return;
      }
      const productColor = event.target.closest("[data-product-color]");
      if (productColor) {
        event.preventDefault();
        productColor.parentElement
          .querySelectorAll("[data-product-color]")
          .forEach((button) =>
            button.classList.toggle("active", button === productColor),
          );
        const colorText = document.querySelector(".option-block h2 span");
        if (colorText) colorText.textContent = productColor.dataset.colorName;
        const index = [...productColor.parentElement.children].indexOf(
          productColor,
        );
        setProductGalleryImage(index);
        return;
      }
      const sizeOption = event.target.closest("[data-size-option]");
      if (sizeOption) {
        event.preventDefault();
        if (sizeOption.disabled) return;
        sizeOption.parentElement
          .querySelectorAll("[data-size-option]")
          .forEach((button) =>
            button.classList.toggle("active", button === sizeOption),
          );
        const sizeText = document.querySelector(".size-block h2 span");
        if (sizeText) sizeText.textContent = sizeOption.dataset.sizeOption;
        return;
      }
      const card = event.target.closest("[data-product-url]");
      if (
        card &&
        !event.target.closest(
          "a, button, input, select, textarea, label, [data-preview-image]",
        )
      )
        navigate(card.dataset.productUrl);
      if (event.target.matches("[data-qty]")) updateCartQty(event.target);
      const removeItem = event.target.closest("[data-remove-item]");
      if (removeItem) removeCartRow(removeItem);
      if (event.target.closest("[data-remove-selected]")) removeSelected();
      if (event.target.matches("[data-select-all]"))
        selectAll(event.target.checked);
      if (event.target.closest("[data-checkout]")) checkout(event);
      if (event.target.matches("[data-apply-coupon]"))
        toast("Coupon 6GSTORY is applied automatically on eligible carts.");
      if (event.target.matches("[data-clear-filters]")) clearShopFilters();
      const stripFilter = event.target.closest("[data-strip-filter]");
      if (stripFilter) {
        event.preventDefault();
        setCategoryFilter(stripFilter.dataset.stripFilter);
      }
      const sizeButton = event.target.closest("[data-size]");
      if (sizeButton) {
        sizeButton.classList.toggle("active");
        renderShop({ scrollToTop: true, resetPage: true });
      }
      const colorButton = event.target.closest("[data-color]");
      if (colorButton) {
        colorButton.classList.toggle("active");
        renderShop({ scrollToTop: true, resetPage: true });
      }
      const pageButton = event.target.closest(
        "[data-page], [data-page-action]",
      );
      if (pageButton) {
        const items = filteredProducts();
        const totalPages = Math.max(1, Math.ceil(items.length / shopPageSize));
        if (pageButton.dataset.pageAction === "prev")
          shopPage = Math.max(1, shopPage - 1);
        else if (pageButton.dataset.pageAction === "next")
          shopPage = Math.min(totalPages, shopPage + 1);
        else shopPage = Number(pageButton.dataset.page) || 1;
        renderShop({ scrollToTop: true });
      }
      if (event.target.closest(".wishlist-tools button")) {
        setWishlist([]);
        renderWishlistPage();
      }
    });

    listen(document, "change", (event) => {
      if (event.target.matches(".filters input[type='checkbox']"))
        handleFilterCheckbox(event.target);
      if (event.target.matches(".product-bar select, [data-price-range]"))
        renderShop({ scrollToTop: true, resetPage: true });
      if (event.target.matches("[data-select-item]")) selectItem(event.target);
    });
    listen(document, "input", (event) => {
      if (event.target.matches("[data-price-range]"))
        renderShop({ scrollToTop: true, resetPage: true });
    });
    document
      .querySelectorAll(".search-box input")
      .forEach((input) =>
        listen(input, "input", () =>
          renderShop({ scrollToTop: true, resetPage: true }),
        ),
      );
    document.querySelectorAll(".qty button").forEach((button) =>
      listen(button, "click", () => {
        const span = button.parentElement.querySelector("span");
        span.textContent = Math.max(
          1,
          Number(span.textContent) +
            (button.textContent.includes("+") ? 1 : -1),
        );
      }),
    );
    document
      .querySelectorAll("form")
      .forEach((form) => listen(form, "submit", handleFormSubmit));
    document.querySelectorAll("img").forEach((image) => {
      listen(
        image,
        "error",
        () => {
          image.src = fallbackImage;
        },
        { once: true },
      );
    });
  }

  function updateCartQty(button) {
    const row = button.closest(".cart-row");
    const items = cart();
    const item = items.find(
      (entry) =>
        entry.id === row.dataset.cartRow &&
        entry.size === row.dataset.size &&
        entry.color === row.dataset.color,
    );
    if (!item) return;
    item.qty += Number(button.dataset.qty);
    item.qty = Math.min(99, item.qty);
    const next =
      item.qty <= 0 ? items.filter((entry) => entry !== item) : items;
    setCart(next);
    renderCartPage();
  }

  function removeCartRow(button) {
    const row = button.closest(".cart-row");
    if (!row) return;
    setCart(
      cart().filter(
        (item) =>
          !(
            item.id === row.dataset.cartRow &&
            item.size === row.dataset.size &&
            item.color === row.dataset.color
          ),
      ),
    );
    renderCartPage();
  }

  function removeSelected() {
    setCart(cart().filter((item) => item.selected === false));
    renderCartPage();
  }

  function selectAll(checked) {
    setCart(cart().map((item) => ({ ...item, selected: checked })));
    renderCartPage();
  }

  function selectItem(input) {
    const row = input.closest(".cart-row");
    setCart(
      cart().map((item) =>
        item.id === row.dataset.cartRow &&
        item.size === row.dataset.size &&
        item.color === row.dataset.color
          ? { ...item, selected: input.checked }
          : item,
      ),
    );
    renderCartPage();
  }

  let checkingOut = false;
  async function checkout(event) {
    event.preventDefault();
    if (checkingOut) return;
    if (!api.user) {
      toast("Sign in to place your order.");
      navigate("login.html");
      return;
    }
    checkingOut = true;
    try {
      await api.checkout();
      if (controller.signal.aborted) return;
      updateBadges();
      renderCartPage();
      renderAccountPage();
      toast("Cash on delivery order placed. Thank you for shopping with 6G Clothing.");
    } catch (error) {
      toast(error.message);
    } finally {
      checkingOut = false;
    }
  }

  /* -------------------------------------------------------
     AUTH FORM VALIDATION HELPERS
     ------------------------------------------------------- */

  const pwdRules = {
    length: (pwd) => pwd.length >= 8,
    upper: (pwd) => /[A-Z]/.test(pwd),
    number: (pwd) => /[0-9]/.test(pwd),
    special: (pwd) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/.test(pwd),
  };

  function setFieldState(input, errorEl, message) {
    const wrap = input.closest("span");
    if (!wrap) return;
    if (message) {
      wrap.classList.add("is-invalid");
      wrap.classList.remove("is-valid");
      if (errorEl) errorEl.textContent = message;
    } else {
      wrap.classList.remove("is-invalid");
      wrap.classList.add("is-valid");
      if (errorEl) errorEl.textContent = "";
    }
  }

  function clearFieldState(input, errorEl) {
    const wrap = input.closest("span");
    if (!wrap) return;
    wrap.classList.remove("is-invalid", "is-valid");
    if (errorEl) errorEl.textContent = "";
  }

  function validateEmail(value) {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRe = /^[6-9]\d{9}$/;
    return emailRe.test(value) || phoneRe.test(value);
  }

  function validateRegisterForm(form) {
    const nameInput = form.querySelector("#reg-name");
    const emailInput = form.querySelector("#reg-email");
    const pwdInput = form.querySelector("#reg-password");
    const confirmInput = form.querySelector("#reg-confirm");

    const nameErr = document.getElementById("reg-name-err");
    const emailErr = document.getElementById("reg-email-err");
    const pwdErr = document.getElementById("reg-password-err");
    const confirmErr = document.getElementById("reg-confirm-err");

    let valid = true;

    // Name
    if (!nameInput.value.trim()) {
      setFieldState(nameInput, nameErr, "Full name is required.");
      valid = false;
    } else if (nameInput.value.trim().length < 2) {
      setFieldState(nameInput, nameErr, "Name must be at least 2 characters.");
      valid = false;
    } else {
      setFieldState(nameInput, nameErr, "");
    }

    // Email / Phone
    if (!emailInput.value.trim()) {
      setFieldState(
        emailInput,
        emailErr,
        "Email or mobile number is required.",
      );
      valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      setFieldState(
        emailInput,
        emailErr,
        "Enter a valid email or 10-digit mobile number.",
      );
      valid = false;
    } else {
      setFieldState(emailInput, emailErr, "");
    }

    // Password
    const pwd = pwdInput.value;
    if (!pwd) {
      setFieldState(pwdInput, pwdErr, "Password is required.");
      valid = false;
    } else if (!pwdRules.length(pwd)) {
      setFieldState(
        pwdInput,
        pwdErr,
        "Password must be at least 8 characters.",
      );
      valid = false;
    } else if (!pwdRules.upper(pwd)) {
      setFieldState(pwdInput, pwdErr, "Add at least one uppercase letter.");
      valid = false;
    } else if (!pwdRules.number(pwd)) {
      setFieldState(pwdInput, pwdErr, "Add at least one number.");
      valid = false;
    } else if (!pwdRules.special(pwd)) {
      setFieldState(pwdInput, pwdErr, "Add at least one special character.");
      valid = false;
    } else {
      setFieldState(pwdInput, pwdErr, "");
    }

    // Confirm Password
    if (!confirmInput.value) {
      setFieldState(confirmInput, confirmErr, "Please confirm your password.");
      valid = false;
    } else if (confirmInput.value !== pwd) {
      setFieldState(confirmInput, confirmErr, "Passwords do not match.");
      valid = false;
    } else {
      setFieldState(confirmInput, confirmErr, "");
    }

    return valid;
  }

  function validateLoginForm(form) {
    const emailInput = form.querySelector("[name='email']");
    const pwdInput = form.querySelector("[name='password']");
    let valid = true;

    if (!emailInput) return true; // safety

    // Grab or create error els (login form may not have them in HTML)
    let emailErr = form.querySelector(".login-email-err");
    if (!emailErr) {
      emailErr = document.createElement("em");
      emailErr.className = "field-error login-email-err";
      emailInput.closest("label").appendChild(emailErr);
    }
    let pwdErr = form.querySelector(".login-pwd-err");
    if (!pwdErr) {
      pwdErr = document.createElement("em");
      pwdErr.className = "field-error login-pwd-err";
      pwdInput.closest("label").appendChild(pwdErr);
    }

    if (!emailInput.value.trim()) {
      setFieldState(
        emailInput,
        emailErr,
        "Email or mobile number is required.",
      );
      valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      setFieldState(
        emailInput,
        emailErr,
        "Enter a valid email or 10-digit mobile number.",
      );
      valid = false;
    } else {
      setFieldState(emailInput, emailErr, "");
    }

    if (!pwdInput.value) {
      setFieldState(pwdInput, pwdErr, "Password is required.");
      valid = false;
    } else {
      setFieldState(pwdInput, pwdErr, "");
    }

    return valid;
  }

  function wireRegisterRealTime(form) {
    const pwdInput = form.querySelector("#reg-password");
    const confirmInput = form.querySelector("#reg-confirm");
    const confirmErr = document.getElementById("reg-confirm-err");
    const pwdErr = document.getElementById("reg-password-err");

    if (pwdInput) {
      listen(pwdInput, "input", () => {
        // Live validate password — show first failing rule as inline error
        if (pwdInput.value) {
          const v = pwdInput.value;
          const msg = !pwdRules.length(v)
            ? "At least 8 characters required."
            : !pwdRules.upper(v)
              ? "Add an uppercase letter."
              : !pwdRules.number(v)
                ? "Add a number."
                : !pwdRules.special(v)
                  ? "Add a special character."
                  : "";
          setFieldState(pwdInput, pwdErr, msg);
        } else {
          clearFieldState(pwdInput, pwdErr);
        }
        // Re-check confirm match if already filled
        if (confirmInput.value) {
          if (confirmInput.value !== pwdInput.value) {
            setFieldState(confirmInput, confirmErr, "Passwords do not match.");
          } else {
            setFieldState(confirmInput, confirmErr, "");
          }
        }
      });
    }

    if (confirmInput) {
      listen(confirmInput, "input", () => {
        if (!confirmInput.value) {
          clearFieldState(confirmInput, confirmErr);
          return;
        }
        if (confirmInput.value !== pwdInput?.value) {
          setFieldState(confirmInput, confirmErr, "Passwords do not match.");
        } else {
          setFieldState(confirmInput, confirmErr, "");
        }
      });
    }

    // Clear errors on blur for other fields
    ["#reg-name", "#reg-email"].forEach((sel) => {
      const el = form.querySelector(sel);
      if (!el) return;
      const errId = sel.replace("#reg-", "reg-") + "-err";
      const errEl = document.getElementById(errId);
      listen(el, "blur", () => {
        if (el.value.trim()) clearFieldState(el, errEl);
      });
    });
  }

  async function handleFormSubmit(event) {
    const form = event.target;
    if (!form.matches("form")) return;
    event.preventDefault();

    if (form.matches(".delivery-box")) {
      const input = form.querySelector("input");
      const value = input?.value.trim() || "";
      let status = form.querySelector(".delivery-status");
      if (!status) {
        status = document.createElement("p");
        status.className = "delivery-status";
        form.appendChild(status);
      }
      status.textContent = /^\d{6}$/.test(value)
        ? "Delivery available. Estimated arrival in 3-7 working days. COD may be available."
        : "Enter a valid 6-digit pincode to check delivery.";
      status.style.color = /^\d{6}$/.test(value) ? "#0f8a4b" : "#df1d28";
      return;
    }

    if (form.matches("#profileForm, #addressForm")) return;
    if (form.dataset.submitting) return;
    const mode = form.dataset.authForm;
    if (mode === "register" && !validateRegisterForm(form)) return;
    if (mode === "login" && !validateLoginForm(form)) return;
    form.dataset.submitting = "true";
    const button = form.querySelector('[type="submit"], button');
    if (button) button.disabled = true;
    try {
      if (mode) {
        const body = Object.fromEntries(new FormData(form));
        const result = await api.authenticate(mode, body);
        if (controller.signal.aborted) return;
        if (mode === 'register') {
          form.reset();
          document.querySelector('[data-auth-tab="login"]')?.click();
          const loginForm = document.querySelector('[data-auth-form="login"]');
          loginForm.reset();
          loginForm.querySelector('[name="email"]').value = result.user.email;
          let status = document.querySelector('[data-auth-message]');
          if (!status) {
            status = document.createElement('p');
            status.dataset.authMessage = '';
            status.setAttribute('role', 'status');
            loginForm.before(status);
          }
          status.textContent = 'Account created successfully. Please log in to access your dashboard.';
          updateBadges();
          loginForm.querySelector('[name="password"]').focus();
        } else {
          navigate("account.html");
        }
        return;
      }
      const contact = !!form.closest(".message-form");
      form.parentElement.querySelector('.form-status')?.replaceChildren();
      const body = contact ? {
        name: form.querySelector('[type="text"]').value,
        email: form.querySelector('[type="email"]').value,
        subject: form.querySelector('select').value,
        message: form.querySelector('textarea').value,
      } : { email: form.querySelector('[type="email"]')?.value };
      const result = await request(contact ? '/contact' : '/newsletter', { method: 'POST', body });
      if (controller.signal.aborted) return;
      let status = form.parentElement.querySelector(".form-status");
      if (!status) {
        status = document.createElement("p");
        status.className = "form-status";
        status.setAttribute("role", "status");
        form.insertAdjacentElement("afterend", status);
      }
      status.textContent = result.message;
      form.reset();
    } catch (error) {
      toast(error.message);
    } finally {
      delete form.dataset.submitting;
      if (button) button.disabled = false;
    }
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function openAccountModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeAccountModal(modalEl) {
    const modal =
      typeof modalEl === "string" ? document.getElementById(modalEl) : modalEl;
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".account-modal-overlay.open")) {
      document.body.style.overflow = "";
    }
  }

  function renderAccountPage() {
    const accountPage = document.querySelector(".account-page");
    if (!accountPage) return;

    const savedProfile = profile();
    const savedOrders = orders();
    const savedAddresses = addresses();
    const initials =
      savedProfile.name
        .split(" ")
        .filter(Boolean)
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase() || "AC";

    const avatarEl = document.querySelector("[data-account-avatar]");
    if (avatarEl) avatarEl.textContent = initials;

    const nameEl = document.querySelector("[data-account-name]");
    if (nameEl) nameEl.textContent = savedProfile.name;

    const emailEl = document.querySelector("[data-account-email]");
    if (emailEl) emailEl.textContent = savedProfile.email;

    const statOrders = document.querySelector("[data-stat='orders']");
    if (statOrders) statOrders.textContent = savedOrders.length;

    const statWishlist = document.querySelector("[data-stat='wishlist']");
    if (statWishlist) statWishlist.textContent = wishlist().length;

    const statAddresses = document.querySelector("[data-stat='addresses']");
    if (statAddresses) statAddresses.textContent = savedAddresses.length;

    const statOffers = document.querySelector("[data-stat='offers']");
    if (statOffers) statOffers.textContent = 0;

    // Update address count badges & view-all button
    document.querySelectorAll("[data-address-count]").forEach((el) => {
      el.textContent = savedAddresses.length;
    });

    const viewAllBtn = document.querySelector("[data-view-all-addresses]");
    if (viewAllBtn) {
      viewAllBtn.style.display = savedAddresses.length > 1 ? "flex" : "none";
    }

    const orderList = document.querySelector(".order-list");
    if (orderList) {
      orderList.innerHTML = savedOrders.length
        ? savedOrders
            .slice(0, 4)
            .map(
              (order) => `
        <article>
          <span class="order-thumb black">6G</span>
          <div><b>Order #${order.id}</b><p>${order.items} item${order.items === 1 ? "" : "s"} • ${order.sizes}<br>${order.date}</p></div>
          <em class="${order.status.toLowerCase()}">${order.status}</em>
          <strong>${money(order.total)}</strong>
          <details><summary>View Details</summary>
            <p>${order.lines.map((line) => `${escapeHtml(line.name)} ? ${escapeHtml(line.size)} ? ${escapeHtml(line.color)} ? ${line.qty} ? ${money(line.price * line.qty)}`).join("<br>")}</p>
            <p>${escapeHtml(order.address.name)}<br>${escapeHtml(order.address.line1)}, ${escapeHtml(order.address.city)} ${escapeHtml(order.address.pincode)}</p>
            <p>Cash on delivery ? ${escapeHtml(order.paymentStatus)}</p>
          </details>
        </article>
      `,
            )
            .join("")
        : `<div class="empty-state">No orders yet. Your completed checkouts will appear here.</div>`;
    }

    // Toggle header action buttons (Edit / Delete) in Address Card
    const headerActions = document.querySelector(
      "[data-address-header-actions]",
    );
    if (headerActions) {
      headerActions.style.display = savedAddresses.length > 0 ? "flex" : "none";
    }

    // Render Default Address Card
    const addressContent = document.querySelector("[data-address-content]");
    if (addressContent) {
      if (!savedAddresses.length) {
        addressContent.innerHTML = `<p style="color: #64748b; margin: 4px 0 14px; font-size: 13px;">No default address saved. Add an address for faster checkout.</p>`;
      } else {
        const defaultAddr =
          savedAddresses.find((a) => a.isDefault) || savedAddresses[0];
        addressContent.innerHTML = `
          <div class="address-display-box" data-address-id="${defaultAddr.id}">
            <div class="address-badge-row">
              <span class="badge-type ${(defaultAddr.type || "home").toLowerCase()}">${defaultAddr.type || "Home"}</span>
              <span class="badge-default">Default</span>
            </div>
            <h4 class="address-name">${escapeHtml(defaultAddr.name)}</h4>
            <p class="address-lines">
              ${escapeHtml(defaultAddr.line1)}${defaultAddr.line2 ? `, ${escapeHtml(defaultAddr.line2)}` : ""}<br>
              ${escapeHtml(defaultAddr.city)}, ${escapeHtml(defaultAddr.state || "")} - <b>${escapeHtml(defaultAddr.pincode)}</b>
            </p>
            <p class="address-phone">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+91 ${escapeHtml(defaultAddr.phone)}</span>
            </p>
          </div>
        `;
      }
    }

    // Attach account interactions once
    if (!accountPage.dataset.accountBound) {
      accountPage.dataset.accountBound = "true";
      attachAccountEvents();
    }
  }

  function attachAccountEvents() {
    listen(document, "click", (event) => {
      // 1. Edit Profile Button
      if (event.target.closest("[data-edit-profile-btn]")) {
        const curProfile = profile();
        const nameInput = document.getElementById("profileNameInput");
        const emailInput = document.getElementById("profileEmailInput");
        const phoneInput = document.getElementById("profilePhoneInput");
        if (nameInput) {
          nameInput.value =
            curProfile.name === "Account Holder" ? "" : curProfile.name;
          nameInput.classList.remove("has-error");
        }
        if (emailInput) {
          emailInput.value =
            curProfile.email === "Add your email" ? "" : curProfile.email;
          emailInput.classList.remove("has-error");
        }
        if (phoneInput) {
          phoneInput.value = curProfile.phone || "";
          phoneInput.classList.remove("has-error");
        }
        openAccountModal("profileModal");
      }

      // 2. Add New Address Button
      if (
        event.target.closest(
          "[data-add-address-btn], [data-add-address-from-all]",
        )
      ) {
        closeAccountModal("allAddressesModal");
        const form = document.getElementById("addressForm");
        if (form) form.reset();
        form
          ?.querySelectorAll(".has-error")
          .forEach((el) => el.classList.remove("has-error"));
        const idInput = document.getElementById("addressIdInput");
        if (idInput) idInput.value = "";
        const title = document.getElementById("addressModalTitle");
        if (title) title.textContent = "Add New Address";
        const defaultCheck = document.getElementById("addressDefaultCheck");
        if (defaultCheck) defaultCheck.checked = addresses().length === 0;
        openAccountModal("addressModal");
      }

      // 3. Edit Default Address Button
      if (event.target.closest("[data-edit-default-address]")) {
        const addrs = addresses();
        const defaultAddr = addrs.find((a) => a.isDefault) || addrs[0];
        if (defaultAddr) openEditAddress(defaultAddr.id);
      }

      // 4. Delete Default Address Button
      if (event.target.closest("[data-delete-default-address]")) {
        const addrs = addresses();
        const defaultAddr = addrs.find((a) => a.isDefault) || addrs[0];
        if (defaultAddr) deleteAddress(defaultAddr.id);
      }

      // 5. Manage All Addresses Trigger
      if (
        event.target.closest(
          "[data-view-all-addresses], [data-trigger-manage-addresses]",
        )
      ) {
        event.preventDefault();
        openManageAllAddresses();
      }

      // 6. Action buttons inside All Addresses list
      const makeDefaultBtn = event.target.closest("[data-make-default]");
      if (makeDefaultBtn) {
        setDefaultAddress(makeDefaultBtn.dataset.makeDefault);
      }

      const editAddrBtn = event.target.closest("[data-edit-address-id]");
      if (editAddrBtn) {
        closeAccountModal("allAddressesModal");
        openEditAddress(editAddrBtn.dataset.editAddressId);
      }

      const deleteAddrBtn = event.target.closest("[data-delete-address-id]");
      if (deleteAddrBtn) {
        deleteAddress(deleteAddrBtn.dataset.deleteAddressId);
      }

      // 7. Logout Button
      if (event.target.closest("[data-logout-btn]")) {
        openAccountModal("logoutModal");
      }

      // 8. Confirm Logout
      if (event.target.closest("#confirmLogoutBtn")) {
        confirmLogout();
      }

      // 9. Close Modal Buttons
      const closeBtn = event.target.closest("[data-close-modal]");
      if (closeBtn) {
        const overlay = closeBtn.closest(".account-modal-overlay");
        if (overlay) closeAccountModal(overlay);
      }

      // 10. Click outside modal on overlay
      if (event.target.classList.contains("account-modal-overlay")) {
        closeAccountModal(event.target);
      }
    });

    // Clear input error states on input
    listen(document, "input", (event) => {
      if (
        event.target.matches(
          "#profileForm input, #addressForm input, #addressForm select",
        )
      ) {
        event.target.classList.remove("has-error");
      }
    });

    // Escape key closes modals
    listen(document, "keydown", (event) => {
      if (event.key === "Escape") {
        const openModal = document.querySelector(".account-modal-overlay.open");
        if (openModal) closeAccountModal(openModal);
      }
    });

    // Submit Profile Form
    const profileForm = document.getElementById("profileForm");
    if (profileForm) {
      listen(profileForm, "submit", async (event) => {
        event.preventDefault();
        const nameInput = document.getElementById("profileNameInput");
        const emailInput = document.getElementById("profileEmailInput");
        const phoneInput = document.getElementById("profilePhoneInput");
        const name = nameInput?.value.trim();
        const email = emailInput?.value.trim();
        let phone = phoneInput?.value.trim() || "";

        if (!name) {
          nameInput?.classList.add("has-error");
          nameInput?.focus();
          toast("Please enter your name");
          return;
        }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          emailInput?.classList.add("has-error");
          emailInput?.focus();
          toast("Please enter a valid email address");
          return;
        }
        if (phone) {
          phone = phone.replace(/^(\+91|0)/, "").replace(/\D/g, "");
          if (phone.length !== 10) {
            phoneInput?.classList.add("has-error");
            phoneInput?.focus();
            toast("Phone number must be 10 digits");
            return;
          }
        }

        try { await setProfile({ name, email, phone }); }
        catch (error) { toast(error.message); return; }
        renderAccountPage();
        closeAccountModal("profileModal");
        toast("Profile updated successfully!");
      });
    }

    // Submit Address Form
    const addressForm = document.getElementById("addressForm");
    if (addressForm) {
      listen(addressForm, "submit", async (event) => {
        event.preventDefault();
        const idInput = document.getElementById("addressIdInput");
        const nameInput = document.getElementById("addressNameInput");
        const phoneInput = document.getElementById("addressPhoneInput");
        const line1Input = document.getElementById("addressLine1Input");
        const line2Input = document.getElementById("addressLine2Input");
        const cityInput = document.getElementById("addressCityInput");
        const stateInput = document.getElementById("addressStateInput");
        const pincodeInput = document.getElementById("addressPincodeInput");
        const typeInput = addressForm.querySelector(
          "input[name='type']:checked",
        );
        const defaultCheck = document.getElementById("addressDefaultCheck");

        const name = nameInput?.value.trim();
        let phone = phoneInput?.value.trim() || "";
        const line1 = line1Input?.value.trim();
        const line2 = line2Input?.value.trim() || "";
        const city = cityInput?.value.trim();
        const state = stateInput?.value.trim();
        let pincode = pincodeInput?.value.trim() || "";
        const type = typeInput?.value || "Home";
        let isDefault = !!defaultCheck?.checked;

        if (!name) {
          nameInput?.classList.add("has-error");
          nameInput?.focus();
          toast("Please enter recipient name");
          return;
        }
        phone = phone.replace(/^(\+91|0)/, "").replace(/\D/g, "");
        if (!phone || phone.length !== 10) {
          phoneInput?.classList.add("has-error");
          phoneInput?.focus();
          toast("Please enter a valid 10-digit mobile number");
          return;
        }
        if (!line1) {
          line1Input?.classList.add("has-error");
          line1Input?.focus();
          toast("Please enter address details");
          return;
        }
        if (!city) {
          cityInput?.classList.add("has-error");
          cityInput?.focus();
          toast("Please enter city");
          return;
        }
        if (!state) {
          stateInput?.classList.add("has-error");
          stateInput?.focus();
          toast("Please select a state");
          return;
        }
        pincode = pincode.replace(/\D/g, "");
        if (!pincode || pincode.length !== 6) {
          pincodeInput?.classList.add("has-error");
          pincodeInput?.focus();
          toast("Please enter a valid 6-digit pincode");
          return;
        }

        const addrs = addresses();
        const isEdit = !!idInput?.value;

        if (!addrs.length) {
          isDefault = true;
        }

        let updatedAddrs;
        if (isEdit) {
          const editId = idInput.value;
          updatedAddrs = addrs.map((a) => {
            if (a.id === editId) {
              return {
                ...a,
                name,
                phone,
                line1,
                line2,
                city,
                state,
                pincode,
                type,
                isDefault,
              };
            }
            return isDefault ? { ...a, isDefault: false } : a;
          });
        } else {
          const newAddr = {
            id: `addr_${Date.now()}`,
            name,
            phone,
            line1,
            line2,
            city,
            state,
            pincode,
            type,
            isDefault,
          };
          if (isDefault) {
            updatedAddrs = addrs
              .map((a) => ({ ...a, isDefault: false }))
              .concat(newAddr);
          } else {
            updatedAddrs = addrs.concat(newAddr);
          }
        }

        // Guarantee at least one address is default
        if (!updatedAddrs.some((a) => a.isDefault) && updatedAddrs.length) {
          updatedAddrs[0].isDefault = true;
        }

        try { await setAddresses(updatedAddrs); }
        catch (error) { toast(error.message); return; }
        renderAccountPage();
        closeAccountModal("addressModal");
        toast(isEdit ? "Address updated successfully!" : "New address added!");
      });
    }
  }

  function openEditAddress(addrId) {
    const addrs = addresses();
    const addr = addrs.find((a) => a.id === addrId);
    if (!addr) return;

    const form = document.getElementById("addressForm");
    if (form) form.reset();
    form
      ?.querySelectorAll(".has-error")
      .forEach((el) => el.classList.remove("has-error"));

    const idInput = document.getElementById("addressIdInput");
    if (idInput) idInput.value = addr.id;

    const title = document.getElementById("addressModalTitle");
    if (title) title.textContent = "Edit Address";

    const nameInput = document.getElementById("addressNameInput");
    if (nameInput) nameInput.value = addr.name || "";

    const phoneInput = document.getElementById("addressPhoneInput");
    if (phoneInput) phoneInput.value = addr.phone || "";

    const line1Input = document.getElementById("addressLine1Input");
    if (line1Input) line1Input.value = addr.line1 || "";

    const line2Input = document.getElementById("addressLine2Input");
    if (line2Input) line2Input.value = addr.line2 || "";

    const cityInput = document.getElementById("addressCityInput");
    if (cityInput) cityInput.value = addr.city || "";

    const stateInput = document.getElementById("addressStateInput");
    if (stateInput) stateInput.value = addr.state || "";

    const pincodeInput = document.getElementById("addressPincodeInput");
    if (pincodeInput) pincodeInput.value = addr.pincode || "";

    const typeRadio = document.querySelector(
      `input[name='type'][value='${addr.type || "Home"}']`,
    );
    if (typeRadio) typeRadio.checked = true;

    const defaultCheck = document.getElementById("addressDefaultCheck");
    if (defaultCheck) defaultCheck.checked = !!addr.isDefault;

    openAccountModal("addressModal");
  }

  async function deleteAddress(addrId) {
    const addrs = addresses();
    const target = addrs.find((a) => a.id === addrId);
    if (!target) return;

    let updated = addrs.filter((a) => a.id !== addrId);
    if (target.isDefault && updated.length) {
      updated[0].isDefault = true;
    }

    try { await setAddresses(updated); }
    catch (error) { toast(error.message); return; }
    renderAccountPage();

    const allModal = document.getElementById("allAddressesModal");
    if (allModal && allModal.classList.contains("open")) {
      openManageAllAddresses();
    }

    toast("Address removed.");
  }

  async function setDefaultAddress(addrId) {
    const addrs = addresses();
    const updated = addrs.map((a) => ({
      ...a,
      isDefault: a.id === addrId,
    }));
    try { await setAddresses(updated); }
    catch (error) { toast(error.message); return; }
    renderAccountPage();

    const allModal = document.getElementById("allAddressesModal");
    if (allModal && allModal.classList.contains("open")) {
      openManageAllAddresses();
    }

    toast("Default address updated.");
  }

  function openManageAllAddresses() {
    const addrs = addresses();
    const container = document.querySelector("[data-all-addresses-list]");
    if (!container) return;

    if (!addrs.length) {
      container.innerHTML = `<div style="text-align: center; padding: 30px 20px; color: #64748b;"><p style="font-size: 14px; margin-bottom: 12px;">No addresses saved yet.</p></div>`;
    } else {
      container.innerHTML = addrs
        .map(
          (addr) => `
        <div class="address-item-card ${addr.isDefault ? "is-default" : ""}">
          <div class="address-item-top">
            <div class="address-badge-row">
              <span class="badge-type ${(addr.type || "home").toLowerCase()}">${addr.type || "Home"}</span>
              ${addr.isDefault ? `<span class="badge-default">Default</span>` : ""}
            </div>
            <strong style="font-size: 14px; color: #071018;">${escapeHtml(addr.name)}</strong>
          </div>
          <p class="address-lines" style="margin: 6px 0;">
            ${escapeHtml(addr.line1)}${addr.line2 ? `, ${escapeHtml(addr.line2)}` : ""}<br>
            ${escapeHtml(addr.city)}, ${escapeHtml(addr.state || "")} - <b>${escapeHtml(addr.pincode)}</b>
          </p>
          <p class="address-phone" style="font-size: 11.5px; color: #64748b;">
            Phone: +91 ${escapeHtml(addr.phone)}
          </p>
          <div class="address-item-actions">
            ${!addr.isDefault ? `<button type="button" class="btn-set-default" data-make-default="${addr.id}">Set as Default</button>` : `<span style="font-size: 11.5px; color: #16a34a; font-weight: 800;">✓ Current Default</span>`}
            <div style="margin-left: auto; display: flex; gap: 8px;">
              <button type="button" class="address-action-btn edit-btn" data-edit-address-id="${addr.id}">Edit</button>
              <button type="button" class="address-action-btn delete-btn" data-delete-address-id="${addr.id}">Delete</button>
            </div>
          </div>
        </div>
      `,
        )
        .join("");
    }

    openAccountModal("allAddressesModal");
  }

  async function confirmLogout() {
    try {
      await api.logout();
      closeAccountModal("logoutModal");
      navigate("login.html");
    } catch (error) { toast(error.message); }
  }

  function renderAuthPage() {
    const authCard = document.querySelector(".auth-card");
    if (!authCard) return;
    const show = (mode) => {
      authCard.querySelectorAll("[data-auth-tab]").forEach((button) => {
        button.classList.toggle("active", button.dataset.authTab === mode);
      });
      authCard.querySelectorAll("[data-auth-form]").forEach((form) => {
        form.classList.toggle("hidden", form.dataset.authForm !== mode);
      });
    };
    listen(authCard, "click", (event) => {
      const tab = event.target.closest("[data-auth-tab]");
      if (tab) show(tab.dataset.authTab);
      const switcher = event.target.closest("[data-switch-auth]");
      if (switcher)
        show(
          authCard
            .querySelector("[data-auth-form='login']")
            .classList.contains("hidden")
            ? "login"
            : "register",
        );
    });

    // Wire real-time validation for the register form
    const registerForm = authCard.querySelector("[data-auth-form='register']");
    if (registerForm) wireRegisterRealTime(registerForm);
  }

  function applyInitialQuery() {
    const params = new URLSearchParams(location.search);
    const filter = params.get("filter");
    if (!filter) return;
    document.querySelectorAll(".filters input").forEach((input) => {
      const label = input.closest("label")?.textContent.trim();
      input.checked = label === filter;
    });
  }

  async function init() {
    updateBadges();
    document.body.dataset.storefrontLoading = 'true';
    // Remove example rows before the asynchronous account fetch.
    document.querySelector('.cart-items')?.replaceChildren();
    document.querySelector('.order-list')?.replaceChildren();
    loadingStatus = document.createElement('p');
    loadingStatus.setAttribute('role', 'status');
    loadingStatus.style.cssText = 'text-align:center;padding:32px';
    loadingStatus.textContent = 'Loading store…';
    document.querySelector('main')?.before(loadingStatus);
    try { catalog = await api.load(); }
    catch (error) {
      if (!controller.signal.aborted) loadingStatus.textContent = `${error.message} Refresh this page to retry.`;
      return;
    }
    if (controller.signal.aborted) return;
    if (document.querySelector(".account-page") && !api.user) {
      navigate("login.html");
      return;
    }
    applyInitialQuery();
    renderHome();
    renderShop();
    renderProductPage();
    renderCartPage();
    renderWishlistPage();
    renderAccountPage();
    renderAuthPage();
    updateBadges();
    syncWishButtons();
    attachEvents();
    loadingStatus.remove();
    delete document.body.dataset.storefrontLoading;
  }

  function dispose() {
    controller.abort();
    loadingStatus?.remove();
    delete document.body.dataset.storefrontLoading;
    timers.forEach((timer) => window.clearTimeout(timer));
    animations.forEach((animation) => animation.cancel());
    document
      .querySelectorAll(".fly-token, .app-toast")
      .forEach((node) => node.remove());
    document
      .querySelectorAll("[data-menu-bound], [data-account-bound]")
      .forEach((node) => {
        delete node.dataset.menuBound;
        delete node.dataset.accountBound;
      });
    document.body.style.overflow = "";
  }
  return { init, dispose };
}
