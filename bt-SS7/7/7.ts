interface Student {
    id: number;
    name: string;
    class: string;    
}
let students: Student[] = [
    { id: 1, name: "Hiển", class: "A" },
    { id: 2, name: "Dũng", class: "B" },
    { id: 3, name: "Cường", class: "A" },
    { id: 4, name: "Minh", class: "C" },
    { id: 5, name: "Trường", class: "A" }
];

function filterStudentsByClass(students: Student[], className: string): Student[] {
    return students.filter(student => student.class === className);
}
let filteredStudents = filterStudentsByClass(students, "A");

console.log(filteredStudents);