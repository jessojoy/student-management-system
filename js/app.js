function setupNavigation() {
    const navigation =
        document.getElementById("mainNavigation");

    if (!navigation) {
        return;
    }

    navigation.innerHTML = `
        <a href="dashboard.html">Dashboard</a>
        <a href="students.html">Students</a>
        <a href="reports.html">Reports</a>
        <button id="logoutButton">Logout</button>
        <span class="system-status">System Online</span>
    `;
        const logoutButton = document.getElementById("logoutButton");

    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
}

document.addEventListener(
    "DOMContentLoaded",
    setupNavigation
);