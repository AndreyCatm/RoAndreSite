// script.js
function toggleWhyUs() {
    const whyUsSection = document.getElementById('why-us');
    whyUsSection.classList.toggle('hidden');
}

function toggleSettings() {
    const settingsMenu = document.getElementById('settings-menu');
    settingsMenu.classList.toggle('hidden');
}

function changeTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.style.setProperty('--background-color', '#000000');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--primary-color', '#1a1a1a');
        root.style.setProperty('--accent-color', '#FF5722');
    } else {
        root.style.setProperty('--background-color', '#ffffff');
        root.style.setProperty('--text-color', '#000000');
        root.style.setProperty('--primary-color', '#4CAF50');
        root.style.setProperty('--accent-color', '#FF0000');
    }
}

function changeLanguage(language) {
    // Language data
    const translations = {
        en: {
            intro: "The Best Extension for Roblox!",
            whyUs: "Why Us?",
            reasons: [
                "We provide a seamless Roblox website experience",
                "New features like level systems, banners, and more!",
                "24/7 support on our Discord server"
            ],
            tryNow: "Try Now",
            whyUsBtn: "Why Us?"
        },
        ru: {
            intro: "Лучшее расширение для Roblox!",
            whyUs: "Почему мы?",
            reasons: [
                "Мы предоставляем комфорт использования веб-сайта Roblox",
                "Новые возможности: система уровней, баннеры и многое другое!",
                "Круглосуточная поддержка на нашем Discord-сервере"
            ],
            tryNow: "Попробовать сейчас",
            whyUsBtn: "Почему мы?"
        }
    };

    const content = translations[language];
    document.querySelector(".intro h2").innerHTML = `<strong>${content.intro}</strong>`;
    document.querySelector("#why-us h2").textContent = content.whyUs;
    document.querySelectorAll("#why-us ul li").forEach((li, i) => {
        li.textContent = content.reasons[i];
    });
    document.querySelector(".try-now").textContent = content.tryNow;
    document.querySelector(".why-us-btn").textContent = content.whyUsBtn;
}
