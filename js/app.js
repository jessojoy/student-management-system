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
    `;

    document
        .getElementById("logoutButton")
        .addEventListener(
            "click",
            handleLogout
        );
}

function handleLogout() {
    localStorage.removeItem("loggedInUser");

    window.location.href = "index.html";
}

document.addEventListener(
    "DOMContentLoaded",
    setupNavigation
);