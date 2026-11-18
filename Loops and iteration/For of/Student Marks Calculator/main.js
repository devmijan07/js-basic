const studentResult = document.getElementById('studentResult');
const failedSubjectItems = document.getElementById('failedSubjectItems');
const totalNumber = document.getElementById('totalNumber');
const totalSubjectItems = document.getElementById('totalSubjectItems');
let total = 0;
let failedSub = 0;
let totalSubject = 0;
let failedSubArrary = [];

const resultSheet = [
    {subName: 'Bangla', mark: 95},
    {subName: 'English', mark: 80},
    {subName: 'Math', mark: 45},
    {subName: 'Science', mark: 90},
    {subName: 'ICT', mark: 20}
]

for(let singleResult of resultSheet) {
    studentResult.innerHTML += `<p>Subject Name: <b>${singleResult.subName}</b>, Mark: <b>${singleResult.mark}</b>`
    total += singleResult.mark;
    totalSubject++
    
    if(singleResult.mark < 33) {
        failedSubArrary.push(singleResult.mark)
        failedSub++
    }
}

totalNumber.innerHTML = `Total Mark: ${total}`;
totalSubjectItems.innerHTML = `Total Subject: ${totalSubject}`
failedSubjectItems.innerHTML = `Total Failed Subject: ${failedSub}`