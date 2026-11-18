const input = document.getElementById('numberInput');
const btn = document.getElementById('calculateBtn');
const displayOutput = document.getElementById('output');

btn.addEventListener('click', () => {
    let myArray = [];
    let array = input.value.split(',').map(item => Number(item.trim()));
    myArray.push(array);
    myArray = myArray.flat()

    const receavingArray = function(array) {
        let totalArrayNumber = 0;

        const arrayAddingrecursiveFunc = (index) => {
            if(index >= array.length) {
                return
            }

            totalArrayNumber += array[index];
            displayOutput.innerHTML = totalArrayNumber;
            
            arrayAddingrecursiveFunc(index + 1)
        }

        arrayAddingrecursiveFunc(0)

    }
    receavingArray(myArray)
})