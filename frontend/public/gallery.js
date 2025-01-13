document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const galleryContainer = document.querySelector(".gallery-container");

    // Load images from localStorage on page load
    loadImages();

    // Function to load images from localStorage and display them
    function loadImages() {
        const storedImages = JSON.parse(localStorage.getItem("images")) || [];
        galleryContainer.innerHTML = ""; // Clear the gallery before adding images
        storedImages.forEach((imageSrc) => {
            addImageToGallery(imageSrc);
        });
    }

    // Function to add an image to the gallery
    function addImageToGallery(imageSrc) {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");
        galleryItem.innerHTML = `<img src="${imageSrc}" alt="Uploaded Image">`;
        galleryContainer.appendChild(galleryItem);
    }

    // Event listener for file input to upload and save images
    fileInput.addEventListener("change", function (event) {
        const files = event.target.files;

        Array.from(files).forEach((file) => {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imageSrc = e.target.result;

                // Save the image URL in localStorage
                const storedImages = JSON.parse(localStorage.getItem("images")) || [];
                storedImages.push(imageSrc);
                localStorage.setItem("images", JSON.stringify(storedImages));

                // Add the image to the gallery
                addImageToGallery(imageSrc);
            };

            reader.readAsDataURL(file); // Read the file as a Data URL
        });

        // Clear the file input to allow uploading the same file again
        fileInput.value = "";
    });
});