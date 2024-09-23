const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});