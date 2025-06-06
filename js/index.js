const menuBtn = document.getElementById("menu-drop");
const hamburgerMenu = document.getElementById("modal");
const viewMore = document.getElementById("view-more");
const viewMoreBlog = document.getElementById("view-more-blog");
const closeMenu = document.getElementById("close-menu");

closeMenu.addEventListener("click", function() {
    if(window.innerWidth <= 850) {
        hamburgerMenu.style.display = "none";
        menuBtn.style.display = "block";
    }
   
})

menuBtn.addEventListener("click", function() {
    if(window.innerWidth <=850) {
        hamburgerMenu.style.display = "flex";
        menuBtn.style.display = "none";
    }
   
});

viewMore.addEventListener("click", function() {
    document.getElementById("view-more-sec").classList.toggle("hidden");
    document.getElementById("view-more-sec").classList.toggle("show");
});



function generatedBlogHtml() {
    viewMoreBlog.innerHTML = `
        <section class="hidden" id="view-more-sec">
            <section class="post-section-blog">
                <article class="blog-img-4 blog">
                    <img class="img" alt="A picture of a girl dancing on the beach" src="images/1.jpeg">
                    <p>July 23, 2022</p>
                    <h2>Blog Seven</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of 
                        learning in the Frontend Developer Career Path.
                    </p>
                </article>
                <article class="blog-img-5 blog">
                    <img class="img" alt="A picture of a dark computer screen with code on it" src="images/2.jpeg">
                    <p>July 23, 2022</p>
                    <h2>Blog Eight</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of 
                        learning in the Frontend Developer Career Path.
                    </p>
                </article>
                <article class="blog-img-6 blog">
                    <img class="img" alt="A picture of a computer with writing on the screen" src="images/3.jpeg">
                    <p>July 23, 2022</p>
                    <h2>Blog Nine</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of 
                        learning in the Frontend Developer Career Path.
                    </p>
                </article>
            </section>
        </section>
    `;
}
 generatedBlogHtml();
