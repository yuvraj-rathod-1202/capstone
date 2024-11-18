document.getElementById("cancelCreateBlog").addEventListener("click", (e) => {
    e.preventDefault();
    window.history.back();
});

document.getElementById("confirmCreateBlogButton").addEventListener("click", (e) => {
    e.preventDefault();

    const blogTitle = document.getElementById("blogTitle");
    const blogDescription = document.getElementById("blogDescription");
    const photoInput = document.getElementById("blogPhoto");
    const photo = photoInput.files[0];

    if (photo) {
        const reader = new FileReader();

        reader.onload = function () {
            const base64Image = reader.result;

            const savedPhotos = JSON.parse(localStorage.getItem("blogPhotos") || "[]");
            const savedBlogTitles = JSON.parse(localStorage.getItem("blogTitles") || "[]");
            const savedBlogDescription = JSON.parse(localStorage.getItem("blogDescription") || "[]");

            savedBlogTitles.push(blogTitle.value);
            savedBlogDescription.push(blogDescription.value);
            savedPhotos.push(base64Image);

            // Save updated arrays back to localStorage
            localStorage.setItem("blogPhotos", JSON.stringify(savedPhotos));
            localStorage.setItem("blogTitles", JSON.stringify(savedBlogTitles));
            localStorage.setItem("blogDescription", JSON.stringify(savedBlogDescription));

            

            // Clear input fields
            blogTitle.value = "";
            blogDescription.value = "";
            photoInput.value = "";

            window.location.href = "./blogList.html";
        };

        reader.readAsDataURL(photo); // Read the file as a data URL
    } else {
        alert("Please select a photo to upload.");
    }
});
