const lightModeIcon = document.getElementById("lightMode");
const darkModeIcon = document.getElementById("darkMode");

function themeSaveApply() {
  const currentMode = localStorage.getItem("theme") || "lighter";

  if (currentMode === "dark") {
    lightModeIcon.style.display = "block";
    darkModeIcon.style.display = "none";
    document.body.style.backgroundColor = "rgb(125, 125, 125)";
    document.body.style.color = "#fff";
  } else {
    lightModeIcon.style.display = "none";
    darkModeIcon.style.display = "block";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "rgb(125, 125, 125)";
  }
}

function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "lighter";

  if (currentTheme === "dark") {
    localStorage.setItem("theme", "lighter");
    themeSaveApply();
  } else {
    localStorage.setItem("theme", "dark");
    themeSaveApply();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  themeSaveApply();
  lightModeIcon.addEventListener("click", toggleTheme);
  darkModeIcon.addEventListener("click", toggleTheme);
});
