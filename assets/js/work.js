const PROJECTS_PER_PAGE = 6;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildActionButton(label, href, style = "btn btn-secondary") {
  return `<a class="${style}" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}

document.addEventListener("DOMContentLoaded", async () => {
  const listEl = document.getElementById("project-list");
  const countEl = document.getElementById("project-count");
  const paginationEl = document.getElementById("pagination");
  const filtersEl = document.getElementById("project-filters");
  const searchEl = document.getElementById("project-search");

  if (!listEl || !countEl || !paginationEl || !filtersEl || !searchEl) {
    return;
  }

  const state = {
    projects: [],
    filtered: [],
    tag: "All",
    search: "",
    page: 1
  };

  const queryProjectId = new URLSearchParams(window.location.search).get("project") || "";
  let queryProjectHandled = false;
  let queryProjectFocused = false;

  async function loadProjects() {
    if (Array.isArray(window.PORTFOLIO_PROJECTS) && window.PORTFOLIO_PROJECTS.length) {
      return window.PORTFOLIO_PROJECTS;
    }

    const response = await fetch("data/projects.json");
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    return response.json();
  }

  function applyFilters(resetPage = true) {
    if (resetPage) {
      state.page = 1;
    }

    const search = state.search.trim().toLowerCase();

    state.filtered = state.projects.filter((project) => {
      const tags = project.tags || [];
      if (state.tag !== "All" && !tags.includes(state.tag)) {
        return false;
      }

      if (!search) {
        return true;
      }

      const searchable = [
        project.title,
        project.summary,
        project.role,
        project.timeline,
        ...(project.stack || []),
        ...(project.tags || []),
        ...(project.highlights || [])
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(search);
    });

    if (queryProjectId && !queryProjectHandled) {
      const index = state.filtered.findIndex((project) => project.id === queryProjectId);
      if (index >= 0) {
        state.page = Math.floor(index / PROJECTS_PER_PAGE) + 1;
        queryProjectHandled = true;
      }
    }

    render();
  }

  function renderFilters() {
    const allTags = new Set(["All"]);
    state.projects.forEach((project) => {
      (project.tags || []).forEach((tag) => allTags.add(tag));
    });

    filtersEl.innerHTML = Array.from(allTags)
      .map((tag) => {
        const active = tag === state.tag ? " active" : "";
        return `<button class="filter-btn${active}" type="button" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`;
      })
      .join("");

    filtersEl.querySelectorAll(".filter-btn").forEach((button) => {
      button.addEventListener("click", () => {
        state.tag = button.dataset.tag || "All";
        applyFilters();
      });
    });
  }

  function renderCards() {
    if (!state.filtered.length) {
      listEl.innerHTML = `
        <article class="empty-state card">
          <h3>No projects matched your current filters.</h3>
          <p>Try another keyword or reset to <strong>All</strong>.</p>
        </article>
      `;
      return;
    }

    const totalPages = Math.max(1, Math.ceil(state.filtered.length / PROJECTS_PER_PAGE));
    state.page = Math.min(state.page, totalPages);

    const start = (state.page - 1) * PROJECTS_PER_PAGE;
    const pageItems = state.filtered.slice(start, start + PROJECTS_PER_PAGE);

    listEl.innerHTML = pageItems
      .map((project) => {
        const projectId = escapeHtml(project.id || "");
        const detailLink = `project.html?project=${encodeURIComponent(project.id || "")}`;
        const imageData = project.image;
        const imageSrc = typeof imageData === "string" ? imageData : imageData?.src || "";
        const imageAlt =
          typeof imageData === "object" && imageData?.alt
            ? imageData.alt
            : `${project.title || "Project"} preview`;

        const mediaMarkup = imageSrc
          ? `<figure class="project-media"><img class="project-thumb" src="${escapeHtml(imageSrc)}" alt="${escapeHtml(imageAlt)}" loading="lazy" decoding="async" /></figure>`
          : "";

        const stack = (project.stack || [])
          .map((tech) => `<li class="pill">${escapeHtml(tech)}</li>`)
          .join("");

        const tags = (project.tags || [])
          .map((tag) => `<li class="pill pill-muted">${escapeHtml(tag)}</li>`)
          .join("");

        const highlights = (project.highlights || [])
          .slice(0, 3)
          .map((point) => `<li>${escapeHtml(point)}</li>`)
          .join("");

        const inquirySubject = encodeURIComponent(`Project Inquiry: ${project.title || "Portfolio Project"}`);
        const inquiryLink = `contact.html?subject=${inquirySubject}#contact-form`;

        const links = project.links || {};
        const actions = [];

        actions.push(`<a class="btn btn-primary" href="${detailLink}">Open Project</a>`);

        if (links.live) {
          actions.push(buildActionButton("Live", escapeHtml(links.live)));
        }

        if (links.repo) {
          actions.push(buildActionButton("Code", escapeHtml(links.repo)));
        }

        if (links.caseStudy) {
          actions.push(buildActionButton("Case Study", escapeHtml(links.caseStudy)));
        }

        actions.push(`<a class="btn btn-secondary" href="${inquiryLink}">Request Details</a>`);

        const spotlightClass = queryProjectId && project.id === queryProjectId ? " spotlight" : "";

        return `
          <article class="project-card card${spotlightClass}" id="project-${projectId}">
            ${mediaMarkup}
            <div>
              <p class="project-meta mono">${escapeHtml(project.timeline || "Timeline pending")} | ${escapeHtml(project.role || "Project")}</p>
              <h3><a class="project-title-link" href="${detailLink}">${escapeHtml(project.title || "Untitled")}</a></h3>
              <p class="project-summary">${escapeHtml(project.summary || "Summary pending")}</p>
            </div>
            <ul class="pill-list">${stack}</ul>
            <ul class="pill-list">${tags}</ul>
            <ul class="highlight-list">${highlights}</ul>
            <div class="project-actions">${actions.join("")}</div>
          </article>
        `;
      })
      .join("");
  }

  function renderPagination() {
    const totalPages = Math.max(1, Math.ceil(state.filtered.length / PROJECTS_PER_PAGE));
    if (!state.filtered.length || totalPages === 1) {
      paginationEl.innerHTML = "";
      return;
    }

    const buttons = [];
    buttons.push(`<button type="button" class="page-btn" data-page="${state.page - 1}" ${state.page === 1 ? "disabled" : ""}>Prev</button>`);

    for (let i = 1; i <= totalPages; i += 1) {
      const active = i === state.page ? " active" : "";
      buttons.push(`<button type="button" class="page-btn${active}" data-page="${i}">${i}</button>`);
    }

    buttons.push(`<button type="button" class="page-btn" data-page="${state.page + 1}" ${state.page === totalPages ? "disabled" : ""}>Next</button>`);

    paginationEl.innerHTML = buttons.join("");

    paginationEl.querySelectorAll(".page-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const requestedPage = Number(button.dataset.page || 1);
        state.page = requestedPage;
        render();
      });
    });
  }

  function render() {
    countEl.textContent = `${state.filtered.length} project${state.filtered.length === 1 ? "" : "s"} shown`;
    renderFilters();
    renderCards();
    renderPagination();

    if (queryProjectId && !queryProjectFocused) {
      const element = document.getElementById(`project-${queryProjectId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        queryProjectFocused = true;
      }
    }
  }

  searchEl.addEventListener("input", () => {
    state.search = searchEl.value;
    applyFilters();
  });

  try {
    const projects = await loadProjects();
    state.projects = projects.sort((a, b) => (b.order || 0) - (a.order || 0));
    applyFilters(false);
  } catch (error) {
    listEl.innerHTML = `
      <article class="empty-state card">
        <h3>Project archive unavailable</h3>
        <p>Unable to load project data right now. Please try again shortly.</p>
      </article>
    `;
  }
});
