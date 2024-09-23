document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeLabel = document.getElementById("themeLabel");

    // Check if the user has a previously saved preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-theme");
        themeToggle.checked = true;
        themeLabel.textContent = "Light Mode";
    } else {
        // Set default label for light theme
        themeLabel.textContent = "Dark Mode";
    }

    // Theme toggle action
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme'); // Add dark theme
            themeLabel.textContent = 'Light Mode';
            localStorage.setItem('darkMode', 'enabled'); // Save to localStorage
        } else {
            document.body.classList.remove('dark-theme'); // Revert to light theme
            themeLabel.textContent = 'Dark Mode';
            localStorage.setItem('darkMode', 'disabled'); // Save to localStorage
        }
    });
});

// Chatbot toggling function
function toggleChatbot() {
    var chatbot = document.getElementById('chatbot-contact');
    if (chatbot.classList.contains('chatbot-hidden')) {
        chatbot.classList.remove('chatbot-hidden');
        chatbot.classList.add('chatbot-visible');
    } else {
        chatbot.classList.remove('chatbot-visible');
        chatbot.classList.add('chatbot-hidden');
    }
}
