document.addEventListener("DOMContentLoaded", function () {

    /* ================= THEME TOGGLE ================= */

    const themeBtn = document.getElementById("themeToggle");

    if (themeBtn) {

        // Detect system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark');
            themeBtn.textContent = '☀️light mode';
        } else {
            document.body.classList.add('light');
            themeBtn.textContent = '🌙dark mode';
        }

        themeBtn.addEventListener('click', () => {
            if (document.body.classList.contains('dark')) {
                document.body.classList.remove('dark');
                document.body.classList.add('light');
                themeBtn.textContent = '🌙dark mode';
            } else {
                document.body.classList.remove('light');
                document.body.classList.add('dark');
                themeBtn.textContent = '☀️light mode';
            }
        });
    }

    /* ================= SIDEBAR TOGGLE ================= */

    const sidebarBtn = document.getElementById("sidebar-toggle");
    const navMenu = document.getElementById("nav-menu");

    sidebarBtn.addEventListener("click", function(){
        navMenu.classList.toggle("show");
    });


});
