
"use strict";

/* ============================================================
   007-NRG WEBSITE
   Complete JavaScript — Products, Ingredients, Tools & UI
   ============================================================ */

/* === CONFIGURATION START === */

const SITE_CONFIG = {
  heroRotationInterval: 4000,
  heroFadeDuration: 180,
  checkoutEnabled: false
};

const PRODUCT_IMAGES = {
  singleBottle: "images/007-NRG-single-bottle-600x900.png",
  grapeBottle: "images/007-NRG-Grape-single-bottle-600x900.png",
  waterSplashBottle: "images/007-NRG-600x900-Water-Splash-Bottle.png",
  blueRaspberryBottle: "images/007-NRG-Blue-Raspberry-Single-600x900.png",
  backSplashBottle: "images/007-NRG-Single_Bottle_Back_Splash.png",
  displayCase: "images/007-NRG-20pck-Display.png",
  displayBox: "images/007-NRG-20pck-Bottles-In-Box.png",
  productLabel: "images/007-NRG-Label-no-bkgd-1536x1024.png"
};

/* === CONFIGURATION END === */


/* ============================================================
   PRODUCT DATA
   ============================================================ */

/* === PRODUCTS START === */

const PRODUCTS = [
  {
    id: "007-nrg-single",
    name: "007-NRG Single Bottle",
    type: "single",
    size: "40 mL",
    image: PRODUCT_IMAGES.singleBottle,
    badge: "SINGLE BOTTLE",
    description: "The signature 007-NRG bottle.",
    priceCents: null
  },
  {
    id: "007-nrg-display",
    name: "007-NRG 20-Bottle Display",
    type: "case",
    size: "20 × 40 mL",
    image: PRODUCT_IMAGES.displayCase,
    badge: "20-BOTTLE DISPLAY",
    description: "Twenty individual bottles in a branded retail display.",
    priceCents: null
  },
  {
    id: "007-nrg-box",
    name: "007-NRG Display Packaging",
    type: "case",
    size: "20-Bottle Packaging",
    image: PRODUCT_IMAGES.displayBox,
    badge: "DISPLAY PACKAGING",
    description: "Explore the 007-NRG display packaging.",
    priceCents: null
  }
];

/* === PRODUCTS END === */


/* ============================================================
   HERO CAROUSEL DATA
   ============================================================ */

/* === HERO SLIDES START === */

const HERO_SLIDES = [
  {
    edition: "01 / ORIGINAL",
    title: "HYPER FOCUSED <em>ENERGY.</em>",
    description: "Meet the signature 007-NRG bottle. Bold design, unmistakable identity.",
    image: PRODUCT_IMAGES.singleBottle,
    alt: "Original 007-NRG single bottle"
  },
  {
    edition: "02 / GRAPE",
    title: "A BOLDER <em>PURPLE.</em>",
    description: "A rich grape-inspired look with deep purple color and signature 007-NRG styling.",
    image: PRODUCT_IMAGES.grapeBottle,
    alt: "007-NRG grape bottle design"
  },
  {
    edition: "03 / SIGNATURE SPLASH",
    title: "MAKE A <em>SPLASH.</em>",
    description: "The signature 007-NRG bottle in a striking, high-impact presentation.",
    image: PRODUCT_IMAGES.waterSplashBottle,
    alt: "007-NRG bottle with water splash"
  },
  {
    edition: "04 / BLUE RASPBERRY",
    title: "BRING THE <em>BLUE.</em>",
    description: "A vibrant blue raspberry-inspired look with the unmistakable 007-NRG identity.",
    image: PRODUCT_IMAGES.blueRaspberryBottle,
    alt: "007-NRG blue raspberry bottle design"
  }
];

/* === HERO SLIDES END === */


/* ============================================================
   PRODUCT LABEL INFORMATION
   ============================================================ */

/* === LABEL DATA START === */

/*
  Ingredient names are based on the supplied original
  007-NRG ingredient artwork.

  The 9,048 mg amount is the TOTAL proprietary blend,
  not an amount for any individual ingredient.

  Confirm final artwork, exact ingredient wording,
  and warnings with the client before publication.
*/

const PRODUCT_LABEL_INFORMATION = {
  servingSize: "1 Bottle (40 mL)",
  servingsPerContainer: 1,
  proprietaryBlendAmount: "9,048 mg",

  proprietaryBlend: [
    "Beta-Alanine",
    "L-Citrulline Malate 2:1",
    "Gamma Aminobutyric Acid (GABA)",
    "Caffeine Anhydrous",
    "Dicaffeine Malate",
    "AMPiberry® (Juniperus communis) (berry)",
    "Theobromine",
    "Yohimbine HCl (98%)",
    "Rauwolfia Vomitoria Extract (std. min. 90% alpha-yohimbine) (root bark)",
    "Ketones"
  ],

  otherIngredients: [
    "Purified Water",
    "Citric Acid",
    "Natural & Artificial Flavors",
    "Silicon Dioxide",
    "Calcium Silicate",
    "Sucralose",
    "Acesulfame Potassium (Ace K)",
    "FD&C Red #40",
    "Potassium Sorbate",
    "Sodium Benzoate"
  ]
};

/* === LABEL DATA END === */


/* ============================================================
   INGREDIENT KNOWLEDGE BASE
   ============================================================ */

/* === INGREDIENT DATA START === */

/*
  These are general educational ingredient facts.
  They are not claims about the finished 007-NRG product.
*/

const INGREDIENTS = [
  {
    name: "Beta-Alanine",
    category: "Amino Acid",
    group: "blend",
    description: "An amino acid involved in the production of carnosine.",
    details: "Carnosine is found in skeletal muscle and helps buffer acidity. Beta-alanine supplementation can cause temporary skin tingling, called paresthesia."
  },
  {
    name: "L-Citrulline Malate 2:1",
    category: "Amino Acid Compound",
    group: "blend",
    description: "A combination of L-citrulline and malate.",
    details: "L-citrulline participates in the body's urea cycle and can be converted into arginine, which is involved in nitric oxide production. Malate participates in cellular energy metabolism."
  },
  {
    name: "Gamma Aminobutyric Acid (GABA)",
    category: "Neurotransmitter",
    group: "blend",
    description: "A naturally occurring inhibitory neurotransmitter.",
    details: "GABA helps regulate nerve signaling in the central nervous system. Research is ongoing into whether orally consumed GABA produces meaningful effects in the brain."
  },
  {
    name: "Caffeine Anhydrous",
    category: "Stimulant",
    group: "blend",
    description: "A concentrated, dehydrated form of caffeine.",
    details: "Caffeine stimulates the central nervous system primarily by blocking adenosine receptors. Excess intake can cause insomnia, anxiety, rapid heartbeat, and other adverse effects."
  },
  {
    name: "Dicaffeine Malate",
    category: "Caffeine Compound",
    group: "blend",
    description: "A compound combining caffeine with malic acid.",
    details: "Dicaffeine malate is another source of caffeine. When assessing total caffeine exposure, caffeine from all ingredients and beverages should be considered."
  },
  {
    name: "AMPiberry®",
    category: "Botanical Ingredient",
    group: "blend",
    description: "A branded ingredient associated with juniper berry.",
    details: "Juniperus communis is an evergreen plant whose berry-like cones have a history of culinary use. The properties of a specific branded extract depend on its composition and manufacturing specifications."
  },
  {
    name: "Theobromine",
    category: "Methylxanthine",
    group: "blend",
    description: "A naturally occurring compound found in cacao.",
    details: "Theobromine is chemically related to caffeine. It has different effects on the nervous and cardiovascular systems and may contribute to overall methylxanthine exposure."
  },
  {
    name: "Yohimbine HCl (98%)",
    category: "Adrenergic Compound",
    group: "blend",
    description: "A pharmacologically active alpha-2 adrenergic receptor antagonist.",
    details: "Yohimbine can affect blood pressure, heart rate, and anxiety. It can interact with medications and other stimulants. Its presence warrants particular attention to product safety information."
  },
  {
    name: "Rauwolfia Vomitoria Extract",
    category: "Botanical Extract",
    group: "blend",
    description: "A botanical extract identified on the supplied label as standardized for alpha-yohimbine.",
    details: "Alpha-yohimbine, also known as rauwolscine, is an adrenergically active alkaloid. Its safety profile and potential interactions require caution, especially alongside other stimulants."
  },
  {
    name: "Ketones",
    category: "Formula Component",
    group: "blend",
    description: "A broad term for a class of chemical compounds.",
    details: "Ketone bodies such as beta-hydroxybutyrate are produced during fat metabolism and nutritional ketosis. The label does not specify which ketone ingredient is included, so its properties cannot be established from the name alone."
  },
  {
    name: "Purified Water",
    category: "Other Ingredient",
    group: "other",
    description: "Water that has undergone purification.",
    details: "Purified water is commonly used as a liquid base in beverage and other formulations."
  },
  {
    name: "Citric Acid",
    category: "Acidulant",
    group: "other",
    description: "An organic acid naturally found in citrus fruits.",
    details: "Citric acid is widely used in foods and beverages to contribute tartness and help adjust acidity."
  },
  {
    name: "Natural & Artificial Flavors",
    category: "Flavoring",
    group: "other",
    description: "Ingredients used to create or adjust flavor.",
    details: "Natural and artificial flavoring substances can come from different sources. The exact flavor components are not individually identified in this ingredient declaration."
  },
  {
    name: "Silicon Dioxide",
    category: "Processing Ingredient",
    group: "other",
    description: "A compound of silicon and oxygen.",
    details: "Silicon dioxide is used in some food and supplement manufacturing applications, including as an anti-caking agent in dry mixtures."
  },
  {
    name: "Calcium Silicate",
    category: "Processing Ingredient",
    group: "other",
    description: "A calcium-containing silicate compound.",
    details: "Calcium silicate is used in certain food manufacturing applications, including as an anti-caking or processing aid."
  },
  {
    name: "Sucralose",
    category: "Sweetener",
    group: "other",
    description: "A high-intensity sweetener.",
    details: "Sucralose provides sweetness in much smaller amounts than table sugar. It is used in a variety of reduced-sugar food and beverage products."
  },
  {
    name: "Acesulfame Potassium (Ace K)",
    category: "Sweetener",
    group: "other",
    description: "A high-intensity sweetener also called Ace K.",
    details: "Acesulfame potassium is often combined with other sweeteners to achieve a desired sweetness profile."
  },
  {
    name: "FD&C Red #40",
    category: "Color Additive",
    group: "other",
    description: "A certified synthetic red color additive.",
    details: "FD&C Red No. 40 is used to provide color in certain foods and beverages. Its use is subject to applicable color additive regulations."
  },
  {
    name: "Potassium Sorbate",
    category: "Preservative",
    group: "other",
    description: "A preservative used in certain foods and beverages.",
    details: "Potassium sorbate is commonly used to inhibit the growth of some yeasts and molds in suitable formulations."
  },
  {
    name: "Sodium Benzoate",
    category: "Preservative",
    group: "other",
    description: "A preservative often used in acidic products.",
    details: "Sodium benzoate is used to inhibit certain microorganisms. Its effectiveness depends in part on the acidity of the formulation."
  }
];

/* === INGREDIENT DATA END === */


/* ============================================================
   SHARED HELPERS
   ============================================================ */

/* === HELPERS START === */

function getElement(id) {
  return document.getElementById(id);
}

function setElementText(id, value) {
  const element = getElement(id);
  if (element) element.textContent = String(value);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function getProductById(id) {
  return PRODUCTS.find(product => product.id === id);
}

function formatProductPrice(product) {
  if (product.priceCents == null) return "DETAILS AVAILABLE";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(product.priceCents / 100);
}

let toastTimeoutId = null;

function showToast(message) {
  const toast = getElement("toast");
  if (!toast) return;

  clearTimeout(toastTimeoutId);

  toast.textContent = message;
  toast.hidden = false;
  toast.classList.add("visible");

  toastTimeoutId = setTimeout(() => {
    toast.classList.remove("visible");
    toast.hidden = true;
  }, 3000);
}

/* === HELPERS END === */


/* ============================================================
   MOBILE NAVIGATION
   ============================================================ */

/* === MOBILE NAVIGATION START === */

function initializeMobileNavigation() {
  const toggle = getElement("menuToggle");
  const links = getElement("navLinks");

  if (!toggle || !links) return;

  function closeMenu() {
    links.classList.remove("open", "active");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";

    links.classList.toggle("open", !open);
    links.classList.toggle("active", !open);

    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
  });

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", event => {
    if (!links.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
}

/* === MOBILE NAVIGATION END === */


/* ============================================================
   HERO CAROUSEL
   ============================================================ */

/* === HERO CAROUSEL START === */

let currentHeroSlideIndex = 0;
let heroRotationTimer = null;
let heroTransitionRequestId = 0;

const heroImageCache = new Map();

function preloadHeroImage(source) {
  if (heroImageCache.has(source)) {
    return heroImageCache.get(source);
  }

  const promise = new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve();
    image.onerror = () => reject(new Error(`Image not found: ${source}`));
    image.src = source;
  });

  heroImageCache.set(source, promise);
  return promise;
}

function updateHeroIndicators() {
  getElement("slideIndicators")
    ?.querySelectorAll("button")
    .forEach((button, index) => {
      const active = index === currentHeroSlideIndex;

      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
}

async function displayHeroSlide(index, immediate = false) {
  const image = getElement("heroProductImage");
  if (!image) return;

  const normalizedIndex =
    ((index % HERO_SLIDES.length) + HERO_SLIDES.length) %
    HERO_SLIDES.length;

  const slide = HERO_SLIDES[normalizedIndex];
  const requestId = ++heroTransitionRequestId;

  try {
    await preloadHeroImage(slide.image);
  } catch (error) {
    console.warn("[007-NRG]", error.message);
    return;
  }

  if (requestId !== heroTransitionRequestId) return;

  const reducedMotion = matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!immediate && !reducedMotion) {
    image.classList.add("changing");

    await new Promise(resolve =>
      setTimeout(resolve, SITE_CONFIG.heroFadeDuration)
    );

    if (requestId !== heroTransitionRequestId) return;
  }

  currentHeroSlideIndex = normalizedIndex;

  setElementText("heroEdition", slide.edition);
  setElementText("heroDescription", slide.description);

  const title = getElement("heroTitle");
  if (title) title.innerHTML = slide.title;

  image.src = slide.image;
  image.alt = slide.alt;
  image.width = 600;
  image.height = 900;

  updateHeroIndicators();

  requestAnimationFrame(() => {
    image.classList.remove("changing");
  });
}

function stopHeroRotation() {
  clearInterval(heroRotationTimer);
  heroRotationTimer = null;
}

function startHeroRotation() {
  stopHeroRotation();

  if (
    document.hidden ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  heroRotationTimer = setInterval(() => {
    displayHeroSlide(currentHeroSlideIndex + 1);
  }, SITE_CONFIG.heroRotationInterval);
}

function selectHeroSlide(index) {
  displayHeroSlide(index);
  startHeroRotation();
}

function initializeHeroSlideshow() {
  const indicators = getElement("slideIndicators");
  if (!indicators) return;

  indicators.innerHTML = "";

  HERO_SLIDES.forEach((slide, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.setAttribute("aria-label", `Show slide ${index + 1}`);
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", () => {
      selectHeroSlide(index);
    });

    indicators.appendChild(button);

    preloadHeroImage(slide.image).catch(() => {});
  });

  getElement("previousSlide")?.addEventListener("click", () => {
    selectHeroSlide(currentHeroSlideIndex - 1);
  });

  getElement("nextSlide")?.addEventListener("click", () => {
    selectHeroSlide(currentHeroSlideIndex + 1);
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopHeroRotation();
    else startHeroRotation();
  });

  displayHeroSlide(0, true);
  startHeroRotation();
}

/* === HERO CAROUSEL END === */


/* ============================================================
   PRODUCT COLLECTION
   ============================================================ */

/* === PRODUCT COLLECTION START === */

let activeProductFilter = "all";

function generateProductCard(product) {
  return `
    <article class="product-card reveal visible">
      <div class="product-image-wrap">
        <span class="product-badge">
          ${escapeHTML(product.badge)}
        </span>

        <button
          class="product-image-button"
          type="button"
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
        <span class="eyebrow">
          ${escapeHTML(product.size)}
        </span>

        <h3>${escapeHTML(product.name)}</h3>

        <p>${escapeHTML(product.description)}</p>

        <strong class="product-price">
          ${formatProductPrice(product)}
        </strong>

        <button
          class="button button-secondary"
          type="button"
          data-preview-product="${escapeHTML(product.id)}"
        >
          VIEW DETAILS
        </button>
      </div>
    </article>
  `;
}

function renderProductCollection() {
  const grid = getElement("productGrid");
  if (!grid) return;

  const filtered = PRODUCTS.filter(product =>
    activeProductFilter === "all" ||
    product.type === activeProductFilter
  );

  grid.innerHTML = filtered.map(generateProductCard).join("");

  grid.querySelectorAll("[data-preview-product]").forEach(button => {
    button.addEventListener("click", () => {
      openProductPreview(button.dataset.previewProduct);
    });
  });
}

function initializeProductCollection() {
  document.querySelectorAll(".shop-tab").forEach(button => {
    button.addEventListener("click", () => {
      activeProductFilter = button.dataset.filter;

      document.querySelectorAll(".shop-tab").forEach(tab => {
        const active = tab === button;
        tab.classList.toggle("active", active);
        tab.setAttribute("aria-pressed", String(active));
      });

      renderProductCollection();
    });
  });

  renderProductCollection();
}

/* === PRODUCT COLLECTION END === */


/* ============================================================
   DIALOG HELPERS
   ============================================================ */

/* === DIALOG HELPERS START === */

let lastFocusedElement = null;

function openDialog(element, focusTarget) {
  if (!element) return;

  lastFocusedElement = document.activeElement;

  element.hidden = false;
  element.classList.add("open", "active", "visible");

  document.body.style.overflow = "hidden";

  requestAnimationFrame(() => {
    (focusTarget || element.querySelector("button"))?.focus();
  });
}

function closeDialog(element) {
  if (!element) return;

  element.hidden = true;
  element.classList.remove("open", "active", "visible");

  const anotherOpen = [
    "productModal",
    "labelModal",
    "cartDrawer"
  ].some(id => {
    const dialog = getElement(id);
    return dialog && !dialog.hidden;
  });

  if (!anotherOpen) {
    document.body.style.overflow = "";
  }

  if (lastFocusedElement?.isConnected) {
    lastFocusedElement.focus();
  }
}

/* === DIALOG HELPERS END === */


/* ============================================================
   PRODUCT INGREDIENT DISCLOSURE
   ============================================================ */

/* === PRODUCT INGREDIENT DISCLOSURE START === */

function createProductIngredientDisclosure() {
  const label = PRODUCT_LABEL_INFORMATION;

  const createList = items =>
    items.map(item => `<li>${escapeHTML(item)}</li>`).join("");

  return `
    <section class="product-ingredient-information">

      <details class="product-ingredient-disclosure" open>

        <summary>
          <span>INGREDIENTS & PRODUCT INFORMATION</span>
          <span class="disclosure-chevron" aria-hidden="true"></span>
        </summary>

        <div class="product-ingredient-content">

          <div class="product-serving-information">
            <span>
              <strong>Serving Size</strong>
              ${escapeHTML(label.servingSize)}
            </span>

            <span>
              <strong>Servings Per Container</strong>
              ${label.servingsPerContainer}
            </span>
          </div>

          <div class="product-ingredient-group">

            <h3>PROPRIETARY BLEND</h3>

            <p class="blend-amount">
              ${escapeHTML(label.proprietaryBlendAmount)} total
            </p>

            <ul class="product-ingredient-list">
              ${createList(label.proprietaryBlend)}
            </ul>

            <p class="ingredient-footnote">
              The listed amount is for the entire blend.
              Individual ingredient amounts are not specified.
            </p>

          </div>

          <div class="product-ingredient-group">

            <h3>OTHER INGREDIENTS</h3>

            <ul class="product-ingredient-list">
              ${createList(label.otherIngredients)}
            </ul>

          </div>

          <div class="product-warning-information">

            <h3>IMPORTANT PRODUCT INFORMATION</h3>

            <p>
              Contains caffeine and other stimulant ingredients,
              including yohimbine compounds.
            </p>

            <p>
              Review the full product label for the
              manufacturer's directions and warnings.
            </p>

          </div>

          <a
            class="product-ingredient-label-link"
            href="#label"
            data-view-full-label
          >
            VIEW FULL PRODUCT LABEL
          </a>

        </div>
      </details>
    </section>
  `;
}

/* === PRODUCT INGREDIENT DISCLOSURE END === */


/* ============================================================
   PRODUCT QUICK VIEW
   ============================================================ */

/* === PRODUCT QUICK VIEW START === */

function initializeProductIngredientPopups() {
  const modal = getElement("productModal");
  const button = getElement("productModalAdd");

  if (!modal || !button) return;

  if (!modal.querySelector(".product-ingredient-information")) {
    button.insertAdjacentHTML(
      "afterend",
      createProductIngredientDisclosure()
    );
  }

  modal.querySelector("[data-view-full-label]")
    ?.addEventListener("click", event => {
      event.preventDefault();
      closeProductPreview();
      openProductLabel();
    });
}

function openProductPreview(productId) {
  const product = getProductById(productId);
  const modal = getElement("productModal");

  if (!product || !modal) return;

  setElementText("productModalTitle", product.name);
  setElementText("productModalSize", product.size);
  setElementText("productModalPrice", formatProductPrice(product));

  const image = getElement("productModalImage");

  if (image) {
    image.src = product.image;
    image.alt = product.name;
  }

  const button = getElement("productModalAdd");

  if (button) {
    button.disabled = true;
    button.textContent = "ORDERING COMING SOON";
  }

  const disclosure = modal.querySelector(
    ".product-ingredient-disclosure"
  );

  if (disclosure) disclosure.open = true;

  const details = modal.querySelector(".product-modal-details");
  if (details) details.scrollTop = 0;

  openDialog(modal, getElement("closeProductModal"));
}

function closeProductPreview() {
  closeDialog(getElement("productModal"));
}

function initializeProductPreview() {
  initializeProductIngredientPopups();

  getElement("closeProductModal")?.addEventListener(
    "click",
    closeProductPreview
  );

  getElement("productModal")?.addEventListener("click", event => {
    if (event.target.id === "productModal") {
      closeProductPreview();
    }
  });
}

/* === PRODUCT QUICK VIEW END === */


/* ============================================================
   SHOPPING CART
   ============================================================ */

/* === SHOPPING CART START === */

function updateCartDisplay() {
  setElementText("cartCount", "0");
  setElementText("cartSubtotal", "—");

  const items = getElement("cartItems");

  if (items) {
    items.innerHTML = `
      <div class="empty-cart">
        <p>YOUR BAG IS EMPTY.</p>
        <p>Explore the 007-NRG collection.</p>
      </div>
    `;
  }
}

function openShoppingCart() {
  updateCartDisplay();

  const overlay = getElement("cartOverlay");
  if (overlay) overlay.hidden = false;

  openDialog(getElement("cartDrawer"), getElement("closeCart"));
}

function closeShoppingCart() {
  closeDialog(getElement("cartDrawer"));

  const overlay = getElement("cartOverlay");
  if (overlay) overlay.hidden = true;
}

function initializeShoppingCart() {
  updateCartDisplay();

  getElement("cartTrigger")?.addEventListener(
    "click",
    openShoppingCart
  );

  getElement("closeCart")?.addEventListener(
    "click",
    closeShoppingCart
  );

  getElement("continueShopping")?.addEventListener(
    "click",
    closeShoppingCart
  );

  getElement("cartOverlay")?.addEventListener(
    "click",
    closeShoppingCart
  );
}

/* === SHOPPING CART END === */


/* ============================================================
   INGREDIENT EXPLORER
   ============================================================ */

/* === INGREDIENT EXPLORER START === */

let ingredientSearchQuery = "";
let activeIngredientFilter = "all";

function generateIngredientCard(ingredient) {
  return `
    <article class="ingredient-card reveal visible">

      <span class="eyebrow">
        ${escapeHTML(ingredient.category)}
      </span>

      <h3>${escapeHTML(ingredient.name)}</h3>

      <p>${escapeHTML(ingredient.description)}</p>

      <details class="ingredient-details">
        <summary>LEARN MORE</summary>

        <p>${escapeHTML(ingredient.details)}</p>
      </details>

    </article>
  `;
}

function renderIngredientExplorer() {
  const grid = getElement("ingredientGrid");
  if (!grid) return;

  const filtered = INGREDIENTS.filter(ingredient => {
    const groupMatches =
      activeIngredientFilter === "all" ||
      ingredient.group === activeIngredientFilter;

    const searchable = [
      ingredient.name,
      ingredient.category,
      ingredient.description,
      ingredient.details
    ].join(" ").toLowerCase();

    return (
      groupMatches &&
      searchable.includes(ingredientSearchQuery)
    );
  });

  grid.innerHTML = filtered.length
    ? filtered.map(generateIngredientCard).join("")
    : `
      <p class="empty-reviews">
        No ingredients match your search.
      </p>
    `;
}

function initializeIngredientExplorer() {
  const grid = getElement("ingredientGrid");
  if (!grid) return;

  const controls = document.createElement("div");
  controls.className = "ingredient-controls";

  controls.innerHTML = `
    <div class="ingredient-search">
      <label for="ingredientSearch">
        SEARCH INGREDIENTS
      </label>

      <input
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
        ALL INGREDIENTS
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
  `;

  grid.before(controls);

  controls.querySelector("#ingredientSearch")
    ?.addEventListener("input", event => {
      ingredientSearchQuery =
        event.target.value.trim().toLowerCase();

      renderIngredientExplorer();
    });

  controls.querySelectorAll("[data-ingredient-filter]")
    .forEach(button => {
      button.addEventListener("click", () => {
        activeIngredientFilter =
          button.dataset.ingredientFilter;

        controls.querySelectorAll("[data-ingredient-filter]")
          .forEach(tab => {
            const active = tab === button;

            tab.classList.toggle("active", active);
            tab.setAttribute("aria-pressed", String(active));
          });

        renderIngredientExplorer();
      });
    });

  renderIngredientExplorer();
}

/* === INGREDIENT EXPLORER END === */


/* ============================================================
   COMPACT INGREDIENT LABEL SUMMARY
   ============================================================ */

/* === LABEL SUMMARY START === */

function initializeIngredientLabelSummary() {
  const grid = getElement("ingredientGrid");
  if (!grid || getElement("ingredientLabelSummary")) return;

  const label = PRODUCT_LABEL_INFORMATION;

  const summary = document.createElement("div");

  summary.id = "ingredientLabelSummary";
  summary.className = "ingredient-label-summary";

  summary.innerHTML = `
    <div class="ingredient-label-summary-heading">
      <span class="eyebrow">INSIDE THE FORMULA</span>

      <h3>WHAT'S ON THE LABEL</h3>

      <p>
        A quick overview of the ingredients
        identified on the supplied product artwork.
      </p>
    </div>

    <div class="ingredient-label-groups">

      <details class="ingredient-label-group" open>
        <summary>
          <span>
            <strong>PROPRIETARY BLEND</strong>
            <small>
              ${escapeHTML(label.proprietaryBlendAmount)}
              · ${label.proprietaryBlend.length} ingredients
            </small>
          </span>

          <span class="disclosure-chevron" aria-hidden="true"></span>
        </summary>

        <div class="ingredient-label-group-content">
          <p>
            ${label.proprietaryBlend.map(escapeHTML).join(", ")}.
          </p>

          <p class="ingredient-footnote">
            The stated amount is for the entire blend.
          </p>
        </div>
      </details>

      <details class="ingredient-label-group">
        <summary>
          <span>
            <strong>OTHER INGREDIENTS</strong>
            <small>
              ${label.otherIngredients.length} ingredients
            </small>
          </span>

          <span class="disclosure-chevron" aria-hidden="true"></span>
        </summary>

        <div class="ingredient-label-group-content">
          <p>
            ${label.otherIngredients.map(escapeHTML).join(", ")}.
          </p>
        </div>
      </details>

    </div>

    <p class="ingredient-label-summary-note">
      Search or browse the cards below to learn
      more about each ingredient.
    </p>
  `;

  const controls = grid.previousElementSibling;

  if (controls?.classList.contains("ingredient-controls")) {
    controls.before(summary);
  } else {
    grid.before(summary);
  }
}

/* === LABEL SUMMARY END === */


/* ============================================================
   PRODUCT LABEL LIGHTBOX
   ============================================================ */

/* === LABEL VIEWER START === */

let labelZoomLevel = 1;

function updateLabelZoom() {
  const image = getElement("modalLabelImage");
  if (!image) return;

  image.style.transform = `scale(${labelZoomLevel})`;
  image.style.transformOrigin = "center center";
}

function openProductLabel() {
  const modal = getElement("labelModal");
  if (!modal) return;

  labelZoomLevel = 1;

  const image = getElement("modalLabelImage");

  if (image) {
    image.src = PRODUCT_IMAGES.productLabel;
    image.alt = "007-NRG product label artwork";
  }

  updateLabelZoom();

  openDialog(modal, getElement("closeLabel"));
}

function closeProductLabel() {
  closeDialog(getElement("labelModal"));
}

function initializeProductLabelViewer() {
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
    labelZoomLevel = Math.min(3, labelZoomLevel + 0.25);
    updateLabelZoom();
  });

  getElement("zoomOut")?.addEventListener("click", () => {
    labelZoomLevel = Math.max(0.5, labelZoomLevel - 0.25);
    updateLabelZoom();
  });

  getElement("labelModal")?.addEventListener("click", event => {
    if (event.target.id === "labelModal") {
      closeProductLabel();
    }
  });
}

/* === LABEL VIEWER END === */


/* ============================================================
   FITNESS & NUTRITION TOOL NAVIGATION
   ============================================================ */

/* === TOOL NAVIGATION START === */

function initializeToolNavigation() {
  const tabs = document.querySelectorAll("[data-tool]");
  const panels = document.querySelectorAll("[data-tool-panel]");

  if (!tabs.length || !panels.length) return;

  function selectTool(toolId) {
    tabs.forEach(tab => {
      const active = tab.dataset.tool === toolId;

      tab.classList.toggle("active", active);
      tab.setAttribute("aria-pressed", String(active));
    });

    panels.forEach(panel => {
      const active = panel.dataset.toolPanel === toolId;

      panel.hidden = !active;
      panel.classList.toggle("active", active);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      selectTool(tab.dataset.tool);
    });
  });

  selectTool("net-carbs");
}

/* === TOOL NAVIGATION END === */


/* ============================================================
   NET CARB CALCULATOR
   ============================================================ */

/* === NET CARB CALCULATOR START === */

function calculateNetCarbs() {
  const totalCarbs = Number(getElement("totalCarbs")?.value);
  const fiber = Number(getElement("dietaryFiber")?.value);
  const servings = Number(getElement("carbServings")?.value);

  const valid = [
    totalCarbs,
    fiber,
    servings
  ].every(Number.isFinite);

  if (
    !valid ||
    totalCarbs < 0 ||
    fiber < 0 ||
    fiber > totalCarbs ||
    servings <= 0 ||
    totalCarbs > 10000 ||
    fiber > 10000 ||
    servings > 1000
  ) {
    setElementText("netCarbValue", "—");

    setElementText(
      "netCarbExplanation",
      "Enter valid amounts. Dietary fiber cannot exceed total carbohydrates."
    );

    return;
  }

  const netPerServing = Math.max(0, totalCarbs - fiber);
  const totalNetCarbs = netPerServing * servings;

  const format = number =>
    Number(number.toFixed(2)).toLocaleString("en-US", {
      maximumFractionDigits: 2
    });

  setElementText("netCarbValue", format(totalNetCarbs));

  setElementText(
    "netCarbExplanation",
    `${format(netPerServing)} g net carbs per serving × ` +
    `${format(servings)} serving${servings === 1 ? "" : "s"}.`
  );
}

function initializeNetCarbCalculator() {
  const form = getElement("netCarbForm");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    calculateNetCarbs();
  });

  ["totalCarbs", "dietaryFiber", "carbServings"].forEach(id => {
    getElement(id)?.addEventListener("input", calculateNetCarbs);
  });

  form.addEventListener("reset", () => {
    requestAnimationFrame(calculateNetCarbs);
  });

  calculateNetCarbs();
}

/* === NET CARB CALCULATOR END === */


/* ============================================================
   WORKOUT INTERVAL TIMER
   ============================================================ */

/* === WORKOUT TIMER START === */

const WORKOUT_TIMER = {
  workSeconds: 30,
  restSeconds: 15,
  totalRounds: 8,

  currentRound: 1,
  phase: "ready",

  remainingMilliseconds: 30000,
  phaseDurationMilliseconds: 30000,

  deadline: null,
  intervalId: null,
  running: false
};

function formatTimerTime(milliseconds) {
  const seconds = Math.max(0, Math.ceil(milliseconds / 1000));

  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(remainder).padStart(2, "0")
  );
}

function readTimerSettings() {
  const work = Number(getElement("workSeconds")?.value);
  const rest = Number(getElement("restSeconds")?.value);
  const rounds = Number(getElement("timerRounds")?.value);

  if (
    !Number.isInteger(work) ||
    !Number.isInteger(rest) ||
    !Number.isInteger(rounds) ||
    work < 5 ||
    work > 3600 ||
    rest < 0 ||
    rest > 3600 ||
    rounds < 1 ||
    rounds > 100
  ) {
    showToast("Please enter valid workout timer settings.");
    return null;
  }

  return { work, rest, rounds };
}

function renderWorkoutTimer() {
  const timer = WORKOUT_TIMER;

  const phaseLabels = {
    ready: "READY",
    work: "WORK",
    rest: "REST",
    complete: "WORKOUT COMPLETE"
  };

  setElementText("timerPhase", phaseLabels[timer.phase]);
  setElementText(
    "timerClock",
    formatTimerTime(timer.remainingMilliseconds)
  );

  setElementText(
    "timerRound",
    timer.phase === "complete"
      ? `${timer.totalRounds} ROUNDS COMPLETE`
      : `ROUND ${timer.currentRound} OF ${timer.totalRounds}`
  );

  const progress = getElement("timerProgressBar");

  if (progress) {
    const duration = Math.max(
      1,
      timer.phaseDurationMilliseconds
    );

    const elapsed = duration - timer.remainingMilliseconds;

    const percentage = timer.phase === "complete"
      ? 100
      : Math.min(100, Math.max(0, elapsed / duration * 100));

    progress.style.width = `${percentage}%`;
  }

  const startButton = getElement("startTimer");
  const pauseButton = getElement("pauseTimer");

  if (startButton) {
    startButton.disabled = timer.running;

    startButton.textContent =
      timer.phase === "ready" || timer.phase === "complete"
        ? "START"
        : "RESUME";
  }

  if (pauseButton) {
    pauseButton.disabled = !timer.running;
  }

  ["workSeconds", "restSeconds", "timerRounds"].forEach(id => {
    const input = getElement(id);
    if (input) input.disabled = timer.running;
  });
}

function stopWorkoutTimerInterval() {
  clearInterval(WORKOUT_TIMER.intervalId);
  WORKOUT_TIMER.intervalId = null;
}

function advanceWorkoutTimerPhase() {
  const timer = WORKOUT_TIMER;

  if (timer.phase === "work") {
    if (timer.currentRound === timer.totalRounds) {
      timer.phase = "complete";
      timer.remainingMilliseconds = 0;
      timer.running = false;
      timer.deadline = null;

      stopWorkoutTimerInterval();
      showToast("Workout complete!");
      return;
    }

    if (timer.restSeconds > 0) {
      timer.phase = "rest";
      timer.phaseDurationMilliseconds =
        timer.restSeconds * 1000;
    } else {
      timer.currentRound++;
      timer.phase = "work";
      timer.phaseDurationMilliseconds =
        timer.workSeconds * 1000;
    }
  } else if (timer.phase === "rest") {
    timer.currentRound++;
    timer.phase = "work";
    timer.phaseDurationMilliseconds =
      timer.workSeconds * 1000;
  }

  timer.remainingMilliseconds =
    timer.phaseDurationMilliseconds;
}

function updateWorkoutTimer() {
  const timer = WORKOUT_TIMER;

  if (!timer.running || timer.deadline === null) return;

  /*
    Date.now() keeps the countdown aligned with
    elapsed real time even when browser intervals
    are throttled in a background tab.
  */

  let remaining = timer.deadline - Date.now();
  let transitions = 0;

  while (remaining <= 0 && timer.running && transitions < 300) {
    const overshoot = -remaining;

    advanceWorkoutTimerPhase();
    transitions++;

    if (!timer.running) break;

    remaining = timer.phaseDurationMilliseconds - overshoot;

    timer.deadline = Date.now() + remaining;
  }

  if (timer.running) {
    timer.remainingMilliseconds = Math.max(0, remaining);
  }

  renderWorkoutTimer();
}

function startWorkoutTimer() {
  const timer = WORKOUT_TIMER;

  if (timer.running) return;

  if (timer.phase === "ready" || timer.phase === "complete") {
    const settings = readTimerSettings();
    if (!settings) return;

    timer.workSeconds = settings.work;
    timer.restSeconds = settings.rest;
    timer.totalRounds = settings.rounds;

    timer.currentRound = 1;
    timer.phase = "work";

    timer.phaseDurationMilliseconds =
      timer.workSeconds * 1000;

    timer.remainingMilliseconds =
      timer.phaseDurationMilliseconds;
  }

  timer.running = true;
  timer.deadline = Date.now() + timer.remainingMilliseconds;

  stopWorkoutTimerInterval();

  timer.intervalId = setInterval(updateWorkoutTimer, 100);

  renderWorkoutTimer();
}

function pauseWorkoutTimer() {
  const timer = WORKOUT_TIMER;

  if (!timer.running) return;

  timer.remainingMilliseconds = Math.max(
    0,
    timer.deadline - Date.now()
  );

  timer.running = false;
  timer.deadline = null;

  stopWorkoutTimerInterval();
  renderWorkoutTimer();
}

function resetWorkoutTimer() {
  const timer = WORKOUT_TIMER;

  stopWorkoutTimerInterval();

  timer.running = false;
  timer.deadline = null;
  timer.phase = "ready";
  timer.currentRound = 1;

  const settings = readTimerSettings();

  if (settings) {
    timer.workSeconds = settings.work;
    timer.restSeconds = settings.rest;
    timer.totalRounds = settings.rounds;
  }

  timer.phaseDurationMilliseconds =
    timer.workSeconds * 1000;

  timer.remainingMilliseconds =
    timer.phaseDurationMilliseconds;

  renderWorkoutTimer();
}

function initializeWorkoutTimer() {
  if (!getElement("timerClock")) return;

  getElement("startTimer")?.addEventListener(
    "click",
    startWorkoutTimer
  );

  getElement("pauseTimer")?.addEventListener(
    "click",
    pauseWorkoutTimer
  );

  getElement("resetTimer")?.addEventListener(
    "click",
    resetWorkoutTimer
  );

  document.querySelectorAll(".timer-preset").forEach(button => {
    button.addEventListener("click", () => {
      if (WORKOUT_TIMER.running) {
        showToast("Pause or reset the timer before changing presets.");
        return;
      }

      getElement("workSeconds").value = button.dataset.work;
      getElement("restSeconds").value = button.dataset.rest;
      getElement("timerRounds").value = button.dataset.rounds;

      resetWorkoutTimer();
    });
  });

  ["workSeconds", "restSeconds", "timerRounds"].forEach(id => {
    getElement(id)?.addEventListener("change", () => {
      if (!WORKOUT_TIMER.running) {
        resetWorkoutTimer();
      }
    });
  });

  /*
    Update immediately when the tab becomes visible.
    The timer also accounts for elapsed time while hidden.
  */

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) updateWorkoutTimer();
  });

  resetWorkoutTimer();
}

/* === WORKOUT TIMER END === */


/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */

/* === SCROLL ANIMATIONS START === */

function initializeScrollAnimations() {
  const elements = document.querySelectorAll(".reveal");

  const reducedMotion = matchMedia(
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
    rootMargin: "0px 0px 35px 0px"
  });

  elements.forEach(element => observer.observe(element));
}

/* === SCROLL ANIMATIONS END === */


/* ============================================================
   KEYBOARD ACCESSIBILITY
   ============================================================ */

/* === KEYBOARD ACCESSIBILITY START === */

function initializeKeyboardControls() {
  document.addEventListener("keydown", event => {
    const dialogs = [
      getElement("labelModal"),
      getElement("productModal"),
      getElement("cartDrawer")
    ];

    const activeDialog = dialogs.find(
      dialog => dialog && !dialog.hidden
    );

    if (event.key === "Escape") {
      if (activeDialog?.id === "labelModal") {
        closeProductLabel();
      } else if (activeDialog?.id === "productModal") {
        closeProductPreview();
      } else if (activeDialog?.id === "cartDrawer") {
        closeShoppingCart();
      }

      return;
    }

    if (event.key !== "Tab" || !activeDialog) return;

    const focusable = Array.from(
      activeDialog.querySelectorAll(
        'button:not([disabled]), a[href], ' +
        'input:not([disabled]), textarea:not([disabled]), ' +
        '[tabindex]:not([tabindex="-1"])'
      )
    ).filter(element =>
      element.getClientRects().length > 0
    );

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (
      event.shiftKey &&
      (document.activeElement === first ||
       !activeDialog.contains(document.activeElement))
    ) {
      event.preventDefault();
      last.focus();
    } else if (
      !event.shiftKey &&
      (document.activeElement === last ||
       !activeDialog.contains(document.activeElement))
    ) {
      event.preventDefault();
      first.focus();
    }
  });
}

/* === KEYBOARD ACCESSIBILITY END === */


/* ============================================================
   IMAGE ERROR REPORTING
   ============================================================ */

/* === IMAGE ERROR REPORTING START === */

function initializeImageErrorHandling() {
  document.addEventListener("error", event => {
    if (!(event.target instanceof HTMLImageElement)) return;

    console.warn(
      "[007-NRG] Image could not be loaded:",
      event.target.currentSrc || event.target.src
    );
  }, true);
}

/* === IMAGE ERROR REPORTING END === */


/* ============================================================
   APPLICATION INITIALIZATION
   ============================================================ */

/* === APPLICATION INITIALIZATION START === */

function initializeApplication() {
  setElementText("currentYear", new Date().getFullYear());

  initializeImageErrorHandling();
  initializeMobileNavigation();

  initializeHeroSlideshow();

  initializeProductCollection();
  initializeProductPreview();
  initializeShoppingCart();

  initializeIngredientExplorer();
  initializeIngredientLabelSummary();
  initializeProductLabelViewer();

  initializeToolNavigation();
  initializeNetCarbCalculator();
  initializeWorkoutTimer();

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
