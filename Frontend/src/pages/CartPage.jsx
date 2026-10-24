export default function CartPage() {
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
            className="icon-btn wishlist-icon"
            href="wishlist.html"
            aria-label="Wishlist"
          >
            <img src="assets/icons/heart.svg" alt="Wishlist icon" />
          </a>
          {"\n        "}
          <a
            className="cart-btn active-cart"
            href="cart.html"
            aria-label="Cart"
          >
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
      <main className="cart-page">
        {"\n      "}
        <section className="cart-hero">
          {"\n        "}
          <div className="cart-hero-copy">
            {"\n          "}
            <p className="eyebrow">{"Your Cart"}</p>
            {"\n          "}
            <h1>
              {"Your "}
              <span>{"Cart"}</span>
            </h1>
            {"\n          "}
            <p>
              {"Great choices! You're one step closer to wearing your story."}
            </p>
            {"\n        "}
          </div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="cart-shell" aria-label="Shopping cart">
          {"\n        "}
          <div className="cart-items">
            {"\n          "}
            <div className="cart-toolbar">
              {"\n            "}
              <label>
                <input type="checkbox" defaultChecked />{" "}
                <span>{"Select All (3 items)"}</span>
              </label>
              {"\n            "}
              <button type="button">
                <img src="assets/icons/trash.svg" alt="" />
                {"Remove Selected"}
              </button>
              {"\n          "}
            </div>
            {"\n\n          "}
            <article className="cart-row">
              {"\n            "}
              <input
                type="checkbox"
                defaultChecked
                aria-label="Select Minimal Logo Tee"
              />
              {"\n            "}
              <div className="item-copy">
                {"\n              "}
                <h2>{"Minimal Logo Tee"}</h2>
                {"\n              "}
                <p>{"Clean. Simple. Always Relevant."}</p>
                {"\n              "}
                <div>
                  <span className="dot black"></span>
                  {"Color: Black "}
                  <em>{"Size: L"}</em>
                </div>
                {"\n            "}
              </div>
              {"\n            "}
              <div className="item-price">
                <b>{"Rs699"}</b>
                <del>{"Rs899"}</del>
              </div>
              {"\n            "}
              <div className="qty" aria-label="Quantity">
                <button>{"-"}</button>
                <span>{"1"}</span>
                <button>{"+"}</button>
              </div>
              {"\n            "}
              <button className="trash" aria-label="Remove item">
                <img src="assets/icons/trash.svg" alt="" />
              </button>
              {"\n          "}
            </article>
            {"\n\n          "}
            <article className="cart-row">
              {"\n            "}
              <input
                type="checkbox"
                defaultChecked
                aria-label="Select Wave Graphic Tee"
              />
              {"\n            "}
              <div className="item-copy">
                {"\n              "}
                <h2>{"Wave Graphic Tee"}</h2>
                {"\n              "}
                <p>{"Flow with your own vibe."}</p>
                {"\n              "}
                <div>
                  <span className="dot white"></span>
                  {"Color: White "}
                  <em>{"Size: M"}</em>
                </div>
                {"\n            "}
              </div>
              {"\n            "}
              <div className="item-price">
                <b>{"Rs799"}</b>
                <del>{"Rs999"}</del>
              </div>
              {"\n            "}
              <div className="qty" aria-label="Quantity">
                <button>{"-"}</button>
                <span>{"1"}</span>
                <button>{"+"}</button>
              </div>
              {"\n            "}
              <button className="trash" aria-label="Remove item">
                <img src="assets/icons/trash.svg" alt="" />
              </button>
              {"\n          "}
            </article>
            {"\n\n          "}
            <article className="cart-row">
              {"\n            "}
              <input
                type="checkbox"
                defaultChecked
                aria-label="Select Good Vibes Tee"
              />
              {"\n            "}
              <div className="item-copy">
                {"\n              "}
                <h2>{"Good Vibes Tee"}</h2>
                {"\n              "}
                <p>{"Positive Mind. Better Days."}</p>
                {"\n              "}
                <div>
                  <span className="dot red"></span>
                  {"Color: Red "}
                  <em>{"Size: XL"}</em>
                </div>
                {"\n            "}
              </div>
              {"\n            "}
              <div className="item-price">
                <b>{"Rs699"}</b>
                <del>{"Rs899"}</del>
              </div>
              {"\n            "}
              <div className="qty" aria-label="Quantity">
                <button>{"-"}</button>
                <span>{"1"}</span>
                <button>{"+"}</button>
              </div>
              {"\n            "}
              <button className="trash" aria-label="Remove item">
                <img src="assets/icons/trash.svg" alt="" />
              </button>
              {"\n          "}
            </article>
            {"\n\n          "}
            <div className="coupon-bar">
              {"\n            "}
              <strong>{"Have a coupon code?"}</strong>
              {"\n            "}
              <input type="text" placeholder="Enter coupon code" />
              {"\n            "}
              <button type="button">{"Apply"}</button>
              {"\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n\n        "}
          <aside className="summary-card">
            {"\n          "}
            <h2>{"Order Summary"}</h2>
            {"\n          "}
            <dl>
              {"\n            "}
              <div>
                <dt>{"Subtotal (3 items)"}</dt>
                <dd>{"Rs2,197"}</dd>
              </div>
              {"\n            "}
              <div>
                <dt>{"Discount"}</dt>
                <dd className="green">{"- Rs200"}</dd>
              </div>
              {"\n            "}
              <div>
                <dt>{"Shipping"}</dt>
                <dd>
                  {"Rs0 "}
                  <span>{"FREE"}</span>
                </dd>
              </div>
              {"\n          "}
            </dl>
            {"\n          "}
            <div className="summary-total">
              <b>{"Total"}</b>
              <strong>{"Rs1,997"}</strong>
            </div>
            {"\n          "}
            <a className="checkout-btn" href="#">
              {"Proceed to Checkout "}
              <span>{"→"}</span>
            </a>
            {"\n          "}
            <div className="or">
              <span>{"or"}</span>
            </div>
            {"\n          "}
            <button className="gpay" type="button">
              {"Buy with "}
              <b>{"G"}</b>
              {" Pay"}
            </button>
            {"\n          "}
            <div className="summary-perks">
              {"\n            "}
              <span>
                {"Secure"}
                <br />
                {"Payment"}
              </span>
              {"\n            "}
              <span>
                {"Easy"}
                <br />
                {"Returns"}
              </span>
              {"\n            "}
              <span>
                {"COD"}
                <br />
                {"Available"}
              </span>
              {"\n          "}
            </div>
            {"\n        "}
          </aside>
          {"\n\n      "}
        </section>
        {"\n\n      "}
        <section className="cart-recommend">
          {"\n        "}
          <div className="recommend-head">
            {"\n          "}
            <div>
              <h2>{"You May Also Like"}</h2>
              <p>{"More styles to complete your look."}</p>
            </div>
            {"\n          "}
            <a href="index.html#featured">{"View All →"}</a>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="cart-product-grid">
            {"\n          "}
            <article>
              <button className="heart-pill">{"♡"}</button>
              <h3>{"Urban Art Tee"}</h3>
              <p>
                <b>{"Rs799"}</b>
                <span>{"★ 4.8 (124)"}</span>
              </p>
              <button>{"Add to Cart"}</button>
            </article>
            {"\n          "}
            <article>
              <button className="heart-pill">{"♡"}</button>
              <h3>{"Minimal Pocket Tee"}</h3>
              <p>
                <b>{"Rs749"}</b>
                <span>{"★ 4.7 (86)"}</span>
              </p>
              <button>{"Add to Cart"}</button>
            </article>
            {"\n          "}
            <article>
              <button className="heart-pill">{"♡"}</button>
              <h3>{"Anime Street Tee"}</h3>
              <p>
                <b>{"Rs799"}</b>
                <span>{"★ 4.9 (210)"}</span>
              </p>
              <button>{"Add to Cart"}</button>
            </article>
            {"\n          "}
            <article>
              <button className="heart-pill">{"♡"}</button>
              <h3>{"Typography Tee"}</h3>
              <p>
                <b>{"Rs749"}</b>
                <span>{"★ 4.8 (143)"}</span>
              </p>
              <button>{"Add to Cart"}</button>
            </article>
            {"\n          "}
            <article>
              <button className="heart-pill">{"♡"}</button>
              <h3>{"Vision Graphic Tee"}</h3>
              <p>
                <b>{"Rs799"}</b>
                <span>{"★ 4.7 (68)"}</span>
              </p>
              <button>{"Add to Cart"}</button>
            </article>
            {"\n          "}
            <article>
              <button className="heart-pill">{"♡"}</button>
              <h3>{"Essential Tee"}</h3>
              <p>
                <b>{"Rs699"}</b>
                <span>{"★ 4.8 (92)"}</span>
              </p>
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
