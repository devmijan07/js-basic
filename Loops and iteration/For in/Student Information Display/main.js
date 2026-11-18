const studentInfo = document.getElementById('studentInfo');

const studentDetails = {
    "Name": "Mijanur Rahman",
    "Age": 24,
    "Department": "Sociology",
    "Semester": "4th"
}

for(let student in studentDetails) {
    studentInfo.innerHTML += `<p>${student} : ${studentDetails[student]}</p>`
}