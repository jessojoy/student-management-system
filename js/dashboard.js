function loadDashboard() {
    const username =
        localStorage.getItem("loggedInUser") || "User";

    const welcomeMessage =
        document.getElementById("welcomeMessage");

    if (welcomeMessage) {
        welcomeMessage.textContent =
            `Welcome, ${username}`;
    }
}

document.addEventListener(
    "DOMContentLoaded",
    loadDashboard
);