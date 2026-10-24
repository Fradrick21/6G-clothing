export default function WishlistPage() {
  return (
    <>
      {"\n    "}
      <header className="site-header">
        {"\n      "}
        <a className="brand" href="index.html">
          {"\n        "}
          <span className="brand-mark">
            <img src="assets/logo.png" alt="6G Clothing logo" />
          </span>
          {"\n        "}
          <span className="brand-copy">
            {"\n          "}
            <strong>{"6G CLOTHING"}</strong>
            {"\n          "}
            <small>{"WEAR YOUR STORY"}</small>
            {"\n        "}
          </span>
          {"\n      "}
        </a>
        {"\n      "}
        <nav className="main-nav" aria-label="Primary navigation">
          {"\n        "}
          <a href="index.html">{"Home"}</a>
          {"\n        "}
          <a href="tshirts.html">{"T-Shirts"}</a>
          {"\n        "}
          <a href="collections.html">{"Collections"}</a>
          {"\n        "}
          <a href="about.html">{"About"}</a>
          {"\n        "}
          <a href="contact.html">{"Contact"}</a>
          {"\n      "}
        </nav>
        {"\n      "}
        <div className="header-actions">
          {"\n        "}
          <label className="search-box">
            {"\n          "}
            <input type="search" placeholder="Search for T-shirts..." />
            {"\n          "}
            <img src="assets/icons/search.svg" alt="Search icon" />
            {"\n        "}
          </label>
          {"\n        "}
          <a
            className="icon-btn user-icon"
            href="login.html"
            aria-label="Account"
          >
            <img src="assets/icons/user.svg" alt="Profile icon" />
          </a>
          {"\n        "}
          <a
            className="icon-btn wishlist-icon wish-nav active-wish"
            href="wishlist.html"
            aria-label="Wishlist"
          >
            <img src="assets/icons/heart.svg" alt="Wishlist icon" />
            <b>{"0"}</b>
          </a>
          {"\n        "}
          <a className="cart-btn" href="cart.html" aria-label="Cart">
            <img src="assets/icons/shopping-bag.svg" alt="Cart icon" />
            <b>{"0"}</b>
          </a>
          {"\n      "}
        </div>
        {"\n      "}
        <button className="menu-btn" id="menuBtn" aria-label="Open menu">
          {"Menu"}
        </button>
        {"\n    "}
      </header>
      {"\n\n    "}
      <main className="wishlist-page">
        {"\n      "}
        <section className="wishlist-hero">
          {"\n        "}
          <div className="wishlist-hero-copy">
            {"\n          "}
            <p className="eyebrow">{"My Wishlist"}</p>
            {"\n          "}
            <h1>
              {"Your Favorites"}
              <br />
              <span>{"Saved for Later"}</span>
            </h1>
            {"\n          "}
            <p>{"Styles you love. Always within reach."}</p>
            {"\n        "}
          </div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="wishlist-panel">
          {"\n        "}
          <div className="wishlist-toolbar">
            {"\n          "}
            <h2>
              {"My Wishlist "}
              <span>{"(6 items)"}</span>
            </h2>
            {"\n          "}
            <div className="wishlist-tools">
              {"\n            "}
              <button>
                <img src="assets/icons/trash.svg" alt="" />
                {"Clear All"}
              </button>
              {"\n            "}
              <label>
                {"Sort by:"}
                <select>
                  <option>{"Newest First"}</option>
                  <option>{"Price: Low to High"}</option>
                  <option>{"Top Rated"}</option>
                </select>
              </label>
              {"\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="saved-grid">
            {"\n          "}
            <article className="saved-card">
              {"\n            "}
              <button
                className="heart-pill saved"
                aria-label="Remove from wishlist"
              >
                {"♡"}
              </button>
              {"\n            "}
              <img
                src="assets/images/single-product-wave-no-logo.png"
                alt="Minimal Logo Tee"
              />
              {"\n            "}
              <h3>{"Minimal Logo Tee"}</h3>
              {"\n            "}
              <b className="saved-price">{"₹699"}</b>
              {"\n            "}
              <div className="swatches">
                <span style={{ background: "#05080c" }}></span>
                <span style={{ background: "#f5f5f1" }}></span>
                <span style={{ background: "#c9ced1" }}></span>
                <span style={{ background: "#ed1825" }}></span>
                <em>{"+2"}</em>
              </div>
              {"\n            "}
              <div className="saved-rating">
                {"★ 4.8 "}
                <span>{"(124)"}</span>
              </div>
              {"\n            "}
              <button className="cart-red">{"Add to Cart"}</button>
              {"\n          "}
            </article>
            {"\n          "}
            <article className="saved-card">
              {"\n            "}
              <button
                className="heart-pill saved"
                aria-label="Remove from wishlist"
              >
                {"♡"}
              </button>
              {"\n            "}
              <img
                src="assets/images/single-product-wave-no-logo.png"
                alt="Wave Graphic Tee"
              />
              {"\n            "}
              <h3>{"Wave Graphic Tee"}</h3>
              {"\n            "}
              <b className="saved-price">{"₹799"}</b>
              {"\n            "}
              <div className="swatches">
                <span style={{ background: "#fff" }}></span>
                <span style={{ background: "#111820" }}></span>
                <span style={{ background: "#096bd5" }}></span>
                <span style={{ background: "#0b7248" }}></span>
                <em>{"+2"}</em>
              </div>
              {"\n            "}
              <div className="saved-rating">
                {"★ 4.7 "}
                <span>{"(86)"}</span>
              </div>
              {"\n            "}
              <button className="cart-red">{"Add to Cart"}</button>
              {"\n          "}
            </article>
            {"\n          "}
            <article className="saved-card">
              {"\n            "}
              <button
                className="heart-pill saved"
                aria-label="Remove from wishlist"
              >
                {"♡"}
              </button>
              {"\n            "}
              <img
                src="assets/images/single-product-wave-no-logo.png"
                alt="Minimal Pocket Tee"
              />
              {"\n            "}
              <h3>{"Minimal Pocket Tee"}</h3>
              {"\n            "}
              <b className="saved-price">{"₹749"}</b>
              {"\n            "}
              <div className="swatches">
                <span style={{ background: "#e4d2b8" }}></span>
                <span style={{ background: "#584035" }}></span>
                <span style={{ background: "#111" }}></span>
                <em>{"+2"}</em>
              </div>
              {"\n            "}
              <div className="saved-rating">
                {"★ 4.9 "}
                <span>{"(210)"}</span>
              </div>
              {"\n            "}
              <button className="cart-red">{"Add to Cart"}</button>
              {"\n          "}
            </article>
            {"\n          "}
            <article className="saved-card">
              {"\n            "}
              <button
                className="heart-pill saved"
                aria-label="Remove from wishlist"
              >
                {"♡"}
              </button>
              {"\n            "}
              <img
                src="assets/images/single-product-wave-no-logo.png"
                alt="Good Vibes Tee"
              />
              {"\n            "}
              <h3>{"Good Vibes Tee"}</h3>
              {"\n            "}
              <b className="saved-price">{"₹699"}</b>
              {"\n            "}
              <div className="swatches">
                <span style={{ background: "#d80d19" }}></span>
                <span style={{ background: "#111" }}></span>
                <span style={{ background: "#ffba0a" }}></span>
                <span style={{ background: "#1c6edf" }}></span>
                <em>{"+2"}</em>
              </div>
              {"\n            "}
              <div className="saved-rating">
                {"★ 4.8 "}
                <span>{"(68)"}</span>
              </div>
              {"\n            "}
              <button className="cart-red">{"Add to Cart"}</button>
              {"\n          "}
            </article>
            {"\n          "}
            <article className="saved-card">
              {"\n            "}
              <button
                className="heart-pill saved"
                aria-label="Remove from wishlist"
              >
                {"♡"}
              </button>
              {"\n            "}
              <img
                src="assets/images/single-product-wave-no-logo.png"
                alt="Typography Tee"
              />
              {"\n            "}
              <h3>{"Typography Tee"}</h3>
              {"\n            "}
              <b className="saved-price">{"₹749"}</b>
              {"\n            "}
              <div className="swatches">
                <span style={{ background: "#135f38" }}></span>
                <span style={{ background: "#111" }}></span>
                <span style={{ background: "#cfd2d5" }}></span>
                <span style={{ background: "#7e45d6" }}></span>
                <em>{"+2"}</em>
              </div>
              {"\n            "}
              <div className="saved-rating">
                {"★ 4.8 "}
                <span>{"(143)"}</span>
              </div>
              {"\n            "}
              <button className="cart-red">{"Add to Cart"}</button>
              {"\n          "}
            </article>
            {"\n          "}
            <article className="saved-card">
              {"\n            "}
              <button
                className="heart-pill saved"
                aria-label="Remove from wishlist"
              >
                {"♡"}
              </button>
              {"\n            "}
              <img
                src="assets/images/single-product-wave-no-logo.png"
                alt="Anime Street Tee"
              />
              {"\n            "}
              <h3>{"Anime Street Tee"}</h3>
              {"\n            "}
              <b className="saved-price">{"₹799"}</b>
              {"\n            "}
              <div className="swatches">
                <span style={{ background: "#08101c" }}></span>
                <span style={{ background: "#fa78a3" }}></span>
                <span style={{ background: "#ff8ab0" }}></span>
                <span style={{ background: "#20242b" }}></span>
                <em>{"+2"}</em>
              </div>
              {"\n            "}
              <div className="saved-rating">
                {"★ 4.9 "}
                <span>{"(92)"}</span>
              </div>
              {"\n            "}
              <button className="cart-red">{"Add to Cart"}</button>
              {"\n          "}
            </article>
            {"\n        "}
          </div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="wish-benefits">
          {"\n        "}
          <article>
            <span>
              <img src="assets/icons/heart.svg" alt="" />
            </span>
            <b>{"Save What You Love"}</b>
            <p>{"Keep your favorite styles in one place."}</p>
          </article>
          {"\n        "}
          <article>
            <span>
              <img src="assets/icons/shopping-bag.svg" alt="" />
            </span>
            <b>{"Shop Anytime"}</b>
            <p>{"Add to cart when you're ready."}</p>
          </article>
          {"\n        "}
          <article>
            <span>
              <img src="assets/icons/bell.svg" alt="" />
            </span>
            <b>{"Get Notified"}</b>
            <p>{"We'll notify you if the price drops."}</p>
          </article>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="recommend-section">
          {"\n        "}
          <div className="recommend-head">
            {"\n          "}
            <div>
              <h2>{"You May Also Like"}</h2>
              <p>{"More styles picked just for you."}</p>
            </div>
            {"\n          "}
            <a href="index.html#featured">{"View All →"}</a>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="recommend-grid">
            {"\n          "}
            <article>
              <button className="heart-pill">{"♡"}</button>
              <h3>{"Urban Art Tee"}</h3>
              <div>
                <b>{"₹799"}</b>
                <span>{"★ 4.8 (124)"}</span>
              </div>
              <button>{"Add to Cart"}</button>
            </article>
            {"\n          "}
            <article>
              <button className="heart-pill">{"♡"}</button>
              <h3>{"Anime Vibes Tee"}</h3>
              <div>
                <b>{"₹799"}</b>
                <span>{"★ 4.7 (86)"}</span>
              </div>
              <button>{"Add to Cart"}</button>
            </article>
            {"\n          "}
            <article>
              <button className="heart-pill">{"♡"}</button>
              <h3>{"Back Print Tee"}</h3>
              <div>
                <b>{"₹749"}</b>
                <span>{"★ 4.8 (143)"}</span>
              </div>
              <button>{"Add to Cart"}</button>
            </article>
            {"\n          "}
            <article>
              <button className="heart-pill">{"♡"}</button>
              <h3>{"Essential Tee"}</h3>
              <div>
                <b>{"₹699"}</b>
                <span>{"★ 4.9 (210)"}</span>
              </div>
              <button>{"Add to Cart"}</button>
            </article>
            {"\n          "}
            <article>
              <button className="heart-pill">{"♡"}</button>
              <h3>{"Oversized Basic Tee"}</h3>
              <div>
                <b>{"₹599"}</b>
                <span>{"★ 4.8 (68)"}</span>
              </div>
              <button>{"Add to Cart"}</button>
            </article>
            {"\n          "}
            <article>
              <button className="heart-pill">{"♡"}</button>
              <h3>{"Flower Graphic Tee"}</h3>
              <div>
                <b>{"₹749"}</b>
                <span>{"★ 4.7 (92)"}</span>
              </div>
              <button>{"Add to Cart"}</button>
            </article>
            {"\n        "}
          </div>
          {"\n      "}
        </section>
        {"\n    "}
      </main>
      {"\n\n    "}
      <footer className="site-footer" id="contact">
        {"\n      "}
        <div className="footer-brand">
          {"\n        "}
          <img src="assets/logo.png" alt="6G Clothing logo" />
          {"\n        "}
          <p>{"Minimal. Modern. Meaningful. T-shirts for every story."}</p>
          {"\n      "}
        </div>
        {"\n      "}
        <div>
          {"\n        "}
          <h3>{"Quick Links"}</h3>
          {"\n        "}
          <a href="index.html">{"Home"}</a>
          <a href="tshirts.html">{"T-Shirts"}</a>
          <a href="collections.html">{"Collections"}</a>
          <a href="about.html">{"About"}</a>
          <a href="contact.html">{"Contact"}</a>
          {"\n      "}
        </div>
        {"\n      "}
        <div>
          {"\n        "}
          <h3>{"Shop"}</h3>
          {"\n        "}
          <a href="index.html#featured">{"New Arrivals"}</a>
          <a href="index.html#featured">{"Best Sellers"}</a>
          <a href="collections.html">{"Oversized T-Shirts"}</a>
          <a href="collections.html">{"Graphic T-Shirts"}</a>
          <a href="collections.html">{"Minimal T-Shirts"}</a>
          {"\n      "}
        </div>
        {"\n      "}
        <div>
          {"\n        "}
          <h3>{"Customer Support"}</h3>
          {"\n        "}
          <a href="#">{"FAQ"}</a>
          <a href="#">{"Shipping Policy"}</a>
          <a href="#">{"Return Policy"}</a>
          <a href="#">{"Size Guide"}</a>
          <a href="#">{"Track Order"}</a>
          {"\n      "}
        </div>
        {"\n      "}
        <div>
          {"\n        "}
          <h3>{"Contact"}</h3>
          {"\n        "}
          <p>{"support@6gclothing.com"}</p>
          {"\n        "}
          <p>{"+91 98765 43210"}</p>
          {"\n        "}
          <p>{"Chennai, Tamil Nadu, India"}</p>
          {"\n        "}
          <h3 className="follow-title">{"Follow Us"}</h3>
          {"\n        "}
          <div className="footer-icons">
            {"\n          "}
            <a href="#" aria-label="Instagram">
              <img src="assets/icons/instagram.svg" alt="Instagram icon" />
            </a>
            {"\n          "}
            <a href="#" aria-label="WhatsApp">
              <img src="assets/icons/whatsapp.svg" alt="WhatsApp icon" />
            </a>
            {"\n          "}
            <a href="mailto:support@6gclothing.com" aria-label="Email">
              <img src="assets/icons/email.svg" alt="Email icon" />
            </a>
            {"\n          "}
            <a href="#" aria-label="Facebook">
              <img src="assets/icons/facebook.svg" alt="Facebook icon" />
            </a>
            {"\n        "}
          </div>
          {"\n      "}
        </div>
        {"\n      "}
        <p className="copyright">
          {"© 2026 6G Clothing. All rights reserved."}
        </p>
        {"\n      "}
        <p className="tagline">{"Wear Your Story."}</p>
        {"\n    "}
      </footer>
      {"\n\n    \n    \n  "}
    </>
  );
}
