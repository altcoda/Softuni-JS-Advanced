function getPeople() {

    class Person {
      constructor(firstName, lastName, age, email) {
        Object.assign(this, {
          firstName,
          lastName,
          age,
          email
        })
      }
      toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
      }
    }
  
    let arr = [];
  
    arr.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    arr.push(new Person('SoftUni'));
    arr.push(new Person('Stephan', 'Johnson', 25));
    arr.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));
  
    return arr;
  
}
