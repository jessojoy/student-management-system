const students = [
    {
        id: "ST001",
        name: "Arun Kumar",
        course: "Computer Science",
        year: 2,
        enrollmentStatus: "Enrolled"
    },
    {
        id: "ST002",
        name: "Meera Nair",
        course: "Computer Science",
        year: 3,
        enrollmentStatus: "Enrolled"
    },
    {
        id: "ST003",
        name: "Rahul Raj",
        course: "Electronics",
        year: 2,
        enrollmentStatus: "Enrolled"
    },
    {
        id: "ST004",
        name: "Anjali S",
        course: "Mechanical",
        year: 1,
        enrollmentStatus: "Enrolled"
    }
];


function getEnrolledStudents() {

    return students.filter(
        student =>
            student.enrollmentStatus === "Enrolled"
    );
}