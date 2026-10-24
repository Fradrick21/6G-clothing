export default function LoginPage() {
  return (
    <>
      {"\n\n    "}
      {"\n\n    "}
      <header className="site-header">
        {"\n\n      "}
        <a className="brand" href="index.html">
          {"\n\n        "}
          <span className="brand-mark">
            {"\n          "}
            <img src="assets/logo.png" alt="6G Clothing logo" />
            {"\n        "}
          </span>
          {"\n\n        "}
          <span className="brand-copy">
            {"\n          "}
            <strong>{"6G CLOTHING"}</strong>
            {"\n          "}
            <small>{"WEAR YOUR STORY"}</small>
            {"\n        "}
          </span>
          {"\n\n      "}
        </a>
        {"\n\n\n      "}
        <nav className="main-nav" aria-label="Primary navigation">
          {"\n\n        "}
          <a href="index.html">{"Home"}</a>
          {"\n        "}
          <a href="tshirts.html">{"T-Shirts"}</a>
          {"\n        "}
          <a href="collections.html">{"Collections"}</a>
          {"\n        "}
          <a href="about.html">{"About"}</a>
          {"\n        "}
          <a href="contact.html">{"Contact"}</a>
          {"\n\n      "}
        </nav>
        {"\n\n\n      "}
        <div className="header-actions">
          {"\n\n        "}
          <label className="search-box">
            {"\n\n          "}
            <input type="search" placeholder="Search for T-shirts..." />
            {"\n\n          "}
            <img src="assets/icons/search.svg" alt="Search" />
            {"\n\n        "}
          </label>
          {"\n\n\n        "}
          <a
            className="icon-btn user-icon active-login"
            href="login.html"
            aria-label="Account"
          >
            {"\n          "}
            <img src="assets/icons/user.svg" alt="Profile" />
            {"\n        "}
          </a>
          {"\n\n\n        "}
          <a
            className="icon-btn wishlist-icon"
            href="wishlist.html"
            aria-label="Wishlist"
          >
            {"\n          "}
            <img src="assets/icons/heart.svg" alt="Wishlist" />
            {"\n        "}
          </a>
          {"\n\n\n        "}
          <a className="cart-btn" href="cart.html" aria-label="Cart">
            {"\n\n          "}
            <img src="assets/icons/shopping-bag.svg" alt="Cart" />
            {"\n\n          "}
            <b>{"0"}</b>
            {"\n\n        "}
          </a>
          {"\n\n      "}
        </div>
        {"\n\n\n      "}
        <button className="menu-btn" id="menuBtn" aria-label="Open menu">
          {"\n        Menu\n      "}
        </button>
        {"\n\n    "}
      </header>
      {"\n\n\n    "}
      {"\n\n    "}
      <main className="login-page">
        {"\n\n      "}
        <section className="auth-layout" aria-label="Account access">
          {"\n\n\n        "}
          {"\n\n        "}
          <article className="brand-panel">
            {"\n\n          "}
            {"\n          "}
            <img
              className="login-product-img"
              src="assets/account/img-1.png"
              alt="6G Clothing fashion collection"
            />
            {"\n\n\n          "}
            {"\n          "}
            <div className="brand-panel-overlay"></div>
            {"\n\n\n          "}
            {"\n\n          "}
            <div className="brand-panel-copy">
              {"\n\n            "}
              <i></i>
              {"\n\n            "}
              <p className="eyebrow">
                {"\n              Welcome Back\n            "}
              </p>
              {"\n\n\n            "}
              <h1>
                {"\n              Good"}
                <br />
                {"\n              Outfits"}
                <br />
                {"\n\n              "}
                <span>
                  {"\n                Brighter"}
                  <br />
                  {"\n                Mindset\n              "}
                </span>
                {"\n            "}
              </h1>
              {"\n\n\n            "}
              <p className="hero-description">
                {
                  "\n              Sign in to continue your fashion journey\n              and explore the latest styles.\n            "
                }
              </p>
              {"\n\n\n            "}
              <div className="login-perks">
                {"\n\n              "}
                <span>
                  {"\n\n                "}
                  <img src="assets/icons/delivery.svg" alt="" />
                  {"\n\n                "}
                  <strong>
                    {"\n                  Free"}
                    <br />
                    {"\n                  Shipping\n                "}
                  </strong>
                  {"\n\n              "}
                </span>
                {"\n\n\n              "}
                <span>
                  {"\n\n                "}
                  <img src="assets/icons/sustainable.svg" alt="" />
                  {"\n\n                "}
                  <strong>
                    {"\n                  Secure"}
                    <br />
                    {"\n                  Payments\n                "}
                  </strong>
                  {"\n\n              "}
                </span>
                {"\n\n\n              "}
                <span>
                  {"\n\n                "}
                  <img src="assets/icons/easy-returns.svg" alt="" />
                  {"\n\n                "}
                  <strong>
                    {"\n                  Easy"}
                    <br />
                    {"\n                  Returns\n                "}
                  </strong>
                  {"\n\n              "}
                </span>
                {"\n\n            "}
              </div>
              {"\n\n          "}
            </div>
            {"\n\n\n          "}
            {"\n\n          "}
            <p className="wear-script">
              {"\n            Wear"}
              <br />
              {"\n            Your"}
              <br />
              {"\n            Story\n          "}
            </p>
            {"\n\n        "}
          </article>
          {"\n\n\n\n        "}
          {"\n\n        "}
          <section className="auth-card">
            {"\n\n\n          "}
            {"\n\n          "}
            <div
              className="auth-tabs"
              role="tablist"
              aria-label="Account action"
            >
              {"\n\n            "}
              <button className="active" type="button" data-auth-tab="login">
                {"\n              Login\n            "}
              </button>
              {"\n\n            "}
              <button type="button" data-auth-tab="register">
                {"\n              Register\n            "}
              </button>
              {"\n\n          "}
            </div>
            {"\n\n\n\n          "}
            {"\n\n          "}
            <form className="auth-form" data-auth-form="login">
              {"\n\n            "}
              <h2>{"\n              Welcome Back!\n            "}</h2>
              {"\n\n            "}
              <p className="form-description">
                {
                  "\n              Sign in to continue to your account.\n            "
                }
              </p>
              {"\n\n\n            "}
              {"\n\n            "}
              <label>
                {"\n\n              Email or Mobile Number\n\n              "}
                <span>
                  {"\n\n                "}
                  <img src="assets/icons/email.svg" alt="" />
                  {"\n\n                "}
                  <input
                    name="email"
                    type="text"
                    placeholder="Enter your email or mobile number"
                    autoComplete="username"
                    required
                  />
                  {"\n\n              "}
                </span>
                {"\n\n            "}
              </label>
              {"\n\n\n            "}
              {"\n\n            "}
              <label>
                {"\n\n              Password\n\n              "}
                <span>
                  {"\n\n                "}
                  <img src="assets/icons/user.svg" alt="" />
                  {"\n\n                "}
                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                  />
                  {"\n\n                "}
                  <button
                    type="button"
                    className="eye-btn"
                    data-eye="login-password"
                    aria-label="Show password"
                  >
                    {"\n                  "}
                    <svg
                      className="eye-open"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {"\n                  "}
                    <svg
                      className="eye-closed"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                    {"\n                "}
                  </button>
                  {"\n\n              "}
                </span>
                {"\n\n            "}
              </label>
              {"\n\n\n            "}
              {"\n\n            "}
              <div className="auth-row">
                {"\n\n              "}
                <label className="check">
                  {"\n\n                "}
                  <input type="checkbox" name="remember" />
                  {"\n\n                "}
                  <span className="check-box"></span>
                  {"\n\n                "}
                  <strong>
                    {"\n                  Remember Me\n                "}
                  </strong>
                  {"\n\n              "}
                </label>
                {"\n\n\n              "}
                <a href="contact.html">
                  {"\n                Forgot Password?\n              "}
                </a>
                {"\n\n            "}
              </div>
              {"\n\n\n            "}
              {"\n\n            "}
              <button className="auth-submit" type="submit">
                {"\n\n              "}
                <span>{"\n                Login\n              "}</span>
                {"\n\n              "}
                <b>{"\n                →\n              "}</b>
                {"\n\n            "}
              </button>
              {"\n\n\n            "}
              {"\n\n            "}
              <div className="auth-divider">
                {"\n\n              "}
                <span>
                  {"\n                or continue with\n              "}
                </span>
                {"\n\n            "}
              </div>
              {"\n\n\n            "}
              {"\n\n            "}
              <div className="social-login social-login--single">
                {"\n\n              "}
                <button type="button" className="google-login" disabled title="Google sign-in is not configured. Use email and password.">
                  {"\n\n                "}
                  {"\n                "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    {"\n                  "}
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    {"\n                  "}
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    {"\n                  "}
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    {"\n                  "}
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    {"\n                  "}
                    <path fill="none" d="M0 0h48v48H0z"></path>
                    {"\n                "}
                  </svg>
                  {"\n\n                "}
                  <span>
                    {
                      "\n                  Google sign-in unavailable\n                "
                    }
                  </span>
                  {"\n\n              "}
                </button>
                {"\n\n            "}
              </div>
              {"\n\n\n            "}
              {"\n\n            "}
              <p className="switch-line">
                {"\n\n              New here?\n\n              "}
                <button type="button" data-switch-auth="">
                  {"\n                Create an account\n              "}
                </button>
                {"\n\n            "}
              </p>
              {"\n\n          "}
            </form>
            {"\n\n\n\n          "}
            {"\n\n          "}
            <form
              className="auth-form hidden"
              data-auth-form="register"
              noValidate
            >
              {"\n\n            "}
              <h2>{"\n              Create Account\n            "}</h2>
              {"\n\n            "}
              <p className="form-description">
                {
                  "\n              Save your wishlist, orders and addresses in one place.\n            "
                }
              </p>
              {"\n\n\n            "}
              {"\n\n            "}
              <label>
                {"\n\n              Full Name\n\n              "}
                <span>
                  {"\n\n                "}
                  <img src="assets/icons/user.svg" alt="" />
                  {"\n\n                "}
                  <input
                    id="reg-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                  {"\n\n              "}
                </span>
                {"\n\n              "}
                <em className="field-error" id="reg-name-err"></em>
                {"\n\n            "}
              </label>
              {"\n\n\n            "}
              {"\n\n            "}
              <label>
                {"\n\n              Email or Mobile Number\n\n              "}
                <span>
                  {"\n\n                "}
                  <img src="assets/icons/email.svg" alt="" />
                  {"\n\n                "}
                  <input
                    id="reg-email"
                    name="email"
                    type="text"
                    placeholder="Enter your email or mobile number"
                    autoComplete="username"
                  />
                  {"\n\n              "}
                </span>
                {"\n\n              "}
                <em className="field-error" id="reg-email-err"></em>
                {"\n\n            "}
              </label>
              {"\n\n\n            "}
              {"\n\n            "}
              <label>
                {"\n\n              Password\n\n              "}
                <span>
                  {"\n\n                "}
                  <img src="assets/icons/user.svg" alt="" />
                  {"\n\n                "}
                  <input
                    id="reg-password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    autoComplete="new-password"
                  />
                  {"\n\n                "}
                  <button
                    type="button"
                    className="eye-btn"
                    data-eye="reg-password"
                    aria-label="Show password"
                  >
                    {"\n                  "}
                    <svg
                      className="eye-open"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {"\n                  "}
                    <svg
                      className="eye-closed"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                    {"\n                "}
                  </button>
                  {"\n\n              "}
                </span>
                {"\n\n              "}
                <em className="field-error" id="reg-password-err"></em>
                {"\n\n            "}
              </label>
              {"\n\n\n\n\n\n            "}
              {"\n\n            "}
              <label>
                {"\n\n              Confirm Password\n\n              "}
                <span>
                  {"\n\n                "}
                  <img src="assets/icons/user.svg" alt="" />
                  {"\n\n                "}
                  <input
                    id="reg-confirm"
                    name="confirm_password"
                    type="password"
                    placeholder="Re-enter your password"
                    autoComplete="new-password"
                  />
                  {"\n\n                "}
                  <button
                    type="button"
                    className="eye-btn"
                    data-eye="reg-confirm"
                    aria-label="Show password"
                  >
                    {"\n                  "}
                    <svg
                      className="eye-open"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {"\n                  "}
                    <svg
                      className="eye-closed"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                    {"\n                "}
                  </button>
                  {"\n\n              "}
                </span>
                {"\n\n              "}
                <em className="field-error" id="reg-confirm-err"></em>
                {"\n\n            "}
              </label>
              {"\n\n\n            "}
              {"\n\n            "}
              <button className="auth-submit" type="submit">
                {"\n\n              "}
                <span>{"\n                Register\n              "}</span>
                {"\n\n              "}
                <b>{"\n                →\n              "}</b>
                {"\n\n            "}
              </button>
              {"\n\n\n            "}
              {"\n\n            "}
              <p className="switch-line">
                {"\n\n              Already have an account?\n\n              "}
                <button type="button" data-switch-auth="">
                  {"\n                Login\n              "}
                </button>
                {"\n\n            "}
              </p>
              {"\n\n          "}
            </form>
            {"\n\n        "}
          </section>
          {"\n\n      "}
        </section>
        {"\n\n    "}
      </main>
      {"\n\n\n\n    "}
      {"\n\n    "}
      <footer className="site-footer" id="contact">
        {"\n\n      "}
        <div className="footer-brand">
          {"\n\n        "}
          <img src="assets/logo.png" alt="6G Clothing logo" />
          {"\n\n        "}
          <p>
            {
              "\n          Minimal. Modern. Meaningful.\n          T-shirts for every story.\n        "
            }
          </p>
          {"\n\n      "}
        </div>
        {"\n\n\n      "}
        <div>
          {"\n\n        "}
          <h3>{"\n          Quick Links\n        "}</h3>
          {"\n\n        "}
          <a href="index.html">{"Home"}</a>
          {"\n        "}
          <a href="tshirts.html">{"T-Shirts"}</a>
          {"\n        "}
          <a href="collections.html">{"Collections"}</a>
          {"\n        "}
          <a href="about.html">{"About"}</a>
          {"\n        "}
          <a href="contact.html">{"Contact"}</a>
          {"\n\n      "}
        </div>
        {"\n\n\n      "}
        <div>
          {"\n\n        "}
          <h3>{"\n          Shop\n        "}</h3>
          {"\n\n        "}
          <a href="index.html#featured">
            {"\n          New Arrivals\n        "}
          </a>
          {"\n\n        "}
          <a href="index.html#featured">
            {"\n          Best Sellers\n        "}
          </a>
          {"\n\n        "}
          <a href="collections.html">
            {"\n          Oversized T-Shirts\n        "}
          </a>
          {"\n\n        "}
          <a href="collections.html">
            {"\n          Graphic T-Shirts\n        "}
          </a>
          {"\n\n        "}
          <a href="collections.html">
            {"\n          Minimal T-Shirts\n        "}
          </a>
          {"\n\n      "}
        </div>
        {"\n\n\n      "}
        <div>
          {"\n\n        "}
          <h3>{"\n          Customer Support\n        "}</h3>
          {"\n\n        "}
          <a href="#">{"\n          FAQ\n        "}</a>
          {"\n\n        "}
          <a href="#">{"\n          Shipping Policy\n        "}</a>
          {"\n\n        "}
          <a href="#">{"\n          Return Policy\n        "}</a>
          {"\n\n        "}
          <a href="#">{"\n          Size Guide\n        "}</a>
          {"\n\n        "}
          <a href="#">{"\n          Track Order\n        "}</a>
          {"\n\n      "}
        </div>
        {"\n\n\n      "}
        <div>
          {"\n\n        "}
          <h3>{"\n          Contact\n        "}</h3>
          {"\n\n        "}
          <p>{"\n          support@6gclothing.com\n        "}</p>
          {"\n\n        "}
          <p>{"\n          +91 98765 43210\n        "}</p>
          {"\n\n        "}
          <p>{"\n          Chennai, Tamil Nadu, India\n        "}</p>
          {"\n\n\n        "}
          <h3 className="follow-title">{"\n          Follow Us\n        "}</h3>
          {"\n\n\n        "}
          <div className="footer-icons">
            {"\n\n          "}
            <a href="#" aria-label="Instagram">
              {"\n            "}
              <img src="assets/icons/instagram.svg" alt="Instagram" />
              {"\n          "}
            </a>
            {"\n\n\n          "}
            <a href="#" aria-label="WhatsApp">
              {"\n            "}
              <img src="assets/icons/whatsapp.svg" alt="WhatsApp" />
              {"\n          "}
            </a>
            {"\n\n\n          "}
            <a href="mailto:support@6gclothing.com" aria-label="Email">
              {"\n            "}
              <img src="assets/icons/email.svg" alt="Email" />
              {"\n          "}
            </a>
            {"\n\n\n          "}
            <a href="#" aria-label="Facebook">
              {"\n            "}
              <img src="assets/icons/facebook.svg" alt="Facebook" />
              {"\n          "}
            </a>
            {"\n\n        "}
          </div>
          {"\n\n      "}
        </div>
        {"\n\n\n      "}
        <p className="copyright">
          {
            "\n        © 2026 6G Clothing.\n        All rights reserved.\n      "
          }
        </p>
        {"\n\n      "}
        <p className="tagline">{"\n        Wear Your Story.\n      "}</p>
        {"\n\n    "}
      </footer>
      {"\n\n\n    \n\n  "}
    </>
  );
}
