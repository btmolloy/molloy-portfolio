function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function projectImage(project) {
  const candidates = [
    ...(Array.isArray(project.gallery) ? project.gallery : []),
    project.image
  ];
  const item = candidates.find((candidate) => {
    const source = typeof candidate === "string" ? candidate : candidate?.src;
    return source && !/\.svg(?:$|[?#])/i.test(source);
  });
  if (item) {
    const src = typeof item === "string" ? item : item.src;
    const alt = typeof item === "object" && item.alt
      ? item.alt
      : `${project.title} project artifact`;
    return { src, alt };
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
    const image = projectImage(project);
    const href = `/projects/${encodeURIComponent(project.id || "")}/`;
    const tags = (project.tags || []).slice(0, 4).map((tag) => `<li class="pill">${escapeHtml(tag)}</li>`).join("");
    const projectNumber = String(index + 1).padStart(2, "0");
    const mediaMarkup = image.src
      ? `<a class="feature-media" href="${href}" aria-label="View ${escapeHtml(project.title)} case study"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" ${index === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async" /></a>`
      : `<div class="feature-media feature-media-empty" aria-hidden="true"><span class="feature-media-index">${projectNumber}</span><span class="feature-media-label">${escapeHtml(project.category || "Project")}</span></div>`;

    return `
      <article class="feature-card">
        ${mediaMarkup}
        <div class="feature-content">
          <div class="feature-meta">
            <span>${projectNumber}</span>
            <span>${escapeHtml(project.category || project.role || "Project")}</span>
          </div>
          <h3><a href="${href}">${escapeHtml(project.shortTitle || project.title)}</a></h3>
          <p class="feature-summary">${escapeHtml(project.summary || project.problem)}</p>
          <ul class="pill-list" aria-label="Technologies">${tags}</ul>
          <a class="card-link" href="${href}"><span>View Project</span><span aria-hidden="true">↗</span></a>
        </div>
      </article>
    `;
  }).join("");
});
