document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const header = document.querySelector("[data-site-header]");
  const nav = document.querySelector("[data-site-nav]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeIcon = document.querySelector("[data-theme-icon]");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  function closeMenu() {
    if (!nav || !menuToggle) return;
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }

  if (nav && menuToggle) {
    menuToggle.addEventListener("click", () => {
      const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
      nav.classList.toggle("open", willOpen);
      menuToggle.setAttribute("aria-expanded", String(willOpen));
      menuToggle.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
    });

    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        closeMenu();
        menuToggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  function applyTheme(theme, persist = true) {
    const resolved = theme === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = resolved;
    if (themeToggle) themeToggle.setAttribute("aria-label", `Switch to ${resolved === "dark" ? "light" : "dark"} theme`);
    if (themeIcon) themeIcon.textContent = resolved === "dark" ? "◐" : "◑";
    if (themeMeta) themeMeta.setAttribute("content", resolved === "dark" ? "#0b0d0c" : "#f2f3ed");

    if (persist) {
      try {
        localStorage.setItem("portfolio-theme", resolved);
      } catch (error) {
        // Theme still applies for the current visit when storage is blocked.
      }
    }
  }

  applyTheme(document.documentElement.dataset.theme, false);
  themeToggle?.addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });

  function updateHeader() {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("[data-print]").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });

  const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!revealItems.length || reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  document.body.classList.add("reveal-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 }
  );

  revealItems.forEach((item) => observer.observe(item));
});
