const icon = document.querySelector(".fa-expand");
const container = document.querySelector(".container");
icon.addEventListener("click", (e) => {
    if (container.style.width === "75%") {
        container.style.width = "95%";
        container.style.height = "800px";
    } else {
        container.style.width = "75%";
        container.style.height = "600px";
    }
});
