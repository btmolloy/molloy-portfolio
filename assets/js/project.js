function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderList(container, items) {
  if (!container) return;
  container.innerHTML = (items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function normalizedImage(project, item) {
  const source = typeof item === "string" ? item : item?.src || "";
  const src = /^(?:[a-z]+:|\/)/i.test(source) ? source : `/${source}`;
  const alt = typeof item === "object" && item?.alt ? item.alt : `${project.title} project visual`;
  return { src, alt };
}

document.addEventListener("DOMContentLoaded", () => {
  const projects = (Array.isArray(window.PORTFOLIO_PROJECTS) ? [...window.PORTFOLIO_PROJECTS] : [])
    .filter((project) => project.published === true)
    .sort((a, b) => (b.order || 0) - (a.order || 0));
  const id = document.body.dataset.projectId || new URLSearchParams(window.location.search).get("project") || "";
  const project = projects.find((entry) => entry.id === id);
  const found = document.getElementById("project-found");
  const missing = document.getElementById("project-missing");

  if (!project) {
    if (found) found.hidden = true;
    if (missing) missing.hidden = false;
    document.title = "Project not found — Benjamin Molloy";
    return;
  }

  const details = project.details || {};
  const setText = (idName, value) => {
    const node = document.getElementById(idName);
    if (node) node.textContent = value || "—";
  };

  document.title = `${project.title} — Benjamin Molloy`;
  document.getElementById("project-description-meta")?.setAttribute("content", project.summary || project.problem || "Benjamin Molloy project case study.");
  const canonicalPath = document.body.dataset.projectId
    ? `https://www.molloy.info/projects/${encodeURIComponent(project.id)}/`
    : `https://www.molloy.info/project.html?project=${encodeURIComponent(project.id)}`;
  document.getElementById("project-canonical")?.setAttribute("href", canonicalPath);

  setText("project-category", `${project.category || "Project"} / Case study`);
  setText("project-title", project.title);
  setText("project-summary", project.summary);
  setText("project-role", project.role);
  setText("project-timeline", project.timeline);
  setText("project-status", project.status || (String(project.timeline).includes("Present") ? "In progress" : "Completed"));
  setText("project-area", project.category || project.tags?.[0] || "Technical project");
  setText("project-problem", details.problem || project.problem || project.summary);
  setText("project-overview", details.overview || project.summary);
  setText("project-outcome", details.outcome || project.outcome || project.highlights?.[0]);

  const tags = document.getElementById("project-tags");
  if (tags) {
    tags.innerHTML = (project.tags || []).slice(0, 6).map((tag) => `<li class="pill">${escapeHtml(tag)}</li>`).join("");
  }

  const contributions = details.contributions?.length ? details.contributions : project.highlights || [];
  const notes = details.notes || [];
  const limitations = details.limitations || [];
  const nextSteps = details.nextSteps || [];
  renderList(document.getElementById("project-contributions"), contributions);
  renderList(document.getElementById("project-notes"), notes);
  renderList(document.getElementById("project-highlights"), project.highlights || []);
  renderList(document.getElementById("project-limitations"), limitations);
  renderList(document.getElementById("project-next"), nextSteps);

  const notesBlock = document.getElementById("project-notes-block");
  const limitationsBlock = document.getElementById("project-limitations-block");
  const nextBlock = document.getElementById("project-next-block");
  const nextSection = document.getElementById("next");
  if (notesBlock) notesBlock.hidden = !notes.length;
  if (limitationsBlock) limitationsBlock.hidden = !limitations.length;
  if (nextBlock) nextBlock.hidden = !nextSteps.length;
  if (nextSection) nextSection.hidden = !limitations.length && !nextSteps.length;

  const workflowSection = document.getElementById("project-workflow-section");
  const workflowList = document.getElementById("project-workflow");
  if (workflowSection && workflowList && project.workflow?.length) {
    workflowSection.hidden = false;
    workflowList.innerHTML = project.workflow.map((step) => `
      <li><strong>${escapeHtml(step.stage)}</strong><span>${escapeHtml(step.description)}</span></li>
    `).join("");
  }

  const rawImageData = typeof project.image === "string"
    ? { src: project.image, alt: `${project.title} preview` }
    : { src: project.image?.src || "", alt: project.image?.alt || `${project.title} preview` };
  const imageData = {
    src: /^(?:[a-z]+:|\/)/i.test(rawImageData.src) ? rawImageData.src : `/${rawImageData.src}`,
    alt: rawImageData.alt
  };
  const leadGalleryItem = project.gallery?.[0];
  const leadImage = leadGalleryItem ? normalizedImage(project, leadGalleryItem) : imageData;
  const media = document.getElementById("project-detail-media");
  if (media && leadImage.src) {
    media.innerHTML = `<img src="${escapeHtml(leadImage.src)}" alt="${escapeHtml(leadImage.alt)}" loading="eager" fetchpriority="high" decoding="async" />`;
  }

  const links = project.links || {};
  const actions = [];
  if (links.live) actions.push(`<a class="button button-primary" href="${escapeHtml(links.live)}" target="_blank" rel="noopener noreferrer">Open live project <span aria-hidden="true">↗</span></a>`);
  if (links.repo) actions.push(`<a class="button ${actions.length ? "button-quiet" : "button-primary"}" href="${escapeHtml(links.repo)}" target="_blank" rel="noopener noreferrer">View source <span aria-hidden="true">↗</span></a>`);
  if (links.caseStudy) actions.push(`<a class="button button-quiet" href="${escapeHtml(links.caseStudy)}" target="_blank" rel="noopener noreferrer">Documentation <span aria-hidden="true">↗</span></a>`);
  actions.push(`<a class="button button-quiet" href="mailto:btmolloy2@gmail.com?subject=${encodeURIComponent(`Project question: ${project.title}`)}">Ask about this work <span aria-hidden="true">↗</span></a>`);
  const heroActions = document.getElementById("project-hero-actions");
  if (heroActions) heroActions.innerHTML = actions.join("");

  const gallerySection = document.getElementById("project-gallery-section");
  const gallery = document.getElementById("project-gallery");
  const galleryItems = project.gallery?.length ? project.gallery : imageData.src ? [imageData] : [];
  if (!galleryItems.length) {
    if (gallerySection) gallerySection.hidden = true;
  } else if (gallery) {
    gallery.innerHTML = galleryItems.map((item) => {
      const image = normalizedImage(project, item);
      return `
        <figure class="project-gallery-item">
          <button class="project-gallery-button" type="button" data-gallery-expand data-src="${escapeHtml(image.src)}" data-alt="${escapeHtml(image.alt)}" aria-label="Expand ${escapeHtml(image.alt)}">
            <img class="project-gallery-image" src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy" decoding="async" />
          </button>
        </figure>
      `;
    }).join("");
  }

  const currentIndex = projects.findIndex((entry) => entry.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const nextProjectNav = document.getElementById("next-project");
  if (nextProjectNav && nextProject && nextProject.id !== project.id) {
    nextProjectNav.innerHTML = `
      <a href="/projects/${encodeURIComponent(nextProject.id)}/">
        <span class="next-project-label">Next project</span>
        <span class="next-project-title">${escapeHtml(nextProject.title)}</span>
        <span class="next-project-arrow" aria-hidden="true">↗</span>
      </a>
    `;
  }

  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxPanel = document.getElementById("gallery-lightbox-panel");
  const lightboxImage = document.getElementById("gallery-lightbox-image");
  const lightboxCaption = document.getElementById("gallery-lightbox-caption");
  const lightboxClose = document.getElementById("gallery-lightbox-close");
  let previousFocus = null;

  function closeLightbox() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (lightboxImage) {
      lightboxImage.src = "";
      lightboxImage.alt = "";
    }
    previousFocus?.focus();
    previousFocus = null;
  }

  function openLightbox(button) {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;
    previousFocus = button;
    lightboxImage.src = button.dataset.src || "";
    lightboxImage.alt = button.dataset.alt || "Expanded project visual";
    lightboxCaption.textContent = button.dataset.alt || "";
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    lightboxClose?.focus();
  }

  gallery?.querySelectorAll("[data-gallery-expand]").forEach((button) => {
    button.addEventListener("click", () => openLightbox(button));
  });
  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  lightboxPanel?.addEventListener("click", (event) => event.stopPropagation());
  document.addEventListener("keydown", (event) => {
    if (!lightbox || lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "Tab" && lightboxClose) {
      event.preventDefault();
      lightboxClose.focus();
    }
  });
});
