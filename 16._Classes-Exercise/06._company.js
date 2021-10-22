class Company {

  /* 
    Store the initial string in a property, and do not change it.
    Upon calling the toString() function, truncate it to the desired value and return it.
  */

  constructor() {
    this.departments = {}
  }

  addEmployee(...data) {
    let [name, salary, position, department] = data;
    salary = Number(salary);

    if (data.some(d => d === '' || d === undefined || d === null || salary < 0)) {
      throw new Error('Invalid input!')
    }

    if (!this.departments.hasOwnProperty(department)) { this.departments[department] = [] }
    
    this.departments[department].push({name, salary, position})

    return `New employee is hired. Name: ${name}. Position: ${position}`
  }

  bestDepartment() {
    const entries = Object.entries(this.departments);
    let bestDpt = '';
    let previousAvg = 0;
    let highestAvg = 0;

    for (let entry in entries) {
      const dpt = entries[entry][0]
      const employees = entries[entry][1];
      let totalSalaries = 0;
      for (let i = 0; i < employees.length; i++) {
        totalSalaries += employees[i].salary;
      }
      const avgSalary = totalSalaries / employees.length;
      if (avgSalary > previousAvg) {
        previousAvg = avgSalary;
        bestDpt = dpt;
        highestAvg = avgSalary;
      }
    }

    let output = [
      `Best Department is: ${bestDpt}`,
      `Average salary: ${highestAvg.toFixed(2)}`
    ];

    const bestDptEmployees = this.departments[bestDpt].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
    for (let employee in bestDptEmployees) {
      const { name, salary, position } = this.departments[bestDpt][employee];
      output.push(`${name} ${salary} ${position}`)
    }

    return output.join('\n')
  }
}
