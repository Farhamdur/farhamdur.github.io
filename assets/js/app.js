(function () {
  const root = document.documentElement;
  const themeButton = document.querySelector("[data-theme-toggle]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("#primary-navigation");
  const desktopQuery = window.matchMedia("(min-width: 768px)");

  function preferredTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setTheme(theme) {
    const dark = theme === "dark";
    root.classList.toggle("dark", dark);
    if (themeButton) {
      themeButton.setAttribute("aria-pressed", String(dark));
      themeButton.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
      themeButton.textContent = dark ? "Light" : "Dark";
    }
  }

  function closeMenu(restoreFocus) {
    if (!menu || !menuButton) return;
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    if (restoreFocus) menuButton.focus();
  }

  setTheme(preferredTheme());

  themeButton?.addEventListener("click", function () {
    const next = root.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem("theme", next);
    setTheme(next);
  });

  menuButton?.addEventListener("click", function () {
    const open = !menu?.classList.contains("open");
    menu?.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  });

  menu?.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu?.classList.contains("open")) closeMenu(true);
  });

  document.addEventListener("click", function (event) {
    if (!menu?.classList.contains("open")) return;
    if (!event.target.closest(".nav-shell")) closeMenu(false);
  });

  desktopQuery.addEventListener("change", function (event) {
    if (event.matches) closeMenu(false);
  });
})();
