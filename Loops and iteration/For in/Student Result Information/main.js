const marks = {
    Bangla: 80,
    English: 88,
    ICT: 77,
    Math: 76,
    Economic: 88
}

const results = document.getElementById('result');
const totalMark = document.getElementById('totalMarks');
const totalSubject = document.getElementById('totalSubjects');

let total = 0;
let totalSubjectCount = 0;


for(let subject in marks) {

    let subjectName = subject;

    results.innerHTML += `<p>${subjectName} : ${marks[subject]}`;
    total += marks[subject];
    totalMark.innerHTML = total;

    totalSubjectCount++
    totalSubject.innerHTML = totalSubjectCount;
}