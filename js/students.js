function displayStudents() {

    const tableBody =
        document.getElementById("studentTableBody");

    tableBody.innerHTML = "";

    students.forEach(student => {

        const row =
            document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.year}</td>
            <td>${student.semester ?? "-"}</td>
            <td>${student.email ?? "-"}</td>
        `;

        tableBody.appendChild(row);
    });
}


function addStudent(event) {

    event.preventDefault();

    const id =
        document.getElementById("studentId")
            .value
            .trim();

    const name =
        document.getElementById("studentName")
            .value
            .trim();

    const course =
        document.getElementById("studentCourse")
            .value
            .trim();

    const year =
        Number(
            document.getElementById("studentYear")
                .value
        );


    if (!id || !name || !course || !year) {
        return;
    }


    const newStudent = {

        id: id,

        name: name,

        course: course,

        year: year,

        semester: year * 2,

        enrollmentStatus: "Enrolled"

    };


    students.push(newStudent);


    displayStudents();


    document
        .getElementById("studentForm")
        .reset();

}


document
    .getElementById("studentForm")
    .addEventListener(
        "submit",
        addStudent
    );


document.addEventListener(
    "DOMContentLoaded",
    displayStudents
);