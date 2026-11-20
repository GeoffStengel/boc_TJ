
# 007-NRG — Project Architecture

**Repository:** https://github.com/GeoffStengel/boc_TJ
**Stack:** HTML5 / CSS3 / Vanilla JavaScript
**Hosting:** Static hosting compatible with GitHub Pages

## Overview

007-NRG is a product website with ingredient education
and interactive fitness/nutrition tools.

The project avoids unnecessary frameworks and backend
dependencies to keep maintenance and hosting simple.

## Core Files

| File | Responsibility |
|---|---|
| `index.html` | Structure, forms, metadata, SEO, modals |
| `css/style.css` | Design system, components, responsive UI |
| `js/script.js` | Data, interactions, tools, initialization |
| `images/` | Product and brand artwork |
| `docs/` | Development documentation |

## JavaScript Architecture

`js/script.js` contains:

**Configuration and data**
- `SITE_CONFIG`
- `PRODUCT_IMAGES`, `PRODUCTS`, `HERO_SLIDES`
- `PRODUCT_LABEL_INFORMATION`, `INGREDIENTS`
- `KETO_MEALS`

**Website features**
- Navigation and hero slideshow
- Product collection and previews
- Ingredient search and label viewer
- Ordering information drawer and configurable Google Reviews links

**Interactive tools**
- Net Carb Calculator
- Workout Interval Timer
- Keto Macro Calculator
- Ingredient Explorer 2.0
- Seven-Day Keto Meal Planner
- Daily Food Tracker

**Application entry point**
- `initializeApplication()`

Feature initialization uses dedicated `initialize...()`
functions called after the DOM is ready.

## HTML / JavaScript Integration

JavaScript relies on specific HTML IDs and data attributes.

Examples:

- `#productGrid`
- `#ingredientGrid`
- `#mealPlannerForm`
- `#foodTrackerForm`
- `[data-tool]`
- `[data-tool-panel]`

When changing HTML IDs, update matching JavaScript
and CSS references.

## Browser Storage

The meal planner and food tracker use localStorage:

- `007nrg_meal_planner_v1`
- `007nrg_food_tracker_v1`
- `007nrg_food_tracker_goal_v1`

Data remains in the visitor's browser and is not
synchronized to a server.

## Important Constraints

- Checkout remains disabled until pricing is approved.
- Never invent product prices or ingredient quantities.
- The 9,048 mg proprietary blend is a combined amount.
- Nutrition tools provide estimates, not medical advice.
- Google Reviews requires official integration details.
- The meal planner does not guarantee nutritional targets.

## Development Notes

The HTML, CSS, and JavaScript must be tested together.

The repository source code is authoritative; documentation
may describe changes that have not yet been deployed.

See `CODING_STANDARDS.md` for development conventions
and `ROADMAP.md` for outstanding work.
