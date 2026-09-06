const students = [
    {
        id: "ST001",
        name: "Arun Kumar",
        course: "Computer Science",
        year: 2,
        semester: 4,
        enrollmentStatus: "Enrolled"
    },
    {
        id: "ST002",
        name: "Meera Nair",
        course: "Computer Science",
        year: 3,
        semester: 6,
        enrollmentStatus: "Enrolled"
    },
    {
        id: "ST003",
        name: "Rahul Raj",
        course: "Electronics",
        year: 2,
        semester: 4,
        enrollmentStatus: "Enrolled"
    },
    {
        id: "ST004",
        name: "Anjali S",
        course: "Mechanical",
        year: 1,
        semester: 2,
        enrollmentStatus: "Enrolled"
    }
];

function getActiveStudents() {
    return students.filter(
        student => student.year >= 1
    );
}

function getEnrolledStudents() {
    return students.filter(
        student =>
            student.enrollmentStatus === "Enrolled"
    );
}