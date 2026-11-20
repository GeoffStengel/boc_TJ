
# 007-NRG — Coding Standards

**Project:** 007-NRG Website
**Stack:** HTML5 / CSS3 / Vanilla JavaScript

## 1. Core Principles

- Preserve existing functionality.
- Keep code readable, organized, and maintainable.
- Avoid unnecessary frameworks and dependencies.
- Maintain compatibility with static hosting.
- Inspect current source before modifying files.
- Do not assume chat-generated code is already deployed.

## 2. Code Delivery

The project owner prefers:

- Complete updated files when requested.
- Clickable, copyable code blocks.
- One file at a time unless otherwise requested.
- Numbered parts for large files.
- Clear instructions for combining parts.
- No unnecessary downloads.

Never omit existing functionality without approval.

## 3. Naming Conventions

Use descriptive function, variable, ID, and class names.

Good:
- `initializeProductCollection()`
- `calculateNetCarbs()`
- `.ingredient-comparison-grid`
- `.meal-day-card`

Avoid vague names such as `fn1`, `box2`, or `x`.

## 4. Section Comments

Use clearly labeled START and END comments.

JavaScript:

```javascript
/* === PRODUCT COLLECTION START === */

// Product collection code

/* === PRODUCT COLLECTION END === */
```

CSS:

```css
/* === PRODUCT COLLECTION START === */

/* Product collection styles */

/* === PRODUCT COLLECTION END === */
```

HTML:

```html
<!-- === PRODUCT COLLECTION START === -->

<!-- Product collection markup -->

<!-- === PRODUCT COLLECTION END === -->
```

Keep comments useful without over-documenting obvious code.

## 5. HTML Standards

- Use semantic HTML and logical headings.
- Use buttons for actions and links for navigation.
- Label inputs and provide meaningful image alt text.
- Keep IDs unique and consistent with JavaScript.
- Preserve SEO metadata, favicon links, and structured data.
- Maintain keyboard accessibility.

## 6. CSS Standards

- Reuse existing design tokens and components.
- Preserve the burgundy, gold, and dark brand palette.
- Avoid duplicate selectors and conflicting overrides.
- Use Grid and Flexbox for responsive layouts.
- Prevent horizontal overflow on mobile.
- Respect reduced-motion preferences.

## 7. JavaScript Standards

- Prefer `const`, `let`, and descriptive functions.
- Use `addEventListener` instead of inline handlers.
- Validate inputs and handle errors.
- Avoid duplicate listeners and unnecessary globals.
- Escape dynamic HTML; use `textContent` for user input.
- Keep initialization organized and run it once.
- Preserve localStorage keys or provide migration logic.

## 8. Product & Nutrition Accuracy

- Never invent product prices, reviews, or ingredient doses.
- The 9,048 mg proprietary blend amount is a combined total.
- Do not invent medical or product performance claims.
- Identify nutrition calculations and meal data as estimates.
- Keep appropriate product warnings visible.
- Do not enable checkout without approved pricing.

## 9. Security & Accessibility

- Never expose secrets or private API keys in frontend code.
- Treat user input as untrusted.
- Ensure keyboard navigation and visible focus indicators.
- Support Escape and focus management for modals.
- Use accessible labels and sufficient color contrast.
- Avoid unnecessary third-party scripts.

## 10. Testing Checklist

Before declaring work complete:

- [ ] Syntax and console checked
- [ ] HTML IDs match JavaScript
- [ ] Desktop and mobile layouts tested
- [ ] Product collection and modals tested
- [ ] All six tools tested
- [ ] Images and links verified
- [ ] No unintended regressions
- [ ] Deployment checked when applicable

Never claim a test passed unless it was performed.

## 11. Git & Documentation

- Make focused changes and descriptive commits.
- Do not overwrite unrelated work.
- Update `CHANGE_LOG.md` with short, meaningful entries.
- Update `ROADMAP.md` when priorities change.
- Update architecture and directory docs when necessary.

## 12. Future Agent Workflow

1. Read the documentation in `docs/`.
2. Inspect the actual repository files.
3. Understand existing behavior before editing.
4. Make the smallest effective change.
5. Preserve functionality and design consistency.
6. Test what can be tested.
7. Deliver complete, copyable code when requested.
8. Clearly identify anything untested.
9. Update relevant documentation.

**Guiding principle: Improve what works without
introducing unnecessary complexity.**
