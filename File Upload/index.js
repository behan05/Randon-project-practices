window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const file = document.getElementById("file");
  const progressBar = document.getElementById("progress-bar");
  const statusText = document.getElementById("status");
  const h3Tag = document.querySelector("h3");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fileVal = file.files[0];
    if (fileVal) {
      const totalFileSize = file.size;
      let uploadSize = 0;

      // file upload process
      const uploadInterval = setInterval(() => {
        if (uploadSize < totalFileSize) {
          uploadSize += totalFileSize * 0.1;
          const percentageComplete = (uploadSize / totalFileSize) * 100;
          progressBar.style.width = percentageComplete + "%";
          h3Tag.textContent = percentageComplete + "%";
        } else {
          clearInterval(uploadInterval);
          statusText.textContent = "File uploaded successfully!";
          statusText.style.color = "green";
          setTimeout(() => {
            statusText.style.display = "none";
            document.getElementById("progress").style.display = "none";
          }, 1000);

          // image display
          if (fileVal) {
            const readFile = new FileReader();

            readFile.onload = (event) => {
              const img = document.querySelector("img");
              const container = document.querySelector(".img-container");
              const result = event.target.result;
              img.src = result;
              container.style.display = "block";
            };

            readFile.readAsDataURL(fileVal);
          } else {
            console.error("there is issue during file reading!");
          }
          // form.submit();
        }
      }, 300);
    } else {
      const err = document.querySelector(".error");
      err.style.color = "red";
      const text = err.textContent;
      alert(text);
    }
  });
  // download image.

  function downloadImage() {
    const downloadBtn = document.getElementById("download");
    const image = document.querySelector("img");
    downloadBtn.addEventListener("click", () => {
      const anchar = document.createElement("a");
      anchar.setAttribute("download", "behan-image-download-by-javascript.png");
      anchar.href = image.src;

      document.body.appendChild(anchar);
      anchar.click();
      document.body.removeChild(anchar);
    });
  }
  downloadImage();

  // download image by url given by user
  function downloadImageByUrl() {
    const urlForm = document.getElementById("urlForm");
    const urlInput = document.getElementById("url-input");
    // const urlBtn = document.getElementById("urlBtn");

    urlForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const url = urlInput.value;
      async function fetchData(url) {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const blob = await response.blob();
            // const tempUrl = URL.createObjectURL(blob);

            const readFile = new FileReader();

            readFile.onload = (event) => {
              const img = document.querySelector("img");
              const container = document.querySelector(".img-container");
              img.src = event.target.result;
              container.style.display = "block";
            };

            // pass blob data because getting image from URL.
            readFile.readAsDataURL(blob);
          } else {
            console.error("Failed to fetch the image:", response.statusText);
          }
        } catch (error) {
          console.error("there is issue during fetching data: ", error);
        }
      }
      fetchData(url);
    });
  }

  downloadImageByUrl();
});
