const employee = {
    name: "Karim",
    position: "Developer",
    basicSalary: 25000,
    houseRent: 10000,
    medicalAllowance: 3000
};

const employeeInfo = document.getElementById('employeeInfo');
const totalSalary = document.getElementById('totalSalary');
let total = 0;

for(let key in employee) {
    employeeInfo.innerHTML += `<p>${key} : ${employee[key]}`;

    total = employee['basicSalary'] + employee['houseRent'] + employee['medicalAllowance']
    totalSalary.innerHTML = total;
}
