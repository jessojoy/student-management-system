function loadDashboard() {

    const totalStudents = students.length;

    const yearOneStudents = students.filter(
        student => student.year === 1
    ).length;

    const yearTwoStudents = students.filter(
        student => student.year === 2
    ).length;

    const yearThreeStudents = students.filter(
        student => student.year === 3
    ).length;

    document.getElementById("totalStudents").textContent =
        totalStudents;

    document.getElementById("yearOneStudents").textContent =
        yearOneStudents;

    document.getElementById("yearTwoStudents").textContent =
        yearTwoStudents;

    document.getElementById("yearThreeStudents").textContent =
        yearThreeStudents;
}

document.addEventListener(
    "DOMContentLoaded",
    loadDashboard
);