function setupNavigation() {
    const navigation = document.getElementById("mainNavigation");

    if (!navigation) {
        return;
    }

    navigation.innerHTML = `
        <a href="dashboard.html">Dashboard</a>
        <a href="students.html">Students</a>
        <a href="reports.html">Reports</a>
    `;
}

document.addEventListener("DOMContentLoaded", setupNavigation);