let savedPhotos = JSON.parse(localStorage.getItem("blogPhotos") || "[]");
let savedBlogTitles = JSON.parse(localStorage.getItem("blogTitles") || "[]");
let savedBlogDescription = JSON.parse(localStorage.getItem("blogDescription") || "[]");

if (savedPhotos.length === savedBlogTitles.length && savedBlogTitles.length === savedBlogDescription.length) {
    let blogHTML = ""; // Temporary string to accumulate HTML
    for (let i = 0; i < savedBlogTitles.length; i++) {
        if (savedPhotos[i] && savedBlogTitles[i] && savedBlogDescription[i]) {
            blogHTML += `
            <div class="flex border-double border-4 border-gray-300">
                <img src="${savedPhotos[i]}" class="size-1/4">
                <span class="p-6 ml-6">
                    <a class="text-blue-500 font-medium text-2xl" 
                        
                       id="${savedBlogTitles[i].replace(/\s+/g, "-")}">
                        ${savedBlogTitles[i]}
                    </a>
                    <br>
                    <a class="text-black">${savedBlogDescription[i].substring(0, 20)}</a>
                    <br>
                    <button class="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 border border-blue-700 rounded" onclick="showFullBlog('${savedBlogTitles[i]}')">
                        Read more ->
                    </button>
                </span>
            </div>
            `;
        }
    }
    document.getElementById("blogList").innerHTML = blogHTML; // Assign all at once
} else {
    console.error("Inconsistent data lengths in localStorage arrays.");
}

function showFullBlog(blogTitle) {
    const i = savedBlogTitles.indexOf(blogTitle);
    if (i !== -1) {
        const blogDescription = savedBlogDescription[i];
        console.log(`Blog Title: ${blogTitle}`);
        console.log(`Full Description: ${blogDescription}`);
    } else {
        console.error("Blog title not found!");
    }

    document.getElementById("blogListDiv").style.display = "none";
    document.getElementById("singleBlogData").innerHTML = `
    <div class="font-medium p-3 text-center text-4xl text-blue-500">
            ${blogTitle}
        </div>
        <div class="flex justify-center">
            <img src="${savedPhotos[i]}" class="size-1/2">
        </div>
        <div class="flex m-auto size-1/2">
            ${savedBlogDescription[i]}
        </div>
        <div class="items-center flex justify-center">
            <button
                class="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                id="backToBlogList">
                Back
            </button>
        </div>
    `;

    document.getElementById("singleBlogData").style.display = "block";

    
    document.getElementById("backToBlogList").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("singleBlogData").style.display = "none";
        document.getElementById("blogListDiv").style.display = "block";
    });
}


