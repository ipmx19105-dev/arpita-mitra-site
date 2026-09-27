// Small enhancements only; the site works fully without JavaScript.
(function () {
  const root = document.documentElement;
  root.classList.add("js");
  // Trigger the hero course-line animation once the page has painted
  window.addEventListener("load", () => requestAnimationFrame(() => root.classList.add("loaded")));

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      })
    );
  }

  // Copy email button
  const copyBtn = document.querySelector(".copy-btn");
  const status = document.querySelector(".copy-status");
  if (copyBtn && status) {
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.copy;
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = "Copied";
        status.textContent = "Email address copied to your clipboard.";
      } catch {
        status.textContent = "Couldn’t copy automatically. Select the address above instead.";
      }
      setTimeout(() => { copyBtn.textContent = "Copy email"; status.textContent = ""; }, 3000);
    });
  }
})();
