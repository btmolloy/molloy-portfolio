document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeLabel = document.querySelector("[data-theme-icon]");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const siteHeader = document.querySelector(".site-header");

  document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
    if (link.dataset.page !== page) return;
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  });

  function applyTheme(theme, persist = true) {
    const resolved = theme === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = resolved;

    if (themeToggle) {
      themeToggle.setAttribute("aria-label", `Switch to ${resolved === "dark" ? "light" : "dark"} theme`);
    }
    if (themeLabel) themeLabel.textContent = resolved === "dark" ? "Light" : "Dark";
    if (themeMeta) themeMeta.setAttribute("content", resolved === "dark" ? "#0c0c0b" : "#efeee8");

    if (!persist) return;
    try {
      localStorage.setItem("portfolio-theme", resolved);
    } catch (error) {
      // The selected theme still applies when storage is blocked.
    }
  }

  applyTheme(document.documentElement.dataset.theme, false);
  themeToggle?.addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("[data-print]").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });

  if (siteHeader) {
    const updateHeader = () => {
      siteHeader.classList.toggle("is-compact", window.scrollY > 52);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  const timeline = document.querySelector("[data-career-timeline]");
  if (timeline) {
    const previousButton = document.querySelector("[data-timeline-previous]");
    const nextButton = document.querySelector("[data-timeline-next]");
    const scrollTimeline = (direction) => {
      timeline.scrollBy({ left: direction * timeline.clientWidth * 0.72, behavior: "smooth" });
    };

    previousButton?.addEventListener("click", () => scrollTimeline(-1));
    nextButton?.addEventListener("click", () => scrollTimeline(1));
    timeline.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      scrollTimeline(event.key === "ArrowLeft" ? -1 : 1);
    });

    let pointerId = null;
    let pointerStart = 0;
    let scrollStart = 0;
    timeline.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      pointerId = event.pointerId;
      pointerStart = event.clientX;
      scrollStart = timeline.scrollLeft;
      timeline.setPointerCapture(pointerId);
    });
    timeline.addEventListener("pointermove", (event) => {
      if (event.pointerId !== pointerId) return;
      const distance = event.clientX - pointerStart;
      if (Math.abs(distance) > 3) timeline.classList.add("is-dragging");
      timeline.scrollLeft = scrollStart - distance;
    });
    const endDrag = (event) => {
      if (event.pointerId !== pointerId) return;
      timeline.classList.remove("is-dragging");
      pointerId = null;
    };
    timeline.addEventListener("pointerup", endDrag);
    timeline.addEventListener("pointercancel", endDrag);

    requestAnimationFrame(() => {
      timeline.scrollLeft = timeline.scrollWidth;
    });
  }
});
