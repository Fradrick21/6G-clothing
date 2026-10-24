export default function AccountPage() {
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
            className="icon-btn user-icon active-account"
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
      <main className="account-page">
        {"\n      "}
        <section className="account-hero">
          {"\n        "}
          <div className="account-hero-copy">
            {"\n          "}
            <p className="eyebrow">{"My Account"}</p>
            {"\n          "}
            <h1>
              {"Hey There,"}
              <br />
              <span>{"Welcome Back!"}</span>
            </h1>
            {"\n          "}
            <p>
              {"Manage your orders, addresses, wishlist and more in one place."}
            </p>
            {"\n        "}
          </div>
          {"\n        "}
          <p className="hero-sign">
            {"Wear"}
            <br />
            {"Your"}
            <br />
            {"Story"}
          </p>
          {"\n      "}
        </section>
        {"\n\n      "}
        <section className="account-shell">
          {"\n        "}
          <aside className="profile-panel">
            {"\n          "}
            <div className="profile-head">
              {"\n            "}
              <div className="profile-avatar" data-account-avatar="">
                {"AC"}
              </div>
              {"\n            "}
              <div className="profile-details">
                {"\n              "}
                <h2 data-account-name="">{"Account Holder"}</h2>
                {"\n              "}
                <p data-account-email="">{"Add your email"}</p>
                {"\n              "}
                <button
                  type="button"
                  className="btn-edit-profile"
                  data-edit-profile-btn=""
                >
                  {"\n                "}
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                  "}
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    {"\n                  "}
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    {"\n                "}
                  </svg>
                  {"\n                "}
                  <span>{"Edit Profile"}</span>
                  {"\n              "}
                </button>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n\n          "}
            <nav className="account-menu" aria-label="Account sections">
              {"\n            "}
              <a className="active" href="account.html">
                <span>{"👤"}</span>
                {"My Account"}
              </a>
              {"\n            "}
              <a href="#orders">
                <span>{"▣"}</span>
                {"My Orders"}
              </a>
              {"\n            "}
              <a href="wishlist.html">
                <span>{"♡"}</span>
                {"My Wishlist"}
              </a>
              {"\n            "}
              <a href="#address" data-trigger-manage-addresses="">
                <span>{"⌖"}</span>
                {"My Addresses"}
              </a>
              {"\n            "}
              <a href="#payments">
                <span>{"▭"}</span>
                {"Payment Methods"}
              </a>
              {"\n            "}
              <a href="#reviews">
                <span>{"☆"}</span>
                {"My Reviews"}
              </a>
              {"\n            "}
              <a href="#notifications">
                <span>{"♢"}</span>
                {"Notifications"}
              </a>
              {"\n            "}
              <a href="#settings">
                <span>{"⚙"}</span>
                {"Settings"}
              </a>
              {"\n            "}
              <div className="logout-wrapper">
                {"\n              "}
                <button type="button" className="logout-btn" data-logout-btn="">
                  {"\n                "}
                  <span className="logout-icon-wrap">
                    {"\n                  "}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {"\n                    "}
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      {"\n                    "}
                      <polyline points="16 17 21 12 16 7"></polyline>
                      {"\n                    "}
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                      {"\n                  "}
                    </svg>
                    {"\n                "}
                  </span>
                  {"\n                "}
                  <span className="logout-label">{"Log Out"}</span>
                  {"\n              "}
                </button>
                {"\n            "}
              </div>
              {"\n          "}
            </nav>
            {"\n        "}
          </aside>
          {"\n\n        "}
          <section className="account-content">
            {"\n          "}
            <div className="stat-grid" aria-label="Account summary">
              {"\n            "}
              <article className="tone-red">
                <span>{"▱"}</span>
                <b data-stat="orders">{"0"}</b>
                <p>{"Total Orders"}</p>
              </article>
              {"\n            "}
              <article className="tone-blue">
                <span>{"♡"}</span>
                <b data-stat="wishlist">{"0"}</b>
                <p>{"Saved Items"}</p>
              </article>
              {"\n            "}
              <article className="tone-green">
                <span>{"⌖"}</span>
                <b data-stat="addresses">{"0"}</b>
                <p>{"Addresses"}</p>
              </article>
              {"\n            "}
              <article className="tone-purple">
                <span>{"⌁"}</span>
                <b data-stat="offers">{"0"}</b>
                <p>{"Active Offers"}</p>
              </article>
              {"\n          "}
            </div>
            {"\n\n          "}
            <div className="account-grid">
              {"\n            "}
              <section className="orders-card" id="orders">
                {"\n              "}
                <div className="card-head">
                  {"\n                "}
                  <h2>{"Recent Orders"}</h2>
                  {"\n                "}
                  <a href="#orders">{"View All Orders →"}</a>
                  {"\n              "}
                </div>
                {"\n              "}
                <div className="order-list">
                  {"\n                "}
                  <div className="empty-state">
                    {
                      "No orders yet. Your completed checkouts will appear here."
                    }
                  </div>
                  {"\n              "}
                </div>
                {"\n            "}
              </section>
              {"\n\n            "}
              <aside className="side-stack">
                {"\n              "}
                <section className="quick-card">
                  {"\n                "}
                  <h2>{"Quick Actions"}</h2>
                  {"\n                "}
                  <a href="#orders">
                    <span>{"▱"}</span>
                    {"Track Your Order "}
                    <b>{"›"}</b>
                  </a>
                  {"\n                "}
                  <a href="tshirts.html">
                    <span>{"▢"}</span>
                    {"Shop New Arrivals "}
                    <b>{"›"}</b>
                  </a>
                  {"\n                "}
                  <a href="wishlist.html">
                    <span>{"♡"}</span>
                    {"View Wishlist "}
                    <b>{"›"}</b>
                  </a>
                  {"\n                "}
                  <a href="#address" data-trigger-manage-addresses="">
                    <span>{"⌖"}</span>
                    {"Manage Addresses "}
                    <b>{"›"}</b>
                  </a>
                  {"\n                "}
                  <a href="#payments">
                    <span>{"▭"}</span>
                    {"Payment Methods "}
                    <b>{"›"}</b>
                  </a>
                  {"\n              "}
                </section>
                {"\n\n              "}
                <section className="address-card" id="address">
                  {"\n                "}
                  <div className="card-head">
                    {"\n                  "}
                    <h2>{"Default Address"}</h2>
                    {"\n                  "}
                    <div
                      className="address-header-actions"
                      data-address-header-actions=""
                      style={{ display: "none" }}
                    >
                      {"\n                    "}
                      <button
                        type="button"
                        className="address-action-btn edit-btn"
                        data-edit-default-address=""
                      >
                        {"Edit"}
                      </button>
                      {"\n                    "}
                      <button
                        type="button"
                        className="address-action-btn delete-btn"
                        data-delete-default-address=""
                        title="Delete default address"
                      >
                        {"\n                      "}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {"\n                        "}
                          <polyline points="3 6 5 6 21 6"></polyline>
                          {"\n                        "}
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          {"\n                      "}
                        </svg>
                        {"\n                    "}
                      </button>
                      {"\n                  "}
                    </div>
                    {"\n                "}
                  </div>
                  {"\n                "}
                  <div data-address-content="" className="address-content-wrap">
                    {"\n                  "}
                    <p>{"No default address saved."}</p>
                    {"\n                "}
                  </div>
                  {"\n                "}
                  <div className="address-btn-stack">
                    {"\n                  "}
                    <button
                      type="button"
                      className="add-address"
                      data-add-address-btn=""
                    >
                      {"\n                    "}
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {"\n                      "}
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        {"\n                      "}
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        {"\n                    "}
                      </svg>
                      {"\n                    "}
                      <span>{"Add New Address"}</span>
                      {"\n                  "}
                    </button>
                    {"\n                  "}
                    <button
                      type="button"
                      className="view-all-addresses-btn"
                      data-view-all-addresses=""
                      style={{ display: "none" }}
                    >
                      {"\n                    "}
                      <span>
                        {"Manage All Addresses ("}
                        <b data-address-count="">{"0"}</b>
                        {")"}
                      </span>
                      {"\n                    "}
                      <span>{"→"}</span>
                      {"\n                  "}
                    </button>
                    {"\n                "}
                  </div>
                  {"\n              "}
                </section>
                {"\n            "}
              </aside>
              {"\n          "}
            </div>
            {"\n        "}
          </section>
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
      {"\n\n    "}
      {"\n    "}
      <div
        className="account-modal-overlay"
        id="profileModal"
        aria-hidden="true"
      >
        {"\n      "}
        <div
          className="account-modal"
          role="dialog"
          aria-labelledby="profileModalTitle"
        >
          {"\n        "}
          <div className="modal-header">
            {"\n          "}
            <div className="modal-title-group">
              {"\n            "}
              <div className="modal-badge-icon tone-blue">
                {"\n              "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {"\n                "}
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  {"\n                "}
                  <circle cx="12" cy="7" r="4"></circle>
                  {"\n              "}
                </svg>
                {"\n            "}
              </div>
              {"\n            "}
              <div>
                {"\n              "}
                <h3 id="profileModalTitle">{"Edit Profile"}</h3>
                {"\n              "}
                <p>{"Update your personal information"}</p>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n          "}
            <button
              type="button"
              className="modal-close-btn"
              data-close-modal=""
              aria-label="Close modal"
            >
              {"×"}
            </button>
            {"\n        "}
          </div>
          {"\n        "}
          <form id="profileForm" className="modal-form">
            {"\n          "}
            <div className="form-group">
              {"\n            "}
              <label htmlFor="profileNameInput">{"Full Name *"}</label>
              {"\n            "}
              <input
                type="text"
                id="profileNameInput"
                name="name"
                required
                placeholder="Enter your full name"
                autoComplete="name"
              />
              {"\n          "}
            </div>
            {"\n          "}
            <div className="form-group">
              {"\n            "}
              <label htmlFor="profileEmailInput">{"Email Address *"}</label>
              {"\n            "}
              <input
                type="email"
                id="profileEmailInput"
                name="email"
                required
                placeholder="name@example.com"
                autoComplete="email"
              />
              {"\n          "}
            </div>
            {"\n          "}
            <div className="form-group">
              {"\n            "}
              <label htmlFor="profilePhoneInput">{"Phone Number"}</label>
              {"\n            "}
              <input
                type="tel"
                id="profilePhoneInput"
                name="phone"
                placeholder="10-digit mobile number"
                maxLength="10"
                autoComplete="tel"
              />
              {"\n          "}
            </div>
            {"\n          "}
            <div className="modal-footer">
              {"\n            "}
              <button
                type="button"
                className="modal-btn btn-secondary"
                data-close-modal=""
              >
                {"Cancel"}
              </button>
              {"\n            "}
              <button type="submit" className="modal-btn btn-primary">
                {"Save Changes"}
              </button>
              {"\n          "}
            </div>
            {"\n        "}
          </form>
          {"\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n\n    "}
      {"\n    "}
      <div
        className="account-modal-overlay"
        id="addressModal"
        aria-hidden="true"
      >
        {"\n      "}
        <div
          className="account-modal modal-wide"
          role="dialog"
          aria-labelledby="addressModalTitle"
        >
          {"\n        "}
          <div className="modal-header">
            {"\n          "}
            <div className="modal-title-group">
              {"\n            "}
              <div className="modal-badge-icon tone-green">
                {"\n              "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {"\n                "}
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  {"\n                "}
                  <circle cx="12" cy="10" r="3"></circle>
                  {"\n              "}
                </svg>
                {"\n            "}
              </div>
              {"\n            "}
              <div>
                {"\n              "}
                <h3 id="addressModalTitle">{"Add New Address"}</h3>
                {"\n              "}
                <p>{"Enter delivery destination details"}</p>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n          "}
            <button
              type="button"
              className="modal-close-btn"
              data-close-modal=""
              aria-label="Close modal"
            >
              {"×"}
            </button>
            {"\n        "}
          </div>
          {"\n        "}
          <form id="addressForm" className="modal-form">
            {"\n          "}
            <input
              type="hidden"
              id="addressIdInput"
              name="id"
              defaultValue=""
            />
            {"\n          "}
            <div className="form-row-2">
              {"\n            "}
              <div className="form-group">
                {"\n              "}
                <label htmlFor="addressNameInput">{"Full Name *"}</label>
                {"\n              "}
                <input
                  type="text"
                  id="addressNameInput"
                  name="name"
                  required
                  placeholder="Recipient's Name"
                />
                {"\n            "}
              </div>
              {"\n            "}
              <div className="form-group">
                {"\n              "}
                <label htmlFor="addressPhoneInput">{"Mobile Number *"}</label>
                {"\n              "}
                <input
                  type="tel"
                  id="addressPhoneInput"
                  name="phone"
                  required
                  placeholder="10-digit mobile number"
                  maxLength="10"
                />
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n          "}
            <div className="form-group">
              {"\n            "}
              <label htmlFor="addressLine1Input">
                {"House / Flat / Building / Street *"}
              </label>
              {"\n            "}
              <input
                type="text"
                id="addressLine1Input"
                name="line1"
                required
                placeholder="e.g. Flat 3A, Galaxy Heights, MG Road"
              />
              {"\n          "}
            </div>
            {"\n          "}
            <div className="form-group">
              {"\n            "}
              <label htmlFor="addressLine2Input">
                {"Landmark / Area (Optional)"}
              </label>
              {"\n            "}
              <input
                type="text"
                id="addressLine2Input"
                name="line2"
                placeholder="e.g. Near Metro Station / Central Mall"
              />
              {"\n          "}
            </div>
            {"\n          "}
            <div className="form-row-3">
              {"\n            "}
              <div className="form-group">
                {"\n              "}
                <label htmlFor="addressCityInput">{"City / Town *"}</label>
                {"\n              "}
                <input
                  type="text"
                  id="addressCityInput"
                  name="city"
                  required
                  placeholder="e.g. Chennai"
                />
                {"\n            "}
              </div>
              {"\n            "}
              <div className="form-group">
                {"\n              "}
                <label htmlFor="addressStateInput">{"State *"}</label>
                {"\n              "}
                <select id="addressStateInput" name="state" required>
                  {"\n                "}
                  <option value="">{"Select State"}</option>
                  {"\n                "}
                  <option value="Tamil Nadu">{"Tamil Nadu"}</option>
                  {"\n                "}
                  <option value="Karnataka">{"Karnataka"}</option>
                  {"\n                "}
                  <option value="Maharashtra">{"Maharashtra"}</option>
                  {"\n                "}
                  <option value="Delhi">{"Delhi"}</option>
                  {"\n                "}
                  <option value="Kerala">{"Kerala"}</option>
                  {"\n                "}
                  <option value="Telangana">{"Telangana"}</option>
                  {"\n                "}
                  <option value="Andhra Pradesh">{"Andhra Pradesh"}</option>
                  {"\n                "}
                  <option value="Gujarat">{"Gujarat"}</option>
                  {"\n                "}
                  <option value="West Bengal">{"West Bengal"}</option>
                  {"\n                "}
                  <option value="Rajasthan">{"Rajasthan"}</option>
                  {"\n                "}
                  <option value="Uttar Pradesh">{"Uttar Pradesh"}</option>
                  {"\n                "}
                  <option value="Punjab">{"Punjab"}</option>
                  {"\n                "}
                  <option value="Haryana">{"Haryana"}</option>
                  {"\n                "}
                  <option value="Other">{"Other"}</option>
                  {"\n              "}
                </select>
                {"\n            "}
              </div>
              {"\n            "}
              <div className="form-group">
                {"\n              "}
                <label htmlFor="addressPincodeInput">{"Pincode *"}</label>
                {"\n              "}
                <input
                  type="text"
                  id="addressPincodeInput"
                  name="pincode"
                  required
                  placeholder="6 digits"
                  maxLength="6"
                />
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n          "}
            <div className="form-group">
              {"\n            "}
              <label>{"Address Type"}</label>
              {"\n            "}
              <div className="type-pill-group">
                {"\n              "}
                <label className="type-pill">
                  <input
                    type="radio"
                    name="type"
                    defaultValue="Home"
                    defaultChecked
                  />
                  <span>{"🏠 Home"}</span>
                </label>
                {"\n              "}
                <label className="type-pill">
                  <input type="radio" name="type" defaultValue="Work" />
                  <span>{"💼 Work"}</span>
                </label>
                {"\n              "}
                <label className="type-pill">
                  <input type="radio" name="type" defaultValue="Other" />
                  <span>{"📍 Other"}</span>
                </label>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n          "}
            <div className="form-group-checkbox">
              {"\n            "}
              <label>
                {"\n              "}
                <input
                  type="checkbox"
                  id="addressDefaultCheck"
                  name="isDefault"
                />
                {"\n              "}
                <span>{"Make this my default delivery address"}</span>
                {"\n            "}
              </label>
              {"\n          "}
            </div>
            {"\n          "}
            <div className="modal-footer">
              {"\n            "}
              <button
                type="button"
                className="modal-btn btn-secondary"
                data-close-modal=""
              >
                {"Cancel"}
              </button>
              {"\n            "}
              <button type="submit" className="modal-btn btn-primary">
                {"Save Address"}
              </button>
              {"\n          "}
            </div>
            {"\n        "}
          </form>
          {"\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n\n    "}
      {"\n    "}
      <div
        className="account-modal-overlay"
        id="allAddressesModal"
        aria-hidden="true"
      >
        {"\n      "}
        <div
          className="account-modal modal-wide"
          role="dialog"
          aria-labelledby="allAddressesTitle"
        >
          {"\n        "}
          <div className="modal-header">
            {"\n          "}
            <div className="modal-title-group">
              {"\n            "}
              <div className="modal-badge-icon tone-green">
                {"\n              "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {"\n                "}
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  {"\n                "}
                  <circle cx="12" cy="10" r="3"></circle>
                  {"\n              "}
                </svg>
                {"\n            "}
              </div>
              {"\n            "}
              <div>
                {"\n              "}
                <h3 id="allAddressesTitle">{"Saved Addresses"}</h3>
                {"\n              "}
                <p>{"Manage and select your delivery locations"}</p>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n          "}
            <button
              type="button"
              className="modal-close-btn"
              data-close-modal=""
              aria-label="Close modal"
            >
              {"×"}
            </button>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="all-addresses-body">
            {"\n          "}
            <div
              className="address-list-container"
              data-all-addresses-list=""
            ></div>
            {"\n          "}
            <div className="modal-footer-sticky">
              {"\n            "}
              <button
                type="button"
                className="modal-btn btn-primary add-from-all-btn"
                data-add-address-from-all=""
              >
                {"\n              "}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {"\n                "}
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  {"\n                "}
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  {"\n              "}
                </svg>
                {"\n              "}
                <span>{"Add Another Address"}</span>
                {"\n            "}
              </button>
              {"\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n\n    "}
      {"\n    "}
      <div
        className="account-modal-overlay"
        id="logoutModal"
        aria-hidden="true"
      >
        {"\n      "}
        <div
          className="account-modal modal-sm"
          role="dialog"
          aria-labelledby="logoutModalTitle"
        >
          {"\n        "}
          <div className="modal-header-centered">
            {"\n          "}
            <div className="modal-icon-glow">
              {"\n            "}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e31a27"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {"\n              "}
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                {"\n              "}
                <polyline points="16 17 21 12 16 7"></polyline>
                {"\n              "}
                <line x1="21" y1="12" x2="9" y2="12"></line>
                {"\n            "}
              </svg>
              {"\n          "}
            </div>
            {"\n          "}
            <h3 id="logoutModalTitle">{"Log Out of 6G?"}</h3>
            {"\n          "}
            <p>
              {
                "Are you sure you want to end your current session? You can sign back in anytime."
              }
            </p>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="modal-footer modal-footer-split">
            {"\n          "}
            <button
              type="button"
              className="modal-btn btn-secondary"
              data-close-modal=""
            >
              {"Stay Logged In"}
            </button>
            {"\n          "}
            <button
              type="button"
              className="modal-btn btn-danger"
              id="confirmLogoutBtn"
            >
              {"Yes, Log Out"}
            </button>
            {"\n        "}
          </div>
          {"\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n\n    \n  "}
    </>
  );
}
