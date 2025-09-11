  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const themeToggle = document.getElementById("theme-toggle");

  // Navbar toggle
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Save scroll position
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("scrollPos", window.scrollY);
  });
  window.addEventListener("load", () => {
    const scrollPos = localStorage.getItem("scrollPos");
    if (scrollPos) window.scrollTo(0, scrollPos);
  });

  // Theme toggle
  function setTheme(dark) {
    if (dark) {
      document.body.classList.add("dark-mode");
      themeToggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  }

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    setTheme(true);
  }

  // Toggle button click
  themeToggle.addEventListener("click", () => {
    const dark = !document.body.classList.contains("dark-mode");
    setTheme(dark);
  });
