const students = [
    {
        id: "ST001",
        name: "Arun Kumar",
        course: "Computer Science",
        year: 2,
        email: "arun@example.com"
    },
    {
        id: "ST002",
        name: "Meera Nair",
        course: "Computer Science",
        year: 3,
        email: "meera@example.com"
    },
    {
        id: "ST003",
        name: "Rahul Raj",
        course: "Electronics",
        year: 2,
        email: "rahul@example.com"
    },
    {
        id: "ST004",
        name: "Anjali S",
        course: "Mechanical",
        year: 1,
        email: "anjali@example.com"
    }
];

function findStudentById(id) {
    return students.find(student => student.id === id);
}