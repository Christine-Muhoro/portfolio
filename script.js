document.addEventListener("DOMContentLoaded", function () {

    /* ================= THEME TOGGLE ================= */

    const themeBtn = document.getElementById("themeToggle");

    if (themeBtn) {

        // Detect system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark');
            themeBtn.textContent = '☀️';
        } else {
            document.body.classList.add('light');
            themeBtn.textContent = '🌙';
        }

        themeBtn.addEventListener('click', () => {
            if (document.body.classList.contains('dark')) {
                document.body.classList.remove('dark');
                document.body.classList.add('light');
                themeBtn.textContent = '🌙';
            } else {
                document.body.classList.remove('light');
                document.body.classList.add('dark');
                themeBtn.textContent = '☀️';
            }
        });
    }

    /* ================= SIDEBAR TOGGLE ================= */

    const sidebarBtn = document.getElementById("sidebar-toggle");
    const navMenu = document.getElementById("nav-menu");

    sidebarBtn.addEventListener("click", function(){
        navMenu.classList.toggle("show");
    });

    /* ================= SCROLL TO TOP BUTTON ================= */
    const scrollBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
