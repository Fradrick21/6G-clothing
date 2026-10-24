export function bindFilterDrawer() {
  const controller = new AbortController();
  const listen = (node, type, callback) =>
    node.addEventListener(type, callback, { signal: controller.signal });
  const filterDrawer = document.getElementById("filtersDrawer");
  const filterOverlay = document.getElementById("filterOverlay");
  const filterToggle = document.getElementById("filterToggleBtn");
  const filterClose = document.getElementById("filterCloseBtn");
  const filterBadge = document.getElementById("filterBadge");

  function openDrawer() {
    filterDrawer.classList.add("open");
    filterOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeDrawer() {
    filterDrawer.classList.remove("open");
    filterOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (filterToggle) listen(filterToggle, "click", openDrawer);
  if (filterClose) listen(filterClose, "click", closeDrawer);
  if (filterOverlay) listen(filterOverlay, "click", closeDrawer);

  /* Close drawer on ESC */
  listen(document, "keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });

  /* ── Collapsible Filter Groups ───────────────────── */
  document.querySelectorAll(".filter-group-toggle").forEach((btn) => {
    listen(btn, "click", () => {
      btn.closest(".filter-group").classList.toggle("collapsed");
    });
  });

  /* ── Active Filter Badge & Chips ─────────────────── */
  function updateFilterBadge() {
    const checked = filterDrawer
      ? filterDrawer.querySelectorAll('input[type="checkbox"]:checked').length
      : 0;
    const sizeActive = filterDrawer
      ? filterDrawer.querySelectorAll(".size-grid button.active").length
      : 0;
    const colorActive = filterDrawer
      ? filterDrawer.querySelectorAll(".mini-colors button.active").length
      : 0;
    const total = checked + sizeActive + colorActive;

    if (filterBadge) {
      filterBadge.textContent = total > 0 ? total : "";
      filterBadge.classList.toggle("has-filters", total > 0);
    }
    // Enable/disable clear button
    const clearBtn = document.querySelector("[data-clear-filters]");
    if (clearBtn) clearBtn.disabled = total === 0;
  }

  /* Listen to checkbox changes for badge */
  if (filterDrawer) {
    listen(filterDrawer, "change", updateFilterBadge);
    listen(filterDrawer, "click", (e) => {
      if (e.target.closest(".size-grid button, .mini-colors button"))
        updateFilterBadge();
    });
  }

  /* ── Clear all filters ───────────────────────────── */
  const clearBtn = document.querySelector("[data-clear-filters]");
  if (clearBtn)
    listen(clearBtn, "click", () => {
      filterDrawer
        .querySelectorAll('input[type="checkbox"]')
        .forEach((cb) => (cb.checked = false));
      filterDrawer
        .querySelectorAll(".size-grid button, .mini-colors button")
        .forEach((b) => b.classList.remove("active"));
      const priceRange = filterDrawer.querySelector("[data-price-range]");
      const priceLabel = filterDrawer.querySelector("[data-price-label]");
      if (priceRange) priceRange.value = priceRange.max;
      if (priceLabel)
        priceLabel.textContent = `Rs${priceRange.min} \u2013 Rs${priceRange.max}`;
      updateFilterBadge();
    });

  return () => controller.abort();
}
