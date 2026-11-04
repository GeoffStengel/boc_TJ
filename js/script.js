
"use strict";

/* === SITE CONFIGURATION START === */

const FLAVORS = [
  {
    id: "original",
    name: "Original",
    edition: "01 / ORIGINAL",
    title: "AWAKEN THE <em>POWER.</em>",
    description:
      "The original Blood Of Christ design. A bold identity in a compact 40 mL bottle.",
    color: "#a52c45",
    singleImage: "images/product_img_05_original.png",
    caseImage:
      "images/product_img_showing_display_02_trans_BKGD.png"
  },
  {
    id: "grape",
    name: "Grape Blast",
    edition: "02 / GRAPE BLAST",
    title: "UNLEASH THE <em>BLAST.</em>",
    description:
      "Discover Grape Blast, featuring a distinctive purple and black design.",
    color: "#8c38cc",
    singleImage: "images/product_img_03_grape.png",
    caseImage:
      "images/product_img_showing_display_03_trans_BKGD_grape.png"
  },
  {
    id: "tropical",
    name: "Tropical Rush",
    edition: "03 / TROPICAL RUSH",
    title: "FEEL THE <em>RUSH.</em>",
    description:
      "Explore Tropical Rush, with vivid orange accents and tropical-inspired artwork.",
    color: "#d97822",
    singleImage: "images/product_img_04_tropical_rush.png",
    caseImage:
      "images/product_img_showing_display_04_trans_BKGD_tropical_rush.png"
  }
];

const PRODUCTS = FLAVORS.flatMap(flavor => [
  {
    id: `${flavor.id}-single`,
    flavorId: flavor.id,
    flavor: flavor.name,
    name: `${flavor.name} · Single Bottle`,
    type: "single",
    size: "1 × 40 mL",
    image: flavor.singleImage,
    color: flavor.color,
    priceCents: 329
  },
  {
    id: `${flavor.id}-case`,
    flavorId: flavor.id,
    flavor: flavor.name,
    name: `${flavor.name} · 12 Pack`,
    type: "case",
    size: "12 × 40 mL",
    image: flavor.caseImage,
    color: flavor.color,
    priceCents: 3100
  }
]);

const INGREDIENTS = [
  {
    name: "Caffeine",
    category: "STIMULANT",
    description:
      "A central nervous system stimulant commonly found in coffee, tea, and energy products.",
    details:
      "Caffeine may increase alertness, but it can also cause insomnia, anxiety, elevated heart rate, and other adverse effects. The supplied label does not disclose the caffeine amount per serving."
  },
  {
    name: "Yohimbine HCl",
    category: "STIMULANT",
    description:
      "A pharmacologically active compound associated with adrenergic nervous system effects.",
    details:
      "Yohimbine can increase heart rate and blood pressure and may interact with medications. Its suitability for use in a dietary supplement depends on the applicable regulations and formulation."
  },
  {
    name: "Rauwolfia Vomitoria Extract",
    category: "BOTANICAL EXTRACT",
    description:
      "A botanical extract identified on the supplied label as standardized to alpha-yohimbine.",
    details:
      "Alpha-yohimbine is a potent adrenergic compound. Standardization does not establish that a finished product is safe, and the label does not disclose its individual amount."
  },
  {
    name: "L-Tyrosine",
    category: "AMINO ACID",
    description:
      "An amino acid involved in the body's production of several signaling molecules.",
    details:
      "L-tyrosine is a precursor to catecholamines and thyroid hormones. The amount in this proprietary blend is not individually disclosed."
  },
  {
    name: "Taurine",
    category: "AMINO SULFONIC ACID",
    description:
      "A naturally occurring compound involved in multiple physiological processes.",
    details:
      "Taurine is found in human tissues and is used in some energy products. Its inclusion alone does not establish a particular performance benefit."
  },
  {
    name: "Theobromine",
    category: "METHYLXANTHINE",
    description:
      "A naturally occurring compound found in cacao and related plants.",
    details:
      "Theobromine belongs to the same broad chemical family as caffeine. Its effects and interactions depend on dose and individual sensitivity."
  }
];

const STORAGE_KEYS = {
  cart: "boc-shopping-cart-v6",
  reviews: "boc-demo-reviews-v6"
};

const SLIDE_INTERVAL_MS = 6500;
const SLIDE_FADE_MS = 350;
const MAX_CART_QUANTITY = 99;
const MAX_REVIEWS = 100;

/* === SITE CONFIGURATION END === */


/* === DOM HELPERS START === */

function $(id) {
  return document.getElementById(id);
}

function formatPrice(cents) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(cents / 100);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function readStoredJSON(key, fallback) {
  try {
    const rawValue = localStorage.getItem(key);

    return rawValue === null
      ? fallback
      : JSON.parse(rawValue);
  } catch (error) {
    console.warn(`Unable to read ${key}:`, error);
    return fallback;
  }
}

function saveStoredJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(`Unable to save ${key}:`, error);
    return false;
  }
}

function getProduct(productId) {
  return PRODUCTS.find(product => product.id === productId);
}

function lockPageScroll() {
  document.body.classList.add("modal-open");
}

function unlockPageScroll() {
  const hasOpenDialog = [
    "cartDrawer",
    "productModal",
    "labelModal"
  ].some(id => {
    const element = $(id);
    return element && !element.hidden;
  });

  if (!hasOpenDialog) {
    document.body.classList.remove("modal-open");
  }
}

let toastTimeout;

function showToast(message) {
  const toast = $("toast");
  if (!toast) return;

  window.clearTimeout(toastTimeout);

  toast.textContent = message;
  toast.hidden = false;

  toastTimeout = window.setTimeout(() => {
    toast.hidden = true;
  }, 3000);
}

/* === DOM HELPERS END === */


/* === MOBILE NAVIGATION START === */

function closeMobileMenu() {
  const navigation = $("navLinks");
  const toggle = $("menuToggle");

  if (!navigation || !toggle) return;

  navigation.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open menu");
}

function initializeNavigation() {
  const toggle = $("menuToggle");
  const navigation = $("navLinks");

  if (!toggle || !navigation) return;

  toggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) {
      closeMobileMenu();
    }
  });
}

/* === MOBILE NAVIGATION END === */


/* === HERO SLIDESHOW START === */

let activeSlide = 0;
let slideTimer = null;
let slideTransitionTimer = null;
let slideRequestId = 0;
let slidePausedUntil = 0;

const heroImageCache = new Map();

function preloadHeroImage(imagePath) {
  if (heroImageCache.has(imagePath)) {
    return heroImageCache.get(imagePath);
  }

  const imagePromise = new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(imagePath);
    image.onerror = () => {
      reject(new Error(`Could not load image: ${imagePath}`));
    };

    image.src = imagePath;

    if (image.complete && image.naturalWidth > 0) {
      resolve(imagePath);
    }
  });

  heroImageCache.set(imagePath, imagePromise);

  imagePromise.catch(() => {
    heroImageCache.delete(imagePath);
  });

  return imagePromise;
}

function updateSlideIndicators() {
  const indicators = $("slideIndicators");
  if (!indicators) return;

  indicators.querySelectorAll("button").forEach((button, index) => {
    const isActive = index === activeSlide;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute(
      "aria-label",
      `${FLAVORS[index].name}${isActive ? ", selected" : ""}`
    );
  });
}

function updateHeroContent(flavor) {
  const edition = $("heroEdition");
  const title = $("heroTitle");
  const description = $("heroDescription");
  const glow = $("heroGlow");
  const productLink = $("heroProductLink");
  const shopLink = $("heroShopLink");

  if (edition) edition.textContent = flavor.edition;

  // Titles come exclusively from the trusted FLAVORS configuration.
  if (title) title.innerHTML = flavor.title;

  if (description) {
    description.textContent = flavor.description;
  }

  if (glow) {
    glow.style.background = `
      radial-gradient(
        circle at 73% 45%,
        ${flavor.color}55,
        transparent 58%
      )
    `;
  }

  if (productLink) {
    productLink.setAttribute(
      "aria-label",
      `Shop ${flavor.name} products`
    );

    productLink.dataset.flavor = flavor.id;
  }

  if (shopLink) {
    shopLink.dataset.flavor = flavor.id;
  }
}

async function renderSlide(index, { immediate = false } = {}) {
  const image = $("heroProductImage");
  if (!image) return;

  const normalizedIndex =
    (index + FLAVORS.length) % FLAVORS.length;

  const flavor = FLAVORS[normalizedIndex];
  const requestId = ++slideRequestId;

  try {
    await preloadHeroImage(flavor.singleImage);
  } catch (error) {
    console.error(error);
    showToast(`Unable to load ${flavor.name} image.`);
    return;
  }

  // Ignore older requests if the visitor changed slides quickly.
  if (requestId !== slideRequestId) return;

  window.clearTimeout(slideTransitionTimer);

  if (!immediate) {
    image.classList.add("changing");

    await new Promise(resolve => {
      slideTransitionTimer = window.setTimeout(
        resolve,
        SLIDE_FADE_MS
      );
    });
  }

  if (requestId !== slideRequestId) return;

  activeSlide = normalizedIndex;

  image.src = flavor.singleImage;
  image.alt = `Blood Of Christ ${flavor.name} 40 mL bottle`;
  image.dataset.flavor = flavor.id;

  updateHeroContent(flavor);
  updateSlideIndicators();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (requestId === slideRequestId) {
        image.classList.remove("changing");
      }
    });
  });

  // Preload the next flavor for smoother automatic rotation.
  const nextFlavor =
    FLAVORS[(activeSlide + 1) % FLAVORS.length];

  preloadHeroImage(nextFlavor.singleImage).catch(() => {});
}

function stopSlideTimer() {
  window.clearInterval(slideTimer);
  slideTimer = null;
}

function startSlideTimer() {
  stopSlideTimer();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  slideTimer = window.setInterval(() => {
    if (document.hidden) return;
    if (Date.now() < slidePausedUntil) return;

    renderSlide(activeSlide + 1);
  }, SLIDE_INTERVAL_MS);
}

function selectSlide(index, { userInitiated = false } = {}) {
  if (userInitiated) {
    slidePausedUntil = Date.now() + 12000;
  }

  renderSlide(index);
}

function initializeHeroSlideshow() {
  const indicators = $("slideIndicators");
  const previousButton = $("previousSlide");
  const nextButton = $("nextSlide");
  const heroProduct = $("heroProduct");
  const heroLink = $("heroProductLink");

  if (indicators) {
    indicators.innerHTML = "";

    FLAVORS.forEach((flavor, index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.setAttribute(
        "aria-label",
        `Show ${flavor.name}`
      );

      button.addEventListener("click", () => {
        selectSlide(index, { userInitiated: true });
      });

      indicators.appendChild(button);
    });
  }

  previousButton?.addEventListener("click", () => {
    selectSlide(activeSlide - 1, { userInitiated: true });
  });

  nextButton?.addEventListener("click", () => {
    selectSlide(activeSlide + 1, { userInitiated: true });
  });

  let touchStartX = 0;
  let touchStartY = 0;

  const swipeTarget =
    heroLink?.closest(".hero-product") || heroProduct;

  swipeTarget?.addEventListener(
    "touchstart",
    event => {
      const touch = event.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    },
    { passive: true }
  );

  swipeTarget?.addEventListener(
    "touchend",
    event => {
      const touch = event.changedTouches[0];
      const differenceX = touch.clientX - touchStartX;
      const differenceY = touch.clientY - touchStartY;

      if (
        Math.abs(differenceX) < 45 ||
        Math.abs(differenceX) < Math.abs(differenceY)
      ) {
        return;
      }

      selectSlide(
        activeSlide + (differenceX < 0 ? 1 : -1),
        { userInitiated: true }
      );
    },
    { passive: true }
  );

  heroLink?.addEventListener("click", event => {
    const selectedFlavor = FLAVORS[activeSlide];

    if (!selectedFlavor) return;

    event.preventDefault();
    filterProducts("all");

    const targetCard = document.querySelector(
      `[data-product-id="${selectedFlavor.id}-single"]`
    );

    $("shop")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    if (targetCard) {
      targetCard.classList.add("highlighted-product");

      window.setTimeout(() => {
        targetCard.classList.remove("highlighted-product");
      }, 1500);
    }
  });

  renderSlide(0, { immediate: true });
  startSlideTimer();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopSlideTimer();
    } else {
      startSlideTimer();
    }
  });
}

/* === HERO SLIDESHOW END === */


/* === PRODUCT COLLECTION START === */

let activeProductFilter = "all";
let selectedPreviewProductId = null;

function getProductGlow(color) {
  return `${color}33`;
}

function renderProductCard(product) {
  const card = document.createElement("article");

  card.className = "product-card reveal visible";
  card.dataset.productId = product.id;
  card.dataset.productType = product.type;
  card.style.setProperty(
    "--product-glow",
    getProductGlow(product.color)
  );

  const badge =
    product.type === "case" ? "12-PACK" : "40 mL SINGLE";

  card.innerHTML = `
    <div class="product-image-wrap">
      <span class="product-badge">${badge}</span>

      <button
        type="button"
        class="product-image-button"
        data-preview-product="${escapeHTML(product.id)}"
        aria-label="View ${escapeHTML(product.name)}"
      >
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
        >
      </button>
    </div>

    <div class="product-details">
      <h3>${escapeHTML(product.name)}</h3>
      <p>${escapeHTML(product.size)}</p>

      <strong class="product-price">
        ${formatPrice(product.priceCents)}
      </strong>

      <button
        type="button"
        class="button button-primary"
        data-add-product="${escapeHTML(product.id)}"
      >
        ADD TO BAG +
      </button>
    </div>
  `;

  return card;
}

function renderProducts() {
  const grid = $("productGrid");
  if (!grid) return;

  const visibleProducts = PRODUCTS.filter(product => {
    return (
      activeProductFilter === "all" ||
      product.type === activeProductFilter
    );
  });

  const fragment = document.createDocumentFragment();

  visibleProducts.forEach(product => {
    fragment.appendChild(renderProductCard(product));
  });

  grid.replaceChildren(fragment);
}

function filterProducts(filter) {
  if (!["all", "single", "case"].includes(filter)) return;

  activeProductFilter = filter;

  $("shopTabs")
    ?.querySelectorAll("[data-filter]")
    .forEach(button => {
      const isActive = button.dataset.filter === filter;

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

  renderProducts();
}

function openProductPreview(productId) {
  const product = getProduct(productId);
  const modal = $("productModal");

  if (!product || !modal) return;

  selectedPreviewProductId = product.id;

  $("productModalImage").src = product.image;
  $("productModalImage").alt = product.name;
  $("productModalTitle").textContent = product.name;
  $("productModalSize").textContent = product.size;
  $("productModalPrice").textContent =
    formatPrice(product.priceCents);

  modal.hidden = false;
  lockPageScroll();

  $("closeProductModal")?.focus();
}

function closeProductPreview() {
  const modal = $("productModal");
  if (!modal || modal.hidden) return;

  modal.hidden = true;
  selectedPreviewProductId = null;

  unlockPageScroll();
}

function initializeProductCollection() {
  renderProducts();

  $("shopTabs")?.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    filterProducts(button.dataset.filter);
  });

  $("productGrid")?.addEventListener("click", event => {
    const previewButton =
      event.target.closest("[data-preview-product]");

    if (previewButton) {
      openProductPreview(previewButton.dataset.previewProduct);
      return;
    }

    const addButton =
      event.target.closest("[data-add-product]");

    if (addButton) {
      addToCart(addButton.dataset.addProduct);
    }
  });

  $("closeProductModal")?.addEventListener(
    "click",
    closeProductPreview
  );

  $("productModal")?.addEventListener("click", event => {
    if (event.target === $("productModal")) {
      closeProductPreview();
    }
  });

  $("productModalAdd")?.addEventListener("click", () => {
    if (!selectedPreviewProductId) return;

    addToCart(selectedPreviewProductId);
    closeProductPreview();
  });
}

/* === PRODUCT COLLECTION END === */


/* === SHOPPING CART START === */

function loadCart() {
  const storedCart = readStoredJSON(STORAGE_KEYS.cart, {});

  if (
    !storedCart ||
    typeof storedCart !== "object" ||
    Array.isArray(storedCart)
  ) {
    return {};
  }

  const validCart = {};

  for (const [productId, quantity] of Object.entries(storedCart)) {
    if (!getProduct(productId)) continue;
    if (!Number.isInteger(quantity)) continue;
    if (quantity <= 0) continue;

    validCart[productId] = Math.min(
      quantity,
      MAX_CART_QUANTITY
    );
  }

  return validCart;
}

let cart = loadCart();

function saveCart() {
  saveStoredJSON(STORAGE_KEYS.cart, cart);
}

function getCartCount() {
  return Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );
}

function getCartSubtotalCents() {
  return Object.entries(cart).reduce(
    (total, [productId, quantity]) => {
      const product = getProduct(productId);

      return product
        ? total + product.priceCents * quantity
        : total;
    },
    0
  );
}

function addToCart(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const currentQuantity = cart[productId] || 0;

  if (currentQuantity >= MAX_CART_QUANTITY) {
    showToast("Maximum quantity reached.");
    return;
  }

  cart[productId] = currentQuantity + 1;

  saveCart();
  renderCart();

  showToast(`${product.name} added to your bag.`);
}

function updateCartQuantity(productId, difference) {
  if (!getProduct(productId)) return;

  const currentQuantity = cart[productId] || 0;

  const nextQuantity = Math.max(
    0,
    Math.min(MAX_CART_QUANTITY, currentQuantity + difference)
  );

  if (nextQuantity === 0) {
    delete cart[productId];
  } else {
    cart[productId] = nextQuantity;
  }

  saveCart();
  renderCart();
}

function renderCart() {
  const cartCount = $("cartCount");
  const cartItems = $("cartItems");
  const cartSubtotal = $("cartSubtotal");

  if (cartCount) {
    cartCount.textContent = String(getCartCount());
  }

  if (cartSubtotal) {
    cartSubtotal.textContent =
      formatPrice(getCartSubtotalCents());
  }

  if (!cartItems) return;

  const entries = Object.entries(cart);

  if (entries.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <p>Your bag is empty.</p>
        <p>Explore the collection and find your flavor.</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = entries.map(([productId, quantity]) => {
    const product = getProduct(productId);
    if (!product) return "";

    return `
      <div class="cart-item">
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
        >

        <div>
          <h3>${escapeHTML(product.name)}</h3>
          <p>${escapeHTML(product.size)}</p>

          <strong>
            ${formatPrice(product.priceCents * quantity)}
          </strong>

          <div class="quantity-controls">
            <button
              type="button"
              data-cart-change="-1"
              data-cart-product="${escapeHTML(product.id)}"
              aria-label="Remove one ${escapeHTML(product.name)}"
            >−</button>

            <span>${quantity}</span>

            <button
              type="button"
              data-cart-change="1"
              data-cart-product="${escapeHTML(product.id)}"
              aria-label="Add one ${escapeHTML(product.name)}"
            >+</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function openCart() {
  const drawer = $("cartDrawer");
  const overlay = $("cartOverlay");

  if (!drawer || !overlay) return;

  closeProductPreview();
  closeLabelViewer();

  drawer.hidden = false;
  overlay.hidden = false;

  lockPageScroll();
  renderCart();

  $("closeCart")?.focus();
}

function closeCart() {
  const drawer = $("cartDrawer");
  const overlay = $("cartOverlay");

  if (drawer) drawer.hidden = true;
  if (overlay) overlay.hidden = true;

  unlockPageScroll();
}

function initializeCart() {
  renderCart();

  $("cartTrigger")?.addEventListener("click", openCart);
  $("closeCart")?.addEventListener("click", closeCart);
  $("cartOverlay")?.addEventListener("click", closeCart);
  $("continueShopping")?.addEventListener("click", closeCart);

  $("cartItems")?.addEventListener("click", event => {
    const button =
      event.target.closest("[data-cart-change]");

    if (!button) return;

    const difference = Number(button.dataset.cartChange);
    const productId = button.dataset.cartProduct;

    if (difference !== 1 && difference !== -1) return;

    updateCartQuantity(productId, difference);
  });
}

/* === SHOPPING CART END === */


/* === INGREDIENT EXPLORER START === */

function renderIngredients() {
  const grid = $("ingredientGrid");
  if (!grid) return;

  grid.innerHTML = INGREDIENTS.map((ingredient, index) => `
    <article class="ingredient-card reveal visible">
      <span>
        ${String(index + 1).padStart(2, "0")}
        / ${escapeHTML(ingredient.category)}
      </span>

      <h3>${escapeHTML(ingredient.name)}</h3>

      <p>${escapeHTML(ingredient.description)}</p>

      <details>
        <summary>LEARN MORE +</summary>
        <p>${escapeHTML(ingredient.details)}</p>
      </details>
    </article>
  `).join("");
}

/* === INGREDIENT EXPLORER END === */


/* === LABEL VIEWER START === */

let labelZoom = 1;

function applyLabelZoom() {
  const image = $("modalLabelImage");
  if (!image) return;

  image.style.width = `${labelZoom * 100}%`;
}

function openLabelViewer() {
  const modal = $("labelModal");
  if (!modal) return;

  closeProductPreview();
  closeCart();

  labelZoom = 1;
  applyLabelZoom();

  modal.hidden = false;
  lockPageScroll();

  $("closeLabel")?.focus();
}

function closeLabelViewer() {
  const modal = $("labelModal");
  if (!modal || modal.hidden) return;

  modal.hidden = true;
  unlockPageScroll();
}

function changeLabelZoom(amount) {
  labelZoom = Math.max(
    1,
    Math.min(4, Math.round((labelZoom + amount) * 10) / 10)
  );

  applyLabelZoom();
}

function initializeLabelViewer() {
  $("openLabelButton")?.addEventListener(
    "click",
    openLabelViewer
  );

  $("labelPreview")?.addEventListener(
    "click",
    openLabelViewer
  );

  $("closeLabel")?.addEventListener(
    "click",
    closeLabelViewer
  );

  $("zoomIn")?.addEventListener("click", () => {
    changeLabelZoom(.25);
  });

  $("zoomOut")?.addEventListener("click", () => {
    changeLabelZoom(-.25);
  });

  $("labelModal")?.addEventListener("click", event => {
    if (event.target === $("labelModal")) {
      closeLabelViewer();
    }
  });
}

/* === LABEL VIEWER END === */


/* === DEMO REVIEWS START === */

function isValidReview(review) {
  return (
    review &&
    typeof review === "object" &&
    typeof review.id === "string" &&
    typeof review.name === "string" &&
    review.name.trim().length > 0 &&
    review.name.length <= 60 &&
    typeof review.flavor === "string" &&
    FLAVORS.some(flavor => flavor.name === review.flavor) &&
    Number.isInteger(review.rating) &&
    review.rating >= 1 &&
    review.rating <= 5 &&
    typeof review.text === "string" &&
    review.text.length >= 10 &&
    review.text.length <= 1000 &&
    typeof review.createdAt === "string"
  );
}

function loadReviews() {
  const storedReviews = readStoredJSON(STORAGE_KEYS.reviews, []);

  if (!Array.isArray(storedReviews)) return [];

  return storedReviews
    .filter(isValidReview)
    .slice(0, MAX_REVIEWS);
}

let reviews = loadReviews();
let selectedRating = 0;

function getStarString(rating) {
  const filled = Math.max(
    0,
    Math.min(5, Math.round(rating))
  );

  return "★".repeat(filled) + "☆".repeat(5 - filled);
}

function renderStarPicker() {
  $("starPicker")
    ?.querySelectorAll("[data-rating]")
    .forEach(button => {
      const rating = Number(button.dataset.rating);
      const isSelected = rating <= selectedRating;

      button.classList.toggle("selected", isSelected);
      button.setAttribute(
        "aria-pressed",
        String(rating === selectedRating)
      );
    });
}

function renderReviews() {
  const list = $("reviewList");
  const count = $("reviewCount");
  const average = $("averageRating");
  const stars = $("averageStars");

  const totalReviews = reviews.length;

  const averageRating = totalReviews
    ? reviews.reduce(
        (sum, review) => sum + review.rating,
        0
      ) / totalReviews
    : 0;

  if (average) {
    average.textContent = totalReviews
      ? averageRating.toFixed(1)
      : "—";
  }

  if (stars) {
    stars.textContent = getStarString(averageRating);
  }

  if (count) {
    count.textContent = totalReviews === 0
      ? "No reviews yet"
      : `${totalReviews} review${totalReviews === 1 ? "" : "s"}`;
  }

  if (!list) return;

  if (totalReviews === 0) {
    list.innerHTML = `
      <div class="review-card">
        <h3>NO REVIEWS YET</h3>
        <p>
          Be the first to share your experience.
          Reviews submitted here are saved in this browser only.
        </p>
      </div>
    `;
    return;
  }

  list.innerHTML = reviews.map(review => {
    const date = new Date(review.createdAt);

    const displayDate = Number.isNaN(date.getTime())
      ? ""
      : date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });

    return `
      <article class="review-card">
        <h3>${escapeHTML(review.name)}</h3>

        <span class="review-flavor">
          ${escapeHTML(review.flavor)}
          ${displayDate ? ` · ${escapeHTML(displayDate)}` : ""}
        </span>

        <div
          class="rating-stars"
          aria-label="${review.rating} out of 5 stars"
        >
          ${getStarString(review.rating)}
        </div>

        <p>${escapeHTML(review.text)}</p>
      </article>
    `;
  }).join("");
}

function setReviewStatus(message) {
  const status = $("reviewStatus");

  if (status) {
    status.textContent = message;
  }
}

function initializeReviews() {
  renderReviews();
  renderStarPicker();

  $("starPicker")?.addEventListener("click", event => {
    const button = event.target.closest("[data-rating]");
    if (!button) return;

    selectedRating = Number(button.dataset.rating);
    renderStarPicker();
  });

  $("reviewForm")?.addEventListener("submit", event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = $("reviewName")?.value.trim() || "";
    const flavor = $("reviewFlavor")?.value || "";
    const text = $("reviewText")?.value.trim() || "";

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (selectedRating < 1 || selectedRating > 5) {
      setReviewStatus("Please select a star rating.");
      return;
    }

    if (
      name.length < 1 ||
      name.length > 60 ||
      text.length < 10 ||
      text.length > 1000 ||
      !FLAVORS.some(item => item.name === flavor)
    ) {
      setReviewStatus("Please check your review details.");
      return;
    }

    const review = {
      id: typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `review-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      name,
      flavor,
      rating: selectedRating,
      text,
      createdAt: new Date().toISOString()
    };

    reviews.unshift(review);
    reviews = reviews.slice(0, MAX_REVIEWS);

    const saved = saveStoredJSON(
      STORAGE_KEYS.reviews,
      reviews
    );

    if (!saved) {
      reviews.shift();
      setReviewStatus(
        "Unable to save the review in this browser."
      );
      return;
    }

    form.reset();
    selectedRating = 0;

    renderStarPicker();
    renderReviews();

    setReviewStatus(
      "Review saved in this browser. Thank you!"
    );

    showToast("Your review was saved.");
  });
}

/* === DEMO REVIEWS END === */


/* === SCROLL ANIMATIONS START === */

function initializeScrollAnimations() {
  const elements = document.querySelectorAll(".reveal");

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    elements.forEach(element => {
      element.classList.add("visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: .12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  elements.forEach(element => observer.observe(element));
}

/* === SCROLL ANIMATIONS END === */


/* === GLOBAL KEYBOARD CONTROLS START === */

function initializeKeyboardControls() {
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    if ($("labelModal") && !$("labelModal").hidden) {
      closeLabelViewer();
      return;
    }

    if ($("productModal") && !$("productModal").hidden) {
      closeProductPreview();
      return;
    }

    if ($("cartDrawer") && !$("cartDrawer").hidden) {
      closeCart();
      return;
    }

    closeMobileMenu();
  });
}

/* === GLOBAL KEYBOARD CONTROLS END === */


/* === APPLICATION INITIALIZATION START === */

function initializeApplication() {
  const currentYear = $("currentYear");

  if (currentYear) {
    currentYear.textContent = String(
      new Date().getFullYear()
    );
  }

  initializeNavigation();
  initializeProductCollection();
  initializeCart();
  initializeHeroSlideshow();
  renderIngredients();
  initializeLabelViewer();
  initializeReviews();
  initializeScrollAnimations();
  initializeKeyboardControls();
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeApplication,
    { once: true }
  );
} else {
  initializeApplication();
}

/* === APPLICATION INITIALIZATION END === */
