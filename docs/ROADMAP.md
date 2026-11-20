
# 007-NRG Website — Development Roadmap

**Project:** 007-NRG Energy Website  
**Repository:** https://github.com/GeoffStengel/boc_TJ  
**Status:** Active development  
**Last updated:** November 20, 2026

---

## 1. Project Vision

Build a professional, responsive, SEO-friendly website for the
007-NRG energy product brand.

The website should accomplish three primary goals:

1. Showcase 007-NRG products with premium visual presentation.
2. Educate visitors about the ingredients and product label.
3. Provide useful fitness and nutrition tools that encourage
   visitors to return to the website.

The site should remain lightweight, fast, accessible, and easy
to maintain.

---

## 2. Technology Strategy

Current technology:

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub repository
- Static website hosting
- Browser localStorage for selected tools

The project should avoid unnecessary dependencies.

Do not introduce a JavaScript framework, database, or backend
without first discussing the benefits and tradeoffs.

The website should remain compatible with static hosting,
including GitHub Pages.

---

## 3. Current Development Phase

### Phase 1 — Website Foundation

Status: Implemented; testing required.

- [x] Main website structure
- [x] Brand color palette
- [x] Responsive navigation
- [x] Hero product slideshow
- [x] Product collection
- [x] Product detail modal
- [x] Product label viewer
- [x] Ingredient information
- [x] Footer and supporting sections
- [ ] Complete browser and device testing
- [ ] Verify all images and links
- [ ] Confirm final product information with client

### Phase 2 — Product Collection UI/UX

Status: CSS redesign supplied; visual review pending.

- [x] Create reusable product card structure
- [x] Add product category filters
- [x] Make product images clickable
- [x] Add product information modal
- [x] Prepare compact mobile card layout
- [ ] Verify mobile card proportions
- [ ] Optimize product image positioning
- [ ] Test tablet and desktop layouts
- [ ] Confirm product names, variants, and packaging
- [ ] Confirm prices and purchasing workflow

### Phase 3 — Ingredient Education

Status: Implemented in JavaScript; integration testing pending.

- [x] Ingredient database
- [x] Search functionality
- [x] Ingredient categories
- [x] Ingredient detail disclosures
- [x] Ingredient comparison interface
- [x] Product label viewer
- [ ] Verify Ingredient Explorer 2.0 HTML integration
- [ ] Improve ingredient comparison UI
- [ ] Review educational wording for accuracy
- [ ] Confirm complete ingredient list against final label

Important:

The 9,048 mg proprietary blend amount represents the
entire blend, not each individual ingredient.

Do not invent individual ingredient quantities.

### Phase 4 — Fitness and Nutrition Tools

Status: JavaScript supplied; functionality testing pending.

- [x] Net Carb Calculator
- [x] Workout Interval Timer
- [x] Keto Macro Calculator
- [x] Seven-Day Keto Meal Planner
- [x] Daily Food Tracker
- [x] Ingredient Explorer 2.0
- [ ] Verify HTML IDs and JavaScript bindings
- [ ] Test calculations and input validation
- [ ] Test localStorage persistence
- [ ] Improve mobile tool layouts
- [ ] Test meal plan printing and grocery list copying
- [ ] Improve meal planning algorithm

The meal planner currently uses a sample meal database.

It does not guarantee that every generated day meets
the visitor's calorie, protein, or net-carb target.

### Phase 5 — Reviews and Trust

Status: Planned.

- [ ] Obtain official Google Business Profile URL
- [ ] Obtain official Google review submission URL
- [ ] Add verified Google Reviews integration
- [ ] Test review display on mobile
- [ ] Add appropriate review source attribution

Never invent reviews, star ratings, or customer testimonials.

### Phase 6 — SEO and Performance

Status: Audit required.

- [ ] Verify page title and meta description
- [ ] Verify canonical URL
- [ ] Verify Open Graph metadata
- [ ] Verify social sharing images
- [ ] Verify favicon and touch icons
- [ ] Add or validate structured data where appropriate
- [ ] Check image alt text
- [ ] Optimize image sizes and formats
- [ ] Test Core Web Vitals
- [ ] Run Lighthouse audits
- [ ] Review sitemap.xml
- [ ] Review robots.txt
- [ ] Confirm analytics configuration and consent requirements

### Phase 7 — Production Readiness

Status: Pending.

- [ ] Complete full desktop testing
- [ ] Complete full mobile testing
- [ ] Test all six tools
- [ ] Verify all product images
- [ ] Verify all navigation links
- [ ] Verify no JavaScript console errors
- [ ] Confirm product label and warnings
- [ ] Confirm client-approved copy
- [ ] Confirm review integration
- [ ] Confirm purchasing workflow
- [ ] Perform final accessibility audit
- [ ] Obtain client approval

---

## 4. Future Feature Ideas

Potential improvements:

- More advanced keto meal planning
- Expanded food database
- Recipe search and filtering
- Nutrition goal presets
- Grocery list improvements
- Food tracker export/import
- More workout timer presets
- Saved workout routines
- Ingredient comparison enhancements
- Additional fitness calculators
- Product FAQs
- Educational articles
- Customer-facing product comparison tools

These are ideas, not approved implementation requirements.

---

## 5. Development Priorities

### Priority 1 — Critical

- Ensure HTML, CSS, and JavaScript work together.
- Fix broken layouts and functionality.
- Preserve product information and safety warnings.
- Resolve console errors.

### Priority 2 — High

- Improve product collection mobile UI.
- Finish styling all tools.
- Restore and verify favicon and SEO metadata.
- Test responsive behavior.

### Priority 3 — Medium

- Complete Google Reviews integration.
- Improve ingredient explorer UX.
- Optimize performance.
- Improve meal planner accuracy.

### Priority 4 — Future

- Expand tools.
- Add content management features if needed.
- Consider backend services only when justified.

---

## 6. Definition of Done

A feature is complete only when:

1. It works on desktop and mobile.
2. It produces no unexpected console errors.
3. It is keyboard accessible where applicable.
4. It does not break existing functionality.
5. It matches the website's design system.
6. It has been tested with realistic inputs.
7. Relevant documentation has been updated.

---

## 7. Instructions for Future Agents

Read these files before making substantial changes:

1. docs/PROJECT_STRUCTURE.md
2. docs/DIRECTORY_TREE.md
3. docs/CODING_STANDARDS.md
4. docs/CHANGE_LOG.md
5. docs/ROADMAP.md

Inspect the actual repository files before editing.

Do not assume documentation is newer than the source code.

Preserve existing functionality unless removal is explicitly
approved.

Deliver complete updated code in clickable, copyable blocks,
one file at a time when requested.

Use descriptive names and clearly labeled code sections.
