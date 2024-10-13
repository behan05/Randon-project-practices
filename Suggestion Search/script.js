const suggestions = [
  "JavaScript",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "Node.js",
  "React",
  "Angular",
  "Vue.js",
  "Express.js",
];

const searchItem = document.getElementById("search-input");
const suggestionDisplayed = document.getElementById("suggestion-displayed");

searchItem.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();

  const suggestionArray = suggestions.filter((suggestion) => {
    return suggestion.toLowerCase().includes(query);
  });

  if (query !== "") {
    suggestionDisplayed.textContent = "";
    suggestionArray.forEach((item) => {

      const span = document.createElement("div");
      span.style.backgroundColor = "gray";
      const widthOfSearch = searchItem.clientWidth;
      span.style.width = widthOfSearch + "px";
      span.textContent = item;
      suggestionDisplayed.appendChild(span);
    })
  } else {
    suggestionDisplayed.textContent = "";
  }
});
