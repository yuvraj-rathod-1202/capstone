document.getElementById("cancelCreateBlog").addEventListener("click", (e) => {
    e.preventDefault();
    window.history.back();
})

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

            const savedPhotos = localStorage.getItem("blogPhotos") || [];
            const savedBlogTitles = localStorage.getItem("blogTitles") || [];
            const savedBlogDescription = localStorage.getItem("blogDescription") || [];
            savedBlogTitles.push(blogTitle);
            savedBlogDescription.push(blogDescription);
            savedPhotos.push(reader.result);
            // Save the Base64 string in local storage
            localStorage.setItem('blogPhotos', savedPhotos);
            localStorage.setItem('blogTitles', savedBlogTitles);
            localStorage.setItem('blogDescription', savedBlogDescription);
            alert('Photo saved to local storage!');
           
        };

        reader.readAsDataURL(photo); // Read the file as a data URL
    } else {
        alert('Please select a photo to upload.');
    }

})