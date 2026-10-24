export default function HomePage() {
  return (
    <>
      {"\n    "}
      <header className="site-header">
        {"\n      "}
        <a className="brand" href="#">
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
          <a className="active" href="#">
            {"Home"}
          </a>
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
          <a className="cart-btn" href="cart.html" aria-label="Cart">
            <img src="assets/icons/shopping-bag.svg" alt="Cart icon" />
            <b id="cartCount">{"0"}</b>
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
      <main>
        {"\n      "}
        <section
          className="hero hero-banner"
          aria-label="6G Clothing hero banner"
        >
          {"\n        "}
          <img
            className="hero-banner-img"
            src="assets/Home/Banner.png"
            alt="6G Clothing home banner"
          />
          {"\n        "}
          <div className="hero-copy hero-overlay">
            {"\n          "}
            <p className="eyebrow">{"Premium T-Shirts For Modern Minds"}</p>
            {"\n          "}
            <h1>
              {"Wear"}
              <br />
              {"Your Story"}
            </h1>
            {"\n          "}
            <p className="hero-text">
              {"Minimal designs. Maximum expression."}
              <br />
              {"T-shirts made for the everyday you."}
            </p>
            {"\n          "}
            <div className="hero-buttons">
              {"\n            "}
              <a className="btn dark" href="tshirts.html">
                {"Shop T-Shirts "}
                <span>{"→"}</span>
              </a>
              {"\n            "}
              <a className="btn light" href="collections.html">
                {"Explore Collection"}
              </a>
              {"\n          "}
            </div>
            {"\n          "}
            <div className="hero-points">
              {"\n            "}
              <span>
                {"Premium"}
                <br />
                {"Quality"}
              </span>
              {"\n            "}
              <span>
                {"Trendy"}
                <br />
                {"Designs"}
              </span>
              {"\n            "}
              <span>
                {"All Day"}
                <br />
                {"Comfort"}
              </span>
              {"\n            "}
              <span>
                {"Made"}
                <br />
                {"For You"}
              </span>
              {"\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="section-block" id="collections">
          {"\n        "}
          <div className="section-head">
            {"\n          "}
            <h2>{"Shop By Style"}</h2>
            {"\n          "}
            <a href="#featured">{"Explore All →"}</a>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="style-grid" id="styleGrid"></div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="section-block" id="featured">
          {"\n        "}
          <div className="section-head">
            {"\n          "}
            <h2>{"Featured T-Shirts"}</h2>
            {"\n          "}
            <a href="#featured">{"View All →"}</a>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="product-grid" id="featuredGrid"></div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="benefits">
          {"\n        "}
          <div className="benefit-title">
            {"\n          "}
            <p className="eyebrow">{"Why Choose 6G Clothing"}</p>
            {"\n          "}
            <h2>
              {"More Than"}
              <br />
              {"Just T-Shirts"}
            </h2>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="benefit-list" id="benefitList"></div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="arrivals">
          {"\n        "}
          <div className="arrival-copy">
            {"\n          "}
            <p className="eyebrow">{"New Arrivals"}</p>
            {"\n          "}
            <h2>
              {"Fresh Styles."}
              <br />
              {"Same Attitude."}
            </h2>
            {"\n          "}
            <a className="btn dark" href="#featured">
              {"Shop Now "}
              <span>{"→"}</span>
            </a>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="arrival-gallery" id="arrivalGallery"></div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="section-block best-sellers">
          {"\n        "}
          <div className="seller-copy">
            {"\n          "}
            <p className="eyebrow">{"Best Sellers"}</p>
            {"\n          "}
            <h2>
              {"Loved by"}
              <br />
              {"Many"}
            </h2>
            {"\n          "}
            <a href="#featured">{"View All →"}</a>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="product-grid" id="sellerGrid"></div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="story" id="story">
          {"\n        "}
          <img
            src="assets/Home/middle banner.png"
            alt="6G Clothing middle banner with t-shirt collection"
          />
          {"\n        "}
          <div className="story-copy">
            {"\n          "}
            <p className="eyebrow">{"Our Story"}</p>
            {"\n          "}
            <h2>
              {"Built on Passion."}
              <br />
              {"Worn by You."}
            </h2>
            {"\n          "}
            <p>
              {
                "6G Clothing is a contemporary streetwear brand creating premium t-shirts for individuals who value comfort, quality and self-expression."
              }
            </p>
            {"\n          "}
            <a className="btn light" href="about.html">
              {"Learn More →"}
            </a>
            {"\n        "}
          </div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="instagram">
          {"\n        "}
          <div className="insta-head">
            {"\n          "}
            <h2>
              {"@6g_clothing "}
              <span>{"Real People. Real Outfits."}</span>
            </h2>
            {"\n          "}
            <a href="#contact">{"Follow Us On Instagram →"}</a>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="insta-strip" id="instaStrip"></div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="reviews">
          {"\n        "}
          <div className="review-title">
            {"\n          "}
            <p className="eyebrow">{"Customer Reviews"}</p>
            {"\n          "}
            <h2>
              {"What Our"}
              <br />
              {"Customers Say"}
            </h2>
            {"\n          "}
            <div>
              <button className="round-btn">{"←"}</button>
              <button className="round-btn">{"→"}</button>
            </div>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="review-grid" id="reviewGrid"></div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="community">
          {"\n        "}
          <img
            src="assets/Home/Bottom banner.png"
            alt="6G Clothing bottom banner with shopping bag"
          />
          {"\n        "}
          <div className="community-content">
            {"\n          "}
            <h2>{"Join the 6G Community"}</h2>
            {"\n          "}
            <p>
              {
                "Be the first to know about new collections, exclusive offers and more."
              }
            </p>
            {"\n          "}
            <form id="subscribeForm">
              {"\n            "}
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
              {"\n            "}
              <button className="btn dark" type="submit">
                {"Subscribe →"}
              </button>
              {"\n          "}
            </form>
            {"\n          "}
            <p className="form-status" id="formStatus" aria-live="polite"></p>
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
          <a href="#">{"Home"}</a>
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
          <a href="#featured">{"New Arrivals"}</a>
          <a href="#featured">{"Best Sellers"}</a>
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
      {"\n\n    \n  "}
    </>
  );
}
