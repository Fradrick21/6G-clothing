export default function TshirtsPage() {
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
      <main className="tshirt-page">
        {"\n      "}
        <section className="tshirt-hero">
          {"\n        "}
          <p className="tshirt-script">
            {"Good"}
            <br />
            {"Outfits"}
            <br />
            {"Brighter"}
            <br />
            {"Days"}
          </p>
          {"\n        "}
          <div className="tshirt-hero-copy">
            {"\n          "}
            <p className="eyebrow">{"T-Shirts"}</p>
            {"\n          "}
            <h1>
              {"Every Color"}
              <br />
              {"Tells "}
              <span>{"a Story"}</span>
            </h1>
            {"\n          "}
            <p>
              {"Minimal. Bold. Comfortable."}
              <br />
              {"T-Shirts for every mood, every you."}
            </p>
            {"\n          "}
            <div className="hero-actions">
              {"\n            "}
              <a href="collections.html">
                {"Shop Collection "}
                <span>{"→"}</span>
              </a>
              {"\n            "}
              <button type="button">{"Watch Lookbook"}</button>
              {"\n          "}
            </div>
            {"\n          "}
            <div className="hero-promise">
              {"\n            "}
              <span>
                <img src="assets/icons/premium-quality.svg" alt="" />
                {"Premium"}
                <br />
                {"Quality"}
              </span>
              {"\n            "}
              <span>
                <img src="assets/icons/comfortable-fit.svg" alt="" />
                {"All Day"}
                <br />
                {"Comfort"}
              </span>
              {"\n            "}
              <span>
                <img src="assets/icons/modern-designs.svg" alt="" />
                {"Trendy"}
                <br />
                {"Designs"}
              </span>
              {"\n            "}
              <span>
                <img src="assets/icons/sustainable.svg" alt="" />
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
        <section className="category-strip" aria-label="T-shirt categories">
          {"\n        "}
          <a className="active" href="#" data-strip-filter="All T-Shirts">
            <span className="cat-dot black"></span>
            {"All T-Shirts"}
          </a>
          {"\n        "}
          <a href="#" data-strip-filter="Oversized">
            <span className="cat-dot white"></span>
            {"Oversized"}
          </a>
          {"\n        "}
          <a href="#" data-strip-filter="Regular Fit">
            <span className="cat-dot beige"></span>
            {"Regular Fit"}
          </a>
          {"\n        "}
          <a href="#" data-strip-filter="Graphic">
            <span className="cat-dot purple"></span>
            {"Graphic"}
          </a>
          {"\n        "}
          <a href="#" data-strip-filter="Minimal">
            <span className="cat-dot pink"></span>
            {"Minimal"}
          </a>
          {"\n        "}
          <a href="#" data-strip-filter="Typography">
            <span className="cat-dot grey"></span>
            {"Typography"}
          </a>
          {"\n        "}
          <a href="#" data-strip-filter="Anime">
            <span className="cat-dot yellow"></span>
            {"Anime"}
          </a>
          {"\n        "}
          <a href="#" data-strip-filter="Solid Colors">
            <span className="cat-dot green"></span>
            {"Solid Colors"}
          </a>
          {"\n        "}
          <a href="#" data-strip-filter="New">
            <span className="cat-dot black"></span>
            {"New Arrivals"}
          </a>
          {"\n        "}
          <a href="#" data-strip-filter="Best Seller">
            <span className="cat-dot coral"></span>
            {"Best Sellers"}
          </a>
          {"\n      "}
        </section>
        {"\n\n      "}
        {"\n      "}
        <div className="filter-overlay" id="filterOverlay"></div>
        {"\n\n      "}
        <section className="shop-layout">
          {"\n        "}
          <aside className="filters" id="filtersDrawer">
            {"\n          "}
            <div className="filter-top">
              {"\n            "}
              <h2>{"Filters"}</h2>
              {"\n            "}
              <div className="filter-top-actions">
                {"\n              "}
                <button type="button" data-clear-filters="" disabled>
                  {"Clear All"}
                </button>
                {"\n              "}
                <button
                  type="button"
                  className="filter-close-btn"
                  id="filterCloseBtn"
                  aria-label="Close filters"
                >
                  {"✕"}
                </button>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n\n          "}
            {"\n          "}
            <div className="applied-filters" id="appliedFilters"></div>
            {"\n\n          "}
            <div className="filter-group" data-filter-group="category">
              {"\n            "}
              <button type="button" className="filter-group-toggle">
                {"Category"}
              </button>
              {"\n            "}
              <div className="filter-group-body">
                {"\n              "}
                <label>
                  <input
                    type="checkbox"
                    defaultValue="All T-Shirts"
                    defaultChecked
                  />
                  {"All T-Shirts"}
                </label>
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="Oversized" />
                  {"Oversized"}
                </label>
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="Regular Fit" />
                  {"Regular Fit"}
                </label>
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="Graphic" />
                  {"Graphic"}
                </label>
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="Minimal" />
                  {"Minimal"}
                </label>
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="Typography" />
                  {"Typography"}
                </label>
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="Anime" />
                  {"Anime"}
                </label>
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="Solid Colors" />
                  {"Solid Colors"}
                </label>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n          "}
            <div className="filter-group" data-filter-group="size">
              {"\n            "}
              <button type="button" className="filter-group-toggle">
                {"Size"}
              </button>
              {"\n            "}
              <div className="filter-group-body">
                {"\n              "}
                <div className="size-grid">
                  <button type="button" data-size="S">
                    {"S"}
                  </button>
                  <button type="button" data-size="M">
                    {"M"}
                  </button>
                  <button type="button" data-size="L">
                    {"L"}
                  </button>
                  <button type="button" data-size="XL">
                    {"XL"}
                  </button>
                  <button type="button" data-size="XXL">
                    {"XXL"}
                  </button>
                </div>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n          "}
            <div className="filter-group" data-filter-group="color">
              {"\n            "}
              <button type="button" className="filter-group-toggle">
                {"Color"}
              </button>
              {"\n            "}
              <div className="filter-group-body">
                {"\n              "}
                <div className="mini-colors">
                  {"\n                "}
                  <button
                    type="button"
                    data-color="Black"
                    style={{ background: "#000" }}
                    aria-label="Black"
                  ></button>
                  {"\n                "}
                  <button
                    type="button"
                    data-color="White"
                    style={{ background: "#fff" }}
                    aria-label="White"
                  ></button>
                  {"\n                "}
                  <button
                    type="button"
                    data-color="Grey"
                    style={{ background: "#999" }}
                    aria-label="Grey"
                  ></button>
                  {"\n                "}
                  <button
                    type="button"
                    data-color="Red"
                    style={{ background: "#ed101f" }}
                    aria-label="Red"
                  ></button>
                  {"\n                "}
                  <button
                    type="button"
                    data-color="Pink"
                    style={{ background: "#ff85a8" }}
                    aria-label="Pink"
                  ></button>
                  {"\n                "}
                  <button
                    type="button"
                    data-color="Orange"
                    style={{ background: "#ff7132" }}
                    aria-label="Orange"
                  ></button>
                  {"\n                "}
                  <button
                    type="button"
                    data-color="Yellow"
                    style={{ background: "#ffc20c" }}
                    aria-label="Yellow"
                  ></button>
                  {"\n                "}
                  <button
                    type="button"
                    data-color="Green"
                    style={{ background: "#098247" }}
                    aria-label="Green"
                  ></button>
                  {"\n                "}
                  <button
                    type="button"
                    data-color="Blue"
                    style={{ background: "#126ee7" }}
                    aria-label="Blue"
                  ></button>
                  {"\n                "}
                  <button
                    type="button"
                    data-color="Purple"
                    style={{ background: "#7837d7" }}
                    aria-label="Purple"
                  ></button>
                  {"\n                "}
                  <button
                    type="button"
                    data-color="Brown"
                    style={{ background: "#8d634b" }}
                    aria-label="Brown"
                  ></button>
                  {"\n                "}
                  <button type="button" data-color="Beige" aria-label="Beige">
                    {"+"}
                  </button>
                  {"\n              "}
                </div>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n          "}
            <div className="filter-group" data-filter-group="price">
              {"\n            "}
              <button type="button" className="filter-group-toggle">
                {"Price Range"}
              </button>
              {"\n            "}
              <div className="filter-group-body">
                {"\n              "}
                <input
                  className="price-range"
                  type="range"
                  min="299"
                  max="999"
                  step="50"
                  defaultValue="999"
                  data-price-range=""
                />
                {"\n              "}
                <p data-price-label="">{"Rs299 – Rs999"}</p>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n          "}
            <div className="filter-group" data-filter-group="fabric">
              {"\n            "}
              <button type="button" className="filter-group-toggle">
                {"Fabric"}
              </button>
              {"\n            "}
              <div className="filter-group-body">
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="100% Cotton" />
                  {"100% Cotton"}
                </label>
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="Cotton Blend" />
                  {"Cotton Blend"}
                </label>
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="Premium Cotton" />
                  {"Premium Cotton"}
                </label>
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="Organic Cotton" />
                  {"Organic Cotton"}
                </label>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n          "}
            <div className="filter-group" data-filter-group="print">
              {"\n            "}
              <button type="button" className="filter-group-toggle">
                {"Print Type"}
              </button>
              {"\n            "}
              <div className="filter-group-body">
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="Graphic Print" />
                  {"Graphic Print"}
                </label>
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="Typography" />
                  {"Typography"}
                </label>
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="Minimal" />
                  {"Minimal"}
                </label>
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="Solid" />
                  {"Solid"}
                </label>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n          "}
            <div className="filter-group" data-filter-group="availability">
              {"\n            "}
              <button type="button" className="filter-group-toggle">
                {"Availability"}
              </button>
              {"\n            "}
              <div className="filter-group-body">
                {"\n              "}
                <label>
                  <input type="checkbox" defaultValue="In Stock" />
                  {"In Stock Only"}
                </label>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n        "}
          </aside>
          {"\n\n        "}
          <section className="product-area">
            {"\n          "}
            <article className="color-banner">
              {"\n            "}
              <div>
                <h2>
                  {"Colors"}
                  <br />
                  {"For Every You"}
                </h2>
                <p>{"Same Comfort. More Choices."}</p>
                <a href="collections.html">
                  {"Explore Colors "}
                  <span>{"→"}</span>
                </a>
              </div>
              {"\n          "}
            </article>
            {"\n\n          "}
            <div className="product-bar">
              {"\n            "}
              <p id="productCount">{"Showing 1-12 of 120 products"}</p>
              {"\n            "}
              <div className="product-bar-right">
                {"\n              "}
                {"\n              "}
                <button
                  type="button"
                  className="filter-toggle-btn"
                  id="filterToggleBtn"
                  aria-label="Open filters"
                >
                  {"\n                "}
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M3 5h14M6 10h8M9 15h2"></path>
                  </svg>
                  {"\n                Filters\n                "}
                  <span className="filter-badge" id="filterBadge"></span>
                  {"\n              "}
                </button>
                {"\n              "}
                <label>
                  {"Sort by:"}
                  <select>
                    {"\n                "}
                    <option>{"Featured"}</option>
                    {"\n                "}
                    <option>{"Newest"}</option>
                    {"\n                "}
                    <option>{"Best Rated"}</option>
                    {"\n                "}
                    <option>{"Price: Low to High"}</option>
                    {"\n                "}
                    <option>{"Price: High to Low"}</option>
                    {"\n              "}
                  </select>
                </label>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n\n          "}
            <div className="tshirt-grid">
              {"\n            "}
              <article className="product-card" data-product-url="product.html">
                <span className="badge red">{"Best Seller"}</span>
                <button className="wish">{"♡"}</button>
                <h3>{"Classic Logo Tee"}</h3>
                <p>
                  <b>{"Rs699"}</b>
                  <span>{"★ 4.8 (124)"}</span>
                </p>
                <div className="swatch-line">
                  <i style={{ background: "#000" }}></i>
                  <i style={{ background: "#333" }}></i>
                  <i style={{ background: "#999" }}></i>
                  <i style={{ background: "#eee" }}></i>
                  <em>{"+2"}</em>
                </div>
                <button className="add-cart">
                  <img src="assets/icons/shopping-bag.svg" alt="" />
                  <span>{"Add to Cart"}</span>
                </button>
              </article>
              {"\n            "}
              <article className="product-card" data-product-url="product.html">
                <span className="badge">{"New"}</span>
                <button className="wish">{"♡"}</button>
                <h3>
                  <a href="product.html">{"Urban Graphic Tee"}</a>
                </h3>
                <p>
                  <b>{"Rs799"}</b>
                  <span>{"★ 4.7 (86)"}</span>
                </p>
                <div className="swatch-line">
                  <i style={{ background: "#000" }}></i>
                  <i style={{ background: "#fff" }}></i>
                  <i style={{ background: "#e10f20" }}></i>
                  <i style={{ background: "#dfe4e7" }}></i>
                  <em>{"+6"}</em>
                </div>
                <button className="add-cart">
                  <img src="assets/icons/shopping-bag.svg" alt="" />
                  <span>{"Add to Cart"}</span>
                </button>
              </article>
              {"\n            "}
              <article className="product-card" data-product-url="product.html">
                <button className="wish">{"♡"}</button>
                <h3>{"Minimal Text Tee"}</h3>
                <p>
                  <b>{"Rs749"}</b>
                  <span>{"★ 4.9 (210)"}</span>
                </p>
                <div className="swatch-line">
                  <i style={{ background: "#000" }}></i>
                  <i style={{ background: "#555" }}></i>
                  <i style={{ background: "#e4d2b8" }}></i>
                  <i style={{ background: "#fff" }}></i>
                </div>
                <button className="add-cart">
                  <img src="assets/icons/shopping-bag.svg" alt="" />
                  <span>{"Add to Cart"}</span>
                </button>
              </article>
              {"\n            "}
              <article className="product-card" data-product-url="product.html">
                <button className="wish">{"♡"}</button>
                <h3>{"Good Vibes Tee"}</h3>
                <p>
                  <b>{"Rs699"}</b>
                  <span>{"★ 4.8 (68)"}</span>
                </p>
                <div className="swatch-line">
                  <i style={{ background: "#000" }}></i>
                  <i style={{ background: "#ed101f" }}></i>
                  <i style={{ background: "#ddd" }}></i>
                  <em>{"+6"}</em>
                </div>
                <button className="add-cart">
                  <img src="assets/icons/shopping-bag.svg" alt="" />
                  <span>{"Add to Cart"}</span>
                </button>
              </article>
              {"\n            "}
              <article className="product-card" data-product-url="product.html">
                <button className="wish">{"♡"}</button>
                <h3>{"Nature Graphic Tee"}</h3>
                <p>
                  <b>{"Rs799"}</b>
                  <span>{"★ 4.7 (56)"}</span>
                </p>
                <div className="swatch-line">
                  <i style={{ background: "#062" }}></i>
                  <i style={{ background: "#164" }}></i>
                  <i style={{ background: "#346" }}></i>
                  <i style={{ background: "#eee" }}></i>
                  <em>{"+5"}</em>
                </div>
                <button className="add-cart">
                  <img src="assets/icons/shopping-bag.svg" alt="" />
                  <span>{"Add to Cart"}</span>
                </button>
              </article>
              {"\n            "}
              <article className="product-card" data-product-url="product.html">
                <button className="wish">{"♡"}</button>
                <h3>{"Typography Tee"}</h3>
                <p>
                  <b>{"Rs749"}</b>
                  <span>{"★ 4.8 (143)"}</span>
                </p>
                <div className="swatch-line">
                  <i style={{ background: "#06101c" }}></i>
                  <i style={{ background: "#8753d9" }}></i>
                  <i style={{ background: "#d9a8ef" }}></i>
                  <i style={{ background: "#ffc20c" }}></i>
                  <em>{"+6"}</em>
                </div>
                <button className="add-cart">
                  <img src="assets/icons/shopping-bag.svg" alt="" />
                  <span>{"Add to Cart"}</span>
                </button>
              </article>
              {"\n            "}
              <article className="product-card" data-product-url="product.html">
                <button className="wish">{"♡"}</button>
                <h3>{"Anime Street Tee"}</h3>
                <p>
                  <b>{"Rs799"}</b>
                  <span>{"★ 4.9 (92)"}</span>
                </p>
                <div className="swatch-line">
                  <i style={{ background: "#000" }}></i>
                  <i style={{ background: "#ed101f" }}></i>
                  <i style={{ background: "#ffc20c" }}></i>
                  <i style={{ background: "#eee" }}></i>
                </div>
                <button className="add-cart">
                  <img src="assets/icons/shopping-bag.svg" alt="" />
                  <span>{"Add to Cart"}</span>
                </button>
              </article>
              {"\n            "}
              <article className="product-card" data-product-url="product.html">
                <button className="wish">{"♡"}</button>
                <h3>{"Oversized Basic Tee"}</h3>
                <p>
                  <b>{"Rs599"}</b>
                  <span>{"★ 4.6 (88)"}</span>
                </p>
                <div className="swatch-line">
                  <i style={{ background: "#ffc20c" }}></i>
                  <i style={{ background: "#ff7132" }}></i>
                  <i style={{ background: "#aaa" }}></i>
                  <em>{"+8"}</em>
                </div>
                <button className="add-cart">
                  <img src="assets/icons/shopping-bag.svg" alt="" />
                  <span>{"Add to Cart"}</span>
                </button>
              </article>
              {"\n          "}
            </div>
            {"\n\n          "}
            <div className="pagination" aria-label="Product pagination"></div>
            {"\n\n          "}
            <div className="lower-promos">
              {"\n            "}
              <article
                className="lp-card lp-card-cotton"
                style={{ backgroundImage: "url('assets/T.shirts/card-1.png')" }}
              >
                {"\n              "}
                <div className="lp-overlay lp-overlay-cotton"></div>
                {"\n              "}
                <div className="lp-content">
                  {"\n                "}
                  <span className="lp-tag">{"100% Pure Cotton"}</span>
                  {"\n                "}
                  <h2>
                    {"Premium"}
                    <br />
                    {"Cotton Fabric"}
                  </h2>
                  {"\n                "}
                  <p>
                    {"Soft. Breathable."}
                    <br />
                    {"Built for Everyday."}
                  </p>
                  {"\n                "}
                  <a href="collections.html" className="lp-btn">
                    {"Learn More "}
                    <span>{"→"}</span>
                  </a>
                  {"\n                "}
                  <div className="lp-badges">
                    {"\n                  "}
                    <span>{"Breathable"}</span>
                    {"\n                  "}
                    <span>{"Soft Feel"}</span>
                    {"\n                  "}
                    <span>{"Long Lasting"}</span>
                    {"\n                "}
                  </div>
                  {"\n              "}
                </div>
                {"\n            "}
              </article>
              {"\n            "}
              <article
                className="lp-card lp-card-lifestyle lifestyle"
                style={{ backgroundImage: "url('assets/T.shirts/card-2.png')" }}
              >
                {"\n              "}
                <div className="lp-overlay lp-overlay-lifestyle"></div>
                {"\n              "}
                <div className="lp-content">
                  {"\n                "}
                  <span className="lp-tag">{"Signature Series"}</span>
                  {"\n                "}
                  <h2>
                    {"Not Just"}
                    <br />
                    {"T-Shirts."}
                    <br />
                    {"A Lifestyle."}
                  </h2>
                  {"\n                "}
                  <p>
                    {"Minimal silhouettes crafted for everyday confidence."}
                  </p>
                  {"\n                "}
                  <a href="collections.html" className="lp-btn">
                    {"Explore Now "}
                    <span>{"→"}</span>
                  </a>
                  {"\n              "}
                </div>
                {"\n            "}
              </article>
              {"\n          "}
            </div>
            {"\n        "}
          </section>
          {"\n      "}
        </section>
        {"\n\n\n      "}
        <section className="service-strip">
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
          <a href="tshirts.html">{"New Arrivals"}</a>
          <a href="tshirts.html">{"Best Sellers"}</a>
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
      {"\n\n    \n    \n\n  "}
    </>
  );
}
