function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("featured-projects");
  if (!container) {
    return;
  }

  try {
    const response = await fetch("data/projects.json");
    if (!response.ok) {
      throw new Error("Could not load projects.");
    }

    const projects = await response.json();
    const featured = projects
      .filter((project) => project.featured)
      .sort((a, b) => (b.order || 0) - (a.order || 0));

    const cards = (featured.length ? featured : projects.slice(0, 3)).slice(0, 3);

    container.innerHTML = cards
      .map((project) => {
        const stack = (project.stack || [])
          .slice(0, 4)
          .map((tech) => `<li class="pill">${escapeHtml(tech)}</li>`)
          .join("");

        const summary = escapeHtml(project.summary || "Project summary coming soon.");
        const timeline = escapeHtml(project.timeline || "Timeline available upon request");
        const title = escapeHtml(project.title || "Project");
        const projectId = encodeURIComponent(project.id || "");

        return `
          <article class="feature-card card">
            <p class="project-meta mono">${timeline}</p>
            <h3>${title}</h3>
            <p>${summary}</p>
            <ul class="pill-list">${stack}</ul>
            <div class="button-row">
              <a class="btn btn-secondary" href="work.html?project=${projectId}">View Case Notes</a>
            </div>
          </article>
        `;
      })
      .join("");
  } catch (error) {
    container.innerHTML = `
      <article class="feature-card card">
        <h3>Featured work is loading.</h3>
        <p>Please check back soon or use the full project archive.</p>
        <div class="button-row">
          <a class="btn btn-secondary" href="work.html">Open My Work</a>
        </div>
      </article>
    `;
  }
});
