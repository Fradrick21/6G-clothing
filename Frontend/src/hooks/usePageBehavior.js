import { useLayoutEffect } from "react";
import { createStorefront } from "../storefront/controller";
import { bindFilterDrawer } from "../storefront/filterDrawer";
import metadata from "../pages/metadata.json";

// The original animations and form logic belong to the lifetime of each page.
// Disposing them prevents duplicate listeners on navigation and StrictMode.
export function usePageBehavior(slug, search, navigate) {
  useLayoutEffect(() => {
    document.title = metadata[slug].title;
    document.body.className = metadata[slug].bodyClass;
    const storefront = createStorefront(navigate);
    const disposeDrawer = slug === "tshirts" ? bindFilterDrawer() : () => {};
    storefront.init();
    const controller = new AbortController();
    document.addEventListener(
      "click",
      (event) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.ctrlKey ||
          event.metaKey ||
          event.shiftKey ||
          event.altKey
        )
          return;
        const link = event.target.closest("a[href]");
        if (!link || link.target || link.hasAttribute("download")) return;
        const href = link.getAttribute("href");
        if (!href || href.startsWith("#")) return;
        const url = new URL(href, window.location.href);
        if (
          url.origin !== window.location.origin ||
          !/\/(?:index|tshirts|collections|about|contact|product|cart|wishlist|login|account)(?:\.html)?$/.test(
            url.pathname,
          )
        )
          return;
        event.preventDefault();
        navigate(href);
      },
      { signal: controller.signal },
    );

    const frame = requestAnimationFrame(() => {
      if (window.location.hash) {
        document
          .getElementById(decodeURIComponent(window.location.hash.slice(1)))
          ?.scrollIntoView();
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    });
    return () => {
      cancelAnimationFrame(frame);
      controller.abort();
      disposeDrawer();
      storefront.dispose();
    };
  }, [slug, search, navigate]);
}
