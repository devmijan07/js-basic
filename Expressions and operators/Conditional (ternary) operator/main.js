// const score = 85;
// const grade = score >= 90 ? "A"
//             : score >= 80 ? "B"
//             : score >= 70 ? "C"
//             : score >= 60 ? "D"
//             : "F";

// console.log(grade)

// // Multiple Conditions in a Single Check 
// const age = 56;
// const hasTicket = true;

// const entryStatus = (age >= 18 && hasTicket) ? "Allowed" : "Denied";

// console.log(entryStatus)



const isLoggedIn = false;
const isAdmin = true;

const access = isLoggedIn? (isAdmin? "Admin Dashboard": "User Dashboard"): "Login Page";
console.log(access)