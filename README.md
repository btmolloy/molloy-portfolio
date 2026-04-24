# Benjamin Molloy Portfolio


## Pages

- `index.html` - Homepage and featured work highlights
- `about.html` - Bio, strengths, and leadership background
- `work.html` - Data-driven project archive with search, filtering, and pagination
- `project.html` - Dynamic project detail page (`project.html?project=<id>`)
- `resume.html` - Resume-style summary page
- `contact.html` - Contact channels + mailto message form
- `404.html` - GitHub Pages 404 page

## Add a New Project

1. Open `data/projects.js`.
2. Add a new object to the array using the same shape as existing entries.
3. Set `order` higher for newer/priority items (descending sort).
4. Optional: set `featured: true` to show on the homepage.
5. Commit and push. The archive and dynamic project detail pages update automatically.

### Project Object Schema

```json
{
  "id": "unique-project-id",
  "title": "Project title",
  "role": "Your role",
  "timeline": "Month YYYY - Month YYYY",
  "summary": "Short overview",
  "image": {
    "src": "assets/images/projects/example.svg",
    "alt": "Project preview image"
  },
  "details": {
    "overview": "Long-form project context paragraph.",
    "contributions": ["Major contribution 1", "Major contribution 2"],
    "notes": ["Implementation detail 1", "Implementation detail 2"],
    "nextSteps": ["Planned improvement 1", "Planned improvement 2"]
  },
  "gallery": [
    {
      "src": "assets/images/projects/example-detail-1.svg",
      "alt": "Detail image 1"
    }
  ],
  "stack": ["Tech 1", "Tech 2"],
  "tags": ["Category 1", "Category 2"],
  "highlights": [
    "Impact/result bullet 1",
    "Impact/result bullet 2",
    "Impact/result bullet 3"
  ],
  "visibility": "Private or Public",
  "featured": false,
  "order": 100,
  "links": {
    "live": "https://...",
    "repo": "https://...",
    "caseStudy": "https://..."
  }
}
```

