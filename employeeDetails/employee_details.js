const employees = [
    {id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:'Javascript' }, 
    {id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:'Python' }, 
    {id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization:'Java'},
    {id: 4, name: 'Jane Doe', age: 22, department: 'IT', salary: 50000, specialization:'Javascript' },
    {id: 5, name: 'James Dow', age: 60, department: 'HR', salary: 100000, specialization:'Python' },
    {id: 6, name: 'Adam Swam', age: 35, department: 'IT', salary: 50000, specialization:'Javascript' },
];

//function to display all employees
function displayEmployees(){
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`)
        .join('')
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: ${totalSalaries}`);
}

function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: - ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
       }
}

const specializationButton = document.getElementById("specializationBtn");

specializationButton.addEventListener('click', () => {
    const jsSpecialization = employees.filter(employee => employee.specialization === 'Javascript');
    const foundjsEmployees = jsSpecialization.map(employee =>`<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization}</p>`).join('');
    
    document.getElementById('employeesDetails').innerHTML = foundjsEmployees;

})
