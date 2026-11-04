
"use strict";

/* === PRODUCT CONFIGURATION START === */
const FLAVORS = [
  {
    id: "original",
    name: "Original",
    edition: "01 / ORIGINAL",
    title: "AWAKEN THE <em>POWER.</em>",
    description: "The original Blood Of Christ design. A bold identity in a compact 40 mL bottle.",
    color: "#a52c45",
    singleImage: "images/product_img_02_trans BKGD.png",
    caseImage: "images/product_img_showing_display_02_trans_BKGD.png"
  },
  {
    id: "grape",
    name: "Grape Blast",
    edition: "02 / GRAPE BLAST",
    title: "UNLEASH THE <em>BLAST.</em>",
    description: "Discover Grape Blast, featuring a distinctive purple and black design.",
    color: "#8c38cc",
    singleImage: "images/product_img_03_grape.png",
    caseImage: "images/product_img_showing_display_03_trans_BKGD_grape.png"
  },
  {
    id: "tropical",
    name: "Tropical Rush",
    edition: "03 / TROPICAL RUSH",
    title: "FEEL THE <em>RUSH.</em>",
    description: "Explore Tropical Rush, with vivid orange accents and tropical-inspired artwork.",
    color: "#d97822",
    singleImage: "images/product_img_04_tropical_rush.png",
    caseImage: "images/product_img_showing_display_04_trans_BKGD_tropical_rush.png"
  }
];

const PRODUCTS = FLAVORS.flatMap(flavor => [
  {
    id: `${flavor.id}-single`,
    flavor: flavor.name,
    name: `${flavor.name} · Single Bottle`,
    type: "single",
    size: "1 × 40 mL",
    image: flavor.singleImage,
    color: flavor.color,
    priceCents: null
  },
  {
    id: `${flavor.id}-case`,
    flavor: flavor.name,
    name: `${flavor.name} · 12 Pack`,
    type: "case",
    size: "12 × 40 mL",
    image: flavor.caseImage,
    color: flavor.color,
    priceCents: null
  }
]);

const INGREDIENTS = [
  {
    name: "Beta-Alanine",
    summary: "An amino acid found in sports supplements.",
    detail: "Beta-alanine is involved in muscle carnosine production. It may cause temporary tingling. Its individual amount is not disclosed."
  },
  {
    name: "L-Citrulline Malate",
    summary: "A compound commonly included in pre-workout formulas.",
    detail: "Citrulline participates in pathways associated with nitric oxide production. The label lists a 2:1 malate ratio."
  },
  {
    name: "GABA",
    summary: "Gamma-aminobutyric acid, a naturally occurring neurotransmitter.",
    detail: "GABA is involved in inhibitory signaling in the nervous system. The effects of oral supplementation may differ from its natural function."
  },
  {
    name: "Caffeine",
    summary: "The label lists caffeine anhydrous and dicaffeine malate.",
    detail: "Caffeine is a stimulant. It can affect alertness, heart rate, anxiety, and sleep. Total caffeine content is not disclosed."
  },
  {
    name: "Theobromine",
    summary: "A methylxanthine naturally found in cacao.",
    detail: "Theobromine is chemically related to caffeine and has stimulant properties. Combined stimulant exposure warrants caution."
  },
  {
    name: "Yohimbine HCl",
    summary: "A potent stimulant ingredient.",
    detail: "Yohimbine has been associated with elevated blood pressure, rapid heartbeat, anxiety, and serious adverse events. Qualified safety review is essential."
  },
  {
    name: "Rauwolfia Vomitoria",
    summary: "A botanical extract listed as standardized for alpha-yohimbine.",
    detail: "Alpha-yohimbine is a potent adrenergic compound. Its safety, interactions, and regulatory status require careful review."
  },
  {
    name: "AMPiberry®",
    summary: "A branded juniper berry ingredient listed on the label.",
    detail: "The label identifies Juniperus communis berry. Supplier specifications and product claims should be verified."
  },
  {
    name: "Ketones",
    summary: "An ingredient category identified in the proprietary blend.",
    detail: "The supplied label does not specify the exact ketone compound or its individual quantity."
  }
];

const CART_STORAGE_KEY = "bloodOfChristCartV5";
const REVIEW_STORAGE_KEY = "bloodOfChristReviewsV5";
const MAX_CART_QUANTITY = 99;
const $ = id => document.getElementById(id);
/* === PRODUCT CONFIGURATION END === */

/* === SHARED UTILITIES START === */
function createElement(tag, className = "", content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content !== undefined) node.textContent = content;
  return node;
}

function formatPrice(cents) {
  if (cents === null) return "Price pending";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(cents / 100);
}

function safeReadStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored === null ? fallback : JSON.parse(stored);
  } catch {
    return fallback;
  }
}

function safeWriteStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function updateBodyLock() {
  const isOpen = !$("cartDrawer").hidden || !$("labelModal").hidden;
  document.body.classList.toggle("modal-open", isOpen);
}

function trapDialogFocus(event, dialog) {
  if (event.key !== "Tab") return;

  const controls = [...dialog.querySelectorAll(
    'button:not(:disabled), a[href], input:not(:disabled), textarea:not(:disabled)'
  )].filter(node => !node.hidden);

  if (!controls.length) return;

  const first = controls[0];
  const last = controls[controls.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

let toastTimeout;

function showToast(message) {
  const toast = $("toast");
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.hidden = false;

  toastTimeout = setTimeout(() => {
    toast.hidden = true;
  }, 3000);
}
/* === SHARED UTILITIES END === */

/* === HERO SLIDESHOW START === */
let activeSlide = 0;
let slideTimer = null;
let imageChangeTimer = null;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function renderSlide(index) {
  activeSlide = (index + FLAVORS.length) % FLAVORS.length;
  const flavor = FLAVORS[activeSlide];

  $("heroEdition").textContent = flavor.edition;
  // Safe: all markup comes from our own static FLAVORS array.
  $("heroTitle").innerHTML = flavor.title;
  $("heroDescription").textContent = flavor.description;
  $("heroShopLink").href = "#shop";

  const image = $("heroProductImage");
  image.classList.add("changing");
  clearTimeout(imageChangeTimer);

  const changeImage = () => {
    image.src = flavor.singleImage;
    image.alt = `Blood Of Christ ${flavor.name} 40 mL bottle`;
    image.classList.remove("changing");
  };

  if (reduceMotion.matches) {
    changeImage();
  } else {
    imageChangeTimer = setTimeout(changeImage, 180);
  }

  $("heroGlow").style.background =
    `radial-gradient(circle at 73% 45%, ${flavor.color}55, transparent 55%)`;

  document.querySelectorAll(".slide-indicators button").forEach((button, i) => {
    const selected = i === activeSlide;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function stopSlideshow() {
  if (slideTimer !== null) clearInterval(slideTimer);
  slideTimer = null;
}

function startSlideshow() {
  stopSlideshow();

  if (reduceMotion.matches || document.hidden) return;

  slideTimer = setInterval(() => {
    renderSlide(activeSlide + 1);
  }, 6500);
}

function selectSlide(index) {
  renderSlide(index);
  startSlideshow();
}

function initializeSlideshow() {
  FLAVORS.forEach((flavor, index) => {
    const button = createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `Show ${flavor.name}`);
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => selectSlide(index));
    $("slideIndicators").append(button);
  });

  $("previousSlide").addEventListener("click", () => selectSlide(activeSlide - 1));
  $("nextSlide").addEventListener("click", () => selectSlide(activeSlide + 1));

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopSlideshow();
    else startSlideshow();
  });

  reduceMotion.addEventListener?.("change", startSlideshow);

  renderSlide(0);
  startSlideshow();
}
/* === HERO SLIDESHOW END === */

/* === PRODUCT SHOP START === */
let activeFilter = "all";

function createProductCard(product) {
  const card = createElement("article", "product-card reveal");
  const imageWrap = createElement("div", "product-image-wrap");
  imageWrap.style.setProperty("--product-glow", `${product.color}66`);

  const badge = createElement(
    "span", "product-badge",
    product.type === "case" ? "12 PACK" : "40 ML"
  );

  const image = createElement("img");
  image.src = product.image;
  image.alt = `Blood Of Christ ${product.name}`;
  image.loading = "lazy";
  image.decoding = "async";

  imageWrap.append(badge, image);

  const details = createElement("div", "product-details");
  const heading = createElement("h3", "", product.name);
  const description = createElement("p", "", product.size);
  const price = createElement("span", "product-price", formatPrice(product.priceCents));

  const addButton = createElement("button", "button button-primary", "ADD TO BAG +");
  addButton.type = "button";
  addButton.addEventListener("click", () => {
    changeCartQuantity(product.id, 1);
    openCart();
  });

  details.append(heading, description, price, addButton);
  card.append(imageWrap, details);
  return card;
}

function renderProducts() {
  const grid = $("productGrid");
  grid.replaceChildren();

  PRODUCTS.filter(product =>
    activeFilter === "all" || product.type === activeFilter
  ).forEach(product => {
    grid.append(createProductCard(product));
  });

  observeReveals(grid.querySelectorAll(".reveal"));
}

function initializeShopFilters() {
  document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;

      document.querySelectorAll("[data-filter]").forEach(tab => {
        const selected = tab === button;
        tab.classList.toggle("active", selected);
        tab.setAttribute("aria-pressed", String(selected));
      });

      renderProducts();
    });
  });
}
/* === PRODUCT SHOP END === */

/* === SHOPPING CART START === */
function loadCart() {
  const stored = safeReadStorage(CART_STORAGE_KEY, {});
  if (!stored || typeof stored !== "object" || Array.isArray(stored)) return {};

  const valid = {};

  PRODUCTS.forEach(product => {
    const quantity = stored[product.id];
    if (Number.isInteger(quantity) && quantity > 0) {
      valid[product.id] = Math.min(quantity, MAX_CART_QUANTITY);
    }
  });

  return valid;
}

let cart = loadCart();
let previousCartFocus = null;

function changeCartQuantity(productId, difference) {
  const product = PRODUCTS.find(item => item.id === productId);
  if (!product) return;

  const next = Math.max(
    0,
    Math.min(MAX_CART_QUANTITY, (cart[productId] || 0) + difference)
  );

  if (next === 0) delete cart[productId];
  else cart[productId] = next;

  if (!safeWriteStorage(CART_STORAGE_KEY, cart)) {
    showToast("Cart storage is unavailable in this browser.");
  }

  renderCart();
}

function createCartItem(product, quantity) {
  const item = createElement("article", "cart-item");

  const image = createElement("img");
  image.src = product.image;
  image.alt = product.name;

  const details = createElement("div");
  details.append(
    createElement("h3", "", product.name),
    createElement("p", "", `${quantity} × ${formatPrice(product.priceCents)}`)
  );

  const controls = createElement("div", "quantity-controls");
  const decrease = createElement("button", "", "−");
  const increase = createElement("button", "", "+");

  decrease.type = increase.type = "button";
  decrease.setAttribute("aria-label", `Remove one ${product.name}`);
  increase.setAttribute("aria-label", `Add one ${product.name}`);

  decrease.addEventListener("click", () => changeCartQuantity(product.id, -1));
  increase.addEventListener("click", () => changeCartQuantity(product.id, 1));

  controls.append(decrease, createElement("span", "", String(quantity)), increase);
  details.append(controls);
  item.append(image, details);

  return item;
}

function renderCart() {
  const cartItems = $("cartItems");
  cartItems.replaceChildren();

  let count = 0;
  let totalCents = 0;
  let hasPendingPrices = false;

  PRODUCTS.forEach(product => {
    const quantity = cart[product.id] || 0;
    if (!quantity) return;

    count += quantity;

    if (product.priceCents === null) hasPendingPrices = true;
    else totalCents += product.priceCents * quantity;

    cartItems.append(createCartItem(product, quantity));
  });

  if (!count) {
    cartItems.append(createElement("p", "empty-cart", "Your shopping bag is empty."));
  }

  $("cartCount").textContent = String(count);
  $("cartSubtotal").textContent =
    hasPendingPrices ? "PENDING" : formatPrice(totalCents);
}

function openCart() {
  previousCartFocus = document.activeElement;
  $("cartOverlay").hidden = false;
  $("cartDrawer").hidden = false;
  updateBodyLock();
  $("closeCart").focus();
}

function closeCart() {
  $("cartOverlay").hidden = true;
  $("cartDrawer").hidden = true;
  updateBodyLock();
  previousCartFocus?.focus?.();
}

function initializeCart() {
  $("cartTrigger").addEventListener("click", openCart);
  $("closeCart").addEventListener("click", closeCart);
  $("cartOverlay").addEventListener("click", closeCart);
  $("continueShopping").addEventListener("click", closeCart);
  renderCart();
}
/* === SHOPPING CART END === */

/* === INGREDIENT EXPLORER START === */
function initializeIngredients() {
  const grid = $("ingredientGrid");

  INGREDIENTS.forEach((ingredient, index) => {
    const card = createElement("article", "ingredient-card reveal");
    const number = createElement(
      "span", "", String(index + 1).padStart(2, "0")
    );
    const heading = createElement("h3", "", ingredient.name);
    const summary = createElement("p", "", ingredient.summary);

    const details = createElement("details");
    const toggle = createElement("summary", "", "LEARN MORE +");
    const explanation = createElement("p", "", ingredient.detail);

    details.append(toggle, explanation);
    card.append(number, heading, summary, details);
    grid.append(card);
  });

  observeReveals(grid.querySelectorAll(".reveal"));
}
/* === INGREDIENT EXPLORER END === */

/* === LABEL VIEWER START === */
let labelZoom = 1;
let previousLabelFocus = null;

function updateLabelZoom() {
  $("modalLabelImage").style.width = `${labelZoom * 100}%`;
}

function openLabel() {
  previousLabelFocus = document.activeElement;
  labelZoom = 1;
  updateLabelZoom();

  $("labelModal").hidden = false;
  $("labelViewport").scrollTo(0, 0);
  updateBodyLock();
  $("closeLabel").focus();
}

function closeLabel() {
  $("labelModal").hidden = true;
  updateBodyLock();
  previousLabelFocus?.focus?.();
}

function initializeLabelViewer() {
  $("labelPreview").addEventListener("click", openLabel);
  $("openLabelButton").addEventListener("click", openLabel);
  $("closeLabel").addEventListener("click", closeLabel);

  $("zoomIn").addEventListener("click", () => {
    labelZoom = Math.min(5, labelZoom + .5);
    updateLabelZoom();
  });

  $("zoomOut").addEventListener("click", () => {
    labelZoom = Math.max(1, labelZoom - .5);
    updateLabelZoom();
  });

  const previewImage = $("labelPreview").querySelector("img");

  previewImage.addEventListener("error", () => {
    $("labelPreview").disabled = true;
    $("openLabelButton").disabled = true;
    showToast("Product label image could not be loaded.");
  });
}
/* === LABEL VIEWER END === */

/* === CUSTOMER REVIEWS START === */
/*
  DEMO MODE:
  Reviews persist in localStorage on the current browser only.
  They are not shared publicly or verified purchases.
  A moderated backend is required before launching public reviews.
*/

function loadReviews() {
  const stored = safeReadStorage(REVIEW_STORAGE_KEY, []);
  if (!Array.isArray(stored)) return [];

  return stored.filter(review =>
    review &&
    typeof review.name === "string" &&
    typeof review.text === "string" &&
    typeof review.flavor === "string" &&
    Number.isInteger(review.rating) &&
    review.rating >= 1 &&
    review.rating <= 5
  ).slice(0, 100);
}

let reviews = loadReviews();
let selectedRating = 0;

function selectRating(rating) {
  selectedRating = rating;

  document.querySelectorAll("[data-rating]").forEach(button => {
    const value = Number(button.dataset.rating);
    button.classList.toggle("selected", value <= rating);
    button.setAttribute("aria-pressed", String(value === rating));
  });
}

function createReviewCard(review) {
  const card = createElement("article", "review-card");
  const name = createElement("h3", "", review.name);
  const flavor = createElement("span", "review-flavor", review.flavor.toUpperCase());
  const stars = createElement(
    "div", "rating-stars",
    "★".repeat(review.rating) + "☆".repeat(5 - review.rating)
  );
  stars.setAttribute("aria-label", `${review.rating} out of 5 stars`);

  const text = createElement("p", "", review.text);
  card.append(name, flavor, stars, text);
  return card;
}

function renderReviews() {
  const list = $("reviewList");
  list.replaceChildren();

  const count = reviews.length;
  const average = count
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / count
    : 0;

  $("averageRating").textContent = count ? average.toFixed(1) : "—";
  $("averageStars").textContent = count
    ? "★".repeat(Math.round(average)) + "☆".repeat(5 - Math.round(average))
    : "☆☆☆☆☆";

  $("reviewCount").textContent =
    count === 1 ? "1 local demo review" : `${count} local demo reviews`;

  if (!count) {
    const empty = createElement("div", "review-card");
    empty.append(
      createElement("h3", "", "NO REVIEWS YET"),
      createElement("p", "", "This preview has no reviews saved in this browser.")
    );
    list.append(empty);
    return;
  }

  reviews.forEach(review => list.append(createReviewCard(review)));
}

function initializeReviews() {
  document.querySelectorAll("[data-rating]").forEach(button => {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      selectRating(Number(button.dataset.rating));
    });
  });

  $("reviewForm").addEventListener("submit", event => {
    event.preventDefault();

    if (!$("reviewForm").reportValidity()) return;

    if (!selectedRating) {
      $("reviewStatus").textContent = "Please select a star rating.";
      return;
    }

    const name = $("reviewName").value.trim();
    const text = $("reviewText").value.trim();
    const flavor = $("reviewFlavor").value;

    if (!name || text.length < 10) {
      $("reviewStatus").textContent =
        "Enter your name and a review of at least 10 characters.";
      return;
    }

    const updated = [
      { name, text, flavor, rating: selectedRating },
      ...reviews
    ].slice(0, 100);

    if (!safeWriteStorage(REVIEW_STORAGE_KEY, updated)) {
      $("reviewStatus").textContent =
        "Unable to save your review. Browser storage may be disabled.";
      return;
    }

    reviews = updated;
    renderReviews();
    $("reviewForm").reset();
    selectRating(0);
    $("reviewStatus").textContent = "Your demo review was saved on this device.";
  });

  renderReviews();
}
/* === CUSTOMER REVIEWS END === */

/* === MOBILE NAVIGATION START === */
function closeNavigation() {
  $("navLinks").classList.remove("open");
  $("menuToggle").setAttribute("aria-expanded", "false");
  $("menuToggle").setAttribute("aria-label", "Open menu");
  $("menuToggle").textContent = "☰";
}

function initializeNavigation() {
  $("menuToggle").addEventListener("click", () => {
    const isOpen = $("navLinks").classList.toggle("open");
    $("menuToggle").setAttribute("aria-expanded", String(isOpen));
    $("menuToggle").setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    $("menuToggle").textContent = isOpen ? "×" : "☰";
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("click", event => {
    if (!event.target.closest(".navigation")) closeNavigation();
  });
}
/* === MOBILE NAVIGATION END === */

/* === SCROLL ANIMATIONS START === */
let revealObserver = null;

function observeReveals(elements) {
  elements.forEach(element => {
    if (revealObserver) revealObserver.observe(element);
    else element.classList.add("visible");
  });
}

function initializeScrollAnimations() {
  if ("IntersectionObserver" in window && !reduceMotion.matches) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: .05 });
  }

  observeReveals(document.querySelectorAll(".reveal"));
}
/* === SCROLL ANIMATIONS END === */

/* === KEYBOARD ACCESSIBILITY START === */
function initializeKeyboardControls() {
  document.addEventListener("keydown", event => {
    if (!$("labelModal").hidden) {
      if (event.key === "Escape") closeLabel();
      else trapDialogFocus(event, $("labelModal"));
      return;
    }

    if (!$("cartDrawer").hidden) {
      if (event.key === "Escape") closeCart();
      else trapDialogFocus(event, $("cartDrawer"));
      return;
    }

    if (event.key === "Escape") closeNavigation();
  });
}
/* === KEYBOARD ACCESSIBILITY END === */

/* === APPLICATION INITIALIZATION START === */
function initializeApp() {
  $("currentYear").textContent = new Date().getFullYear();

  initializeScrollAnimations();
  initializeNavigation();
  initializeKeyboardControls();
  initializeSlideshow();
  initializeShopFilters();
  initializeCart();
  initializeIngredients();
  initializeLabelViewer();
  initializeReviews();
  renderProducts();
}

initializeApp();
/* === APPLICATION INITIALIZATION END === */
