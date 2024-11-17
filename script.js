// script.js
function toggleWhyUs() {
    const whyUsSection = document.getElementById('why-us');
    whyUsSection.classList.toggle('hidden');
}

function toggleTheme() {
    const root = document.documentElement;
    const isDarkMode = root.style.getPropertyValue('--background-color') === '#000000';

    if (isDarkMode) {
        root.style.setProperty('--background-color', '#ffffff');
        root.style.setProperty('--text-color', '#000000');
        root.style.setProperty('--primary-color', '#4CAF50');
        root.style.setProperty('--accent-color', '#FF0000');
    } else {
        root.style.setProperty('--background-color', '#000000');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--primary-color', '#1a1a1a');
        root.style.setProperty('--accent-color', '#FF5722');
    }
}
