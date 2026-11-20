
"use strict";

/* ============================================================
   007-NRG WEBSITE — MAIN JAVASCRIPT
   Updated product images, hero rotation, product collection,
   ingredient explorer, label zoom, cart preview, and reviews.
   ============================================================ */


/* === SITE CONFIGURATION START === */

const SITE_CONFIG = {
  brandName: "007-NRG",
  heroRotationInterval: 3500,
  heroFadeDuration: 250,
  checkoutEnabled: false,
  maximumDemoReviews: 100,
  reviewStorageKey: "007-nrg-demo-reviews-v2"
};

/*
  IMPORTANT:
  Image paths are relative to index.html.

  Confirm the label filename, since the complete
  name was partly hidden in your screenshot.
*/


/* === PRODUCT IMAGE CONFIGURATION START === */

const PRODUCT_IMAGES = {
  // Original 007-NRG bottle
  singleBottle: "images/007-NRG-single-bottle-600x900.png",

  // New grape bottle
  grapeBottle: "images/007-NRG-Grape-single bottle-600x900.png",

  // New blue raspberry bottle
  blueRaspberryBottle: "images/007-NRG-Blue;-Raspberrysingle-600x900.png",

  // Promotional photography
  waterSplashBottle: "images/007-NRG-600x900-Water-Splash-Bottle.png",
  backSplashBottle: "images/007-NRG-Single-Bottle-Back-Splash.png",
  bottleWithBackground: "images/007-NRG-single-bottle-with-background.png",

  // Product packaging
  displayCase: "images/007-NRG-20pck-Display.png",
  displayBox: "images/007-NRG-20pck-Bottles-In-Box.png",

  // Product information
  productLabel: "images/007-NRG-Label-no-bkgd-1536x1024.png",
  originalIngredients: "images/007-NRG-ingredients.png",

  // Original client artwork
  originalCase: "images/007-NRG-30pck-case-img.png",
  originalFrontCase: "images/007-NRG-product-full-case-frontview.png"
};

/* === PRODUCT IMAGE CONFIGURATION END === */


/* === SITE CONFIGURATION END === */


/* === PRODUCT DATA START === */

const PRODUCTS = [
  {
    id: "007-nrg-single",
    name: "007-NRG Single Bottle",
    type: "single",
    size: "40 mL",
    description: "Explore the 007-NRG single-bottle design and product information.",
    image: PRODUCT_IMAGES.singleBottle,
    badge: "SINGLE BOTTLE",
    priceCents: null
  },
  {
    id: "007-nrg-display",
    name: "007-NRG Display Case",
    type: "case",
    size: "20 × 40 mL",
    description: "Explore the redesigned 20-bottle display packaging.",
    image: PRODUCT_IMAGES.displayCase,
    badge: "20-BOTTLE DISPLAY",
    priceCents: null
  },
  {
    id: "007-nrg-box",
    name: "007-NRG Bottles in Box",
    type: "case",
    size: "Display Packaging",
    description: "A closer look at the 007-NRG bottles and display box.",
    image: PRODUCT_IMAGES.displayBox,
    badge: "PACKAGING PREVIEW",
    priceCents: null
  }
];

/* === PRODUCT DATA END === */




/* === HERO SLIDESHOW DATA START === */

const HERO_SLIDES = [
  {
    edition: "01 / ORIGINAL 007-NRG",

    title: "HYPER FOCUSED <em>ENERGY.</em>",

    description:
      "Meet the original 007-NRG. Discover our bold 40 mL product and explore the collection.",

    image: PRODUCT_IMAGES.singleBottle,

    alt: "Original 007-NRG red single bottle, 40 mL",

    productId: "007-nrg-single"
  },

  {
    edition: "02 / GRAPE",

    title: "DISCOVER <em>GRAPE.</em>",

    description:
      "A striking grape-inspired concept featuring a clear bottle filled with vibrant purple liquid.",

    image: PRODUCT_IMAGES.grapeBottle,

    alt: "007-NRG grape concept bottle with purple liquid",

    productId: "007-nrg-single"
  },

  {
    edition: "03 / BLUE RASPBERRY",

    title: "GO BOLD. <em>GO BLUE.</em>",

    description:
      "Explore our blue raspberry concept with brilliant blue liquid and the signature 007-NRG design.",

    image: PRODUCT_IMAGES.blueRaspberryBottle,

    alt: "007-NRG blue raspberry concept bottle with blue liquid",

    productId: "007-nrg-single"
  }
];

/* === HERO SLIDESHOW DATA END === */



/* === INGREDIENT DATA START === */

/*
  Ingredient names are based on the client's
  original supplied artwork, not the generated
  promotional label.

  The original artwork lists a proprietary blend
  of 9,048 mg without individual ingredient amounts.
*/

const INGREDIENTS = [
  {
    name: "Beta-Alanine",
    category: "Amino Acid",
    group: "blend",
    description: "An amino acid involved in carnosine production.",
    details: "Beta-alanine is commonly studied in sports nutrition. The individual amount in this product has not been disclosed."
  },
  {
    name: "L-Citrulline Malate 2:1",
    category: "Amino Acid Compound",
    group: "blend",
    description: "A combination of L-citrulline and malate.",
    details: "The 2:1 designation describes the stated ingredient ratio. The individual quantity is not provided."
  },
  {
    name: "GABA",
    category: "Amino Acid Derivative",
    group: "blend",
    description: "Gamma-aminobutyric acid is a naturally occurring signaling molecule.",
    details: "The effects of orally consumed GABA are still being studied. The individual amount is not disclosed."
  },
  {
    name: "Caffeine Anhydrous",
    category: "Stimulant",
    group: "blend",
    description: "A concentrated form of caffeine.",
    details: "Caffeine can cause insomnia, anxiety, palpitations and increased heart rate. The amount in this blend is not individually disclosed."
  },
  {
    name: "Dicaffeine Malate",
    category: "Caffeine Compound",
    group: "blend",
    description: "A compound containing caffeine and malic acid.",
    details: "This is an additional caffeine source. Total caffeine content from all ingredients has not been confirmed."
  },
  {
    name: "AMPiberry",
    category: "Botanical Ingredient",
    group: "blend",
    description: "A branded ingredient identified with Juniperus communis.",
    details: "The original artwork identifies juniper berry. The individual quantity is not disclosed."
  },
  {
    name: "Theobromine",
    category: "Methylxanthine",
    group: "blend",
    description: "A naturally occurring compound also found in cacao.",
    details: "Theobromine belongs to the same general chemical family as caffeine. Its effects depend on dose and individual sensitivity."
  },
  {
    name: "Yohimbine HCl 98%",
    category: "Stimulant Compound",
    group: "blend",
    description: "A pharmacologically active adrenergic compound.",
    details: "Yohimbine may increase heart rate or blood pressure and may interact with medications. Its individual amount is not disclosed."
  },
  {
    name: "Rauwolfia Vomitoria Extract",
    category: "Botanical Extract",
    group: "blend",
    description: "An extract identified as standardized to at least 90% alpha-yohimbine.",
    details: "Alpha-yohimbine is a potent adrenergic compound. This ingredient warrants qualified safety and regulatory review."
  },
  {
    name: "Ketones",
    category: "Formula Component",
    group: "blend",
    description: "A component identified as ketones on the original artwork.",
    details: "The supplied label does not identify the specific ketone compound or its individual quantity."
  },
  {
    name: "Purified Water",
    category: "Other Ingredient",
    group: "other",
    description: "A water-based formulation ingredient.",
    details: "Listed separately from the proprietary blend."
  },
  {
    name: "Citric Acid",
    category: "Acidulant",
    group: "other",
    description: "Commonly used to adjust acidity or add tartness.",
    details: "The specific amount is not disclosed."
  },
  {
    name: "Natural and Artificial Flavors",
    category: "Flavoring",
    group: "other",
    description: "Ingredients used to create the product's flavor.",
    details: "Individual flavor components are not disclosed."
  },
  {
    name: "Silicon Dioxide",
    category: "Other Ingredient",
    group: "other",
    description: "An ingredient used in food and supplement manufacturing.",
    details: "The exact function in this formulation is not stated."
  },
  {
    name: "Calcium Silicate",
    category: "Other Ingredient",
    group: "other",
    description: "A food and supplement processing ingredient.",
    details: "The amount and specific purpose are not disclosed."
  },
  {
    name: "Sucralose",
    category: "Sweetener",
    group: "other",
    description: "A high-intensity sweetener.",
    details: "The amount used is not disclosed."
  },
  {
    name: "Acesulfame Potassium",
    category: "Sweetener",
    group: "other",
    description: "A high-intensity sweetener also called Ace K.",
    details: "The amount used is not disclosed."
  },
  {
    name: "FD&C Red 40",
    category: "Color Additive",
    group: "other",
    description: "A certified red color additive.",
    details: "Confirm this declaration against the final approved formula."
  },
  {
    name: "Potassium Sorbate",
    category: "Preservative",
    group: "other",
    description: "A preservative used in certain food and beverage products.",
    details: "The individual amount is not disclosed."
  },
  {
    name: "Sodium Benzoate",
    category: "Preservative",
    group: "other",
    description: "A preservative commonly used in acidic formulations.",
    details: "The individual amount is not disclosed."
  }
];

/* === INGREDIENT DATA END === */


/* === GENERAL HELPERS START === */

function getElement(elementId) {
  return document.getElementById(elementId);
}

function setElementText(elementId, value) {
  const element = getElement(elementId);
  if (element) element.textContent = String(value);
}

function escapeHTML(value) {
  const characters = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };

  return String(value).replace(
    /[&<>"']/g,
    character => characters[character]
  );
}

function getProductById(productId) {
  return PRODUCTS.find(product => product.id === productId);
}

function formatProductPrice(product) {
  if (!product || typeof product.priceCents !== "number") {
    return "PRICE COMING SOON";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(product.priceCents / 100);
}

function safelyReadStorage(storageKey, fallbackValue) {
  try {
    const storedValue = localStorage.getItem(storageKey);
    return storedValue === null
      ? fallbackValue
      : JSON.parse(storedValue);
  } catch (error) {
    console.warn("[007-NRG] Storage read failed:", error);
    return fallbackValue;
  }
}

function safelyWriteStorage(storageKey, value) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn("[007-NRG] Storage write failed:", error);
    return false;
  }
}

/* === GENERAL HELPERS END === */


/* === TOAST NOTIFICATIONS START === */

let toastTimeoutId = null;

function showToast(message) {
  const toast = getElement("toast");
  if (!toast) return;

  clearTimeout(toastTimeoutId);

  toast.textContent = message;
  toast.hidden = false;

  toastTimeoutId = setTimeout(() => {
    toast.hidden = true;
  }, 3500);
}

/* === TOAST NOTIFICATIONS END === */


/* === MODAL SCROLL MANAGEMENT START === */

function lockBodyScroll() {
  document.body.classList.add("modal-open");
}

function unlockBodyScroll() {
  const anyDialogOpen = [
    "cartDrawer",
    "productModal",
    "labelModal"
  ].some(dialogId => {
    const dialog = getElement(dialogId);
    return dialog && !dialog.hidden;
  });

  if (!anyDialogOpen) {
    document.body.classList.remove("modal-open");
  }
}

/* === MODAL SCROLL MANAGEMENT END === */


/* === MOBILE NAVIGATION START === */

function closeMobileNavigation() {
  const navigation = getElement("navLinks");
  const menuToggle = getElement("menuToggle");

  if (!navigation || !menuToggle) return;

  navigation.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}

function initializeMobileNavigation() {
  const navigation = getElement("navLinks");
  const menuToggle = getElement("menuToggle");

  if (!navigation || !menuToggle) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMobileNavigation);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) {
      closeMobileNavigation();
    }
  });
}

/* === MOBILE NAVIGATION END === */


/* === HERO SLIDESHOW START === */

let currentHeroSlideIndex = 0;
let heroRotationTimer = null;
let heroTransitionRequestId = 0;

const preloadedHeroImages = new Map();

function preloadHeroImage(imagePath) {
  if (preloadedHeroImages.has(imagePath)) {
    return preloadedHeroImages.get(imagePath);
  }

  const imagePromise = new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(imagePath);

    image.onerror = () => {
      reject(new Error(`Could not load hero image: ${imagePath}`));
    };

    image.src = imagePath;
  });

  preloadedHeroImages.set(imagePath, imagePromise);
  return imagePromise;
}

function updateHeroIndicators() {
  const container = getElement("slideIndicators");
  if (!container) return;

  container.querySelectorAll("button").forEach((button, index) => {
    const isActive = index === currentHeroSlideIndex;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

async function displayHeroSlide(requestedIndex, immediate = false) {
  const heroImage = getElement("heroProductImage");
  if (!heroImage || !HERO_SLIDES.length) return;

  const normalizedIndex =
    (requestedIndex + HERO_SLIDES.length) % HERO_SLIDES.length;

  const slide = HERO_SLIDES[normalizedIndex];
  const requestId = ++heroTransitionRequestId;

  try {
    await preloadHeroImage(slide.image);
  } catch (error) {
    console.warn("[007-NRG]", error.message);
    return;
  }

  if (requestId !== heroTransitionRequestId) return;

  if (!immediate) {
    heroImage.classList.add("changing");

    await new Promise(resolve => {
      setTimeout(resolve, SITE_CONFIG.heroFadeDuration);
    });

    if (requestId !== heroTransitionRequestId) return;
  }

  currentHeroSlideIndex = normalizedIndex;

  setElementText("heroEdition", slide.edition);
  setElementText("heroDescription", slide.description);

  const heroTitle = getElement("heroTitle");
  if (heroTitle) heroTitle.innerHTML = slide.title;

  heroImage.src = slide.image;
  heroImage.alt = slide.alt;
  heroImage.classList.remove("changing");

  const productLink = getElement("heroProductLink");

  if (productLink) {
    productLink.href = "#shop";
    productLink.setAttribute(
      "aria-label",
      "Explore 007-NRG products"
    );
  }

  updateHeroIndicators();
}

function stopHeroRotation() {
  if (heroRotationTimer !== null) {
    clearInterval(heroRotationTimer);
    heroRotationTimer = null;
  }
}

function startHeroRotation() {
  stopHeroRotation();

  if (
    HERO_SLIDES.length < 2 ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  heroRotationTimer = setInterval(() => {
    if (!document.hidden) {
      displayHeroSlide(currentHeroSlideIndex + 1);
    }
  }, SITE_CONFIG.heroRotationInterval);
}

function selectHeroSlide(index) {
  displayHeroSlide(index);
  startHeroRotation();
}

function initializeHeroSlideshow() {
  const indicatorContainer = getElement("slideIndicators");
  if (!indicatorContainer) return;

  indicatorContainer.innerHTML = "";

  HERO_SLIDES.forEach((slide, index) => {
    const indicator = document.createElement("button");

    indicator.type = "button";
    indicator.setAttribute(
      "aria-label",
      `Show product slide ${index + 1}`
    );

    indicator.addEventListener("click", () => {
      selectHeroSlide(index);
    });

    indicatorContainer.appendChild(indicator);

    preloadHeroImage(slide.image).catch(() => {});
  });

  getElement("previousSlide")?.addEventListener("click", () => {
    selectHeroSlide(currentHeroSlideIndex - 1);
  });

  getElement("nextSlide")?.addEventListener("click", () => {
    selectHeroSlide(currentHeroSlideIndex + 1);
  });

  const heroSection = getElement("home");


  heroSection?.addEventListener("focusin", stopHeroRotation);

  heroSection?.addEventListener("focusout", event => {
    if (!heroSection.contains(event.relatedTarget)) {
      startHeroRotation();
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopHeroRotation();
    } else {
      startHeroRotation();
    }
  });

  displayHeroSlide(0, true);
  startHeroRotation();
}

/* === HERO SLIDESHOW END === */


/* === PRODUCT COLLECTION START === */

let activeProductFilter = "all";
let selectedPreviewProductId = null;

function generateProductCard(product) {
  return `
    <article class="product-card reveal">
      <div class="product-image-wrap">
        <span class="product-badge">
          ${escapeHTML(product.badge)}
        </span>

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
            decoding="async"
          >
        </button>
      </div>

      <div class="product-details">
        <span class="eyebrow">
          ${escapeHTML(product.size)}
        </span>

        <h3>${escapeHTML(product.name)}</h3>

        <p>${escapeHTML(product.description)}</p>

        <strong class="product-price">
          ${formatProductPrice(product)}
        </strong>

        <button
          type="button"
          class="button button-secondary"
          data-preview-product="${escapeHTML(product.id)}"
        >
          VIEW DETAILS
        </button>
      </div>
    </article>
  `;
}

function renderProductCollection() {
  const productGrid = getElement("productGrid");
  if (!productGrid) return;

  const filteredProducts = PRODUCTS.filter(product => {
    return activeProductFilter === "all" ||
      product.type === activeProductFilter;
  });

  if (!filteredProducts.length) {
    productGrid.innerHTML = `
      <p class="empty-reviews">No products found.</p>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map(generateProductCard)
    .join("");

  productGrid.querySelectorAll("[data-preview-product]")
    .forEach(button => {
      button.addEventListener("click", () => {
        openProductPreview(button.dataset.previewProduct);
      });
    });

  productGrid.querySelectorAll(".reveal").forEach(element => {
    element.classList.add("visible");
  });
}

function setProductFilter(filter) {
  if (!["all", "single", "case"].includes(filter)) return;

  activeProductFilter = filter;

  document.querySelectorAll(".shop-tab").forEach(button => {
    const isActive = button.dataset.filter === filter;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderProductCollection();
}

function openProductPreview(productId) {
  const product = getProductById(productId);
  const modal = getElement("productModal");

  if (!product || !modal) return;

  selectedPreviewProductId = productId;

  setElementText("productModalTitle", product.name);
  setElementText("productModalSize", product.size);
  setElementText("productModalPrice", formatProductPrice(product));

  const image = getElement("productModalImage");

  if (image) {
    image.src = product.image;
    image.alt = product.name;
  }

  const orderButton = getElement("productModalAdd");

  if (orderButton) {
    orderButton.disabled = true;
    orderButton.textContent = "ORDERING COMING SOON";
  }

  modal.hidden = false;
  lockBodyScroll();

  getElement("closeProductModal")?.focus();
}

function closeProductPreview() {
  const modal = getElement("productModal");
  if (!modal || modal.hidden) return;

  modal.hidden = true;
  unlockBodyScroll();

  const previousId = selectedPreviewProductId;
  selectedPreviewProductId = null;

  const previousButton = Array.from(
    document.querySelectorAll("[data-preview-product]")
  ).find(button => button.dataset.previewProduct === previousId);

  previousButton?.focus();
}

function initializeProductCollection() {
  renderProductCollection();

  document.querySelectorAll(".shop-tab").forEach(button => {
    button.addEventListener("click", () => {
      setProductFilter(button.dataset.filter);
    });
  });

  getElement("closeProductModal")?.addEventListener(
    "click",
    closeProductPreview
  );

  getElement("productModal")?.addEventListener("click", event => {
    if (event.target === getElement("productModal")) {
      closeProductPreview();
    }
  });
}

/* === PRODUCT COLLECTION END === */


/* === SHOPPING CART START === */

/*
  Checkout is intentionally inactive.
  No orders or payments are processed.
*/

function renderShoppingCart() {
  setElementText("cartCount", "0");
  setElementText("cartSubtotal", "—");

  const cartItems = getElement("cartItems");
  if (!cartItems) return;

  cartItems.innerHTML = `
    <div class="empty-cart">
      <h3>ORDERING COMING SOON</h3>

      <p>
        The 007-NRG product collection
        is available for preview.
      </p>

      <p>
        Pricing and availability
        have not been confirmed.
      </p>
    </div>
  `;
}

function openShoppingCart() {
  const drawer = getElement("cartDrawer");
  const overlay = getElement("cartOverlay");

  if (!drawer || !overlay) return;

  renderShoppingCart();

  drawer.hidden = false;
  overlay.hidden = false;

  lockBodyScroll();
  getElement("closeCart")?.focus();
}

function closeShoppingCart() {
  const drawer = getElement("cartDrawer");
  const overlay = getElement("cartOverlay");

  if (!drawer || !overlay) return;

  drawer.hidden = true;
  overlay.hidden = true;

  unlockBodyScroll();
  getElement("cartTrigger")?.focus();
}

function initializeShoppingCart() {
  renderShoppingCart();

  getElement("cartTrigger")?.addEventListener(
    "click",
    openShoppingCart
  );

  getElement("closeCart")?.addEventListener(
    "click",
    closeShoppingCart
  );

  getElement("cartOverlay")?.addEventListener(
    "click",
    closeShoppingCart
  );

  getElement("continueShopping")?.addEventListener(
    "click",
    closeShoppingCart
  );
}

/* === SHOPPING CART END === */


/* === INGREDIENT EXPLORER START === */

let ingredientSearchTerm = "";
let activeIngredientFilter = "all";

function getFilteredIngredients() {
  return INGREDIENTS.filter(ingredient => {
    const matchesCategory =
      activeIngredientFilter === "all" ||
      ingredient.group === activeIngredientFilter;

    const searchableContent = [
      ingredient.name,
      ingredient.category,
      ingredient.description,
      ingredient.details
    ].join(" ").toLowerCase();

    return matchesCategory &&
      searchableContent.includes(ingredientSearchTerm.toLowerCase());
  });
}

function generateIngredientCard(ingredient, index) {
  const detailsId = `ingredient-details-${index}`;

  return `
    <article class="ingredient-card">
      <div class="ingredient-card-heading">
        <span class="ingredient-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <div class="ingredient-heading-text">
          <h3>${escapeHTML(ingredient.name)}</h3>

          <span class="ingredient-category">
            ${escapeHTML(ingredient.category)}
          </span>
        </div>
      </div>

      <p class="ingredient-description">
        ${escapeHTML(ingredient.description)}
      </p>

      <button
        type="button"
        class="ingredient-more"
        data-ingredient-toggle="${detailsId}"
        aria-expanded="false"
        aria-controls="${detailsId}"
      >
        LEARN MORE +
      </button>

      <div id="${detailsId}" hidden>
        <p class="ingredient-description">
          ${escapeHTML(ingredient.details)}
        </p>
      </div>
    </article>
  `;
}

function renderIngredientExplorer() {
  const grid = getElement("ingredientGrid");
  if (!grid) return;

  const ingredients = getFilteredIngredients();

  grid.innerHTML = ingredients.length
    ? ingredients.map(generateIngredientCard).join("")
    : `<p class="empty-reviews">No ingredients match your search.</p>`;

  setElementText(
    "ingredientResultCount",
    `${ingredients.length} of ${INGREDIENTS.length} ingredients`
  );

  grid.querySelectorAll("[data-ingredient-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      const details = getElement(button.dataset.ingredientToggle);
      if (!details) return;

      details.hidden = !details.hidden;

      const expanded = !details.hidden;

      button.setAttribute("aria-expanded", String(expanded));
      button.textContent = expanded ? "SHOW LESS −" : "LEARN MORE +";
    });
  });
}

function initializeIngredientExplorer() {
  const grid = getElement("ingredientGrid");
  if (!grid) return;

  const controls = document.createElement("div");
  controls.className = "ingredient-controls";

  controls.innerHTML = `
    <div class="ingredient-search-wrap">
      <label
        class="ingredient-search-label"
        for="ingredientSearch"
      >
        SEARCH INGREDIENTS
      </label>

      <input
        class="ingredient-search"
        id="ingredientSearch"
        type="search"
        placeholder="Search ingredients..."
        autocomplete="off"
      >
    </div>

    <div
      class="ingredient-filters"
      role="group"
      aria-label="Ingredient categories"
    >
      <button
        type="button"
        class="ingredient-filter active"
        data-ingredient-filter="all"
        aria-pressed="true"
      >
        ALL
      </button>

      <button
        type="button"
        class="ingredient-filter"
        data-ingredient-filter="blend"
        aria-pressed="false"
      >
        PROPRIETARY BLEND
      </button>

      <button
        type="button"
        class="ingredient-filter"
        data-ingredient-filter="other"
        aria-pressed="false"
      >
        OTHER INGREDIENTS
      </button>
    </div>

    <p
      class="ingredient-result-count"
      id="ingredientResultCount"
      aria-live="polite"
    ></p>
  `;

  grid.before(controls);

  getElement("ingredientSearch")?.addEventListener("input", event => {
    ingredientSearchTerm = event.target.value.trim();
    renderIngredientExplorer();
  });

  controls.querySelectorAll("[data-ingredient-filter]").forEach(button => {
    button.addEventListener("click", () => {
      activeIngredientFilter = button.dataset.ingredientFilter;

      controls.querySelectorAll("[data-ingredient-filter]")
        .forEach(filterButton => {
          const isActive =
            filterButton.dataset.ingredientFilter ===
            activeIngredientFilter;

          filterButton.classList.toggle("active", isActive);
          filterButton.setAttribute("aria-pressed", String(isActive));
        });

      renderIngredientExplorer();
    });
  });

  renderIngredientExplorer();
}

/* === INGREDIENT EXPLORER END === */


/* === PRODUCT LABEL VIEWER START === */

let labelZoomLevel = 1;
let previousLabelFocus = null;

const LABEL_ZOOM_SETTINGS = {
  minimum: 0.5,
  maximum: 3,
  increment: 0.25,
  baseWidth: 900
};

function updateLabelZoom() {
  const image = getElement("modalLabelImage");
  if (!image) return;

  image.style.width =
    `${Math.round(LABEL_ZOOM_SETTINGS.baseWidth * labelZoomLevel)}px`;

  image.style.height = "auto";
}

function synchronizeProductLabelImages() {
  const preview = getElement("labelPreview");
  const modalImage = getElement("modalLabelImage");

  /*
    Override old HTML filenames, including
    outdated data-full-src attributes.
  */

  if (preview instanceof HTMLImageElement) {
    preview.src = PRODUCT_IMAGES.productLabel;
    preview.alt = "007-NRG promotional label design preview";
  } else if (preview) {
    const nestedImage = preview.querySelector("img");

    if (nestedImage) {
      nestedImage.src = PRODUCT_IMAGES.productLabel;
      nestedImage.alt = "007-NRG promotional label design preview";
    }
  }

  if (modalImage) {
    modalImage.src = PRODUCT_IMAGES.productLabel;
    modalImage.dataset.fullSrc = PRODUCT_IMAGES.productLabel;
    modalImage.alt = "Enlarged 007-NRG promotional label design preview";
  }
}

function openProductLabel() {
  const modal = getElement("labelModal");
  const image = getElement("modalLabelImage");

  if (!modal || !image) return;

  previousLabelFocus = document.activeElement;

  image.src = PRODUCT_IMAGES.productLabel;

  labelZoomLevel = 1;
  updateLabelZoom();

  modal.hidden = false;
  lockBodyScroll();

  getElement("closeLabel")?.focus();
}

function closeProductLabel() {
  const modal = getElement("labelModal");
  if (!modal || modal.hidden) return;

  modal.hidden = true;
  unlockBodyScroll();

  if (previousLabelFocus?.focus) {
    previousLabelFocus.focus();
  }
}

function changeLabelZoom(amount) {
  labelZoomLevel = Math.max(
    LABEL_ZOOM_SETTINGS.minimum,
    Math.min(
      LABEL_ZOOM_SETTINGS.maximum,
      labelZoomLevel + amount
    )
  );

  updateLabelZoom();
}

function initializeProductLabelViewer() {
  synchronizeProductLabelImages();

  getElement("openLabelButton")?.addEventListener(
    "click",
    openProductLabel
  );

  getElement("labelPreview")?.addEventListener(
    "click",
    openProductLabel
  );

  getElement("closeLabel")?.addEventListener(
    "click",
    closeProductLabel
  );

  getElement("zoomIn")?.addEventListener("click", () => {
    changeLabelZoom(LABEL_ZOOM_SETTINGS.increment);
  });

  getElement("zoomOut")?.addEventListener("click", () => {
    changeLabelZoom(-LABEL_ZOOM_SETTINGS.increment);
  });
}

/* === PRODUCT LABEL VIEWER END === */


/* === BROWSER-LOCAL REVIEWS START === */

/*
  These are local demo reviews only.
  They are not shared between visitors.
*/

let selectedReviewRating = 0;

function isValidStoredReview(review) {
  return Boolean(
    review &&
    typeof review === "object" &&
    typeof review.name === "string" &&
    review.name.trim().length >= 1 &&
    review.name.length <= 60 &&
    typeof review.text === "string" &&
    review.text.trim().length >= 10 &&
    review.text.length <= 1000 &&
    Number.isInteger(review.rating) &&
    review.rating >= 1 &&
    review.rating <= 5 &&
    typeof review.createdAt === "string"
  );
}

function loadDemoReviews() {
  const storedReviews = safelyReadStorage(
    SITE_CONFIG.reviewStorageKey,
    []
  );

  if (!Array.isArray(storedReviews)) return [];

  return storedReviews
    .filter(isValidStoredReview)
    .slice(0, SITE_CONFIG.maximumDemoReviews);
}

let demoReviews = loadDemoReviews();

function generateStarDisplay(rating) {
  const normalizedRating = Math.max(
    0,
    Math.min(5, Math.round(rating))
  );

  return "★".repeat(normalizedRating) +
    "☆".repeat(5 - normalizedRating);
}

function updateReviewStarPicker() {
  const picker = getElement("starPicker");
  if (!picker) return;

  picker.querySelectorAll("[data-rating]").forEach(button => {
    const rating = Number(button.dataset.rating);

    button.classList.toggle(
      "selected",
      rating <= selectedReviewRating
    );

    button.setAttribute(
      "aria-pressed",
      String(rating === selectedReviewRating)
    );
  });
}

function renderDemoReviews() {
  const list = getElement("reviewList");
  if (!list) return;

  if (!demoReviews.length) {
    list.innerHTML = `
      <div class="empty-reviews panel">
        <h3>NO DEMO REVIEWS YET</h3>

        <p>
          Add a review to preview
          the customer feedback layout.
        </p>
      </div>
    `;

    setElementText("averageRating", "—");
    setElementText("averageStars", "☆☆☆☆☆");
    setElementText("reviewCount", "No reviews yet");

    return;
  }

  const totalRating = demoReviews.reduce(
    (total, review) => total + review.rating,
    0
  );

  const averageRating = totalRating / demoReviews.length;

  setElementText("averageRating", averageRating.toFixed(1));
  setElementText("averageStars", generateStarDisplay(averageRating));

  setElementText(
    "reviewCount",
    `${demoReviews.length} browser-local demo review${demoReviews.length === 1 ? "" : "s"}`
  );

  list.innerHTML = demoReviews.map(review => {
    const date = new Date(review.createdAt);

    const formattedDate = Number.isNaN(date.getTime())
      ? "Date unavailable"
      : date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });

    return `
      <article class="review-card">
        <div
          class="rating-stars"
          aria-label="${review.rating} out of 5 stars"
        >
          ${generateStarDisplay(review.rating)}
        </div>

        <h3>${escapeHTML(review.name)}</h3>

        <span class="review-flavor">
          007-NRG · ${escapeHTML(formattedDate)}
        </span>

        <p>${escapeHTML(review.text)}</p>
      </article>
    `;
  }).join("");
}

function initializeDemoReviews() {
  const form = getElement("reviewForm");
  const picker = getElement("starPicker");

  if (!form || !picker) return;

  picker.querySelectorAll("[data-rating]").forEach(button => {
    button.addEventListener("click", () => {
      selectedReviewRating = Number(button.dataset.rating);
      updateReviewStarPicker();
    });
  });

  form.addEventListener("submit", event => {
    event.preventDefault();

    const reviewName = getElement("reviewName")?.value.trim() || "";
    const reviewText = getElement("reviewText")?.value.trim() || "";

    if (reviewName.length < 1 || reviewName.length > 60) {
      setElementText(
        "reviewStatus",
        "Please enter a valid display name."
      );
      return;
    }

    if (selectedReviewRating < 1 || selectedReviewRating > 5) {
      setElementText(
        "reviewStatus",
        "Please select a star rating."
      );
      return;
    }

    if (reviewText.length < 10 || reviewText.length > 1000) {
      setElementText(
        "reviewStatus",
        "Your review must contain 10 to 1000 characters."
      );
      return;
    }

    const newReview = {
      id: `review-${Date.now()}`,
      name: reviewName,
      text: reviewText,
      rating: selectedReviewRating,
      createdAt: new Date().toISOString()
    };

    demoReviews.unshift(newReview);

    demoReviews = demoReviews.slice(
      0,
      SITE_CONFIG.maximumDemoReviews
    );

    const wasSaved = safelyWriteStorage(
      SITE_CONFIG.reviewStorageKey,
      demoReviews
    );

    renderDemoReviews();
    form.reset();

    selectedReviewRating = 0;
    updateReviewStarPicker();

    setElementText(
      "reviewStatus",
      wasSaved
        ? "Demo review saved in this browser only."
        : "Review displayed, but browser storage is unavailable."
    );

    showToast("Demo review added.");
  });

  updateReviewStarPicker();
  renderDemoReviews();
}

/* === BROWSER-LOCAL REVIEWS END === */


/* === SCROLL ANIMATIONS START === */

function initializeScrollAnimations() {
  const elements = document.querySelectorAll(".reveal");

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    reducedMotion ||
    !("IntersectionObserver" in window)
  ) {
    elements.forEach(element => {
      element.classList.add("visible");
    });

    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px 40px 0px"
  });

  elements.forEach(element => observer.observe(element));
}

/* === SCROLL ANIMATIONS END === */


/* === KEYBOARD ACCESSIBILITY START === */

function initializeKeyboardControls() {
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      const labelModal = getElement("labelModal");
      const productModal = getElement("productModal");
      const cartDrawer = getElement("cartDrawer");

      if (labelModal && !labelModal.hidden) {
        closeProductLabel();
        return;
      }

      if (productModal && !productModal.hidden) {
        closeProductPreview();
        return;
      }

      if (cartDrawer && !cartDrawer.hidden) {
        closeShoppingCart();
        return;
      }

      closeMobileNavigation();
    }

    if (event.key !== "Tab") return;

    const activeDialog = [
      getElement("labelModal"),
      getElement("productModal"),
      getElement("cartDrawer")
    ].find(dialog => dialog && !dialog.hidden);

    if (!activeDialog) return;

    const focusableElements = Array.from(
      activeDialog.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter(element => element.getClientRects().length > 0);

    if (!focusableElements.length) return;

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (
        document.activeElement === first ||
        !activeDialog.contains(document.activeElement)
      ) {
        event.preventDefault();
        last.focus();
      }
    } else {
      if (
        document.activeElement === last ||
        !activeDialog.contains(document.activeElement)
      ) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

/* === KEYBOARD ACCESSIBILITY END === */


/* === IMAGE ERROR HANDLING START === */

function initializeImageErrorHandling() {
  document.addEventListener("error", event => {
    const image = event.target;

    if (!(image instanceof HTMLImageElement)) return;

    console.warn(
      "[007-NRG] Image could not be loaded:",
      image.currentSrc || image.src
    );

    /*
      Image failures are logged instead of
      silently replacing them with old artwork.
    */
  }, true);
}

/* === IMAGE ERROR HANDLING END === */


/* === APPLICATION INITIALIZATION START === */

function initializeApplication() {
  setElementText("currentYear", new Date().getFullYear());

  initializeImageErrorHandling();
  initializeMobileNavigation();
  initializeHeroSlideshow();
  initializeProductCollection();
  initializeShoppingCart();
  initializeIngredientExplorer();
  initializeProductLabelViewer();
  initializeDemoReviews();
  initializeScrollAnimations();
  initializeKeyboardControls();

  console.info("[007-NRG] Website initialized.");
  console.info("[007-NRG] Checkout remains disabled.");
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
