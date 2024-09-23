// Theme switching logic
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeLabel = document.getElementById("themeLabel");

    // Check if the user has a previously saved preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-theme");
        themeToggle.checked = true;
        themeLabel.textContent = "Light Mode";
    }

    

    // Theme toggle action
    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            document.body.classList.add("dark-theme");
            themeLabel.textContent = "Light Mode";
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-theme");
            themeLabel.textContent = "Dark Mode";
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
