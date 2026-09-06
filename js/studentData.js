const students = [
    {
        id: "ST001",
        name: "Arun Kumar",
        course: "Computer Science",
        year: 2,
        semester: 4,
        enrollmentStatus: "Enrolled",
        email: "arun@example.com"
    },
    {
        id: "ST002",
        name: "Meera Nair",
        course: "Computer Science",
        year: 3,
        semester: 6,
        enrollmentStatus: "Enrolled",
        email: "meera@example.com"
    },
    {
        id: "ST003",
        name: "Rahul Raj",
        course: "Electronics",
        year: 2,
        semester: 4,
        enrollmentStatus: "Enrolled",
        email: "rahul@example.com"
    },
    {
        id: "ST004",
        name: "Anjali S",
        course: "Mechanical",
        year: 1,
        semester: 2,
        enrollmentStatus: "Enrolled",
        email: "anjali@example.com"
    }
];

function findStudentById(id) {
    return students.find(student => student.id === id);
}

function getActiveStudents() {
    return students.filter(
        student => student.year >= 1
    );
}

function getEnrolledStudents() {
    return students.filter(
        student => student.enrollmentStatus === "Enrolled"
    );
}