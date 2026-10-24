export default function ContactPage() {
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
          <a className="active" href="contact.html">
            {"Contact"}
          </a>
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
      {"\n\n    "}
      <main className="contact-page">
        {"\n      "}
        <section className="contact-hero">
          {"\n        "}
          <div className="contact-hero-copy">
            {"\n          "}
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="index.html">{"Home"}</a>
              <span>{">"}</span>
              <b>{"Contact"}</b>
            </nav>
            {"\n          "}
            <h1>
              {"Let's"}
              <br />
              <span>{"Connect"}</span>
            </h1>
            {"\n          "}
            <p>
              {
                "Have a question, suggestion or a collaboration idea? We'd love to hear from you. Reach out to us and we'll get back as soon as possible."
              }
            </p>
            {"\n          "}
            <a className="btn dark" href="#message">
              {"Get in Touch "}
              <span>{"→"}</span>
            </a>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="contact-stamp">
            {"6G CLOTHING"}
            <br />
            <span>
              {"ESTD"}
              <br />
              {"2026"}
            </span>
            <br />
            {"WEAR YOUR STORY"}
          </div>
          {"\n        "}
          <img
            src="assets/contact/contact-hero.png"
            alt="Two people wearing 6G Clothing graphic t-shirts"
          />
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="contact-cards" aria-label="Contact options">
          {"\n        "}
          <article className="tone-red">
            <span>
              <img src="assets/icons/phone.svg" alt="" />
            </span>
            <h2>{"Call Us"}</h2>
            <b>{"+91 98765 43210"}</b>
            <p>{"Mon - Sat, 10:00 AM - 7:00 PM"}</p>
          </article>
          {"\n        "}
          <article className="tone-blue">
            <span>
              <img src="assets/icons/email.svg" alt="" />
            </span>
            <h2>{"Email Us"}</h2>
            <b>{"support@6gclothing.com"}</b>
            <p>{"We reply within 24 hours"}</p>
          </article>
          {"\n        "}
          <article className="tone-green">
            <span>
              <img src="assets/icons/location-pin.svg" alt="" />
            </span>
            <h2>{"Visit Us"}</h2>
            <b>{"Chennai, Tamil Nadu, India"}</b>
            <p>{"Our store & office address"}</p>
          </article>
          {"\n        "}
          <article className="tone-purple">
            <span>
              <img src="assets/icons/message-square.svg" alt="" />
            </span>
            <h2>{"Live Chat"}</h2>
            <b>{"Chat with our team"}</b>
            <p>{"Get instant support"}</p>
          </article>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="message-section" id="message">
          {"\n        "}
          <div className="message-form">
            {"\n          "}
            <p className="eyebrow">{"Send Us A Message"}</p>
            {"\n          "}
            <h2>
              {"We're Here to "}
              <span>{"Help"}</span>
            </h2>
            {"\n          "}
            <p>
              {"Fill out the form and our team will get back to you shortly."}
            </p>
            {"\n          "}
            <form>
              {"\n            "}
              <label>
                {"Your Name *"}
                <input type="text" placeholder="Enter your name" required />
              </label>
              {"\n            "}
              <label>
                {"Your Email *"}
                <input type="email" placeholder="Enter your email" required />
              </label>
              {"\n            "}
              <label className="full">
                {"Subject *"}
                <select required>
                  <option value="">{"Select a subject"}</option>
                  <option>{"Order Support"}</option>
                  <option>{"Returns & Exchange"}</option>
                  <option>{"Collaboration"}</option>
                  <option>{"General Question"}</option>
                </select>
              </label>
              {"\n            "}
              <label className="full">
                {"Your Message *"}
                <textarea
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </label>
              {"\n            "}
              <button className="btn dark full" type="submit">
                {"Send Message "}
                <span>{"→"}</span>
              </button>
              {"\n          "}
            </form>
            {"\n        "}
          </div>
          {"\n        "}
          <aside className="contact-image-card">
            {"\n          "}
            <img
              src="assets/contact/contact-rack-no-logo.png"
              alt="Colorful t-shirts on a store rack"
            />
            {"\n          "}
            <div className="image-benefits">
              {"\n            "}
              <span>
                <img src="assets/icons/heart.svg" alt="" />
                {"Fashion for Everyone"}
              </span>
              {"\n            "}
              <span>
                <img src="assets/icons/globe.svg" alt="" />
                {"Every Color Tells a Story"}
              </span>
              {"\n            "}
              <span>
                <img src="assets/icons/community.svg" alt="" />
                {"Community Driven"}
              </span>
              {"\n            "}
              <span>
                <img src="assets/icons/smile.svg" alt="" />
                {"Wear Your Story"}
              </span>
              {"\n          "}
            </div>
            {"\n        "}
          </aside>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="location-section">
          {"\n        "}
          <div className="map-card">
            {"\n          "}
            <iframe
              title="6G Clothing live location map"
              src="https://www.google.com/maps?q=123%20Creative%20Street%2C%20Anna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600040%2C%20India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {"\n          "}
            <div className="map-pop">
              <span>
                <img src="assets/icons/location-pin.svg" alt="" />
              </span>
              <b>{"6G Clothing"}</b>
              <small>{"Chennai, Tamil Nadu, India"}</small>
              <a
                href="https://www.google.com/maps/search/?api=1&query=123%20Creative%20Street%2C%20Anna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600040%2C%20India"
                target="_blank"
                rel="noopener"
              >
                {"Get Direction →"}
              </a>
            </div>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="location-copy">
            {"\n          "}
            <p className="eyebrow">{"Our Location"}</p>
            {"\n          "}
            <h2>
              {"Visit Our "}
              <span>{"Store"}</span>
            </h2>
            {"\n          "}
            <p>
              {"Come say hello at our office or store. We'd love to meet you!"}
            </p>
            {"\n          "}
            <div className="address-card">
              <span>
                <img src="assets/icons/location-pin.svg" alt="" />
              </span>
              <b>{"6G Clothing"}</b>
              <p>
                {"123, Creative Street, Anna Nagar"}
                <br />
                {"Chennai, Tamil Nadu - 600040"}
                <br />
                {"India"}
              </p>
            </div>
            {"\n          "}
            <div className="info-grid">
              {"\n            "}
              <article>
                <img src="assets/icons/clock.svg" alt="" />
                <b>{"Store Hours"}</b>
                <p>
                  {"Mon - Sat: 10:00 AM - 7:00 PM"}
                  <br />
                  {"Sunday: Closed"}
                </p>
              </article>
              {"\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="faq-section">
          {"\n        "}
          <p className="eyebrow">{"Frequently Asked Questions"}</p>
          {"\n        "}
          <h2>
            {"Still Have "}
            <span>{"Questions?"}</span>
          </h2>
          {"\n        "}
          <p>
            {
              "Here are some quick answers. If you need more help, feel free to contact us."
            }
          </p>
          {"\n        "}
          <div className="faq-grid">
            {"\n          "}
            <details>
              <summary>{"How can I place an order?"}</summary>
              <p>
                {"Choose your t-shirt, add it to cart and complete checkout."}
              </p>
            </details>
            {"\n          "}
            <details>
              <summary>{"Can I return or exchange a product?"}</summary>
              <p>
                {
                  "Yes, eligible products can be returned or exchanged as per policy."
                }
              </p>
            </details>
            {"\n          "}
            <details>
              <summary>{"What payment methods do you accept?"}</summary>
              <p>
                {
                  "We accept prepaid payments and cash on delivery where available."
                }
              </p>
            </details>
            {"\n          "}
            <details>
              <summary>{"How long does delivery take?"}</summary>
              <p>
                {"Most orders arrive within 3 to 7 working days across India."}
              </p>
            </details>
            {"\n          "}
            <details>
              <summary>{"Do you offer international shipping?"}</summary>
              <p>{"International shipping is coming soon."}</p>
            </details>
            {"\n          "}
            <details>
              <summary>{"I still need help. What should I do?"}</summary>
              <p>
                {"Email us at support@6gclothing.com or start a live chat."}
              </p>
            </details>
            {"\n        "}
          </div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="community">
          {"\n        "}
          <img
            src="assets/contact/contact-hero.png"
            alt="6G Clothing black t-shirt detail"
          />
          {"\n        "}
          <div className="community-content">
            {"\n          "}
            <p className="eyebrow">{"Stay In Touch"}</p>
            {"\n          "}
            <h2>{"Join the 6G Community"}</h2>
            {"\n          "}
            <p>
              {"Be the first to know about new collections, offers and more."}
            </p>
            {"\n          "}
            <form>
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
