// document.getElementById("blogList")

const savedPhotos = JSON.parse(localStorage.getItem("blogPhotos") || "[]");
const savedBlogTitles = JSON.parse(localStorage.getItem("blogTitles") || "[]");
const savedBlogDescription = JSON.parse(localStorage.getItem("blogDescription") || "[]");

if (savedBlogTitles.length > 0) {
    let blogHTML = ""; // Temporary string to accumulate HTML
    for (let i = 0; i < savedBlogTitles.length; i++) {
        if (savedPhotos[i] && savedBlogTitles[i] && savedBlogDescription[i]) {
            blogHTML += `
            <div class="flex border-double border-4 border-gray-300">
                <img src="${savedPhotos[i]}" class="size-1/4">
                <span class="p-6 ml-6">
                    <button class="text-blue-500 font-medium text-2xl" onclick="showFullBlog(this)" id="${savedBlogTitles[i]}">
                        ${savedBlogTitles[i]}
                    </button>
                    <br>
                    <a class="text-black">${savedBlogDescription[i].substring(0, 20)}</a>
                </span>
            </div>
            `;
        }
    }
    document.getElementById("blogList").innerHTML = blogHTML; // Assign all at once
}

function showFullBlog(buttonEl) {
    const blogTitle = buttonEl.id;
    console.log(`Blog Title: ${blogTitle}`); // Handle further logic here
}
