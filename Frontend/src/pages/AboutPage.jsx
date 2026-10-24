export default function AboutPage() {
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
          <a className="active" href="about.html">
            {"About"}
          </a>
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
      {"\n\n\n    "}
      <main>
        {"\n      "}
        <section className="about-hero">
          {"\n        "}
          <div className="hero-copy">
            {"\n          "}
            <p className="eyebrow">{"About 6G Clothing"}</p>
            {"\n          "}
            <h1>
              {"More Than"}
              <br />
              {"Just "}
              <span>{"T-Shirts"}</span>
            </h1>
            {"\n          "}
            <h2>{"Wear Your Story. Be Yourself."}</h2>
            {"\n          "}
            <p>
              {
                "We create premium, comfortable and expressive t-shirts for individuals who believe in wearing what they feel. At 6G Clothing, it's not just fashion, it's a way of life."
              }
            </p>
            {"\n          "}
            <a className="btn dark" href="collections.html">
              {"Our Collections "}
              <span>{"→"}</span>
            </a>
            {"\n        "}
          </div>
          {"\n        "}
          <img
            src="assets/images/tshirts-hero-no-logo.png"
            alt="Two models wearing 6G Clothing t-shirts"
          />
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="story-intro">
          {"\n        "}
          <div className="image-card large">
            {"\n          "}
            <img
              src="assets/about/Our story.png"
              alt="6G Clothing our story banner"
            />
            {"\n          "}
            <div className="idea-card">
              {"Good"}
              <br />
              {"Ideas"}
              <br />
              {"Better"}
              <br />
              {"Outfits"}
            </div>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="intro-copy">
            {"\n          "}
            <p className="red-label">{"Our Story"}</p>
            {"\n          "}
            <h2>
              {"From a Simple Idea"}
              <br />
              {"to a Growing Movement"}
            </h2>
            {"\n          "}
            <p>
              {
                "6G Clothing was born from a simple idea, to create t-shirts that people actually love to wear. We wanted to go beyond ordinary designs and offer something meaningful, minimal and modern for the new generation."
              }
            </p>
            {"\n          "}
            <p>
              {
                "Today, 6G Clothing is a growing community of dreamers, thinkers, creatives and everyday people who choose comfort, quality and self-expression."
              }
            </p>
            {"\n          "}
            <div className="feature-row">
              {"\n            "}
              <article>
                <img
                  src="assets/icons/premium-quality.svg"
                  alt="Premium quality icon"
                />
                <b>
                  {"Premium"}
                  <br />
                  {"Quality"}
                </b>
              </article>
              {"\n            "}
              <article>
                <img
                  src="assets/icons/comfortable-fit.svg"
                  alt="Modern designs icon"
                />
                <b>
                  {"Modern"}
                  <br />
                  {"Designs"}
                </b>
              </article>
              {"\n            "}
              <article>
                <img
                  src="assets/icons/made-for-you.svg"
                  alt="Made for everyone icon"
                />
                <b>
                  {"Made for"}
                  <br />
                  {"Everyone"}
                </b>
              </article>
              {"\n            "}
              <article>
                <img
                  src="assets/icons/sustainable.svg"
                  alt="Sustainable choices icon"
                />
                <b>
                  {"Sustainable"}
                  <br />
                  {"Choices"}
                </b>
              </article>
              {"\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="about-grid">
          {"\n        "}
          <div className="stats-panel">
            {"\n          "}
            <article>
              <img
                src="assets/icons/community.svg"
                alt="Happy customers icon"
              />
              <b>{"4K+"}</b>
              <span>{"Happy Customers"}</span>
            </article>
            {"\n          "}
            <article>
              <img
                src="assets/icons/comfortable-fit.svg"
                alt="Unique designs icon"
              />
              <b>{"200+"}</b>
              <span>{"Unique Designs"}</span>
            </article>
            {"\n          "}
            <article>
              <img src="assets/icons/globe.svg" alt="All India shipping icon" />
              <b>{"All India"}</b>
              <span>{"Shipping"}</span>
            </article>
            {"\n          "}
            <article>
              <img
                src="assets/icons/made-for-you.svg"
                alt="Customer rating icon"
              />
              <b>{"4.8/5"}</b>
              <span>{"Customer Rating"}</span>
            </article>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="quote-card">
            {"\n          "}
            <span>{"“"}</span>
            {"\n          "}
            <p>
              {
                "Fashion is not just what you wear, it's how you express who you are."
              }
            </p>
            {"\n        "}
          </div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="values-area">
          {"\n        "}
          <div className="values-copy">
            {"\n          "}
            <p className="eyebrow">{"Our Values"}</p>
            {"\n          "}
            <h2>{"What We Stand For"}</h2>
            {"\n          "}
            <p>
              {
                "At 6G Clothing, we are driven by more than just fashion. Our values guide everything we create, from our designs to your doorstep."
              }
            </p>
            {"\n          "}
            <div className="value-cards">
              {"\n            "}
              <article className="pink">
                <img
                  src="assets/icons/premium-quality.svg"
                  alt="Quality first icon"
                />
                <b>{"Quality First"}</b>
                <span>{"Carefully selected fabrics for lasting comfort."}</span>
              </article>
              {"\n            "}
              <article className="blue">
                <img
                  src="assets/icons/community.svg"
                  alt="People driven icon"
                />
                <b>{"People Driven"}</b>
                <span>{"Designed for everyone, every story."}</span>
              </article>
              {"\n            "}
              <article className="green">
                <img
                  src="assets/icons/sustainable.svg"
                  alt="Sustainable growth icon"
                />
                <b>{"Sustainable Growth"}</b>
                <span>{"Thoughtful choices for a better tomorrow."}</span>
              </article>
              {"\n            "}
              <article className="purple">
                <img src="assets/icons/smile.svg" alt="Self expression icon" />
                <b>{"Self Expression"}</b>
                <span>{"Wear what you feel. Be unapologetically you."}</span>
              </article>
              {"\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n        "}
          <img
            className="back-model"
            src="assets/about/Our values.png"
            alt="6G Clothing our values banner"
          />
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="community-story">
          {"\n        "}
          <img
            src="assets/about/behind the brand.png"
            alt="6G Clothing behind the brand banner"
          />
          {"\n        "}
          <div>
            {"\n          "}
            <p className="red-label">{"Behind The Brand"}</p>
            {"\n          "}
            <h2>
              {"A Community"}
              <br />
              {"That Inspires"}
            </h2>
            {"\n          "}
            <p>
              {
                "6G Clothing is more than a brand, it's a community. We are inspired by real people, real stories and the belief that fashion can bring people together."
              }
            </p>
            {"\n          "}
            <p>
              {
                "Thank you for being a part of our journey. Let's keep creating, expressing and inspiring together."
              }
            </p>
            {"\n          "}
            <a className="btn dark" href="#contact">
              {"Join the 6G Community "}
              <span>{"→"}</span>
            </a>
            {"\n        "}
          </div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="journey-cta">
          {"\n        "}
          <img
            src="assets/contact/contact-rack-no-logo.png"
            alt="Red 6G Clothing t-shirt banner"
          />
          {"\n        "}
          <div>
            {"\n          "}
            <p>{"Wear Your Story"}</p>
            {"\n          "}
            <h2>{"Be a Part of Our Journey"}</h2>
            {"\n          "}
            <span>
              {
                "Explore our latest collections and find the t-shirt that speaks to you."
              }
            </span>
            {"\n          "}
            <a className="btn light" href="index.html#featured">
              {"Shop Now "}
              <span>{"→"}</span>
            </a>
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
      {"\n    \n    \n  "}
    </>
  );
}
