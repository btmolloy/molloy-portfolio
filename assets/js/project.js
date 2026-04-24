function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderPills(container, items, muted = false) {
  if (!container) {
    return;
  }

  container.innerHTML = (items || [])
    .map((item) => `<li class="pill${muted ? " pill-muted" : ""}">${escapeHtml(item)}</li>`)
    .join("");
}

function renderList(container, items) {
  if (!container) {
    return;
  }

  container.innerHTML = (items || [])
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", async () => {
  const titleEl = document.getElementById("project-title");
  const summaryEl = document.getElementById("project-summary");
  const overviewEl = document.getElementById("project-overview");
  const contributionsEl = document.getElementById("project-contributions");
  const notesEl = document.getElementById("project-notes");
  const nextEl = document.getElementById("project-next");
  const metaEl = document.getElementById("project-meta");
  const visibilityEl = document.getElementById("project-visibility");
  const stackEl = document.getElementById("project-stack");
  const tagsEl = document.getElementById("project-tags");
  const galleryEl = document.getElementById("project-gallery");
  const mediaEl = document.getElementById("project-detail-media");
  const linkActionsEl = document.getElementById("project-link-actions");
  const heroActionsEl = document.getElementById("project-hero-actions");
  const notesBlockEl = document.getElementById("project-notes-block");
  const nextBlockEl = document.getElementById("project-next-block");
  const detailColumnsEl = document.getElementById("project-detail-columns");
  const foundSection = document.getElementById("project-found");
  const missingSection = document.getElementById("project-missing");
  const lightboxEl = document.getElementById("gallery-lightbox");
  const lightboxPanelEl = document.getElementById("gallery-lightbox-panel");
  const lightboxImageEl = document.getElementById("gallery-lightbox-image");
  const lightboxCaptionEl = document.getElementById("gallery-lightbox-caption");
  const lightboxCloseEl = document.getElementById("gallery-lightbox-close");
  let activeLightboxTrigger = null;

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

  function setMissingState() {
    if (foundSection) {
      foundSection.hidden = true;
    }
    if (missingSection) {
      missingSection.hidden = false;
    }
    if (titleEl) {
      titleEl.textContent = "Project unavailable";
    }
    if (summaryEl) {
      summaryEl.textContent = "This project link may be outdated. Use the archive to open a valid project.";
    }
  }

  function buildExternalButton(label, href, className = "btn btn-secondary") {
    return `<a class="${className}" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  }

  function resolveImageSource(src) {
    if (!src) {
      return "";
    }

    try {
      return new URL(src, window.location.href).toString();
    } catch {
      return src;
    }
  }

  function openLightbox(src, alt, fallbackSrc = "", trigger = null) {
    if (!lightboxEl || !lightboxImageEl) {
      return;
    }

    const resolvedSrc = resolveImageSource(src);
    const resolvedFallback = resolveImageSource(fallbackSrc);

    if (!resolvedSrc && !resolvedFallback) {
      return;
    }

    lightboxImageEl.dataset.fallbackSrc = resolvedFallback || "";
    lightboxImageEl.src = resolvedSrc || resolvedFallback;
    lightboxImageEl.alt = alt || "Expanded project gallery image";
    lightboxImageEl.onerror = () => {
      const fallback = lightboxImageEl.dataset.fallbackSrc || "";
      if (fallback && lightboxImageEl.src !== fallback) {
        lightboxImageEl.src = fallback;
        return;
      }
      if (lightboxCaptionEl) {
        lightboxCaptionEl.textContent = "Image preview unavailable.";
      }
    };

    if (lightboxCaptionEl) {
      lightboxCaptionEl.textContent = alt || "";
    }

    activeLightboxTrigger = trigger;
    lightboxEl.hidden = false;
    lightboxEl.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");

    if (lightboxCloseEl) {
      window.requestAnimationFrame(() => lightboxCloseEl.focus());
    }
  }

  function closeLightbox() {
    if (!lightboxEl || !lightboxImageEl) {
      return;
    }

    lightboxEl.hidden = true;
    lightboxEl.setAttribute("aria-hidden", "true");
    lightboxImageEl.src = "";
    lightboxImageEl.alt = "";

    if (lightboxCaptionEl) {
      lightboxCaptionEl.textContent = "";
    }

    document.body.classList.remove("no-scroll");
    if (activeLightboxTrigger) {
      activeLightboxTrigger.focus();
      activeLightboxTrigger = null;
    }
  }

  function bindGalleryExpanders() {
    if (!galleryEl) {
      return;
    }

    galleryEl.querySelectorAll("[data-gallery-expand]").forEach((button) => {
      button.addEventListener("click", () => {
        const imageEl = button.querySelector(".project-gallery-image");
        const src = imageEl?.currentSrc || imageEl?.getAttribute("src") || "";
        const fallbackSrc = imageEl?.getAttribute("src") || "";
        const alt = imageEl?.getAttribute("alt") || "Expanded project gallery image";
        openLightbox(src, alt, fallbackSrc, button);
      });
    });
  }

  if (lightboxCloseEl) {
    lightboxCloseEl.addEventListener("click", closeLightbox);
  }

  if (lightboxEl) {
    lightboxEl.addEventListener("click", (event) => {
      if (event.target === lightboxEl) {
        closeLightbox();
      }
    });
  }

  if (lightboxPanelEl) {
    lightboxPanelEl.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightboxEl && !lightboxEl.hidden) {
      closeLightbox();
    }
  });

  try {
    const projects = await loadProjects();
    const id = new URLSearchParams(window.location.search).get("project") || "";
    const project = projects.find((entry) => entry.id === id);

    if (!project) {
      setMissingState();
      return;
    }

    const imageData = project.image;
    const imageSrc = typeof imageData === "string" ? imageData : imageData?.src || "";
    const imageAlt =
      typeof imageData === "object" && imageData?.alt
        ? imageData.alt
        : `${project.title || "Project"} preview`;

    const details = project.details || {};
    const overview = details.overview || project.summary || "Detailed overview coming soon.";
    const contributions = Array.isArray(details.contributions) && details.contributions.length
      ? details.contributions
      : project.highlights || [];
    const notes = Array.isArray(details.notes) && details.notes.length ? details.notes : [];
    const nextSteps = Array.isArray(details.nextSteps) && details.nextSteps.length ? details.nextSteps : [];

    const gallery = Array.isArray(project.gallery) && project.gallery.length
      ? project.gallery
      : imageSrc
        ? [{ src: imageSrc, alt: imageAlt }]
        : [];

    document.title = `${project.title || "Project"} | Benjamin Molloy`;

    if (titleEl) {
      titleEl.textContent = project.title || "Project";
    }
    if (summaryEl) {
      summaryEl.textContent = project.summary || "Project details.";
    }
    if (overviewEl) {
      overviewEl.textContent = overview;
    }
    if (metaEl) {
      metaEl.textContent = `${project.timeline || "Timeline pending"} | ${project.role || "Project"}`;
    }
    if (visibilityEl) {
      visibilityEl.textContent = `Visibility: ${project.visibility || "Public Summary"}`;
    }

    renderList(contributionsEl, contributions);
    renderList(notesEl, notes);
    renderList(nextEl, nextSteps);

    if (notesBlockEl) {
      notesBlockEl.hidden = !notes.length;
    }
    if (nextBlockEl) {
      nextBlockEl.hidden = !nextSteps.length;
    }
    if (detailColumnsEl) {
      detailColumnsEl.hidden = !notes.length && !nextSteps.length;
    }

    renderPills(stackEl, project.stack || []);
    renderPills(tagsEl, project.tags || [], true);

    if (mediaEl && imageSrc) {
      mediaEl.innerHTML = `<img class="project-detail-hero" src="${escapeHtml(imageSrc)}" alt="${escapeHtml(imageAlt)}" loading="eager" decoding="async" />`;
    }

    if (galleryEl) {
      galleryEl.innerHTML = gallery
        .map((item) => {
          const src = typeof item === "string" ? item : item?.src || "";
          if (!src) {
            return "";
          }
          const alt = typeof item === "object" && item?.alt ? item.alt : `${project.title || "Project"} gallery item`;
          return `
            <figure class="project-gallery-item card">
              <button
                class="project-gallery-button"
                type="button"
                data-gallery-expand
                aria-label="Expand gallery image"
              >
                <img class="project-gallery-image" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" />
              </button>
            </figure>
          `;
        })
        .join("");

      bindGalleryExpanders();
    }

    if (linkActionsEl) {
      const links = project.links || {};
      const actions = [];

      if (links.live) {
        actions.push(buildExternalButton("Live", links.live, "btn btn-primary"));
      }
      if (links.repo) {
        actions.push(buildExternalButton("Code", links.repo));
      }
      if (links.caseStudy) {
        actions.push(buildExternalButton("Case Study", links.caseStudy));
      }

      actions.push(`<a class="btn btn-secondary" href="contact.html?subject=${encodeURIComponent(`Project Inquiry: ${project.title || "Portfolio Project"}`)}#contact-form">Request Details</a>`);
      linkActionsEl.innerHTML = actions.join("");
    }

    if (heroActionsEl) {
      const quick = [`<a class="btn btn-secondary" href="work.html">Back to My Work</a>`];
      quick.push(`<a class="btn btn-primary" href="contact.html?subject=${encodeURIComponent(`Project Inquiry: ${project.title || "Portfolio Project"}`)}#contact-form">Discuss Project</a>`);
      heroActionsEl.innerHTML = quick.join("");
    }
  } catch (error) {
    setMissingState();
  }
});
