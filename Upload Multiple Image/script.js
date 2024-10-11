const inputFile = document.getElementById("input-file");
const uploadBtn = document.getElementById("uploadBtn");
const main = document.querySelector("main");

uploadBtn.addEventListener("click", (e) => {
  const files = inputFile.files;

  for (let index = 0; index < files.length; index++) {
    const readerFile = files[index];

    if (readerFile) {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const createImgTag = document.createElement("img");
        createImgTag.src = e.target.result;
        createImgTag.classList.add("img");
        main.appendChild(createImgTag);
      };

      fileReader.readAsDataURL(readerFile);
    } else {
      console.error("there is no file!");
    }
  }
});
