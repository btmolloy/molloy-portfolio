document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeLabel = document.querySelector("[data-theme-icon]");
  const themeMeta = document.querySelector('meta[name="theme-color"]');

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
});
