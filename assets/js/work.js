function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
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
      const tags = (project.tags || []).slice(0, 4).map((tag) => `<li class="pill">${escapeHtml(tag)}</li>`).join("");
      const projectIndex = projects.findIndex((entry) => entry.id === project.id) + 1;

      return `
        <article class="archive-card">
          <p class="archive-number">${String(projectIndex).padStart(2, "0")}</p>
          <div class="archive-card-content">
            <div class="archive-meta">
              <span>${escapeHtml(project.timeline || "Timeline available in case study")}</span>
              <span>${escapeHtml(project.category || project.status || "")}</span>
            </div>
            <h3><a href="${href}">${escapeHtml(project.shortTitle || project.title || "Untitled project")}</a></h3>
            <p class="archive-summary">${escapeHtml(project.summary || project.problem || "Project context is available in the case study.")}</p>
            <ul class="pill-list" aria-label="Project tags">${tags}</ul>
            <dl class="archive-proof">
              <div><dt>Role</dt><dd>${escapeHtml(project.role || "Contributor")}</dd></div>
              <div><dt>Result</dt><dd>${escapeHtml(project.outcome || project.highlights?.[0] || "See the case study for outcomes.")}</dd></div>
            </dl>
            <a class="card-link" href="${href}"><span>Read project</span><span aria-hidden="true">↗</span></a>
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
