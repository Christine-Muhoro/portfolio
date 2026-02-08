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
    const sidebar = document.getElementById("sidebar");

    if (sidebarBtn && sidebar) {
        sidebarBtn.addEventListener("click", function () {

            // MOBILE
            if (window.innerWidth <= 768){
                sidebar.classList.toggle("show");
                return;
            }

            // DESKTOP
            sidebar.classList.toggle("closed");
            document.body.classList.toggle("full");

        });
    }

});
