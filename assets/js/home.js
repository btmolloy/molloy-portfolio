function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function projectImage(project, preferArtifact = false) {
  if (preferArtifact && Array.isArray(project.gallery) && project.gallery[0]?.src) {
    const item = project.gallery[0];
    return { src: item.src, alt: item.alt || `${project.title} project artifact` };
  }
  return { src: "", alt: "" };
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("featured-projects");
  if (!container) return;

  const projects = Array.isArray(window.PORTFOLIO_PROJECTS)
    ? window.PORTFOLIO_PROJECTS.filter((project) => project.published === true)
    : [];
  if (!projects.length) {
    container.innerHTML = '<p class="loading-copy">The selected work is temporarily unavailable. <a class="text-link" href="/projects/">Open the archive</a>.</p>';
    return;
  }

  const featured = projects
    .filter((project) => project.featured)
    .sort((a, b) => (b.order || 0) - (a.order || 0))
    .slice(0, 3);

  container.innerHTML = featured.map((project, index) => {
    const image = projectImage(project, index === 0);
    const href = `/projects/${encodeURIComponent(project.id || "")}/`;
    const classes = `feature-card${index === 0 ? " feature-card-lead" : ""}`;
    const tags = (project.tags || []).slice(0, 4).map((tag) => `<li class="pill">${escapeHtml(tag)}</li>`).join("");
    const mediaMarkup = image.src
      ? `<a class="feature-media" href="${href}" aria-label="View ${escapeHtml(project.title)} case study"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" ${index === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async" /></a>`
      : '<div class="feature-media feature-media-empty" aria-hidden="true"></div>';

    return `
      <article class="${classes}">
        <p class="feature-number">${String(index + 1).padStart(2, "0")}</p>
        ${mediaMarkup}
        <div class="feature-content">
          <div class="feature-meta">
            <span>${escapeHtml(project.category || project.role || "Project")}</span>
            <span>${escapeHtml(project.timeline || project.status || "")}</span>
          </div>
          <h3><a href="${href}">${escapeHtml(project.shortTitle || project.title)}</a></h3>
          <p class="feature-summary">${escapeHtml(project.summary || project.problem)}</p>
          <dl class="feature-proof">
            <div><dt>Role</dt><dd>${escapeHtml(project.role || "Project contributor")}</dd></div>
            <div><dt>Result</dt><dd>${escapeHtml(project.outcome || project.highlights?.[0] || "Project outcome documented in the case study.")}</dd></div>
          </dl>
          <ul class="pill-list" aria-label="Technologies">${tags}</ul>
          <a class="card-link" href="${href}"><span>Read project</span><span aria-hidden="true">↗</span></a>
        </div>
      </article>
    `;
  }).join("");
});
