const calculateBtn = document.getElementById('calculate');
const result = document.getElementById('result');


const marks = [75, 80, 65, 90, 85];



calculateBtn.addEventListener('click', () => {
    console.log('btn clicked')
    let totalMarks = 0;
    let i = 0;
   do {
        totalMarks += marks[i];
        i++
   } while(i < marks.length)
    result.textContent = totalMarks;
    console.log(totalMarks)
})