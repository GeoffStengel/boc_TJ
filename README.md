# 007-NRG

007-NRG is a mobile-first product information site with a bottle and packaging gallery, an interactive label viewer, and fitness and nutrition tools.

## Features

- Product slideshow, collection filters, and product details.
- Searchable ingredient cards, side-by-side comparisons, and a zoomable reference label.
- Net Carb Calculator, Workout Interval Timer, Keto Macro Calculator, Keto Meal Planner, Food Tracker, and Ingredient Explorer.
- Grocery list copying and meal plan printing. The meal planner and food tracker save data in the current browser.

## Local development

The site uses HTML, CSS, and vanilla JavaScript. It requires no build step, package installation, or backend.

From the repository root, start a local server with Python 3.

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/). The entry point is `index.html`, styles are in `css/style.css`, interactions are in `js/script.js`, and artwork is in `images/`.

## Static hosting

The repository root contains the complete site for GitHub Pages or another static host. Relative asset paths support GitHub Pages project URLs. For GitHub Pages, select the approved release branch and its root as the publishing source after review. [GitHub Pages publishing settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

Online ordering is unavailable. Google Reviews links require configuration. The product label and policy drafts require client approval before production release.

## Project documentation

- [Roadmap](docs/ROADMAP.md)
- [Project structure](docs/PROJECT_STRUCTURE.md)
- [Directory tree](docs/DIRECTORY_TREE.md)
- [Change log](docs/CHANGE_LOG.md)
- [Coding standards](docs/CODING_STANDARDS.md)
