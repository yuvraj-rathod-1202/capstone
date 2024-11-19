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
                    <a class="text-black">${savedBlogDescription[i].substring(0, 200)}</a>
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
    if (blogTitle === 'Ryan-Robinsons-Blog,-ryrob') {

        document.getElementById("blogListDiv").style.display = "none";
        document.getElementById("singleBlogData").innerHTML = `
    <div class="font-medium p-3 text-center text-4xl text-blue-500">
            Ryan Robinson’s Blog, ryrob
            <button
                class="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                id="backToBlogList">
                Back
            </button>
        </div>
        <div class="flex justify-center">
            <img src="../assets/blog1.png" class="size-1/2">
        </div>
        <div class="flex m-auto size-1/2">
            Today, my personal blog (here) reaches an audience of 500,000+ monthly readers
                        on
                        topics related to blogging, marketing, SEO, writing, business and freelancing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eligendi ut officiis architecto maxime, exercitationem suscipit praesentium debitis quod aspernatur vero illum ratione corrupti! Error pariatur veniam soluta quas, unde, illo eaque, hic accusantium vel itaque iure? Consequatur officiis hic laborum eaque ullam fugit laudantium aliquam quibusdam harum error sed libero non repellat culpa asperiores, veniam molestiae. Facilis est animi dignissimos nam, quia repellat quo, aspernatur excepturi optio omnis dolorum expedita doloribus id autem atque vero illum harum. Perspiciatis consectetur quam et laborum earum incidunt natus, vel tenetur sequi vero eligendi cumque similique, rerum nulla illo quibusdam officia repellendus possimus itaque animi! Non dolorem adipisci porro, quod, minus quasi eum voluptatibus esse, omnis repudiandae earum nisi quaerat velit excepturi praesentium exercitationem sunt. Dolore soluta, temporibus doloremque deleniti voluptatum vitae ipsa, voluptatibus aliquid porro eveniet repudiandae corrupti incidunt, est totam itaque magnam ut veritatis at! Necessitatibus commodi quam facilis voluptatem distinctio est, saepe quo. Magnam eligendi rerum, dolore vero a veniam? At magni ex expedita eos corporis aperiam praesentium impedit. Totam quidem aspernatur quo porro quisquam nulla delectus earum exercitationem id nemo, deleniti recusandae provident, impedit consequuntur quam. Quia, ab rerum? Ex eos dicta unde totam eum accusamus ea eaque cum enim quisquam, ducimus molestiae accusantium magnam mollitia saepe explicabo. Ex natus, ipsum nostrum neque obcaecati autem eos odit! Mollitia repellat eaque impedit, totam doloribus praesentium ducimus accusantium delectus rem nisi, molestias temporibus soluta? Sed at explicabo hic saepe delectus corporis nobis vel sequi fuga tempora eos, cupiditate, quasi, tenetur molestias assumenda rem. Vero odit nostrum repudiandae molestias amet quod veniam inventore sunt facilis saepe voluptates enim ipsum pariatur totam corrupti placeat aliquid eos quis, fugit nihil dignissimos illo deleniti! Ducimus doloremque nulla nam explicabo velit quos, nisi nostrum quisquam dolores unde molestiae voluptates ad culpa molestias, fugiat, fugit iure? Eligendi reiciendis incidunt fugiat dolor fugit asperiores libero, sint inventore ipsa aliquid enim veniam voluptas, magni repudiandae amet repellat in fuga harum quaerat. Error laudantium, similique unde deleniti ab recusandae impedit provident itaque sequi temporibus, eligendi quaerat? Dignissimos placeat saepe, optio nemo autem assumenda iure sed, voluptatum praesentium maxime architecto aspernatur ex facere! Rerum illum dolore excepturi aut quidem, reprehenderit natus at cupiditate, sapiente ab deserunt corporis dignissimos quaerat sequi veritatis, eum repellendus blanditiis quod officia provident nostrum. Tempora a tenetur odit dignissimos praesentium eum delectus laboriosam ex aliquam, veniam ratione culpa dolorum provident impedit vero voluptates deserunt quos, modi numquam. Deserunt fuga dolorem inventore, dignissimos aut nesciunt beatae ipsam nobis hic. Nesciunt error commodi labore quas omnis nisi temporibus doloribus at similique. Accusamus laboriosam, voluptate enim accusantium reiciendis praesentium iste unde aperiam magni molestias magnam rerum doloremque quae voluptas earum voluptatum suscipit illum minus eos odio aliquam. Perferendis cum provident officia dolore accusamus placeat recusandae omnis distinctio enim, minima ex? Voluptatibus saepe quam doloremque fugit, nam in, velit iusto eius, nostrum quod quia numquam laudantium recusandae modi. Aspernatur, natus. Minus explicabo aliquid adipisci debitis at sapiente obcaecati suscipit dolores necessitatibus hic minima quidem optio temporibus, deleniti ullam officia eveniet, nemo repellendus consequatur quia. Repudiandae libero nam eos, perferendis a, maiores rerum pariatur vero nemo quaerat voluptas quasi fugit magni. Cupiditate dolorem aliquid error quaerat, natus ullam aut ut at fugiat consectetur non atque amet quia animi nobis inventore rerum eos nemo nam quo, possimus aperiam repudiandae minima iste! Aut blanditiis dolorem quidem similique voluptate? Voluptas ut, aut voluptates porro fuga nisi! Explicabo voluptatibus, ullam minus vel sit corporis sequi ipsa perspiciatis temporibus praesentium animi, laudantium nobis possimus ab magni reiciendis commodi fugit quos at ea excepturi! Exercitationem quaerat eius sunt unde, fuga ipsam necessitatibus eligendi atque error eaque repellendus soluta voluptatibus. Quas inventore laborum voluptatem commodi magnam maxime assumenda labore. Quae, nobis, sit sunt quas id quaerat dolor soluta officiis maiores illum, cum fuga beatae ea commodi adipisci amet. Iusto odit deleniti consequuntur porro corporis voluptatem dolorum eum dignissimos fugiat at. Dolorum quas id nulla cum quaerat aliquam amet. Soluta molestias nisi quasi illo. Esse ab cupiditate iste, corporis autem ex. Alias dolorum esse blanditiis placeat, illum iusto magni ducimus aspernatur commodi voluptas. Perferendis possimus est officia eos iste ex culpa id facere deserunt et, amet expedita veritatis, quam voluptates. At, optio voluptatum? Perspiciatis dolore molestiae cumque totam possimus architecto animi nobis nostrum, facere deleniti? Expedita explicabo, eaque animi incidunt asperiores odit alias culpa aliquid voluptate harum accusamus debitis commodi autem est ratione enim quidem? Aut eveniet sunt quod possimus totam, odit minima? Ab voluptas sit natus at! Magni distinctio ipsa, aperiam praesentium eum non quisquam quaerat. Vel in debitis eaque quod pariatur quas corporis magnam omnis. Ut doloremque quidem ducimus maxime saepe aliquid rem omnis placeat iure nemo id sunt ex recusandae illo consequatur architecto quaerat, odio doloribus corporis. Delectus sunt vel iusto! Voluptatem explicabo expedita quos minus quidem doloribus unde labore tenetur culpa consequuntur repudiandae error beatae in, ex deleniti quisquam! Nobis, consequuntur! Explicabo cumque, distinctio quisquam eveniet facilis accusamus voluptates commodi qui ab perspiciatis obcaecati reiciendis error. Ducimus, officia? Molestias perspiciatis error quaerat corporis illum sint minima placeat molestiae neque laboriosam, adipisci aspernatur quam fugit architecto, voluptatem rerum dolorum voluptatibus repellendus dignissimos assumenda laudantium amet. Doloremque maxime officia sapiente accusantium facere. Voluptas harum veniam optio! Corrupti, fugiat quisquam! Amet, dolorem sequi eveniet eum voluptatum nobis at dolorum optio dolores ea perferendis. Esse assumenda similique cumque maiores aut voluptatem sed officiis autem! Culpa, numquam? Amet adipisci, qui delectus ipsam quos neque maxime, aperiam ut reiciendis ipsa eius est perferendis, sequi necessitatibus! Ab non alias nulla quaerat eaque nesciunt voluptatum voluptatem quos veritatis assumenda officiis praesentium sed error ipsam distinctio possimus amet quasi corporis id adipisci harum, deleniti quas libero? Eum ex numquam laborum. Porro explicabo voluptas, ut nobis ab non eos doloribus consequuntur ipsam. Temporibus aspernatur debitis assumenda rem placeat aut quam ut eos quibusdam voluptatem saepe laborum dolor voluptates error, blanditiis ex quidem hic! Et, iure aliquam delectus eos debitis suscipit veniam a laudantium aspernatur non alias fuga ipsam officia amet esse atque laborum mollitia facilis illum? Enim delectus eveniet saepe in, aut nisi maxime eligendi ipsa?
        </div>
        
    `;
    } else {
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
            <button
                class="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 border border-blue-700 rounded items-start"
                id="backToBlogList">
                Back
            </button>
        
        </div>
        <div class="flex justify-center">
            <img src="${savedPhotos[i]}" class="size-1/2">
        </div>
        <div class="flex m-auto size-1/2">
            ${savedBlogDescription[i]}
        </div>
        
    `;
    }

    document.getElementById("singleBlogData").style.display = "block";


    document.getElementById("backToBlogList").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("singleBlogData").style.display = "none";
        document.getElementById("blogListDiv").style.display = "block";
    });
}


