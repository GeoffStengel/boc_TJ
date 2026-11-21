
"use strict";

/* ============================================================
   007-NRG WEBSITE
   Products, Ingredients, Keto Tools & User Interface
   ============================================================ */


/* ============================================================
   SITE CONFIGURATION START
   ============================================================ */

const SITE_CONFIG = {
  heroRotationInterval: 4000,
  heroFadeDuration: 180,
  storageKeys: {
    foodTracker: "007nrg_food_tracker_v1",
    foodTrackerGoal: "007nrg_food_tracker_goal_v1",
    mealPlanner: "007nrg_meal_planner_v1"
  }
};

const PRODUCT_IMAGES = {
  singleBottle: "images/007-nrg-original.webp",
  grapeBottle: "images/007-nrg-grape.webp",
  waterSplashBottle: "images/007-nrg-water-splash.webp",
  blueRaspberryBottle: "images/007-nrg-blue-raspberry.webp",
  displayCase: "images/007-nrg-display.webp",
  displayBox: "images/007-nrg-packaging.webp"
};

/* === SITE CONFIGURATION END === */


/* ============================================================
   PRODUCT COLLECTION DATA START
   ============================================================ */

const PRODUCTS = [
  {
    id: "007-nrg-single",
    name: "Single Bottle",
    type: "single",
    size: "40 mL",
    image: PRODUCT_IMAGES.singleBottle,
    width: 600,
    height: 900,
    description: "The signature 007-NRG bottle.",
    priceCents: null
  },
  {
    id: "007-nrg-display",
    name: "20-Bottle Display",
    type: "case",
    size: "20 × 40 mL",
    image: PRODUCT_IMAGES.displayCase,
    width: 740,
    height: 810,
    description: "Twenty individual bottles in a branded retail display.",
    priceCents: null
  },
  {
    id: "007-nrg-box",
    name: "Display Packaging",
    type: "case",
    size: "20-bottle box",
    image: PRODUCT_IMAGES.displayBox,
    width: 810,
    height: 540,
    description: "A closer look at the branded 20-bottle box.",
    priceCents: null
  }
];

/* === PRODUCT COLLECTION DATA END === */


/* ============================================================
   HERO SLIDES DATA START
   ============================================================ */

const HERO_SLIDES = [
  {
    edition: "Original",
    title: "HYPER FOCUSED <em>ENERGY.</em>",
    description:
      "Meet the signature 40 mL 007-NRG bottle.",
    image: PRODUCT_IMAGES.singleBottle,
    alt: "Original 007-NRG single bottle"
  },
  {
    edition: "Grape",
    title: "A BOLDER <em>PURPLE.</em>",
    description:
      "Explore the grape-inspired 007-NRG bottle design.",
    image: PRODUCT_IMAGES.grapeBottle,
    alt: "007-NRG grape bottle design"
  },
  {
    edition: "Signature Splash",
    title: "MAKE A <em>SPLASH.</em>",
    description:
      "See the signature 007-NRG bottle with splash artwork.",
    image: PRODUCT_IMAGES.waterSplashBottle,
    alt: "007-NRG bottle with water splash"
  },
  {
    edition: "Blue Raspberry",
    title: "BRING THE <em>BLUE.</em>",
    description:
      "Explore the blue raspberry-inspired 007-NRG bottle design.",
    image: PRODUCT_IMAGES.blueRaspberryBottle,
    alt: "007-NRG blue raspberry bottle design"
  }
];

/* === HERO SLIDES DATA END === */


/* ============================================================
   PRODUCT LABEL INFORMATION START
   ============================================================ */

/*
   Based on the original supplied 007-NRG label artwork.

   IMPORTANT:
   The proprietary blend totals 9,048 mg.

   This is NOT the amount of each individual ingredient.

   Confirm final ingredient wording, serving information,
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

/* === PRODUCT LABEL INFORMATION END === */


/* ============================================================
   INGREDIENT KNOWLEDGE BASE START
   ============================================================ */

/*
   The ingredient database powers:

   1. Original ingredient cards
   2. Ingredient Explorer 2.0
   3. Ingredient search and category filters
   4. Side-by-side ingredient comparisons

   Educational information only.

   Descriptions are not claims about the effects
   or safety of the finished 007-NRG product.
*/

const INGREDIENTS = [
  {
    name: "Beta-Alanine",
    category: "Amino Acid",
    group: "blend",
    toolCategory: "amino-acids",
    description:
      "An amino acid involved in the production of carnosine.",
    details:
      "Carnosine is found in skeletal muscle and helps buffer acidity. Beta-alanine supplementation can cause temporary skin tingling, called paresthesia."
  },
  {
    name: "L-Citrulline Malate 2:1",
    category: "Amino Acid Compound",
    group: "blend",
    toolCategory: "amino-acids",
    description:
      "A combination of L-citrulline and malate.",
    details:
      "L-citrulline participates in the body's urea cycle and can be converted into arginine, which is involved in nitric oxide production. Malate participates in cellular energy metabolism."
  },
  {
    name: "Gamma Aminobutyric Acid (GABA)",
    category: "Neurotransmitter",
    group: "blend",
    toolCategory: "other",
    description:
      "A naturally occurring inhibitory neurotransmitter.",
    details:
      "GABA helps regulate nerve signaling in the central nervous system. Research is ongoing into whether orally consumed GABA produces meaningful effects in the brain."
  },
  {
    name: "Caffeine Anhydrous",
    category: "Stimulant",
    group: "blend",
    toolCategory: "stimulants",
    description:
      "A concentrated, dehydrated form of caffeine.",
    details:
      "Caffeine stimulates the central nervous system primarily by blocking adenosine receptors. Excess intake can cause insomnia, anxiety, rapid heartbeat, and other adverse effects."
  },
  {
    name: "Dicaffeine Malate",
    category: "Caffeine Compound",
    group: "blend",
    toolCategory: "stimulants",
    description:
      "A compound combining caffeine with malic acid.",
    details:
      "Dicaffeine malate is another source of caffeine. When assessing total caffeine exposure, caffeine from all ingredients and beverages should be considered."
  },
  {
    name: "AMPiberry®",
    category: "Botanical Ingredient",
    group: "blend",
    toolCategory: "botanicals",
    description:
      "A branded ingredient associated with juniper berry.",
    details:
      "Juniperus communis is an evergreen plant whose berry-like cones have a history of culinary use. The properties of a specific branded extract depend on its composition and manufacturing specifications."
  },
  {
    name: "Theobromine",
    category: "Methylxanthine",
    group: "blend",
    toolCategory: "stimulants",
    description:
      "A naturally occurring compound found in cacao.",
    details:
      "Theobromine is chemically related to caffeine. It has different effects on the nervous and cardiovascular systems and may contribute to overall methylxanthine exposure."
  },
  {
    name: "Yohimbine HCl (98%)",
    category: "Adrenergic Compound",
    group: "blend",
    toolCategory: "stimulants",
    description:
      "A pharmacologically active alpha-2 adrenergic receptor antagonist.",
    details:
      "Yohimbine can affect blood pressure, heart rate, and anxiety. It can interact with medications and other stimulants. Its presence warrants particular attention to product safety information."
  },
  {
    name: "Rauwolfia Vomitoria Extract",
    category: "Botanical Extract",
    group: "blend",
    toolCategory: "botanicals",
    description:
      "A botanical extract identified on the supplied label as standardized for alpha-yohimbine.",
    details:
      "Alpha-yohimbine, also known as rauwolscine, is an adrenergically active alkaloid. Its safety profile and potential interactions require caution, especially alongside other stimulants."
  },
  {
    name: "Ketones",
    category: "Formula Component",
    group: "blend",
    toolCategory: "other",
    description:
      "A broad term for a class of chemical compounds.",
    details:
      "Ketone bodies such as beta-hydroxybutyrate are produced during fat metabolism and nutritional ketosis. The label does not specify which ketone ingredient is included, so its properties cannot be established from the name alone."
  },
  {
    name: "Purified Water",
    category: "Other Ingredient",
    group: "other",
    toolCategory: "other",
    description:
      "Water that has undergone purification.",
    details:
      "Purified water is commonly used as a liquid base in beverage and other formulations."
  },
  {
    name: "Citric Acid",
    category: "Acidulant",
    group: "other",
    toolCategory: "other",
    description:
      "An organic acid naturally found in citrus fruits.",
    details:
      "Citric acid is widely used in foods and beverages to contribute tartness and help adjust acidity."
  },
  {
    name: "Natural & Artificial Flavors",
    category: "Flavoring",
    group: "other",
    toolCategory: "other",
    description:
      "Ingredients used to create or adjust flavor.",
    details:
      "Natural and artificial flavoring substances can come from different sources. The exact flavor components are not individually identified in this ingredient declaration."
  },
  {
    name: "Silicon Dioxide",
    category: "Processing Ingredient",
    group: "other",
    toolCategory: "other",
    description:
      "A compound of silicon and oxygen.",
    details:
      "Silicon dioxide is used in some food and supplement manufacturing applications, including as an anti-caking agent in dry mixtures."
  },
  {
    name: "Calcium Silicate",
    category: "Processing Ingredient",
    group: "other",
    toolCategory: "other",
    description:
      "A calcium-containing silicate compound.",
    details:
      "Calcium silicate is used in certain food manufacturing applications, including as an anti-caking or processing aid."
  },
  {
    name: "Sucralose",
    category: "Sweetener",
    group: "other",
    toolCategory: "sweeteners",
    description:
      "A high-intensity sweetener.",
    details:
      "Sucralose provides sweetness in much smaller amounts than table sugar. It is used in a variety of reduced-sugar food and beverage products."
  },
  {
    name: "Acesulfame Potassium (Ace K)",
    category: "Sweetener",
    group: "other",
    toolCategory: "sweeteners",
    description:
      "A high-intensity sweetener also called Ace K.",
    details:
      "Acesulfame potassium is often combined with other sweeteners to achieve a desired sweetness profile."
  },
  {
    name: "FD&C Red #40",
    category: "Color Additive",
    group: "other",
    toolCategory: "other",
    description:
      "A certified synthetic red color additive.",
    details:
      "FD&C Red No. 40 is used to provide color in certain foods and beverages. Its use is subject to applicable color additive regulations."
  },
  {
    name: "Potassium Sorbate",
    category: "Preservative",
    group: "other",
    toolCategory: "other",
    description:
      "A preservative used in certain foods and beverages.",
    details:
      "Potassium sorbate is commonly used to inhibit the growth of some yeasts and molds in suitable formulations."
  },
  {
    name: "Sodium Benzoate",
    category: "Preservative",
    group: "other",
    toolCategory: "other",
    description:
      "A preservative often used in acidic products.",
    details:
      "Sodium benzoate is used to inhibit certain microorganisms. Its effectiveness depends in part on the acidity of the formulation."
  }
];

/* === INGREDIENT KNOWLEDGE BASE END === */


/* ============================================================
   SHARED HELPERS START
   ============================================================ */

function getElement(id) {
  return document.getElementById(id);
}

function setElementText(id, value) {
  const element = getElement(id);
  const text = String(value);

  if (element && element.textContent !== text) {
    element.textContent = text;
  }
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
  if (product.priceCents == null) return "";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(product.priceCents / 100);
}

function formatNumber(value, decimals = 1) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "0";
  }

  return Number(number.toFixed(decimals)).toLocaleString(
    "en-US",
    { maximumFractionDigits: decimals }
  );
}

function clampNumber(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function calculateFoodNetCarbs(totalCarbs, fiber) {
  return Math.max(0, Number(totalCarbs) - Number(fiber));
}

/* === LOCAL STORAGE HELPERS START === */

function readLocalData(storageKey, fallback = null) {
  try {
    const storedValue = localStorage.getItem(storageKey);

    return storedValue === null
      ? fallback
      : JSON.parse(storedValue);
  } catch (error) {
    console.warn("[007-NRG] Could not read saved data.", error);
    return fallback;
  }
}

function saveLocalData(storageKey, value) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn("[007-NRG] Could not save data.", error);
    return false;
  }
}

/* === LOCAL STORAGE HELPERS END === */


/* === TOAST NOTIFICATIONS START === */

let toastTimeoutId = null;

function showToast(message) {
  const toast = getElement("toast");

  if (!toast) {
    return;
  }

  clearTimeout(toastTimeoutId);

  toast.textContent = message;
  setElementText("toastStatus", message);
  toast.hidden = false;
  toast.classList.add("visible");

  toastTimeoutId = setTimeout(() => {
    toast.classList.remove("visible");
    toast.hidden = true;
    setElementText("toastStatus", "");
  }, 3000);
}

/* === TOAST NOTIFICATIONS END === */

/* === SHARED HELPERS END === */



/* ============================================================
   MOBILE NAVIGATION START
   ============================================================ */

function initializeMobileNavigation() {
  const toggle = getElement("menuToggle");
  const links = getElement("navLinks");

  if (!toggle || !links) return;

  function closeMenu() {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";

    links.classList.toggle("open", !open);

    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute(
      "aria-label",
      open ? "Open menu" : "Close menu"
    );
    if (!open) links.querySelector("a")?.focus();
  });

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (toggle.getAttribute("aria-expanded") !== "true") return;

      closeMenu();
      const target = getElement(link.hash.slice(1));
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
  });

  document.addEventListener("click", event => {
    if (
      !links.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  const navigation = toggle.closest("nav");
  navigation.addEventListener("focusout", event => {
    if (event.relatedTarget && !navigation.contains(event.relatedTarget)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", event => {
    if (
      event.key === "Escape" &&
      toggle.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      toggle.focus();
    }
  });

  const mobileLayout = window.matchMedia("(max-width: 850px)");
  mobileLayout.addEventListener("change", () => {
    if (!mobileLayout.matches) closeMenu();
  });
}

/* === MOBILE NAVIGATION END === */


/* ============================================================
   HERO CAROUSEL START
   ============================================================ */

let currentHeroSlideIndex = 0;
let requestedHeroSlideIndex = 0;
let heroRotationTimer = null;
let heroTransitionRequestId = 0;
let heroRotationPaused = false;
let heroHovered = false;

const heroImageCache = new Map();
const heroReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function preloadHeroImage(source) {
  if (heroImageCache.has(source)) {
    return heroImageCache.get(source);
  }

  const promise = new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve();
    image.onerror = () =>
      reject(new Error(`Image not found: ${source}`));

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

async function displayHeroSlide(index, manual = false) {
  const image = getElement("heroProductImage");
  if (!image || !HERO_SLIDES.length) return;

  const normalizedIndex =
    ((index % HERO_SLIDES.length) + HERO_SLIDES.length) %
    HERO_SLIDES.length;

  const slide = HERO_SLIDES[normalizedIndex];
  const requestId = ++heroTransitionRequestId;
  requestedHeroSlideIndex = normalizedIndex;

  try {
    await preloadHeroImage(slide.image);
  } catch (error) {
    console.warn("[007-NRG]", error.message);
    heroImageCache.delete(slide.image);
    if (requestId === heroTransitionRequestId) {
      requestedHeroSlideIndex = currentHeroSlideIndex;
      image.classList.remove("changing");
      if (manual) showToast("Could not load that product image. Try again.");
    }
    return;
  }

  if (requestId !== heroTransitionRequestId) return;

  if (!heroReducedMotion.matches) {
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

  updateHeroIndicators();
  if (manual) setElementText("heroStatus", slide.alt);

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
    document.hidden || heroReducedMotion.matches ||
    heroRotationPaused || heroHovered
  ) {
    return;
  }

  heroRotationTimer = setInterval(() => {
    displayHeroSlide(currentHeroSlideIndex + 1);
  }, SITE_CONFIG.heroRotationInterval);
}

function setHeroRotationPaused(paused) {
  heroRotationPaused = paused;
  const toggle = getElement("toggleHeroRotation");
  toggle.setAttribute("aria-label", paused ? "Play slideshow" : "Pause slideshow");
  toggle.firstElementChild.textContent = paused ? "▶" : "Ⅱ";
  startHeroRotation();
}

function selectHeroSlide(index) {
  setHeroRotationPaused(true);
  displayHeroSlide(index, true);
}

function initializeHeroSlideshow() {
  const indicators = getElement("slideIndicators");
  const hero = getElement("home");
  const toggle = getElement("toggleHeroRotation");
  if (!indicators || !hero || !toggle) return;

  indicators.innerHTML = "";

  HERO_SLIDES.forEach((slide, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.setAttribute(
      "aria-label",
      `Show ${slide.edition}`
    );
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", () => {
      selectHeroSlide(index);
    });

    indicators.appendChild(button);

  });

  toggle.hidden = heroReducedMotion.matches;
  toggle.addEventListener("click", () => {
    setHeroRotationPaused(!heroRotationPaused);
  });
  hero.addEventListener("pointerenter", event => {
    if (event.pointerType === "mouse") {
      heroHovered = true;
      stopHeroRotation();
    }
  });
  hero.addEventListener("pointerleave", () => {
    heroHovered = false;
    startHeroRotation();
  });
  hero.addEventListener("focusin", event => {
    if (event.target.matches(":focus-visible")) setHeroRotationPaused(true);
  });
  heroReducedMotion.addEventListener("change", () => {
    toggle.hidden = heroReducedMotion.matches;
    startHeroRotation();
  });

  getElement("previousSlide")?.addEventListener(
    "click",
    () => selectHeroSlide(requestedHeroSlideIndex - 1)
  );

  getElement("nextSlide")?.addEventListener(
    "click",
    () => selectHeroSlide(requestedHeroSlideIndex + 1)
  );

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopHeroRotation();
    else startHeroRotation();
  });

  updateHeroIndicators();
  startHeroRotation();
}

/* === HERO CAROUSEL END === */


/* ============================================================
   PRODUCT COLLECTION START
   ============================================================ */

let activeProductFilter = "all";

function generateProductCard(product) {
  const price = formatProductPrice(product);

  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <button
          class="product-image-button"
          type="button"
          data-preview-product="${escapeHTML(product.id)}"
          aria-label="View ${escapeHTML(product.name)}"
          aria-haspopup="dialog"
        >
          <img
            src="${escapeHTML(product.image)}"
            alt=""
            width="${product.width}"
            height="${product.height}"
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

        ${price ? `<strong class="product-price">${escapeHTML(price)}</strong>` : ""}

        <button
          class="button button-secondary"
          type="button"
          data-preview-product="${escapeHTML(product.id)}"
          aria-label="View details for ${escapeHTML(product.name)}"
          aria-haspopup="dialog"
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

  grid.querySelectorAll("[data-preview-product]")
    .forEach(button => {
      button.addEventListener("click", () => {
        openProductPreview(button.dataset.previewProduct, button);
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
   DIALOG HELPERS START
   ============================================================ */

let lastFocusedElement = null;

function openDialog(element, focusTarget, returnFocus = document.activeElement) {
  if (!element) return;

  lastFocusedElement = returnFocus;

  element.hidden = false;

  document.body.style.overflow = "hidden";
  document.querySelectorAll("body > header, body > main, body > footer, .skip-link")
    .forEach(region => { region.inert = true; });
  element.scrollTop = 0;
  const panel = element.querySelector(".product-modal-panel");
  if (panel) panel.scrollTop = 0;
  focusTarget.focus({ preventScroll: true });
}

function closeDialog(element, restoreFocus = true) {
  if (!element || element.hidden) return;

  element.hidden = true;
  document.body.style.overflow = "";
  document.querySelectorAll("body > header, body > main, body > footer, .skip-link")
    .forEach(region => { region.inert = false; });

  const returnFocus = lastFocusedElement;
  lastFocusedElement = null;
  if (restoreFocus && returnFocus?.isConnected) {
    returnFocus.focus({ preventScroll: true });
  }
}

/* === DIALOG HELPERS END === */


/* ============================================================
   PRODUCT INGREDIENT DISCLOSURE START
   ============================================================ */

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
              The stated amount is for the entire blend.
              Individual ingredient quantities are not disclosed.
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
              Contains caffeine and other stimulant
              ingredients, including yohimbine compounds.
            </p>

            <p>
              Review the manufacturer's complete
              directions and warnings before use.
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
   PRODUCT QUICK VIEW START
   ============================================================ */

function initializeProductIngredientPopups() {
  const modal = getElement("productModal");
  const details = modal?.querySelector(".product-modal-details");

  if (!details) return;

  if (!details.querySelector(".product-ingredient-information")) {
    details.insertAdjacentHTML(
      "beforeend",
      createProductIngredientDisclosure()
    );
  }

  modal.querySelector("[data-view-full-label]")
    ?.addEventListener("click", event => {
      event.preventDefault();
      const returnFocus = lastFocusedElement;
      closeDialog(modal, false);
      openProductLabel(returnFocus);
    });
}

function openProductPreview(productId, trigger) {
  const product = getProductById(productId);
  const modal = getElement("productModal");

  if (!product || !modal) return;

  setElementText("productModalTitle", product.name);
  setElementText("productModalSize", product.size);
  setElementText("productModalDescription", product.description);
  const price = formatProductPrice(product);
  setElementText("productModalPrice", price);
  getElement("productModalPrice").hidden = !price;

  const image = getElement("productModalImage");

  if (image) {
    image.src = product.image;
    image.alt = `007-NRG ${product.name.toLowerCase()}`;
    image.width = product.width;
    image.height = product.height;
  }

  const disclosure = modal.querySelector(
    ".product-ingredient-disclosure"
  );

  if (disclosure) disclosure.open = true;

  openDialog(modal, getElement("closeProductModal"), trigger);
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

  getElement("productModal")?.addEventListener(
    "click",
    event => {
      if (event.target.id === "productModal") {
        closeProductPreview();
      }
    }
  );
}

/* === PRODUCT QUICK VIEW END === */


/* ============================================================
   SHOPPING CART START
   ============================================================ */

function openShoppingCart() {
  const overlay = getElement("cartOverlay");
  if (overlay) overlay.hidden = false;

  openDialog(
    getElement("cartDrawer"),
    getElement("closeCart"),
    getElement("cartTrigger")
  );
}

function closeShoppingCart() {
  closeDialog(getElement("cartDrawer"));

  const overlay = getElement("cartOverlay");
  if (overlay) overlay.hidden = true;
}

function initializeShoppingCart() {
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
    () => {
      closeShoppingCart();
      const collection = getElement("shop");
      collection.setAttribute("tabindex", "-1");
      collection.focus({ preventScroll: true });
      collection.scrollIntoView();
    }
  );

  getElement("cartOverlay")?.addEventListener(
    "click",
    closeShoppingCart
  );
}

/* === SHOPPING CART END === */


/* ============================================================
   INGREDIENT EXPLORER — MAIN PAGE START
   ============================================================ */

let ingredientSearchQuery = "";
let activeIngredientFilter = "all";

function generateIngredientCard(ingredient, canCompare = false) {
  const name = escapeHTML(ingredient.name);

  return `
    <article class="ingredient-card ingredient-card--browse${canCompare ? " ingredient-tool-card" : ""}">
      <details class="ingredient-details">
        <summary>
          <span class="ingredient-card-heading">
            <span>
              <span class="eyebrow">${escapeHTML(ingredient.category)}</span>
              <strong class="ingredient-card-name">${name}</strong>
            </span>
            <span class="disclosure-chevron" aria-hidden="true"></span>
          </span>
        </summary>
        <div class="ingredient-card-body">
          <p>${escapeHTML(ingredient.description)}</p>
          <p>${escapeHTML(ingredient.details)}</p>
          ${canCompare && ingredient.group === "blend" ? `
            <p class="ingredient-footnote">
              The label lists the total blend amount. Individual amounts are undisclosed.
            </p>
          ` : ""}
        </div>
      </details>
      ${canCompare ? `
        <button
          class="button button-secondary ingredient-compare-button"
          type="button"
          aria-label="Compare ${name}"
          data-select-ingredient="${escapeHTML(ingredientIdentifier(ingredient.name))}"
        >
          Compare
        </button>
      ` : ""}
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
    ? filtered.map(ingredient => generateIngredientCard(ingredient)).join("")
    : `<p class="tool-empty-state">
         Try another search or select a different category.
       </p>`;
  setElementText("ingredientSearchStatus", `${filtered.length} results.`);
}

function initializeIngredientExplorer() {
  const grid = getElement("ingredientGrid");
  if (!grid) return;

  if (getElement("ingredientSearch")) {
    renderIngredientExplorer();
    return;
  }

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
    <p class="sr-only" id="ingredientSearchStatus" role="status"></p>
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

/* === INGREDIENT EXPLORER — MAIN PAGE END === */


/* ============================================================
   INGREDIENT LABEL SUMMARY START
   ============================================================ */

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
        Browse the proprietary blend and other ingredients
        listed on the 007-NRG label.
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

/* === INGREDIENT LABEL SUMMARY END === */


/* ============================================================
   PRODUCT LABEL VIEWER START
   ============================================================ */

let labelZoomLevel = 1;

function updateLabelZoom() {
  const image = getElement("modalLabelImage");
  if (!image) return;

  image.style.width = `${labelZoomLevel * 100}%`;
  getElement("zoomOut").setAttribute("aria-disabled", String(labelZoomLevel <= 1));
  getElement("zoomIn").setAttribute("aria-disabled", String(labelZoomLevel >= 3));
}

function openProductLabel(returnFocus) {
  const modal = getElement("labelModal");
  if (!modal) return;

  labelZoomLevel = 1;

  updateLabelZoom();
  openDialog(modal, getElement("closeLabel"), returnFocus);
  getElement("labelViewport").scrollTo(0, 0);
}

function closeProductLabel() {
  closeDialog(getElement("labelModal"));
}

function initializeProductLabelViewer() {
  getElement("openLabelButton")?.addEventListener(
    "click",
    event => openProductLabel(event.currentTarget)
  );

  getElement("labelPreview")?.addEventListener(
    "click",
    event => openProductLabel(event.currentTarget)
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
    labelZoomLevel = Math.max(1, labelZoomLevel - 0.25);
    updateLabelZoom();
  });

  getElement("labelModal")?.addEventListener(
    "click",
    event => {
      if (event.target.id === "labelModal") {
        closeProductLabel();
      }
    }
  );
}

/* === PRODUCT LABEL VIEWER END === */



/* ============================================================
   TOOL NAVIGATION START
   ============================================================ */

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
    const panel = [...panels].find(item => item.dataset.toolPanel === tab.dataset.tool);
    if (panel) tab.setAttribute("aria-controls", panel.id);
    tab.addEventListener("click", () => {
      selectTool(tab.dataset.tool);
    });
  });

  selectTool("net-carbs");
}

/* === TOOL NAVIGATION END === */


/* ============================================================
   NET CARB CALCULATOR START
   ============================================================ */

function calculateNetCarbs() {
  const form = getElement("netCarbForm");
  const totalCarbs = Number(getElement("totalCarbs")?.value);
  const fiber = Number(getElement("dietaryFiber")?.value);
  const servings = Number(getElement("carbServings")?.value);

  if (
    !form?.checkValidity() || fiber > totalCarbs
  ) {
    setElementText("netCarbValue", "—");
    setElementText(
      "netCarbExplanation",
      fiber > totalCarbs
        ? "Fiber cannot exceed total carbohydrates."
        : "Enter total carbohydrates, fiber, and a valid serving amount."
    );
    return;
  }

  const perServing = calculateFoodNetCarbs(totalCarbs, fiber);
  const total = perServing * servings;

  setElementText("netCarbValue", formatNumber(total, 2));

  setElementText(
    "netCarbExplanation",
    `${formatNumber(perServing, 2)} g per serving × ` +
    `${formatNumber(servings, 2)} servings.`
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
   WORKOUT INTERVAL TIMER START
   ============================================================ */

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

  return (
    String(minutes).padStart(2, "0") + ":" +
    String(seconds % 60).padStart(2, "0")
  );
}

function readTimerSettings() {
  const work = Number(getElement("workSeconds")?.value);
  const rest = Number(getElement("restSeconds")?.value);
  const rounds = Number(getElement("timerRounds")?.value);

  if (
    !getElement("restSeconds").value ||
    !Number.isInteger(work) ||
    !Number.isInteger(rest) ||
    !Number.isInteger(rounds) ||
    work < 5 || work > 3600 ||
    rest < 0 || rest > 3600 ||
    rounds < 1 || rounds > 100
  ) {
    showToast("Enter valid workout timer settings.");
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
    const duration = Math.max(1, timer.phaseDurationMilliseconds);
    const elapsed = duration - timer.remainingMilliseconds;

    const percentage = timer.phase === "complete"
      ? 100
      : clampNumber(elapsed / duration * 100, 0, 100);

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

  if (pauseButton) pauseButton.disabled = !timer.running;

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
    if (timer.currentRound >= timer.totalRounds) {
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
      timer.phaseDurationMilliseconds = timer.restSeconds * 1000;
    } else {
      timer.currentRound++;
      timer.phase = "work";
      timer.phaseDurationMilliseconds = timer.workSeconds * 1000;
    }
  } else if (timer.phase === "rest") {
    timer.currentRound++;
    timer.phase = "work";
    timer.phaseDurationMilliseconds = timer.workSeconds * 1000;
  }

  timer.remainingMilliseconds = timer.phaseDurationMilliseconds;
}

function updateWorkoutTimer() {
  const timer = WORKOUT_TIMER;
  if (!timer.running || timer.deadline === null) return;

  const now = performance.now();
  let remaining = timer.deadline - now;
  let transitions = 0;

  while (remaining <= 0 && timer.running && transitions < 300) {
    const overshoot = -remaining;

    advanceWorkoutTimerPhase();
    transitions++;

    if (!timer.running) break;

    remaining = timer.phaseDurationMilliseconds - overshoot;
    timer.deadline = now + remaining;
  }

  if (timer.running) {
    timer.remainingMilliseconds = Math.max(0, remaining);
  }

  const pausedControlFocused = document.activeElement === getElement("pauseTimer");
  renderWorkoutTimer();
  if (!timer.running && pausedControlFocused) {
    getElement("startTimer").focus({ preventScroll: true });
  }
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
    timer.phaseDurationMilliseconds = settings.work * 1000;
    timer.remainingMilliseconds = timer.phaseDurationMilliseconds;
  }

  timer.running = true;
  timer.deadline = performance.now() + timer.remainingMilliseconds;

  stopWorkoutTimerInterval();
  timer.intervalId = setInterval(updateWorkoutTimer, 100);

  renderWorkoutTimer();
  getElement("pauseTimer").focus({ preventScroll: true });
}

function pauseWorkoutTimer() {
  const timer = WORKOUT_TIMER;
  if (!timer.running) return;

  updateWorkoutTimer();
  if (!timer.running) return;

  timer.running = false;
  timer.deadline = null;

  stopWorkoutTimerInterval();
  renderWorkoutTimer();
  getElement("startTimer").focus({ preventScroll: true });
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

  timer.phaseDurationMilliseconds = timer.workSeconds * 1000;
  timer.remainingMilliseconds = timer.phaseDurationMilliseconds;

  renderWorkoutTimer();
}

function initializeWorkoutTimer() {
  if (!getElement("timerClock")) return;

  getElement("startTimer")?.addEventListener(
    "click", startWorkoutTimer
  );

  getElement("pauseTimer")?.addEventListener(
    "click", pauseWorkoutTimer
  );

  getElement("resetTimer")?.addEventListener(
    "click", resetWorkoutTimer
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
      if (!WORKOUT_TIMER.running) resetWorkoutTimer();
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) updateWorkoutTimer();
  });

  resetWorkoutTimer();
}

/* === WORKOUT INTERVAL TIMER END === */


/* ============================================================
   KETO MACRO CALCULATOR START
   ============================================================ */

/*
   Uses the Mifflin-St Jeor resting energy equation.

   Activity multipliers and goal adjustments provide
   approximate daily calorie planning values.

   Protein is estimated at 1.6 g/kg of body weight.
   Carbohydrates are user-selected net grams.
   Remaining calories are assigned to fat.

   This is a simplified planning model, not a
   personalized medical or nutrition prescription.
*/

function calculateKetoMacros(event) {
  event?.preventDefault();

  const form = getElement("ketoMacroForm");
  if (!form || !form.reportValidity()) return;

  const age = Number(getElement("macroAge").value);
  const sex = getElement("macroSex").value;
  const weightLb = Number(getElement("macroWeight").value);
  const heightInches = Number(getElement("macroHeight").value);
  const activity = Number(getElement("macroActivity").value);
  const goalAdjustment = Number(getElement("macroGoal").value);
  const netCarbs = Number(getElement("macroCarbTarget").value);

  if (
    ![age, weightLb, heightInches, activity,
      goalAdjustment, netCarbs].every(Number.isFinite) ||
    age < 18 || age > 100 ||
    weightLb < 65 || weightLb > 700 ||
    heightInches < 48 || heightInches > 90 ||
    netCarbs < 0 || netCarbs > 150 ||
    !["female", "male"].includes(sex)
  ) {
    showToast("Please enter valid macro calculator information.");
    return;
  }

  const weightKg = weightLb * 0.45359237;
  const heightCm = heightInches * 2.54;

  const restingCalories =
    10 * weightKg +
    6.25 * heightCm -
    5 * age +
    (sex === "male" ? 5 : -161);

  const maintenanceCalories = restingCalories * activity;
  const targetCalories = Math.max(
    0,
    Math.round(maintenanceCalories + goalAdjustment)
  );

  const proteinGrams = Math.round(weightKg * 1.6);
  const proteinCalories = proteinGrams * 4;
  const carbCalories = netCarbs * 4;
  const remainingCalories =
    targetCalories - proteinCalories - carbCalories;

  if (remainingCalories < 0) {
    showToast(
      "This calorie target is too low for the selected protein and carb targets."
    );
    setElementText("macroCalories", "—");
    setElementText("macroProtein", "—");
    setElementText("macroFat", "—");
    setElementText("macroCarbs", "—");
    setElementText(
      "macroExplanation",
      "Adjust your calorie goal or net carb target."
    );
    return;
  }

  const fatGrams = Math.round(remainingCalories / 9);

  setElementText("macroCalories", formatNumber(targetCalories, 0));
  setElementText("macroProtein", proteinGrams);
  setElementText("macroFat", fatGrams);
  setElementText("macroCarbs", netCarbs);

  setElementText(
    "macroExplanation",
    `Estimated maintenance: ${formatNumber(maintenanceCalories, 0)} ` +
    `kcal/day. Targets use approximately 1.6 g protein/kg, ` +
    `${netCarbs} g net carbs, and remaining calories from fat.`
  );
}

function initializeKetoMacroCalculator() {
  const form = getElement("ketoMacroForm");
  if (!form) return;

  form.addEventListener("submit", calculateKetoMacros);
  form.addEventListener("input", () => {
    ["macroCalories", "macroProtein", "macroFat", "macroCarbs"].forEach(id =>
      setElementText(id, "—")
    );
    setElementText("macroExplanation", "Calculate to update your daily targets.");
  });
}

/* === KETO MACRO CALCULATOR END === */


/* ============================================================
   INGREDIENT EXPLORER 2.0 START
   ============================================================ */

let activeIngredientToolCategory = "all";
let ingredientToolSearchQuery = "";

function ingredientIdentifier(name) {
  const identifiers = {
    "L-Citrulline Malate 2:1": "l-citrulline-malate",
    "Yohimbine HCl (98%)": "yohimbine-hcl",
    "Acesulfame Potassium (Ace K)": "acesulfame-potassium",
    "AMPiberry®": "ampiberry",
    "Gamma Aminobutyric Acid (GABA)": "gaba",
    "FD&C Red #40": "red-40"
  };

  return identifiers[name] ||
    name.toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
}

function getIngredientByIdentifier(identifier) {
  return INGREDIENTS.find(ingredient =>
    ingredientIdentifier(ingredient.name) === identifier
  );
}

function renderIngredientToolCards() {
  const grid = getElement("ingredientToolGrid");
  if (!grid) return;

  const matching = INGREDIENTS.filter(ingredient => {
    const categoryMatches =
      activeIngredientToolCategory === "all" ||
      ingredient.toolCategory === activeIngredientToolCategory;

    const searchable = [
      ingredient.name,
      ingredient.category,
      ingredient.description,
      ingredient.details
    ].join(" ").toLowerCase();

    return categoryMatches &&
      searchable.includes(ingredientToolSearchQuery);
  });

  grid.innerHTML = matching.length
    ? matching.map(ingredient => generateIngredientCard(ingredient, true)).join("")
    : `<p class="tool-empty-state">
         Try a different search or category.
       </p>`;
  setElementText("ingredientToolStatus", `${matching.length} results.`);

  grid.querySelectorAll("[data-select-ingredient]")
    .forEach(button => {
      button.addEventListener("click", () => {
        const first = getElement("compareIngredientA");
        const second = getElement("compareIngredientB");
        const identifier = button.dataset.selectIngredient;

        if (!first || !second) return;

        if (!first.value) {
          first.value = identifier;
        } else if (first.value !== identifier) {
          second.value = identifier;
        }

        if (second.value) compareSelectedIngredients();
        getElement("ingredientComparisonHeading").focus();
      });
    });
}

function populateIngredientComparisonOptions() {
  const first = getElement("compareIngredientA");
  const second = getElement("compareIngredientB");

  if (!first || !second) return;

  const options = INGREDIENTS.map(ingredient => `
    <option value="${escapeHTML(
      ingredientIdentifier(ingredient.name)
    )}">
      ${escapeHTML(ingredient.name)}
    </option>
  `).join("");

  first.insertAdjacentHTML("beforeend", options);
  second.insertAdjacentHTML("beforeend", options);
}

function compareSelectedIngredients() {
  const firstId = getElement("compareIngredientA")?.value;
  const secondId = getElement("compareIngredientB")?.value;
  const results = getElement("ingredientComparisonResults");

  if (!results) return;

  const first = getIngredientByIdentifier(firstId);
  const second = getIngredientByIdentifier(secondId);

  if (!first || !second || firstId === secondId) {
    results.innerHTML = `
      <p class="tool-empty-state">
        Select two different ingredients to compare.
      </p>
    `;
    return;
  }

  results.innerHTML = `
    <div class="ingredient-comparison-grid">
      ${[first, second].map(ingredient => `
        <article class="ingredient-card">
          <span class="eyebrow">
            ${escapeHTML(ingredient.category)}
          </span>

          <h4>${escapeHTML(ingredient.name)}</h4>
          <p>${escapeHTML(ingredient.description)}</p>
          <p>${escapeHTML(ingredient.details)}</p>

          <small>
            Label group:
            ${ingredient.group === "blend"
              ? "Proprietary blend"
              : "Other ingredients"}
          </small>
        </article>
      `).join("")}
    </div>

    <p class="ingredient-footnote">
      This comparison explains general ingredient properties.
      It does not establish comparative doses or product effects.
    </p>
  `;
}

function initializeIngredientExplorerTool() {
  if (!getElement("ingredientToolGrid")) return;

  populateIngredientComparisonOptions();

  document.querySelectorAll("[data-ingredient-category]")
    .forEach(button => {
      button.addEventListener("click", () => {
        activeIngredientToolCategory =
          button.dataset.ingredientCategory;

        document.querySelectorAll("[data-ingredient-category]")
          .forEach(tab => {
            const active = tab === button;
            tab.classList.toggle("active", active);
            tab.setAttribute("aria-pressed", String(active));
          });

        renderIngredientToolCards();
      });
    });

  getElement("ingredientToolSearch")?.addEventListener(
    "input",
    event => {
      ingredientToolSearchQuery =
        event.target.value.trim().toLowerCase();

      renderIngredientToolCards();
    }
  );

  getElement("compareIngredientsButton")?.addEventListener(
    "click",
    compareSelectedIngredients
  );

  ["compareIngredientA", "compareIngredientB"].forEach(id => {
    getElement(id)?.addEventListener("change", compareSelectedIngredients);
  });

  document.querySelectorAll(".ingredient-quick-compare")
    .forEach(button => {
      button.addEventListener("click", () => {
        getElement("compareIngredientA").value =
          button.dataset.compareA;

        getElement("compareIngredientB").value =
          button.dataset.compareB;

        compareSelectedIngredients();
        getElement("ingredientComparisonHeading").focus();
      });
    });

  renderIngredientToolCards();
}

/* === INGREDIENT EXPLORER 2.0 END === */



/* ============================================================
   KETO MEAL DATABASE START
   ============================================================ */

/*
   Each meal contains approximate nutrition PER serving.

   Grocery quantities are illustrative per serving.
   Values must be checked against actual food labels.
*/

const KETO_MEALS = [
  {
    id: "eggs-avocado",
    name: "Eggs & Avocado",
    type: "breakfast",
    styles: ["balanced", "budget", "quick", "vegetarian"],
    calories: 340, protein: 17, fat: 28, netCarbs: 4,
    ingredients: ["2 eggs", "1/2 avocado", "1 tsp butter"]
  },
  {
    id: "greek-yogurt",
    name: "Greek Yogurt & Walnuts",
    type: "breakfast",
    styles: ["balanced", "quick", "vegetarian"],
    calories: 290, protein: 20, fat: 19, netCarbs: 7,
    ingredients: [
      "3/4 cup plain unsweetened Greek yogurt",
      "1 oz walnuts"
    ]
  },
  {
    id: "spinach-omelet",
    name: "Spinach & Cheese Omelet",
    type: "breakfast",
    styles: ["balanced", "budget", "vegetarian"],
    calories: 360, protein: 24, fat: 28, netCarbs: 4,
    ingredients: [
      "2 eggs", "1 cup spinach", "1 oz cheddar cheese",
      "1 tsp olive oil"
    ]
  },
  {
    id: "chia-pudding",
    name: "Chia Seed Pudding",
    type: "breakfast",
    styles: ["balanced", "quick", "vegetarian"],
    calories: 260, protein: 8, fat: 20, netCarbs: 5,
    ingredients: [
      "2 tbsp chia seeds",
      "3/4 cup unsweetened almond milk",
      "1 oz almonds"
    ]
  },
  {
    id: "egg-bowl",
    name: "Breakfast Egg Bowl",
    type: "breakfast",
    styles: ["budget", "quick", "balanced", "vegetarian"],
    calories: 310, protein: 19, fat: 24, netCarbs: 4,
    ingredients: [
      "2 eggs", "1 cup spinach",
      "1/2 oz cheddar cheese"
    ]
  },
  {
    id: "chicken-salad",
    name: "Chicken Avocado Salad",
    type: "lunch",
    styles: ["balanced", "quick"],
    calories: 470, protein: 38, fat: 32, netCarbs: 6,
    ingredients: [
      "5 oz cooked chicken", "2 cups lettuce",
      "1/2 avocado", "1 tbsp olive oil"
    ]
  },
  {
    id: "tuna-lettuce",
    name: "Tuna Lettuce Wraps",
    type: "lunch",
    styles: ["budget", "quick", "balanced"],
    calories: 330, protein: 30, fat: 21, netCarbs: 3,
    ingredients: [
      "1 can tuna", "3 lettuce leaves",
      "1 tbsp mayonnaise", "1/2 cucumber"
    ]
  },
  {
    id: "egg-salad",
    name: "Egg Salad Lettuce Cups",
    type: "lunch",
    styles: ["budget", "quick", "vegetarian", "balanced"],
    calories: 360, protein: 19, fat: 29, netCarbs: 4,
    ingredients: [
      "2 eggs", "1 tbsp mayonnaise",
      "3 lettuce leaves", "1/2 cucumber"
    ]
  },
  {
    id: "tofu-salad",
    name: "Tofu & Avocado Salad",
    type: "lunch",
    styles: ["vegetarian", "balanced"],
    calories: 390, protein: 23, fat: 29, netCarbs: 7,
    ingredients: [
      "5 oz firm tofu", "2 cups lettuce",
      "1/2 avocado", "1 tbsp olive oil"
    ]
  },
  {
    id: "turkey-rollups",
    name: "Turkey & Cheese Roll-Ups",
    type: "lunch",
    styles: ["quick", "budget", "balanced"],
    calories: 380, protein: 35, fat: 25, netCarbs: 4,
    ingredients: [
      "4 oz sliced turkey", "2 oz cheese",
      "1/2 cucumber"
    ]
  },
  {
    id: "salmon-broccoli",
    name: "Salmon & Broccoli",
    type: "dinner",
    styles: ["balanced"],
    calories: 520, protein: 39, fat: 37, netCarbs: 6,
    ingredients: [
      "6 oz salmon", "1.5 cups broccoli",
      "1 tbsp olive oil"
    ]
  },
  {
    id: "chicken-cauliflower",
    name: "Chicken & Cauliflower Rice",
    type: "dinner",
    styles: ["balanced", "budget", "quick"],
    calories: 460, protein: 43, fat: 28, netCarbs: 7,
    ingredients: [
      "6 oz chicken", "1.5 cups cauliflower rice",
      "1 tbsp olive oil", "1/2 cup spinach"
    ]
  },
  {
    id: "beef-zucchini",
    name: "Beef & Zucchini Skillet",
    type: "dinner",
    styles: ["balanced", "budget"],
    calories: 540, protein: 36, fat: 39, netCarbs: 8,
    ingredients: [
      "6 oz ground beef", "1 zucchini",
      "1 tbsp olive oil", "1 oz cheese"
    ]
  },
  {
    id: "tofu-stirfry",
    name: "Tofu Vegetable Stir-Fry",
    type: "dinner",
    styles: ["vegetarian", "balanced", "quick"],
    calories: 430, protein: 27, fat: 31, netCarbs: 9,
    ingredients: [
      "7 oz firm tofu", "1 cup broccoli",
      "1 cup zucchini", "1 tbsp sesame oil"
    ]
  },
  {
    id: "mushroom-omelet",
    name: "Mushroom & Cheese Omelet",
    type: "dinner",
    styles: ["vegetarian", "budget", "quick"],
    calories: 420, protein: 27, fat: 32, netCarbs: 6,
    ingredients: [
      "3 eggs", "1 cup mushrooms",
      "1 oz cheese", "1 tsp butter"
    ]
  },
  {
    id: "almonds",
    name: "Almonds",
    type: "snack",
    styles: ["balanced", "budget", "quick", "vegetarian"],
    calories: 165, protein: 6, fat: 14, netCarbs: 3,
    ingredients: ["1 oz almonds"]
  },
  {
    id: "cheese-snack",
    name: "Cheese & Cucumber",
    type: "snack",
    styles: ["balanced", "budget", "quick", "vegetarian"],
    calories: 150, protein: 9, fat: 12, netCarbs: 2,
    ingredients: ["1 oz cheese", "1/2 cucumber"]
  },
  {
    id: "walnuts",
    name: "Walnuts",
    type: "snack",
    styles: ["balanced", "quick", "vegetarian"],
    calories: 185, protein: 4, fat: 18, netCarbs: 2,
    ingredients: ["1 oz walnuts"]
  }
];

/* === KETO MEAL DATABASE END === */


/* ============================================================
   KETO MEAL PLANNER START
   ============================================================ */

let currentMealPlan = null;

function getMealsByType(type, style) {
  return KETO_MEALS.filter(meal =>
    meal.type === type &&
    (style === "balanced" || meal.styles.includes(style))
  );
}

function shuffleItems(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [shuffled[index], shuffled[randomIndex]] =
      [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function getMealTotals(meals) {
  return meals.reduce((total, meal) => ({
    calories: total.calories + meal.calories,
    protein: total.protein + meal.protein,
    fat: total.fat + meal.fat,
    netCarbs: total.netCarbs + meal.netCarbs
  }), { calories: 0, protein: 0, fat: 0, netCarbs: 0 });
}

function getMealPlanTypes(includeSnacks) {
  return includeSnacks
    ? ["breakfast", "lunch", "dinner", "snack"]
    : ["breakfast", "lunch", "dinner"];
}

function generateKetoMealPlan(event) {
  event?.preventDefault();

  const form = getElement("mealPlannerForm");
  if (!form || !form.reportValidity()) return;

  const servings = Number(getElement("mealPlannerServings").value);
  const carbGoal = Number(getElement("mealPlannerCarbs").value);
  const style = getElement("mealPlannerStyle").value;
  const includeSnacks =
    getElement("mealPlannerSnacks").value === "yes";

  if (
    !Number.isInteger(servings) ||
    servings < 1 || servings > 12 ||
    !Number.isFinite(carbGoal) ||
    carbGoal < 10 || carbGoal > 150
  ) {
    showToast("Enter valid meal planner settings.");
    return;
  }

  const types = getMealPlanTypes(includeSnacks);
  const combinations = types.reduce(
    (days, type) => days.flatMap(day =>
      getMealsByType(type, style).map(meal => [...day, meal])
    ), [[]]
  ).map(meals => ({ meals, totals: getMealTotals(meals) }));

  if (!combinations.length) {
    showToast("Choose a different meal preference to build a full plan.");
    return;
  }

  const lowestCarbs = Math.min(...combinations.map(day => day.totals.netCarbs));
  const eligible = combinations.filter(day =>
    day.totals.netCarbs <= Math.max(carbGoal, lowestCarbs)
  );
  const mealCounts = new Map();
  const repetitionScore = day => day.meals.reduce(
    (total, meal) => total + (mealCounts.get(meal.id) || 0), 0
  );
  const days = Array.from({ length: 7 }, (_, index) => {
    const { meals, totals } = shuffleItems(eligible).reduce((best, candidate) =>
      repetitionScore(candidate) < repetitionScore(best) ? candidate : best
    );

    meals.forEach(meal => {
      mealCounts.set(meal.id, (mealCounts.get(meal.id) || 0) + 1);
    });

    return {
      day: index + 1,
      meals: meals.map(meal => meal.id),
      totals
    };
  });

  currentMealPlan = {
    servings,
    carbGoal,
    style,
    includeSnacks,
    days
  };

  const saved = saveLocalData(
    SITE_CONFIG.storageKeys.mealPlanner,
    currentMealPlan
  );

  renderKetoMealPlan();
  if (!saved) showToast("Your plan is ready. This browser could not save it for your next visit.");
}

function getMealById(mealId) {
  return KETO_MEALS.find(meal => meal.id === mealId);
}

function renderKetoMealPlan() {
  const daysContainer = getElement("mealPlannerDays");
  if (!daysContainer || !currentMealPlan) return;

  const { days, carbGoal, servings } = currentMealPlan;

  daysContainer.innerHTML = days.map(day => {
    const meals = day.meals
      .map(getMealById)
      .filter(Boolean);

    const exceedsGoal = day.totals.netCarbs > carbGoal;

    return `
      <article class="meal-day-card">
        <div class="meal-day-header">
          <h4>DAY ${day.day}</h4>

          <span>
            ${formatNumber(day.totals.netCarbs)} g net carbs
          </span>
        </div>

        <div class="meal-day-entries">
          ${meals.map(meal => `
            <div class="meal-day-entry">
              <span class="eyebrow">
                ${escapeHTML(meal.type)}
              </span>

              <strong>${escapeHTML(meal.name)}</strong>

              <small>
                ${meal.calories} kcal ·
                ${meal.protein} g protein ·
                ${meal.fat} g fat ·
                ${meal.netCarbs} g net carbs
              </small>
            </div>
          `).join("")}
        </div>

        <div class="meal-day-total">
          <strong>
            ${formatNumber(day.totals.calories, 0)} kcal
          </strong>

          <span>
            Protein: ${day.totals.protein} g ·
            Fat: ${day.totals.fat} g
          </span>
        </div>

        ${exceedsGoal ? `
          <p class="tool-disclaimer">
            This day exceeds your ${carbGoal} g net-carb target.
          </p>
        ` : ""}
      </article>
    `;
  }).join("");

  setElementText(
    "mealPlannerSummary",
    `7 days · ${servings} serving${servings === 1 ? "" : "s"} ` +
    `per meal · ${carbGoal} g daily net-carb target per person`
  );

  getElement("printMealPlan").disabled = false;
  getElement("copyGroceryList").disabled = false;

  renderGroceryList();
}

function buildGroceryList() {
  if (!currentMealPlan) return [];

  const groceries = new Map();

  currentMealPlan.days.forEach(day => {
    day.meals.forEach(mealId => {
      const meal = getMealById(mealId);
      if (!meal) return;

      meal.ingredients.forEach(ingredient => {
        const existing = groceries.get(ingredient) || 0;

        groceries.set(
          ingredient,
          existing + currentMealPlan.servings
        );
      });
    });
  });

  return [...groceries.entries()]
    .sort(([first], [second]) => first.localeCompare(second))
    .map(([ingredient, quantity]) => ({
      ingredient,
      quantity
    }));
}

function renderGroceryList() {
  const panel = getElement("groceryListPanel");
  const content = getElement("groceryListContent");

  if (!panel || !content || !currentMealPlan) return;

  const groceries = buildGroceryList();

  content.innerHTML = `
    <p class="ingredient-footnote">
      Multiply each ingredient amount by the number of portions shown.
      The same ingredient may appear in more than one amount.
    </p>

    <ul class="grocery-list-items">
      ${groceries.map(item => `
        <li>
          <label>
            <input type="checkbox">
            <span>
              ${escapeHTML(item.ingredient)}
              × ${item.quantity}
            </span>
          </label>
        </li>
      `).join("")}
    </ul>
  `;

  panel.hidden = false;
}

function copyMealPlannerGroceryList() {
  if (!currentMealPlan) return;

  const groceries = buildGroceryList();

  const text = [
    "007-NRG — WEEKLY GROCERY LIST",
    "",
    ...groceries.map(item =>
      `${item.ingredient} × ${item.quantity}`
    ),
    "",
    "Multiply each listed amount by the number of portions shown."
  ].join("\n");

  if (!navigator.clipboard?.writeText) {
    showToast("Clipboard access is unavailable. You can print the list with your meal plan.");
    return;
  }

  navigator.clipboard.writeText(text)
    .then(() => showToast("Grocery list copied!"))
    .catch(() => showToast("Could not copy the list. You can print it with your meal plan."));
}

function printKetoMealPlan() {
  if (!currentMealPlan) return;

  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    showToast("Allow popups to print your meal plan.");
    return;
  }

  const groceryList = buildGroceryList();

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>007-NRG Weekly Meal Plan</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 900px;
          margin: 30px auto;
          padding: 20px;
          color: #222;
        }
        h1, h2 { color: #742c45; }
        section {
          border-bottom: 1px solid #ddd;
          padding: 14px 0;
          break-inside: avoid;
        }
        li { margin: 7px 0; }
        small { color: #555; }
      </style>
    </head>
    <body>
      <h1>007-NRG — 7-Day Meal Plan</h1>
      <p>Servings per meal: ${currentMealPlan.servings}</p>
      <p>Daily net-carb target per person: ${currentMealPlan.carbGoal} g</p>

      ${currentMealPlan.days.map(day => `
        <section>
          <h2>Day ${day.day}</h2>
          <ul>
            ${day.meals.map(mealId => {
              const meal = getMealById(mealId);
              return meal
                ? `<li>${escapeHTML(meal.name)} —
                     ${meal.netCarbs} g net carbs</li>`
                : "";
            }).join("")}
          </ul>
          <strong>
            Estimated daily total per person:
            ${day.totals.netCarbs} g net carbs
          </strong>
        </section>
      `).join("")}

      <h2>Grocery List</h2>
      <ul>
        ${groceryList.map(item => `
          <li>
            ${escapeHTML(item.ingredient)}
            × ${item.quantity}
          </li>
        `).join("")}
      </ul>

      <small>
        Nutrition values are estimates. Grocery quantities
        represent recipe portions. Check labels and allergens.
      </small>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();

  printWindow.focus();
  printWindow.print();
}

function restoreKetoMealPlan(saved) {
  if (
    !Array.isArray(saved?.days) || saved.days.length !== 7 ||
    !Number.isInteger(saved.servings) || saved.servings < 1 || saved.servings > 12 ||
    !Number.isInteger(saved.carbGoal) || saved.carbGoal < 10 || saved.carbGoal > 150 ||
    !["balanced", "budget", "quick", "vegetarian"].includes(saved.style) ||
    typeof saved.includeSnacks !== "boolean"
  ) return null;

  const types = getMealPlanTypes(saved.includeSnacks);
  const days = [];

  for (const day of saved.days) {
    if (!Array.isArray(day?.meals) || day.meals.length !== types.length) return null;
    const meals = day.meals.map(getMealById);
    if (meals.some((meal, index) => meal?.type !== types[index])) return null;

    days.push({ day: days.length + 1, meals: day.meals, totals: getMealTotals(meals) });
  }

  return { ...saved, days };
}

function initializeKetoMealPlanner() {
  const form = getElement("mealPlannerForm");
  if (!form) return;

  form.addEventListener("submit", generateKetoMealPlan);

  getElement("shuffleMealPlan")?.addEventListener(
    "click",
    () => generateKetoMealPlan()
  );

  getElement("copyGroceryList")?.addEventListener(
    "click",
    copyMealPlannerGroceryList
  );

  getElement("printMealPlan")?.addEventListener(
    "click",
    printKetoMealPlan
  );

  currentMealPlan = restoreKetoMealPlan(
    readLocalData(SITE_CONFIG.storageKeys.mealPlanner)
  );

  if (currentMealPlan) {
    getElement("mealPlannerServings").value = currentMealPlan.servings;
    getElement("mealPlannerCarbs").value = currentMealPlan.carbGoal;
    getElement("mealPlannerStyle").value = currentMealPlan.style;
    getElement("mealPlannerSnacks").value = currentMealPlan.includeSnacks ? "yes" : "no";
    renderKetoMealPlan();
  }
}

/* === KETO MEAL PLANNER END === */


/* ============================================================
   DAILY FOOD TRACKER START
   ============================================================ */

let foodTrackerEntries = [];
let foodTrackerGoal = 25;
let foodTrackerHasUnsavedEntries = false;
const FOOD_TRACKER_MEALS = ["breakfast", "lunch", "dinner", "snack"];

function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getSelectedFoodTrackerDate() {
  const dateInput = getElement("foodTrackerDate");
  if (!dateInput.value) dateInput.value = getLocalDateString();
  return dateInput.value;
}

function readFoodTrackerEntries(fallback = []) {
  const entries = readLocalData(SITE_CONFIG.storageKeys.foodTracker, fallback);
  if (!Array.isArray(entries)) return fallback;

  return entries.filter(entry =>
    typeof entry?.id === "string" &&
    typeof entry.date === "string" &&
    typeof entry.name === "string" &&
    FOOD_TRACKER_MEALS.includes(entry.meal) &&
    [entry.calories, entry.totalCarbs, entry.fiber, entry.protein, entry.fat]
      .every(value => Number.isFinite(value) && value >= 0) &&
    entry.fiber <= entry.totalCarbs
  );
}

async function updateFoodTrackerEntries(changeEntries, message) {
  function update() {
    if (!foodTrackerHasUnsavedEntries) {
      foodTrackerEntries = readFoodTrackerEntries(foodTrackerEntries);
    }
    foodTrackerEntries = changeEntries(foodTrackerEntries);
    foodTrackerHasUnsavedEntries = !saveLocalData(
      SITE_CONFIG.storageKeys.foodTracker,
      foodTrackerEntries
    );
    renderFoodTracker();
    showToast(foodTrackerHasUnsavedEntries
      ? "Log updated for this visit. This browser could not save the change."
      : message);
  }

  if (navigator.locks?.request) {
    await navigator.locks.request(SITE_CONFIG.storageKeys.foodTracker, update);
  } else {
    update();
  }
}

function getEntriesForSelectedDate() {
  const selectedDate = getSelectedFoodTrackerDate();

  return foodTrackerEntries.filter(entry =>
    entry.date === selectedDate
  );
}

function renderFoodTracker() {
  const entries = getEntriesForSelectedDate();

  const totals = entries.reduce((total, entry) => {
    total.calories += entry.calories;
    total.protein += entry.protein;
    total.fat += entry.fat;
    total.netCarbs += calculateFoodNetCarbs(
      entry.totalCarbs,
      entry.fiber
    );
    return total;
  }, {
    calories: 0,
    protein: 0,
    fat: 0,
    netCarbs: 0
  });

  const goal = foodTrackerGoal;
  const remaining = Math.round((goal - totals.netCarbs) * 10) / 10;

  setElementText(
    "trackerNetCarbs",
    `${formatNumber(totals.netCarbs)} g`
  );
  setElementText(
    "trackerCalories",
    formatNumber(totals.calories, 0)
  );
  setElementText(
    "trackerProtein",
    `${formatNumber(totals.protein)} g`
  );
  setElementText(
    "trackerFat",
    `${formatNumber(totals.fat)} g`
  );

  setElementText(
    "trackerCarbRemaining",
    remaining >= 0
      ? `${formatNumber(remaining)} g remaining`
      : `${formatNumber(Math.abs(remaining))} g over target`
  );

  const progress = getElement("trackerCarbProgress");

  if (progress) {
    const percentage = goal > 0
      ? clampNumber(totals.netCarbs / goal * 100, 0, 100)
      : (totals.netCarbs > 0 ? 100 : 0);

    progress.style.width = `${percentage}%`;
    progress.setAttribute(
      "aria-valuenow",
      String(Math.round(percentage))
    );
  }

  const container = getElement("foodLogEntries");
  if (!container) return;
  getElement("clearFoodTrackerDay").disabled = !entries.length;

  if (!entries.length) {
    container.innerHTML = `
      <p class="tool-empty-state">
        No foods logged for this date. Add an entry to see your daily totals.
      </p>
    `;
    return;
  }

  container.innerHTML = FOOD_TRACKER_MEALS.map(category => {
    const meals = entries.filter(entry =>
      entry.meal === category
    );

    if (!meals.length) return "";

    return `
      <section class="food-log-category">
        <h5>${category.toUpperCase()}</h5>

        ${meals.map(entry => `
          <article class="food-log-entry">
            <div>
              <strong>${escapeHTML(entry.name)}</strong>

              <p>
                ${formatNumber(entry.calories, 0)} kcal ·
                ${formatNumber(
                  calculateFoodNetCarbs(
                    entry.totalCarbs,
                    entry.fiber
                  )
                )} g net carbs
              </p>

              <small>
                Protein ${formatNumber(entry.protein)} g ·
                Fat ${formatNumber(entry.fat)} g
              </small>
            </div>

            <button
              class="button button-secondary"
              type="button"
              data-remove-food="${escapeHTML(entry.id)}"
              aria-label="Remove ${escapeHTML(entry.name)}"
            >
              REMOVE
            </button>
          </article>
        `).join("")}
      </section>
    `;
  }).join("");

  container.querySelectorAll("[data-remove-food]")
    .forEach(button => {
      button.addEventListener("click", async () => {
        const id = button.dataset.removeFood;
        await updateFoodTrackerEntries(
          entries => entries.filter(entry => entry.id !== id),
          "Food entry removed."
        );
        if (document.activeElement === document.body) {
          const next = container.querySelector("[data-remove-food]") || getElement("foodEntryName");
          next.focus();
        }
      });
    });
}

function addFoodTrackerEntry(event) {
  event.preventDefault();

  const form = getElement("foodTrackerForm");
  if (!form || !form.reportValidity()) return;

  const name = getElement("foodEntryName").value.trim();
  const meal = getElement("foodEntryMeal").value;

  const calories = Number(getElement("foodEntryCalories").value);
  const totalCarbs = Number(getElement("foodEntryCarbs").value);
  const fiber = Number(getElement("foodEntryFiber").value);
  const protein = Number(getElement("foodEntryProtein").value);
  const fat = Number(getElement("foodEntryFat").value);

  if (
    !name ||
    !FOOD_TRACKER_MEALS.includes(meal) ||
    ![calories, totalCarbs, fiber, protein, fat]
      .every(Number.isFinite) ||
    [calories, totalCarbs, fiber, protein, fat]
      .some(value => value < 0)
  ) {
    showToast("Please check the food entry values.");
    return;
  }

  if (fiber > totalCarbs) {
    showToast("Fiber cannot exceed total carbohydrates.");
    getElement("foodEntryFiber").focus();
    return;
  }

  const entry = {
    id: window.crypto?.randomUUID?.() ||
      `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    date: getSelectedFoodTrackerDate(),
    name: name.slice(0, 100),
    meal,
    calories,
    totalCarbs,
    fiber,
    protein,
    fat
  };

  form.reset();
  updateFoodTrackerEntries(entries => [...entries, entry], "Food added to your daily log.");
}

function clearSelectedFoodTrackerDay() {
  const selectedDate = getSelectedFoodTrackerDate();

  const hasEntries = foodTrackerEntries.some(entry =>
    entry.date === selectedDate
  );

  if (!hasEntries) {
    showToast("No entries to clear for this date.");
    return;
  }

  if (!window.confirm(
    `Delete all food entries for ${selectedDate}?`
  )) {
    return;
  }

  updateFoodTrackerEntries(
    entries => entries.filter(entry => entry.date !== selectedDate),
    "Food entries for this date were cleared."
  );
}

function initializeKetoFoodTracker() {
  const form = getElement("foodTrackerForm");
  if (!form) return;

  const dateInput = getElement("foodTrackerDate");
  const goalInput = getElement("foodTrackerCarbGoal");

  if (dateInput) {
    dateInput.value = getLocalDateString();

    dateInput.addEventListener(
      "change",
      renderFoodTracker
    );
  }

  function restoreGoal() {
    const savedGoal = readLocalData(SITE_CONFIG.storageKeys.foodTrackerGoal, 25);
    if (Number.isFinite(savedGoal) && savedGoal >= 0 && savedGoal <= 150) {
      foodTrackerGoal = savedGoal;
    }
    goalInput.value = foodTrackerGoal;
  }
  restoreGoal();

  goalInput.addEventListener("change", () => {
    if (!goalInput.checkValidity()) {
      goalInput.value = foodTrackerGoal;
      showToast("Enter a goal from 0 to 150 g, with up to one decimal place.");
      return;
    }
    foodTrackerGoal = goalInput.valueAsNumber;
    if (!saveLocalData(SITE_CONFIG.storageKeys.foodTrackerGoal, foodTrackerGoal)) {
      showToast("Goal updated for this visit. This browser could not save it.");
    }

    renderFoodTracker();
  });

  foodTrackerEntries = readFoodTrackerEntries();
  window.addEventListener("storage", event => {
    if (event.key === SITE_CONFIG.storageKeys.foodTracker && !foodTrackerHasUnsavedEntries) {
      foodTrackerEntries = readFoodTrackerEntries();
      renderFoodTracker();
    }
    if (event.key === SITE_CONFIG.storageKeys.foodTrackerGoal) {
      restoreGoal();
      renderFoodTracker();
    }
  });

  form.addEventListener("submit", addFoodTrackerEntry);

  getElement("clearFoodTrackerDay")?.addEventListener(
    "click",
    clearSelectedFoodTrackerDay
  );

  renderFoodTracker();
}

/* === DAILY FOOD TRACKER END === */


/* ============================================================
   SCROLL ANIMATIONS START
   ============================================================ */

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
    rootMargin: "0px 0px 35px 0px"
  });

  elements.forEach(element => {
    observer.observe(element);
  });
}

/* === SCROLL ANIMATIONS END === */


/* ============================================================
   KEYBOARD ACCESSIBILITY START
   ============================================================ */

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

    /* === ESCAPE KEY START === */

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

    /* === ESCAPE KEY END === */


    /* === FOCUS TRAP START === */

    if (event.key !== "Tab" || !activeDialog) return;

    const focusable = Array.from(
      activeDialog.querySelectorAll(
        'button:not([disabled]), ' +
        'a[href], ' +
        'input:not([disabled]), ' +
        'select:not([disabled]), ' +
        'textarea:not([disabled]), ' +
        'summary, ' +
        '[tabindex]:not([tabindex="-1"])'
      )
    ).filter(element =>
      element.getClientRects().length > 0 &&
      !element.closest("[hidden]")
    );

    if (!focusable.length) {
      event.preventDefault();
      activeDialog.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (
      event.shiftKey &&
      (
        document.activeElement === first ||
        !activeDialog.contains(document.activeElement)
      )
    ) {
      event.preventDefault();
      last.focus();
    } else if (
      !event.shiftKey &&
      (
        document.activeElement === last ||
        !activeDialog.contains(document.activeElement)
      )
    ) {
      event.preventDefault();
      first.focus();
    }

    /* === FOCUS TRAP END === */
  });
}

/* === KEYBOARD ACCESSIBILITY END === */


/* ============================================================
   IMAGE ERROR HANDLING START
   ============================================================ */

function initializeImageErrorHandling() {
  document.addEventListener("error", event => {
    if (!(event.target instanceof HTMLImageElement)) {
      return;
    }

    console.warn(
      "[007-NRG] Image could not be loaded:",
      event.target.currentSrc || event.target.src
    );
  }, true);
}

/* === IMAGE ERROR HANDLING END === */


/* ============================================================
   GOOGLE REVIEWS INTEGRATION START
   ============================================================ */

/*
   The Google Reviews section currently displays
   an informational placeholder.

   Once the client supplies the official Google
   Business Profile review URL, configure it here.

   Do not generate fictional customer reviews,
   ratings, or review counts.

   A full live review feed would require an
   approved third-party widget or appropriate
   Google API integration.
*/

const GOOGLE_REVIEWS_CONFIG = {
  businessProfileUrl: "",
  reviewSubmissionUrl: ""
};

function initializeGoogleReviews() {
  const reviewsSection = getElement("reviews");

  if (!reviewsSection) return;

  const reviewsPanel = reviewsSection.querySelector(
    ".google-reviews-panel"
  );

  if (!reviewsPanel) return;

  const existingActions = reviewsPanel.querySelector(
    ".google-review-actions"
  );

  if (existingActions) {
    existingActions.remove();
  }

  const links = [];

  if (GOOGLE_REVIEWS_CONFIG.businessProfileUrl) {
    links.push(`
      <a
        class="button button-primary"
        href="${escapeHTML(
          GOOGLE_REVIEWS_CONFIG.businessProfileUrl
        )}"
        target="_blank"
        rel="noopener noreferrer"
      >
        READ GOOGLE REVIEWS
      </a>
    `);
  }

  if (GOOGLE_REVIEWS_CONFIG.reviewSubmissionUrl) {
    links.push(`
      <a
        class="button button-secondary"
        href="${escapeHTML(
          GOOGLE_REVIEWS_CONFIG.reviewSubmissionUrl
        )}"
        target="_blank"
        rel="noopener noreferrer"
      >
        WRITE A GOOGLE REVIEW
      </a>
    `);
  }

  const showReviews = links.length > 0;
  reviewsSection.hidden = !showReviews;
  document.querySelectorAll('a[href="#reviews"]').forEach(link => {
    link.hidden = !showReviews;
  });
  if (!showReviews) return;

  const actions = document.createElement("div");
  actions.className = "google-review-actions";
  actions.innerHTML = links.join("");

  reviewsPanel.appendChild(actions);
}

/* === GOOGLE REVIEWS INTEGRATION END === */


/* ============================================================
   APPLICATION INITIALIZATION START
   ============================================================ */

/*
   All site features are initialized here.

   This function is called only after the
   HTML document is ready.

   Each feature checks for its required HTML
   elements before attaching event listeners.
*/

function initializeApplication() {

  /* === WEBSITE INFORMATION START === */

  setElementText(
    "currentYear",
    new Date().getFullYear()
  );

  /* === WEBSITE INFORMATION END === */


  /* === GLOBAL USER INTERFACE START === */

  initializeImageErrorHandling();

  initializeMobileNavigation();

  initializeHeroSlideshow();

  /* === GLOBAL USER INTERFACE END === */


  /* === PRODUCT COLLECTION START === */

  initializeProductCollection();

  initializeProductPreview();

  initializeShoppingCart();

  /* === PRODUCT COLLECTION END === */


  /* === INGREDIENT INFORMATION START === */

  initializeIngredientExplorer();

  initializeIngredientLabelSummary();

  initializeProductLabelViewer();

  initializeIngredientExplorerTool();

  /* === INGREDIENT INFORMATION END === */


  /* === FITNESS & NUTRITION TOOLS START === */

  initializeToolNavigation();

  initializeNetCarbCalculator();

  initializeWorkoutTimer();

  initializeKetoMacroCalculator();

  initializeKetoMealPlanner();

  initializeKetoFoodTracker();

  /* === FITNESS & NUTRITION TOOLS END === */


  /* === REVIEWS START === */

  initializeGoogleReviews();

  /* === REVIEWS END === */


  /* === ACCESSIBILITY & VISUAL EFFECTS START === */

  initializeScrollAnimations();

  initializeKeyboardControls();

  /* === ACCESSIBILITY & VISUAL EFFECTS END === */


}

/* === APPLICATION INITIALIZATION END === */


/* ============================================================
   DOM READY START
   ============================================================ */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initializeApplication,
    { once: true }
  );

} else {

  initializeApplication();

}

/* === DOM READY END === */


/* ============================================================
   007-NRG WEBSITE
   END OF JAVASCRIPT FILE
   ============================================================ */
