document.addEventListener("DOMContentLoaded", function () {

    const toggleBtn = document.getElementById("themeToggle");

    // Detect system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
        toggleBtn.textContent = '☀️';
    } else {
        document.body.classList.add('light');
        toggleBtn.textContent = '🌙';
    }

    toggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            toggleBtn.textContent = '🌙';
        } else {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            toggleBtn.textContent = '☀️';
        }
    });

});

