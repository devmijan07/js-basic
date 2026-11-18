const btn = document.getElementById('btn');
const banglaMark = document.getElementById('bangal');
const englishMark = document.getElementById('english');
const mathMark = document.getElementById('math');
const scienceMark = document.getElementById('science');
const ictMarks = document.getElementById('ict');


const totalMarks = document.getElementById('totalmarks');
const averageMarks = document.getElementById('average');
const totalCGPA = document.getElementById('cgpa');

let marks = [79, 89, 95, 90, 68];
let i = 0;
let sumOfMarks = 0;

const failedSubject = 
    marks.filter((mark) => {
       return mark < 33;
    })

btn.addEventListener('click', () => {
    while(i < marks.length) { 
        sumOfMarks += marks[i];
        i++
        totalMarks.textContent = sumOfMarks;

        let studentAverageMarks = sumOfMarks / marks.length;
        averageMarks.textContent = studentAverageMarks;

        if(failedSubject.length) {
            totalCGPA.textContent = `Your grade is F. And you failed in ${failedSubject.length} subject(s)`
        } else {
                switch (true) {

                case studentAverageMarks >= 81:
                    totalCGPA.textContent = 'A+';
                    break;

                case studentAverageMarks >= 71:
                    totalCGPA.textContent = 'A';
                    break;

                case studentAverageMarks >= 61:
                    totalCGPA.textContent = 'A-';
                    break;

                case studentAverageMarks >= 51:
                    totalCGPA.textContent = 'B';
                    break;

                case studentAverageMarks >= 41:
                    totalCGPA.textContent = 'C';
                    break;

                case studentAverageMarks >= 33:
                    totalCGPA.textContent = 'D';
                    break;

                default:
                    totalCGPA.textContent = 'F';
             }   
        }
    }
})