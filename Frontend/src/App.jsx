import { lazy, Suspense, useCallback } from "react";
import { createPortal } from "react-dom";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import { usePageBehavior } from "./hooks/usePageBehavior";
import commonCss from "./styles/styles.css?inline";
import aboutCss from "./styles/about.css?inline";
import accountCss from "./styles/account.css?inline";
import cartCss from "./styles/cart.css?inline";
import collectionsCss from "./styles/collections.css?inline";
import contactCss from "./styles/contact.css?inline";
import loginCss from "./styles/login.css?inline";
import productCss from "./styles/product.css?inline";
import tshirtsCss from "./styles/tshirts.css?inline";
import wishlistCss from "./styles/wishlist.css?inline";
import navigationCss from "./styles/navigation.css?inline";
import headerCss from "./styles/header.css?inline";

const pages = {
  index: { Component: lazy(() => import("./pages/HomePage")), css: "" },
  tshirts: {
    Component: lazy(() => import("./pages/TshirtsPage")),
    css: tshirtsCss,
  },
  collections: {
    Component: lazy(() => import("./pages/CollectionsPage")),
    css: collectionsCss,
  },
  about: { Component: lazy(() => import("./pages/AboutPage")), css: aboutCss },
  contact: {
    Component: lazy(() => import("./pages/ContactPage")),
    css: contactCss,
  },
  product: {
    Component: lazy(() => import("./pages/ProductPage")),
    css: productCss,
  },
  cart: { Component: lazy(() => import("./pages/CartPage")), css: cartCss },
  wishlist: {
    Component: lazy(() => import("./pages/WishlistPage")),
    css: wishlistCss,
  },
  login: { Component: lazy(() => import("./pages/LoginPage")), css: loginCss },
  account: {
    Component: lazy(() => import("./pages/AccountPage")),
    css: accountCss,
  },
};

function PageBehavior({ slug, search, navigate }) {
  usePageBehavior(slug, search, navigate);
  return null;
}

function PageFrame({ slug, search, navigate }) {
  const { Component, css } = pages[slug];
  return (
    <>
      {createPortal(
        <style data-page-styles={slug}>
          {(slug === "about" ? "" : commonCss) +
            "\n" +
            css +
            "\n" +
            headerCss +
            "\n" +
            navigationCss + '\nbody[data-storefront-loading] main { visibility: hidden; }'}
        </style>,
        document.head,
      )}
      <Suspense fallback={null}>
        <Component />
        <PageBehavior slug={slug} search={search} navigate={navigate} />
      </Suspense>
    </>
  );
}

function StorefrontRoutes() {
  const location = useLocation();
  const routerNavigate = useNavigate();
  const requestedPage =
    location.pathname.split("/").filter(Boolean).pop() || "index";
  const slug = requestedPage.replace(/\.html$/, "");
  const currentPage = pages[slug] ? slug : "index";
  const navigate = useCallback(
    (href) => {
      const url = new URL(href, window.location.href);
      routerNavigate(url.pathname + url.search + url.hash);
    },
    [routerNavigate],
  );

  return (
    <PageFrame
      key={currentPage + location.search}
      slug={currentPage}
      search={location.search}
      navigate={navigate}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <StorefrontRoutes />
    </BrowserRouter>
  );
}
