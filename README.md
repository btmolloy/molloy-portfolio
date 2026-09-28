# Benjamin Molloy Portfolio

A dependency-free static portfolio for `www.molloy.info`. The site is designed as the résumé itself: a focused homepage, a searchable project archive, and reusable case studies with clean URLs.

## Site structure

- `/` — portrait-led introduction, selected work, experience and education, technical areas, current focus, and contact
- `/projects/` — searchable and category-filtered project archive
- `/projects/<project-id>/` — generated project case-study pages
- `project.html?project=<project-id>` — compatibility route for older shared links
- `about.html`, `resume.html`, `contact.html`, and `work.html` — compatibility redirects to the new information architecture

## Update a project

1. Edit the matching record in `data/projects.js`.
2. Add project media under `assets/images/projects/`.
3. Run `npm run build` to regenerate clean case-study routes.
4. Run `npm run check` to validate required content, routes, and media.

There are no package dependencies to install; the scripts use Node's standard library.

### Project fields

Every project includes reusable archive and case-study content:

```js
{
  id: "url-safe-project-id",
  published: true,
  title: "Project title",
  shortTitle: "Optional display title",
  role: "Your role",
  timeline: "Month YYYY – Month YYYY",
  status: "In progress | Completed | Archived",
  category: "Broad filter category",
  problem: "The concise problem statement",
  outcome: "The concise result",
  summary: "A one- or two-sentence overview",
  image: { src: "assets/...", alt: "Useful image description" },
  stack: ["Technology"],
  tags: ["Searchable tag"],
  highlights: ["Outcome or proof point"],
  featured: true,
  order: 100,
  links: { live: "", repo: "", caseStudy: "" },
  details: {
    overview: "Longer context",
    problem: "Optional expanded problem statement",
    outcome: "Optional expanded outcome statement",
    contributions: ["Specific work owned"],
    notes: ["Technical decision"],
    limitations: ["Known limitation"],
    nextSteps: ["Next iteration"]
  },
  workflow: [
    { stage: "Stage name", description: "What happens here" }
  ],
  gallery: [{ src: "assets/...", alt: "Useful image description" }]
}
```

`workflow`, expanded problem/outcome copy, and gallery items are optional. The templates hide empty sections automatically.

Set `published: false` while drafting or retiring a project. It will be omitted from the homepage, archive, generated routes, and sitemap; `npm run build` also removes any stale generated page for that project.

## Local preview

```sh
python3 -m http.server 8765
```

Then open `http://localhost:8765/`.

## Headshot

The homepage hero includes a dedicated 3:4 portrait area. Add the final image at `assets/images/headshot.jpg`, then change `background-image: none` in `.hero-portrait` to `background-image: url("../images/headshot.jpg")`.

## Design and accessibility

- Dark-first technical editorial theme with a user-controlled light mode
- Responsive layout and mobile navigation
- Keyboard project search with `Cmd/Ctrl + K`
- Reduced-motion support and visible focus states
- Print stylesheet for saving the homepage as a résumé-style record
- Semantic case-study structure and accessible image lightbox
- Optimized NetTower preview images while preserving the originals
