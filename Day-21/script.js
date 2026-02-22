const key = "appSettings";
const button = document.getElementById("toggle");

function saveSettings(data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadSettings() {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
}

let settings = loadSettings();

if (settings.theme === "dark") {
    document.body.classList.add("dark");
}

button.onclick = function () {
    document.body.classList.toggle("dark");

    settings.theme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    saveSettings(settings);
};