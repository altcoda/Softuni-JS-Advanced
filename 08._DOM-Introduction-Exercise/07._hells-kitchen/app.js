function solve() {

  class Restaurant {
    constructor(name, employees) {
      Object.assign(this, {
        name,
        employees
      })
    }
    getMedianSalary() {
      let _totalSalaries = this.employees.reduce((acc, employee, index) => (acc += Number(this.employees[index].salary)), 0);
      return (_totalSalaries / this.employees.length)
    }
    sortBySalary() {
      return Array.from(this.employees).sort((a, b) => b.salary - a.salary)
    }
  }

  document.getElementById('btnSend').addEventListener('click', (e) => {
    let restaurants = [];
    const data = Array.from(JSON.parse(document.querySelector('#inputs textarea').value));

    data.forEach(restaurant => {
      let [restaurantName, employeesData] = restaurant.split(' - ');

      // Map through employee data and push into an array
      let employees = employeesData.split(', ').reduce((acc, employee) => {
        const [first_name, salary] = employee.split(' ');
        
        return acc.concat({
         name: first_name,
         salary: Number(salary)
        })
      }, [])

      // Check if restaurant repeats
      const repeatedIndex = restaurants.findIndex(r => r.name === restaurantName);
      if(repeatedIndex != -1) {
         const previousEmployees = restaurants[repeatedIndex].employees;
         restaurants[repeatedIndex].employees = previousEmployees.concat(employees)
      } else {
        restaurants.push(new Restaurant(restaurantName, employees))
      }
    })

    const getBestRestaurant = () => {
      const { index } = restaurants.reduce((best, restaurant, index) =>
        restaurant.getMedianSalary() > best.median ? {
          index: index,
          median: restaurant.getMedianSalary()
        } : 
        best, 
        { median: 0 });

      const bestRestaurant = {
        name: restaurants[index].name,
        median: restaurants[index].getMedianSalary(),
        employees: restaurants[index].sortBySalary(),
      };
      return bestRestaurant
    }

    const bestRestaurant = getBestRestaurant();
    const bestSalary = bestRestaurant.employees[0].salary;
    const bestEmployeesList = bestRestaurant.employees.reduce((acc, employee) => (acc += `Name: ${employee.name} With Salary: ${employee.salary} `), '').trim();

    document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.median.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
    document.querySelector('#workers p').textContent = bestEmployeesList;
  
  })
}
