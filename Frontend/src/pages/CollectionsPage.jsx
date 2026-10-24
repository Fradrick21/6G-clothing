export default function CollectionsPage() {
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
          <a className="active" href="collections.html">
            {"Collections"}
          </a>
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
            <input type="search" placeholder="Search for collections..." />
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
      <main className="collections-page">
        {"\n      "}
        <section
          className="collections-hero"
          style={{
            backgroundImage: "url('assets/Collection/Banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {"\n        "}
          <div className="collections-hero-overlay"></div>
          {"\n        "}
          <div className="collections-hero-copy">
            {"\n          "}
            <p className="eyebrow">{"Our Collections"}</p>
            {"\n          "}
            <h1>
              {"Styles for"}
              <br />
              <span>{"Every You"}</span>
            </h1>
            {"\n          "}
            <p>
              {
                "Explore our curated collections designed for Every Mood. Every Story. Every Style."
              }
            </p>
            {"\n          "}
            <a className="hero-btn" href="#collectionGrid">
              {"Shop All Collections "}
              <span>{"→"}</span>
            </a>
            {"\n          "}
            <div className="hero-perks">
              {"\n            "}
              <span>
                <img src="assets/icons/premium-quality.svg" alt="" />
                {"Trendy"}
                <br />
                {"Designs"}
              </span>
              {"\n            "}
              <span>
                <img src="assets/icons/comfortable-fit.svg" alt="" />
                {"Premium"}
                <br />
                {"Quality"}
              </span>
              {"\n            "}
              <span>
                <img src="assets/icons/heart.svg" alt="" />
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
        <section className="collections-list" id="collectionGrid">
          {"\n\n        "}
          {"\n        "}
          <div className="collections-head">
            {"\n\n          "}
            <div className="ch-left">
              {"\n            "}
              <p className="eyebrow">{"—  Explore By Theme"}</p>
              {"\n            "}
              <h2>
                {"Our "}
                <span>{"Collections"}</span>
              </h2>
              {"\n            "}
              <p className="ch-desc">
                {
                  "Discover T-shirts that match your vibe. Handpicked designs for every lifestyle, mood and moment."
                }
              </p>
              {"\n          "}
            </div>
            {"\n\n          "}
            <div className="ch-right">
              {"\n            "}
              <a className="view-all-btn" href="#collectionGrid">
                {"View All Collections →"}
              </a>
              {"\n          "}
            </div>
            {"\n\n        "}
          </div>
          {"\n\n        "}
          {"\n        "}
          <div className="collection-grid">
            {"\n\n          "}
            <article className="collection-card cc-dark" data-num="01">
              {"\n            "}
              <div className="cc-img-wrap">
                {"\n              "}
                {"\n              "}
                <img src={undefined} alt="Graphic Collection" className="cc-tshirt" />
                {"\n            "}
              </div>
              {"\n            "}
              <div className="cc-body">
                {"\n              "}
                <h3>
                  {"Graphic"}
                  <br />
                  {"Collection"}
                </h3>
                {"\n              "}
                <p className="cc-sub">{"Bold designs. Loud vibes."}</p>
                {"\n              "}
                <span className="cc-count">
                  {"\n                "}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <path d="M8 21h8M12 17v4"></path>
                  </svg>
                  {"\n                120+ Designs\n              "}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <a
                className="cc-arrow"
                href="tshirts.html?filter=Graphic"
                aria-label="Graphic Collection"
              >
                {"\n              "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                {"\n            "}
              </a>
              {"\n          "}
            </article>
            {"\n\n          "}
            <article className="collection-card cc-cream" data-num="02">
              {"\n            "}
              <div className="cc-img-wrap">
                {"\n              "}
                {"\n              "}
                <img
                  src={undefined}
                  alt="Minimal Collection"
                  className="cc-tshirt cc-tshirt-light"
                />
                {"\n            "}
              </div>
              {"\n            "}
              <div className="cc-body">
                {"\n              "}
                <h3>
                  {"Minimal"}
                  <br />
                  {"Collection"}
                </h3>
                {"\n              "}
                <p className="cc-sub">{"Clean looks. Timeless style."}</p>
                {"\n              "}
                <span className="cc-count">
                  {"\n                "}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <path d="M8 21h8M12 17v4"></path>
                  </svg>
                  {"\n                80+ Designs\n              "}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <a
                className="cc-arrow"
                href="tshirts.html?filter=Minimal"
                aria-label="Minimal Collection"
              >
                {"\n              "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                {"\n            "}
              </a>
              {"\n          "}
            </article>
            {"\n\n          "}
            <article className="collection-card cc-dark" data-num="03">
              {"\n            "}
              <div className="cc-img-wrap">
                {"\n              "}
                {"\n              "}
                <img src={undefined} alt="Anime Collection" className="cc-tshirt" />
                {"\n            "}
              </div>
              {"\n            "}
              <div className="cc-body">
                {"\n              "}
                <h3>
                  {"Anime"}
                  <br />
                  {"Collection"}
                </h3>
                {"\n              "}
                <p className="cc-sub">{"For the real fans."}</p>
                {"\n              "}
                <span className="cc-count">
                  {"\n                "}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <path d="M8 21h8M12 17v4"></path>
                  </svg>
                  {"\n                60+ Designs\n              "}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <a
                className="cc-arrow"
                href="tshirts.html?filter=Anime"
                aria-label="Anime Collection"
              >
                {"\n              "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                {"\n            "}
              </a>
              {"\n          "}
            </article>
            {"\n\n          "}
            <article className="collection-card cc-mint" data-num="04">
              {"\n            "}
              <div className="cc-img-wrap">
                {"\n              "}
                {"\n              "}
                <img
                  src={undefined}
                  alt="Typography Collection"
                  className="cc-tshirt cc-tshirt-light"
                />
                {"\n            "}
              </div>
              {"\n            "}
              <div className="cc-body">
                {"\n              "}
                <h3>
                  {"Typography"}
                  <br />
                  {"Collection"}
                </h3>
                {"\n              "}
                <p className="cc-sub">{"Words that wear well."}</p>
                {"\n              "}
                <span className="cc-count">
                  {"\n                "}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <path d="M8 21h8M12 17v4"></path>
                  </svg>
                  {"\n                100+ Designs\n              "}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <a
                className="cc-arrow"
                href="tshirts.html?filter=Typography"
                aria-label="Typography Collection"
              >
                {"\n              "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                {"\n            "}
              </a>
              {"\n          "}
            </article>
            {"\n\n          "}
            <article className="collection-card cc-charcoal" data-num="05">
              {"\n            "}
              <div className="cc-img-wrap">
                {"\n              "}
                {"\n              "}
                <img src={undefined} alt="Oversized Collection" className="cc-tshirt" />
                {"\n            "}
              </div>
              {"\n            "}
              <div className="cc-body">
                {"\n              "}
                <h3>
                  {"Oversized"}
                  <br />
                  {"Collection"}
                </h3>
                {"\n              "}
                <p className="cc-sub">{"Bigger fit. Bolder attitude."}</p>
                {"\n              "}
                <span className="cc-count">
                  {"\n                "}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <path d="M8 21h8M12 17v4"></path>
                  </svg>
                  {"\n                70+ Designs\n              "}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <a
                className="cc-arrow"
                href="tshirts.html?filter=Oversized"
                aria-label="Oversized Collection"
              >
                {"\n              "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                {"\n            "}
              </a>
              {"\n          "}
            </article>
            {"\n\n          "}
            <article className="collection-card cc-gold" data-num="06">
              {"\n            "}
              <div className="cc-img-wrap">
                {"\n              "}
                {"\n              "}
                <img
                  src={undefined}
                  alt="Pocket Collection"
                  className="cc-tshirt cc-tshirt-light"
                />
                {"\n            "}
              </div>
              {"\n            "}
              <div className="cc-body">
                {"\n              "}
                <h3>
                  {"Pocket"}
                  <br />
                  {"Collection"}
                </h3>
                {"\n              "}
                <p className="cc-sub">{"Small details. Big personality."}</p>
                {"\n              "}
                <span className="cc-count">
                  {"\n                "}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <path d="M8 21h8M12 17v4"></path>
                  </svg>
                  {"\n                45+ Designs\n              "}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <a
                className="cc-arrow"
                href="tshirts.html"
                aria-label="Pocket Collection"
              >
                {"\n              "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                {"\n            "}
              </a>
              {"\n          "}
            </article>
            {"\n\n          "}
            <article className="collection-card cc-rose" data-num="07">
              {"\n            "}
              <div className="cc-img-wrap">
                {"\n              "}
                {"\n              "}
                <img src={undefined} alt="Solid Colors" className="cc-tshirt" />
                {"\n            "}
              </div>
              {"\n            "}
              <div className="cc-body">
                {"\n              "}
                <h3>
                  {"Solid"}
                  <br />
                  {"Colors"}
                </h3>
                {"\n              "}
                <p className="cc-sub">{"Everyday essentials."}</p>
                {"\n              "}
                <span className="cc-count">
                  {"\n                "}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <path d="M8 21h8M12 17v4"></path>
                  </svg>
                  {"\n                50+ Styles\n              "}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <a
                className="cc-arrow"
                href="tshirts.html?filter=Solid+Colors"
                aria-label="Solid Colors"
              >
                {"\n              "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                {"\n            "}
              </a>
              {"\n          "}
            </article>
            {"\n\n          "}
            <article className="collection-card cc-silver" data-num="08">
              {"\n            "}
              <div className="cc-img-wrap">
                {"\n              "}
                {"\n              "}
                <img src={undefined} alt="New Arrivals" className="cc-tshirt" />
                {"\n            "}
              </div>
              {"\n            "}
              <div className="cc-body">
                {"\n              "}
                <h3>
                  {"New"}
                  <br />
                  {"Arrivals"}
                </h3>
                {"\n              "}
                <p className="cc-sub">{"Fresh drops. Just for you."}</p>
                {"\n              "}
                <span className="cc-count">
                  {"\n                "}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <path d="M8 21h8M12 17v4"></path>
                  </svg>
                  {"\n                40+ Designs\n              "}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <a
                className="cc-arrow"
                href="tshirts.html?filter=New"
                aria-label="New Arrivals"
              >
                {"\n              "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                {"\n            "}
              </a>
              {"\n          "}
            </article>
            {"\n\n        "}
          </div>
          {"\n\n      "}
        </section>
        {"\n\n      "}
        <section className="premium-band">
          {"\n\n        "}
          {"\n        "}
          <div className="pb-ring pb-ring-1"></div>
          {"\n        "}
          <div className="pb-ring pb-ring-2"></div>
          {"\n\n        "}
          <div className="pb-inner">
            {"\n\n          "}
            {"\n          "}
            <div className="pb-copy">
              {"\n            "}
              <p className="pb-eyebrow">
                {"\n              "}
                <span className="pb-dash"></span>
                {"\n              Premium Collection\n            "}
              </p>
              {"\n            "}
              <h2 className="pb-heading">
                {"Every Color"}
                <br />
                <em>{"Has a Story"}</em>
              </h2>
              {"\n            "}
              <p className="pb-desc">
                {
                  "Wear what you feel. Explore our wide range of premium T-shirts crafted for every mood, style and story."
                }
              </p>
              {"\n            "}
              <a className="pb-btn" href="#colors">
                {"\n              Shop By Color\n              "}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                {"\n            "}
              </a>
              {"\n          "}
            </div>
            {"\n\n          "}
            {"\n          "}
            <div className="pb-palette">
              {"\n            "}
              <div className="pb-palette-label">{"16 Stunning Colors"}</div>
              {"\n            "}
              <div className="pb-color-fan">
                {"\n              "}
                <span className="pbc" style={{ "--c": "#0a0a0a", "--i": "0" }}>
                  {"Black"}
                </span>
                {"\n              "}
                <span className="pbc" style={{ "--c": "#3a3a3a", "--i": "1" }}>
                  {"Charcoal"}
                </span>
                {"\n              "}
                <span className="pbc" style={{ "--c": "#8d8d8d", "--i": "2" }}>
                  {"Grey"}
                </span>
                {"\n              "}
                <span className="pbc" style={{ "--c": "#f0ebe4", "--i": "3" }}>
                  {"Cream"}
                </span>
                {"\n              "}
                <span className="pbc" style={{ "--c": "#e4d2b8", "--i": "4" }}>
                  {"Beige"}
                </span>
                {"\n              "}
                <span className="pbc" style={{ "--c": "#e51521", "--i": "5" }}>
                  {"Red"}
                </span>
                {"\n              "}
                <span className="pbc" style={{ "--c": "#f07c2a", "--i": "6" }}>
                  {"Orange"}
                </span>
                {"\n              "}
                <span className="pbc" style={{ "--c": "#ffbd00", "--i": "7" }}>
                  {"Yellow"}
                </span>
                {"\n              "}
                <span className="pbc" style={{ "--c": "#068244", "--i": "8" }}>
                  {"Green"}
                </span>
                {"\n              "}
                <span className="pbc" style={{ "--c": "#0f6de8", "--i": "9" }}>
                  {"Blue"}
                </span>
                {"\n              "}
                <span className="pbc" style={{ "--c": "#10285d", "--i": "10" }}>
                  {"Navy"}
                </span>
                {"\n              "}
                <span className="pbc" style={{ "--c": "#7e35d8", "--i": "11" }}>
                  {"Purple"}
                </span>
                {"\n              "}
                <span className="pbc" style={{ "--c": "#ff82aa", "--i": "12" }}>
                  {"Pink"}
                </span>
                {"\n              "}
                <span className="pbc" style={{ "--c": "#8d634b", "--i": "13" }}>
                  {"Brown"}
                </span>
                {"\n              "}
                <span className="pbc" style={{ "--c": "#b50918", "--i": "14" }}>
                  {"Maroon"}
                </span>
                {"\n              "}
                <span
                  className="pbc"
                  style={{
                    "--c": "#fff",
                    "--i": "15",
                    border: "1.5px solid #e0e0e0",
                  }}
                >
                  {"White"}
                </span>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n\n          "}
            {"\n          "}
            <div className="pb-stats">
              {"\n            "}
              <div className="pb-stat">
                {"\n              "}
                <strong>{"500+"}</strong>
                {"\n              "}
                <span>{"Designs"}</span>
                {"\n            "}
              </div>
              {"\n            "}
              <div className="pb-stat">
                {"\n              "}
                <strong>{"16"}</strong>
                {"\n              "}
                <span>{"Colors"}</span>
                {"\n            "}
              </div>
              {"\n            "}
              <div className="pb-stat">
                {"\n              "}
                <strong>{"100%"}</strong>
                {"\n              "}
                <span>{"Cotton"}</span>
                {"\n            "}
              </div>
              {"\n            "}
              <div className="pb-stat">
                {"\n              "}
                <strong>{"4.9★"}</strong>
                {"\n              "}
                <span>{"Rating"}</span>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n\n        "}
          </div>
          {"\n\n      "}
        </section>
        {"\n\n\n\n      "}
        <section className="promo-grid">
          {"\n        "}
          <article
            className="promo red-promo"
            style={{
              backgroundImage: "url('assets/Collection/new collection.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {"\n          "}
            <div className="promo-overlay"></div>
            {"\n          "}
            <div className="promo-content">
              {"\n            "}
              <p className="eyebrow">{"New Collection"}</p>
              {"\n            "}
              <h2>
                {"Bold Colors"}
                <br />
                {"Brighter Stories"}
              </h2>
              {"\n            "}
              <a href="#collectionGrid">
                {"Shop Now "}
                <span>{"→"}</span>
              </a>
              {"\n          "}
            </div>
            {"\n        "}
          </article>
          {"\n        "}
          <article
            className="promo minimal-promo"
            style={{
              backgroundImage: "url('assets/Collection/limited.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {"\n          "}
            <div className="promo-overlay promo-overlay-light"></div>
            {"\n          "}
            <div className="promo-content">
              {"\n            "}
              <p className="eyebrow">{"Limited Edition"}</p>
              {"\n            "}
              <h2>
                {"Minimal"}
                <br />
                {"But Meaningful"}
              </h2>
              {"\n            "}
              <a href="#collectionGrid">
                {"Explore Minimal "}
                <span>{"→"}</span>
              </a>
              {"\n          "}
            </div>
            {"\n        "}
          </article>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="collection-community">
          {"\n        "}
          <div className="community-script">
            {"Wear"}
            <br />
            {"Your"}
            <br />
            {"Story"}
          </div>
          {"\n        "}
          <div>
            {"\n          "}
            <h2>{"Join the 6G Community"}</h2>
            {"\n          "}
            <p>
              {"Get notified about new collections, exclusive offers and more."}
            </p>
            {"\n          "}
            <form>
              {"\n            "}
              <input type="email" placeholder="Enter your email address" />
              {"\n            "}
              <button type="submit">
                {"Subscribe "}
                <span>{"→"}</span>
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
          <h3>{"Shop"}</h3>
          {"\n        "}
          <a href="collections.html">{"All Collections"}</a>
          <a href="index.html#featured">{"New Arrivals"}</a>
          <a href="index.html#featured">{"Best Sellers"}</a>
          <a href="collections.html">{"Trending"}</a>
          <a href="collections.html">{"Limited Edition"}</a>
          {"\n      "}
        </div>
        {"\n      "}
        <div>
          {"\n        "}
          <h3>{"About"}</h3>
          {"\n        "}
          <a href="about.html">{"Our Story"}</a>
          <a href="about.html">{"Quality"}</a>
          <a href="about.html">{"Sustainability"}</a>
          <a href="#">{"Size Guide"}</a>
          <a href="#">{"Track Order"}</a>
          {"\n      "}
        </div>
        {"\n      "}
        <div>
          {"\n        "}
          <h3>{"Support"}</h3>
          {"\n        "}
          <a href="#">{"FAQ"}</a>
          <a href="#">{"Shipping Policy"}</a>
          <a href="#">{"Return Policy"}</a>
          <a href="contact.html">{"Contact Us"}</a>
          <a href="contact.html">{"Bulk Orders"}</a>
          {"\n      "}
        </div>
        {"\n      "}
        <div>
          {"\n        "}
          <h3>{"Follow Us"}</h3>
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
