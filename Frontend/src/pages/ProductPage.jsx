export default function ProductPage() {
  return (
    <>
      {"\n    "}
      <div className="top-strip product-top">
        {"\n      "}
        <p>{"Free Shipping on Orders Above Rs999"}</p>
        {"\n      "}
        <span>{"|"}</span>
        {"\n      "}
        <p>{"Cash on Delivery Available"}</p>
        {"\n      "}
        <span>{"|"}</span>
        {"\n      "}
        <p>{"Easy Returns"}</p>
        {"\n      "}
        <span>{"|"}</span>
        {"\n      "}
        <p>{"100% Original Products"}</p>
        {"\n    "}
      </div>
      {"\n\n    "}
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
          <a className="active" href="tshirts.html">
            {"T-Shirts"}
          </a>
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
      <main className="product-page">
        {"\n      "}
        <nav className="crumbs" aria-label="Breadcrumb">
          {"\n        "}
          <a href="index.html">{"Home"}</a>
          <span>{"/"}</span>
          <a href="tshirts.html">{"T-Shirts"}</a>
          <span>{"/"}</span>
          <b>{"Wave Graphic Tee"}</b>
          {"\n      "}
        </nav>
        {"\n\n      "}
        <section className="product-hero">
          {"\n        "}
          <div className="gallery">
            {"\n          "}
            <div className="main-product-image">
              {"\n            "}
              <button
                className="image-wish"
                data-wish=""
                aria-label="Add to wishlist"
              >
                {"♡"}
              </button>
              {"\n            "}
              <img
                src="assets/images/single-product-wave-no-logo.png"
                alt="Unbranded black wave graphic T-shirt"
              />
              {"\n          "}
            </div>
            {"\n          "}
            <div className="thumb-row">
              {"\n            "}
              <button className="active">
                <img
                  src="assets/images/single-product-wave-no-logo.png"
                  alt=""
                />
              </button>
              {"\n            "}
              <button>
                <img
                  src="assets/images/single-product-wave-no-logo.png"
                  alt=""
                />
              </button>
              {"\n            "}
              <button>
                <img
                  src="assets/images/single-product-wave-no-logo.png"
                  alt=""
                />
              </button>
              {"\n            "}
              <button>
                <img
                  src="assets/images/single-product-wave-no-logo.png"
                  alt=""
                />
              </button>
              {"\n            "}
              <button>
                <img
                  src="assets/images/single-product-wave-no-logo.png"
                  alt=""
                />
              </button>
              {"\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n\n        "}
          <section className="product-info">
            {"\n          "}
            <div className="product-head">
              {"\n            "}
              <span className="best">{"Best Seller"}</span>
              {"\n          "}
            </div>
            {"\n          "}
            <h1>{"Wave Graphic Tee"}</h1>
            {"\n          "}
            <p className="brand-line">{"6G Clothing"}</p>
            {"\n          "}
            <div className="rating-line">
              <span>{"★★★★★"}</span>
              <b>{"4.7"}</b>
              <em>{"(86 reviews)"}</em>
            </div>
            {"\n          "}
            <div className="price-line">
              <strong>{"Rs799"}</strong>
              <del>{"Rs1,199"}</del>
              <span>{"33% OFF"}</span>
            </div>
            {"\n          "}
            <p className="tax">{"Inclusive of all taxes"}</p>
            {"\n          "}
            <p className="product-copy">
              {
                "Ride the waves of good vibes. This premium graphic tee features a minimal wave design with a modern streetwear aesthetic. Made for dreamers, doers and everyone in between."
              }
            </p>
            {"\n\n          "}
            <div className="option-block">
              {"\n            "}
              <h2>
                {"Color: "}
                <span>{"Black"}</span>
              </h2>
              {"\n            "}
              <div className="color-options">
                <button
                  className="active"
                  style={{ background: "#000" }}
                ></button>
                <button style={{ background: "#fff" }}></button>
                <button style={{ background: "#e7dac7" }}></button>
                <button style={{ background: "#66735f" }}></button>
                <button style={{ background: "#78899b" }}></button>
                <button style={{ background: "#a83245" }}></button>
              </div>
              {"\n          "}
            </div>
            {"\n\n          "}
            <div className="option-block size-block">
              {"\n            "}
              <h2>
                {"Size: "}
                <span>{"M"}</span>
              </h2>
              {"\n            "}
              <div className="size-options">
                <button>{"S"}</button>
                <button className="active">{"M"}</button>
                <button>{"L"}</button>
                <button>{"XL"}</button>
                <button>{"XXL"}</button>
              </div>
              {"\n          "}
            </div>
            {"\n\n          "}
            <div className="quantity-row">
              {"\n            "}
              <h2>{"Quantity:"}</h2>
              {"\n            "}
              <div className="qty">
                <button>{"-"}</button>
                <span>{"1"}</span>
                <button>{"+"}</button>
              </div>
              {"\n            "}
              <button className="outline">{"Compare"}</button>
              {"\n          "}
            </div>
            {"\n\n          "}
            <div className="buy-row">
              {"\n            "}
              <button className="cart-action">
                <img src="assets/icons/shopping-bag.svg" alt="" />
                {"Add to Cart"}
              </button>
              {"\n            "}
              <button className="buy-action">{"Buy Now"}</button>
              {"\n          "}
            </div>
            {"\n\n          "}
            <form className="delivery-box">
              {"\n            "}
              <img src="assets/icons/delivery.svg" alt="" />
              {"\n            "}
              <div>
                <b>{"Check Delivery Availability"}</b>
                <p>
                  {
                    "Get estimated delivery date, shipping charges and COD availability"
                  }
                </p>
              </div>
              {"\n            "}
              <input type="text" placeholder="Enter Pincode" />
              {"\n            "}
              <button type="submit">{"Check"}</button>
              {"\n          "}
            </form>
            {"\n        "}
          </section>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="service-strip product-services">
          {"\n        "}
          <article>
            <img src="assets/icons/delivery.svg" alt="" />
            <h3>{"Free Shipping"}</h3>
            <p>{"On Orders Above Rs999"}</p>
          </article>
          {"\n        "}
          <article>
            <img src="assets/icons/easy-returns.svg" alt="" />
            <h3>{"Easy Returns"}</h3>
            <p>{"Hassle-Free Shopping"}</p>
          </article>
          {"\n        "}
          <article>
            <img src="assets/icons/sustainable.svg" alt="" />
            <h3>{"Secure Payment"}</h3>
            <p>{"100% Safe & Secure"}</p>
          </article>
          {"\n        "}
          <article>
            <img src="assets/icons/phone.svg" alt="" />
            <h3>{"24/7 Support"}</h3>
            <p>{"We're Here to Help"}</p>
          </article>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="details-tabs">
          {"\n        "}
          <div className="tab-nav">
            <button className="active">{"Description"}</button>
            <button>{"Specifications"}</button>
            <button>{"Fabric & Care"}</button>
            <button>{"Shipping & Returns"}</button>
          </div>
          {"\n        "}
          <div className="description-grid">
            {"\n          "}
            <div>
              {"\n            "}
              <h2>{"Product Description"}</h2>
              {"\n            "}
              <p>
                {
                  "The Wave Graphic Tee is more than just a T-shirt - it's a mindset. Inspired by the calm and chaos of the ocean, this design represents balance, freedom and continuous growth. Crafted with premium cotton and a relaxed fit, it's perfect for everyday wear, whether you're out in the city or chasing sunsets."
                }
              </p>
              {"\n          "}
            </div>
            {"\n          "}
            <ul>
              {"\n            "}
              <li>{"Minimal wave graphic print"}</li>
              {"\n            "}
              <li>{"Premium 100% cotton fabric"}</li>
              {"\n            "}
              <li>{"Relaxed, comfortable fit"}</li>
              {"\n            "}
              <li>{"Perfect for everyday wear"}</li>
              {"\n            "}
              <li>{"A reminder to always keep good vibes"}</li>
              {"\n          "}
            </ul>
            {"\n        "}
          </div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="reviews-section">
          {"\n        "}
          <div className="reviews-head">
            <h2>{"Customer Reviews"}</h2>
            <button>{"Write a Review"}</button>
          </div>
          {"\n        "}
          <div className="review-layout">
            {"\n          "}
            <div className="score">
              <strong>{"4.7"}</strong>
              <span>{"/ 5"}</span>
              <p>{"★★★★☆"}</p>
              <small>{"Based on 86 reviews"}</small>
            </div>
            {"\n          "}
            <div className="bars">
              <p>
                {"5 ★ "}
                <span>
                  <i style={{ width: "82%" }}></i>
                </span>
                {"68"}
              </p>
              <p>
                {"4 ★ "}
                <span>
                  <i style={{ width: "22%" }}></i>
                </span>
                {"12"}
              </p>
              <p>
                {"3 ★ "}
                <span>
                  <i style={{ width: "8%" }}></i>
                </span>
                {"4"}
              </p>
              <p>
                {"2 ★ "}
                <span>
                  <i style={{ width: "3%" }}></i>
                </span>
                {"1"}
              </p>
              <p>
                {"1 ★ "}
                <span>
                  <i style={{ width: "3%" }}></i>
                </span>
                {"1"}
              </p>
            </div>
            {"\n          "}
            <article>
              <h3>{"Arjun Mehta"}</h3>
              <small>{"5 days ago"}</small>
              <b>{"★★★★★"}</b>
              <h4>{"Amazing Quality!"}</h4>
              <p>
                {
                  "The fabric is super soft and the print quality is top-notch. Fits perfectly and looks even better in person."
                }
              </p>
            </article>
            {"\n          "}
            <article>
              <h3>{"Priya Sharma"}</h3>
              <small>{"2 weeks ago"}</small>
              <b>{"★★★★★"}</b>
              <h4>{"My New Favourite Tee"}</h4>
              <p>
                {
                  "Love the minimal design. The fit is just right and the quality feels premium. Totally worth it!"
                }
              </p>
            </article>
            {"\n          "}
            <article>
              <h3>{"Karan Thapar"}</h3>
              <small>{"3 weeks ago"}</small>
              <b>{"★★★★★"}</b>
              <h4>{"Great Fit & Comfort"}</h4>
              <p>
                {
                  "Simple, stylish and very comfortable. I've already ordered another color!"
                }
              </p>
            </article>
            {"\n        "}
          </div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="related-products">
          {"\n        "}
          <div className="related-head">
            <h2>{"You May Also Like"}</h2>
            <a href="tshirts.html">{"View All →"}</a>
          </div>
          {"\n        "}
          <div className="related-grid">
            {"\n          "}
            <article>
              <button>{"♡"}</button>
              <img src="assets/images/single-product-wave-no-logo.png" alt="" />
              <h3>{"Essential Logo Tee"}</h3>
              <p>
                <b>{"Rs699"}</b>
                <span>{"★ 4.8 (124)"}</span>
              </p>
              <a href="cart.html">{"Add to Cart"}</a>
            </article>
            {"\n          "}
            <article>
              <button>{"♡"}</button>
              <img src="assets/images/single-product-wave-no-logo.png" alt="" />
              <h3>{"Wave Graphic Tee"}</h3>
              <p>
                <b>{"Rs799"}</b>
                <span>{"★ 4.7 (86)"}</span>
              </p>
              <a href="cart.html">{"Add to Cart"}</a>
            </article>
            {"\n          "}
            <article>
              <button>{"♡"}</button>
              <img src="assets/images/single-product-wave-no-logo.png" alt="" />
              <h3>{"Minimal Pocket Tee"}</h3>
              <p>
                <b>{"Rs749"}</b>
                <span>{"★ 4.9 (210)"}</span>
              </p>
              <a href="cart.html">{"Add to Cart"}</a>
            </article>
            {"\n          "}
            <article>
              <button>{"♡"}</button>
              <img src="assets/images/single-product-wave-no-logo.png" alt="" />
              <h3>{"Typography Tee"}</h3>
              <p>
                <b>{"Rs749"}</b>
                <span>{"★ 4.8 (143)"}</span>
              </p>
              <a href="cart.html">{"Add to Cart"}</a>
            </article>
            {"\n        "}
          </div>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="product-newsletter">
          {"\n        "}
          <div>
            <h2>{"Join the 6G Community"}</h2>
            <p>{"Get exclusive offers, new arrivals and style inspiration."}</p>
          </div>
          {"\n        "}
          <form>
            <input type="email" placeholder="Enter your email address" />
            <button>{"Subscribe"}</button>
          </form>
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
          <p>
            {
              "Streetwear for the dreamers, doers and everyone in between. Premium T-shirts for a better tomorrow."
            }
          </p>
          {"\n        "}
          <div className="footer-icons">
            {"\n          "}
            <a href="#" aria-label="Instagram">
              <img src="assets/icons/instagram.svg" alt="Instagram icon" />
            </a>
            {"\n          "}
            <a href="#" aria-label="YouTube">
              <img src="assets/icons/youtube.svg" alt="YouTube icon" />
            </a>
            {"\n          "}
            <a href="#" aria-label="Facebook">
              <img src="assets/icons/facebook.svg" alt="Facebook icon" />
            </a>
            {"\n          "}
            <a href="#" aria-label="Pinterest">
              <img src="assets/icons/pinterest.svg" alt="Pinterest icon" />
            </a>
            {"\n        "}
          </div>
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
          <a href="tshirts.html">{"All T-Shirts"}</a>
          <a href="tshirts.html">{"New Arrivals"}</a>
          <a href="tshirts.html">{"Best Sellers"}</a>
          <a href="tshirts.html">{"Oversized"}</a>
          <a href="tshirts.html">{"Graphic"}</a>
          <a href="tshirts.html">{"Minimal"}</a>
          {"\n      "}
        </div>
        {"\n      "}
        <div>
          {"\n        "}
          <h3>{"Help"}</h3>
          {"\n        "}
          <a href="#">{"FAQs"}</a>
          <a href="#">{"Size Guide"}</a>
          <a href="#">{"Shipping & Returns"}</a>
          <a href="#">{"Track Order"}</a>
          <a href="#">{"Privacy Policy"}</a>
          <a href="#">{"Terms & Conditions"}</a>
          {"\n      "}
        </div>
        {"\n      "}
        <div>
          {"\n        "}
          <h3>{"Contact Us"}</h3>
          {"\n        "}
          <p>{"support@6gclothing.in"}</p>
          {"\n        "}
          <p>{"+91 98765 43210"}</p>
          {"\n        "}
          <p>{"Bangalore, Karnataka"}</p>
          {"\n        "}
          <p>{"Mon - Sat, 10AM - 7PM"}</p>
          {"\n      "}
        </div>
        {"\n      "}
        <p className="copyright">
          {"© 2026 6G Clothing. All rights reserved."}
        </p>
        {"\n      "}
        <p className="tagline">{"Wear Your Story"}</p>
        {"\n    "}
      </footer>
      {"\n\n    \n    \n  "}
    </>
  );
}
