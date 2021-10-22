function solve() {

  document.querySelector('#btnSend').addEventListener('click', onClick);

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

  function onClick() {
    let restaurants = [];
    const data = Array.from(JSON.parse(document.querySelector('#inputs textarea').value));

    data.forEach(restaurant => {
      let [restaurantName, employeesData] = restaurant.split(' - ');

      let employees = [];

      // map through employee data and push into an array
      employeesData.split(', ').map(employee => {
        const [first_name, salary] = employee.split(' ');
        
        employees.push({
         name: first_name,
         salary: Number(salary)
        })
      })

      const repeatedIndex = restaurants.findIndex(r => r.name === restaurantName);
      if(repeatedIndex != -1) {
         const previousEmployees = restaurants[repeatedIndex].employees;
         restaurants[repeatedIndex].employees = previousEmployees.concat(employees)
      } else {
        restaurants.push(new Restaurant(restaurantName, employees))
      }
    })

    console.log(restaurants)

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

    let bestRestaurant = getBestRestaurant();
    let bestEmployees = bestRestaurant.employees;
    let bestEmployeesText = bestEmployees.reduce((acc, employee) => (acc += `Name: ${employee.name} With Salary: ${employee.salary} `), '').trim();

    let bestRestaurantField = document.querySelector('#bestRestaurant p');
    let bestEmployeesField = document.querySelector('#workers p');
    bestRestaurantField.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.median.toFixed(2)} Best Salary: ${bestEmployees[0].salary.toFixed(2)}`;
    bestEmployeesField.textContent = bestEmployeesText;
  }
}
