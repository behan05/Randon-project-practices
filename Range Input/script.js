// quickly adjusting settings for brightness.
function displayValue(val) {
    const body = document.querySelector("body");
    const parseAlpha = parseFloat(val);
    const adjustColor = `rgba(105, 35, 15, ${parseAlpha})`;
    body.style.backgroundColor = adjustColor;

    saveTheme(parseAlpha);

}

function saveTheme(parseAlpha) {
    // ternary condition to decide dark or lighter.
    const theme = parseAlpha > 0.5 ? "darker" : "lighter";
    // save on localStorage
    localStorage.setItem("theme", theme);
}

function themeApply() {
    // default lighter.
    const currentTheme = localStorage.getItem('theme') || "lighter";
    const body = document.querySelector("body");

    // Apply styles based on the saved theme
    if (currentTheme === "darker") {
        body.style.backgroundColor = "rgba(105, 35, 15, 0.8)"; // Example for darker
    } else {
        body.style.backgroundColor = "rgba(105, 35, 15, 0.2)"; // Example for lighter
    }

}

window.onload = themeApply();