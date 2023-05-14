/** @format */

/**let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
}

function addData() {
  //Write your code here, just console.log
}

function removeFailedStudent() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
}**/
const students = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 }
];

function PrintStudentbyMap() {
  const passedStudents = students
    .filter(student => student.marks > 50)
    .map(student => student.name);

  console.log(passedStudents);
}

function PrintStudentbyForEach() {
  students.forEach(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  students.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  const passedStudents = students.filter(student => student.marks > 50);
  console.log(passedStudents);
}

function concatenateArray() {
  const additionalStudents = [
    { id: 5, name: "emma", age: "21", marks: 90 },
    { id: 6, name: "michael", age: "19", marks: 65 },
    { id: 7, name: "lisa", age: "20", marks: 70 }
  ];

  const concatenatedArray = students.concat(additionalStudents);
  console.log(concatenatedArray);
}

