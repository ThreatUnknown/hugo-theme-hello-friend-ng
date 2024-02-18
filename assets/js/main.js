/**
 * Theming.
 *
 * Supports the preferred color scheme of the operation system as well as
 * the theme choice of the user.
 *
 */
const themeToggle = document.querySelector(".theme-toggle");
const chosenTheme = window.localStorage && window.localStorage.getItem("theme");
const chosenThemeIsDark = chosenTheme == "dark";
const chosenThemeIsLight = chosenTheme == "light";

// Detect the color scheme the operating system prefers.
function detectOSColorTheme() {
  if (chosenThemeIsDark) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else if (chosenThemeIsLight) {
    document.documentElement.setAttribute("data-theme", "light");
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// Switch the theme.
function switchTheme(e) {
  var image = document.getElementById("logo-main");
  if (chosenThemeIsDark) {
    localStorage.setItem("theme", "light");
<<<<<<< HEAD
    image.src = "/img/title.png";
  } else if (chosenThemeIsLight) {
    localStorage.setItem("theme", "dark");
    image.src = "/img/title_dark.png";
  } else {
    if (document.documentElement.getAttribute("data-theme") == "dark") {
      localStorage.setItem("theme", "light");
      image.src = "/img/title.png";
    } else {
      localStorage.setItem("theme", "dark");
      image.src = "/img/title_dark.png";
    }
=======
    if (image) {
      image.src = "/img/title.png";
    }
    
  } else {
    localStorage.setItem("theme", "dark");
    if (image) {
      image.src = "/img/title_dark.png";
    }
    
>>>>>>> a2cda72 ( fix theme toggle on non-main pages)
  }

  detectOSColorTheme();
  window.location.reload();
}

// Event listener
if (themeToggle) {
  themeToggle.addEventListener("click", switchTheme, false);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => e.matches && detectOSColorTheme());
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", (e) => e.matches && detectOSColorTheme());

  detectOSColorTheme();
} else {
  localStorage.removeItem("theme");
}
