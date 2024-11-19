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
                    <a class="text-blue-500 font-medium text-2xl" onclick="showFullBlog(this)" id="${savedBlogTitles[i]}">
                        ${savedBlogTitles[i]}
                    </a>
                    <br>
                    <a class="text-black">${savedBlogDescription[i].substring(0, 20)}</a>
                    <br>
                <button class="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 border border-blue-700 rounded" >
                    Read more ->
                </button>
                </span>
            </div>
            `;
        }
    }
    document.getElementById("blogList").innerHTML = blogHTML; // Assign all at once
}

function showFullBlog(buttonEl) {
    const blogTitle = buttonEl.id;
    // console.log(`Blog Title: ${blogTitle}`);
    
}
