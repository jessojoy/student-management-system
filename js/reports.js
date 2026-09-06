function displayStudents(studentList) {

    const tableBody =
        document.getElementById("reportTableBody");

    tableBody.innerHTML = "";

    studentList.forEach(student => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.year}</td>
        `;

        tableBody.appendChild(row);
    });
}


function loadReports() {

    const totalStudents = students.length;

    document.getElementById(
        "reportTotalStudents"
    ).textContent = totalStudents;

    displayStudents(students);
}


document
    .getElementById("courseFilter")
    .addEventListener("change", function () {

        const selectedCourse = this.value;

        if (selectedCourse === "all") {
            displayStudents(students);
            return;
        }

        const filteredStudents =
            students.filter(
                student => student.course === selectedCourse
            );

        displayStudents(filteredStudents);
    });


document.addEventListener(
    "DOMContentLoaded",
    loadReports
);