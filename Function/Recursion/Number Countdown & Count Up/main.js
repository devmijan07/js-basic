// function countDownRecursion(num) {
//     if(num === 0) {
//         return
//     }
//     setTimeout(() => {
//         console.log(num)
//         countDownRecursion(num - 1)
//     }, 1000)
// }


// function countUpRecursion(limit) {
//     function count(num) {

//         if(num > limit) {
//             return;
//         }

//         setTimeout(() => {
//             console.log(num);
//             count(num + 1);
//         }, 1000);
//     }

//     count(1);
// }

// countUpRecursion(10);

function countUpRecursion (limit) {
    function count(num){
        if(num > limit) {
            return
        }

        setTimeout(() => {
            console.log(num)
            count(num + 1)
        }, 500)
    } 
    count(1)
}

countUpRecursion(4)