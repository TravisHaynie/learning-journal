const menuBtn = document.getElementById("menu-drop");
const hamburgerMenu = document.getElementById("nav-links");
const viewMore = document.getElementById("view-more");
const viewMoreBlog = document.getElementById("view-more-blog");

menuBtn.addEventListener("click", function() {
    hamburgerMenu.classList.toggle("show");
    hamburgerMenu.classList.toggle("hidden");
});

viewMore.addEventListener("click", function() {
    document.getElementById("view-more-sec").classList.toggle("hidden");
});

function generatedBlogHtml() {
    viewMoreBlog.innerHTML = `
        <section class="post-section-blog hidden" id="view-more-sec">
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
    `;
}

generatedBlogHtml();
