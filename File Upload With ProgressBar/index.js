"use strict";

const input = document.getElementById("file");
const progressBar = document.getElementById("progressBar");
const submitBtn = document.getElementById("submitBtn");
const imageContainer = document.getElementById("imageContainer");

submitBtn.addEventListener("click", (e) => {
    const uploadFiles = input.files;

    if (uploadFiles.length > 0) {
        imageContainer.innerHTML = "";
        progressBar.value = 0;

        Array.from(uploadFiles).forEach((file) => {
            const readFile = new FileReader();

            readFile.onload = (readedData) => {
                const createImg = document.createElement("img");
                createImg.className = "imgClass";
                createImg.src = readedData.target.result;
                imageContainer.appendChild(createImg);
            }

            readFile.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percentageLoaded = (event.loaded / event.total) * 100;
                    progressBar.value = Math.max(progressBar.value, percentageLoaded);
                }
            }
            readFile.onerror = (e) => {
                console.error("Error reading file: " + file.name + e.target.error);
            }
            readFile.readAsDataURL(file);
        })
    } else {
        console.error("You have to add at least one file!");
    }
})