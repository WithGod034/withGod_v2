// ========================
// Back to Top Button
// ========================
let backToTopBtn = document.getElementById("backToTop");

// Show button when scrolling down 100px
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Scroll to top when clicked
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================
// Optional: Smooth Scroll for Navbar Links
// ========================
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
