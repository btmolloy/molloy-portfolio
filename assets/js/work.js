function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getProjectImage(project) {
  if (project.id === "nettower-agentless-network-topology" && project.gallery?.[0]?.src) {
    return {
      src: project.gallery[0].src,
      alt: project.gallery[0].alt || `${project.title} screenshot`
    };
  }

  if (typeof project.image === "string") return { src: project.image, alt: `${project.title} preview` };
  return { src: project.image?.src || "", alt: project.image?.alt || `${project.title} preview` };
}

function imageUrl(source) {
  return /^(?:[a-z]+:|\/)/i.test(source) ? source : `/${source}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("project-list");
  const count = document.getElementById("project-count");
  const filters = document.getElementById("project-filters");
  const search = document.getElementById("project-search");
  if (!list || !count || !filters || !search) return;

  const projects = (Array.isArray(window.PORTFOLIO_PROJECTS) ? [...window.PORTFOLIO_PROJECTS] : [])
    .filter((project) => project.published === true)
    .sort((a, b) => (b.order || 0) - (a.order || 0));
  const state = { category: "All", query: "" };

  function searchableText(project) {
    return [
      project.title,
      project.summary,
      project.problem,
      project.outcome,
      project.role,
      project.timeline,
      project.status,
      project.category,
      ...(project.tags || []),
      ...(project.stack || []),
      ...(project.highlights || [])
    ].join(" ").toLowerCase();
  }

  function filteredProjects() {
    const query = state.query.trim().toLowerCase();
    return projects.filter((project) => {
      const categoryMatches = state.category === "All" || project.category === state.category;
      const queryMatches = !query || searchableText(project).includes(query);
      return categoryMatches && queryMatches;
    });
  }

  function renderFilters() {
    const categories = ["All", ...new Set(projects.map((project) => project.category).filter(Boolean))];
    filters.innerHTML = categories.map((category) => `
      <button class="filter-button${category === state.category ? " active" : ""}" type="button" data-category="${escapeHtml(category)}" aria-pressed="${category === state.category}">
        ${escapeHtml(category)}
      </button>
    `).join("");

    filters.querySelectorAll("[data-category]").forEach((button) => {
      button.addEventListener("click", () => {
        state.category = button.dataset.category || "All";
        render();
      });
    });
  }

  function renderCards(items) {
    if (!items.length) {
      list.innerHTML = `
        <article class="empty-state">
          <h3>No matching projects</h3>
          <p>Try a broader term or choose “All.”</p>
        </article>
      `;
      return;
    }

    list.innerHTML = items.map((project) => {
      const href = `/projects/${encodeURIComponent(project.id || "")}/`;
      const image = getProjectImage(project);
      const tags = (project.tags || []).slice(0, 4).map((tag) => `<li class="pill">${escapeHtml(tag)}</li>`).join("");
      const mediaMarkup = image.src
        ? `<a class="archive-media" href="${href}" aria-label="View ${escapeHtml(project.title)} case study"><img src="${escapeHtml(imageUrl(image.src))}" alt="${escapeHtml(image.alt)}" loading="lazy" decoding="async" /></a>`
        : '<div class="archive-media archive-media-empty" aria-hidden="true"></div>';

      return `
        <article class="archive-card">
          ${mediaMarkup}
          <div class="archive-card-content">
            <div class="archive-meta">
              <span>${escapeHtml(project.timeline || "Timeline available in case study")}</span>
              <span class="status-label">${escapeHtml(project.status || "Completed")}</span>
            </div>
            <h3><a href="${href}">${escapeHtml(project.title || "Untitled project")}</a></h3>
            <p class="archive-summary"><span class="card-label">Problem</span>${escapeHtml(project.problem || project.summary || "Project context is available in the case study.")}</p>
            <ul class="pill-list" aria-label="Project tags">${tags}</ul>
            <dl class="archive-proof">
              <div><dt>Role</dt><dd>${escapeHtml(project.role || "Contributor")}</dd></div>
              <div><dt>Outcome</dt><dd>${escapeHtml(project.outcome || project.highlights?.[0] || "See the case study for outcomes.")}</dd></div>
            </dl>
            <a class="card-link" href="${href}"><span>Open case study</span><span aria-hidden="true">↗</span></a>
          </div>
        </article>
      `;
    }).join("");
  }

  function render() {
    const items = filteredProjects();
    const activeFilters = Number(state.category !== "All") + Number(Boolean(state.query.trim()));
    count.textContent = `${items.length} of ${projects.length} project${projects.length === 1 ? "" : "s"}${activeFilters ? " matched" : ""}`;
    renderFilters();
    renderCards(items);
  }

  search.addEventListener("input", () => {
    state.query = search.value;
    render();
  });

  search.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      search.value = "";
      state.query = "";
      search.blur();
      render();
    }
  });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      search.focus();
      search.select();
    }
  });

  if (!projects.length) {
    count.textContent = "Project data unavailable";
    list.innerHTML = '<article class="empty-state"><h3>The archive is temporarily unavailable.</h3><p>Please try again or get in touch directly.</p></article>';
    return;
  }

  render();
});
