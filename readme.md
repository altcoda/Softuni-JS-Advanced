<div align="center">
<h1 style="color:white">Javascript Advanced September 2021</h1>
<h3>13 September ― 23 October 2021</h3>
<img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Logo_Software_University_%28SoftUni%29_-_blue.png" 
  alt="softuni logo"
  style="position:relative; width:150px; padding:10px; margin: 0 auto;"
  />

<table style="width:100%; max-width:1000px; background-color:#1d2029; color:#e4e4e4">
<tr>
  <th style="text-align:center; vertical-align: middle;">COURSE  CURRICULUM</th>
  <th style="text-align:center; vertical-align: middle;">SOLUTIONS</th>
</tr>
<tr>
  <td style="text-align:center; vertical-align: middle;">Syntax, Functions and Statements</td>
  <td style="text-align:center; vertical-align: middle;">
    <a href="https://github.com/altcoda/Softuni-JS-Advanced/tree/main/01.%20Syntax%2C%20Functions%20and%20Statements%20-%20Lab">Lab</a> |
    <a href="https://github.com/altcoda/Softuni-JS-Advanced/tree/main/02.%20Syntax%2C%20Functions%20and%20Statements%20%20-%20Exercise">Exercise</a>
  </td>
</tr>
<tr>
  <td style="text-align: center; vertical-align: middle;">Arrays and Nested Arrays</td>
  <td style="text-align: center; vertical-align: middle;">
    <a href="https://github.com/altcoda/Softuni-JS-Advanced/tree/main/03.%20%20Arrays%20and%20Nested%20Arrays">Lab</a> |
    <a href="https://github.com/altcoda/Softuni-JS-Advanced/tree/main/04.%20Arrays%20and%20Nested%20Arrays%20-%20Exercise">Exercise</a>
  </td>
</tr>
<tr>
  <td style="text-align: center; vertical-align: middle;">Objects and Composition</td>
  <td style="text-align: center; vertical-align: middle;">
    <a href="https://github.com/altcoda/Softuni-JS-Advanced/tree/main/05.%20Objects%20and%20Composition">Lab</a> |
    Exercise
  </td>
</tr>
<tr>
  <td style="text-align: center; vertical-align: middle;">DOM Introduction</td>
  <td style="text-align: center; vertical-align: middle;">
    <a href="https://github.com/altcoda/Softuni-JS-Advanced/tree/main/07.%20DOM%20Introduction">
    Lab</a> |
    Exercise
  </td>
</tr>
<tr>
  <td style="text-align: center; vertical-align: middle;">DOM Manipulations and Events</td>
  <td style="text-align: center; vertical-align: middle;">
    Lab |
    Exercise
  </td>
</tr>
<tr>
  <td style="text-align: center; vertical-align: middle;">Advanced Functions</td>
  <td style="text-align: center; vertical-align: middle;">
    Lab |
    Exercise
  </td>
</tr>
<tr>
  <td style="text-align: center; vertical-align: middle;">Unit Testing and Error Handling</td>
  <td style="text-align: center; vertical-align: middle;">
    Lab |
    Exercise
  </td>
</tr>
<tr>
  <td style="text-align: center; vertical-align: middle;">Classes</td>
  <td style="text-align: center; vertical-align: middle;">
    <a href="https://github.com/altcoda/Softuni-JS-Advanced/tree/main/15.%20Classes">Lab</a> |
    <a href="https://github.com/altcoda/Softuni-JS-Advanced/tree/main/16.%20Classes%20-%20Exercise">Exercise</a>
  </td>
</tr>
<tr>
  <td style="text-align: center; vertical-align: middle;">Prototypes and Inheritance</td>
  <td style="text-align: center; vertical-align: middle;">
    Lab |
    Exercise
  </td>
</tr>
</table>

</div>
<br/>

#
<h2 style="color:white" align="center">Course Notes</h2>

<p align="center">Notes I took to help me during the course.<br/></p>
<br/>

* [Objects & Composition](#objects)<br/>
* [DOM Manipulation](#dom)<br/>
* [Classes](#classes)<br/>
<br/>

#
<h2 align="center"><a name="objects">Objects & Composition</a></h2>
<br/>

```javascript

const employee = {
  name: 'Ted Thompson',
  job_title: 'Software Developer',
  age: 25,
  unresolved_tickets: 10,
  tickets_left: function() {
    console.log(`Tickets left: ${this.unresolved_tickets}`)
  }
};

// Destructuring assignment
const { name, age } = employee;
console.log(`${name} (${age})`)
const getJobTitle = ({ name, job_title }) => console.log(`${name} is a ${job_title}.`)
getJobTitle(employee)

// Calling the object method
employee.tickets_left()

// Delete property
delete employee.unresolved_tickets
console.log(employee.unresolved_tickets) // undefined

```

```javascript
// Nested Destructuring

const company = {
  name: 'Quick Build',
  employees: ['John', 'Jane', 'Sam', 'Suzanne'],
  departments: [
    { name: 'Engineering', director: 'John Jones' },
    { name: 'Finance', director: 'Jane Doe' }
  ],
  contacts: {
  	address: 'Baker Street 221B',
    phone: 111-222-3333
  }
}

const { contacts: {address} } = company; // Baker Street 221B
const [{name}] = company.departments; // Engineering
const { employees: [employeeName] } = company; // John

```

```javascript
// Function Library (This technique is often used to expose public API in a module)
const compareNumbers = {
  ascending: (a, b) => a - b;
  descending: (a, b) => b - a;
};

```

```javascript
// You can use an object instead of switch statement
// 'this' can be used in objects as reference to the parent object
```

```javascript
// Factory Function composes object without using this
function createRect(width, height) {

  const rect = { width, height };
  rect.getArea = (
    return rect.width * rect.height;
  };

  return rect;
}

```

```javascript
// For ... in
for (const key in obj) {
  console.log(`obj.${key} = ${obj[key]}`);
}

```

#

<h2 align="center"><a name="dom">DOM Manipulation</a></h2>

<p>The <b>Document Object Model</b> (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.<br/>

Find element:<br/>

```javascript
getElementById() // get by id
getElementsByClassName() // get by class
getElementsByTagName() // get by tag
querySelector() // any selector
```

Get or modify:
```javascript
createElement() // create
appendChild() // add a child element as last
prepend()  // add a child element as first
cloneNode() // clone
remove() // remove
removeChild() // remove child element from parent
getAttribute() // returns value of attributes of specified HTML element
setAttribute() // sets value of an attribute on the specified HTML element
removeAttribute() // remove the attribute with the specified name from an HTML element
hasAttribute() // returns true if the specified attribute exists, otherwise it returns false
```

<h3 align="center"><b>Properties</b></h3>

```javascript
innerHTML // returns and writes the HTML of a given element
textContent // reads and writes text
value // gets and sets value
classList // a read-only property that returns a collection of the class attributes of specified element
```

```javascript
parent
parentNode
children
firstElementChild // returns the first child node of an element
lastElementChild // returns the last child node of an element
nextElementSibling // returns the next node at the same node tree level
previousElementSibling // returns the previous node at the same node tree level
```

<h3 align="center"><b>BOM</b></h3>

<p>The BOM <b>(Browser Object Model)</b> consists of the objects <b>navigator, history, screen, location and document</b> which are children of window. In the document node is the DOM (Document Object Model), the document object model, which represents the contents of the page.</p>

#

<h2 align="center"><a name="classes">Classes</a></h2>
<br/>

```javascript
// Basic class with getters and setter

class Circle {
    constructor(radius) {
    this.radius = radius;
    }
    get diameter() {
    return (this.radius * 2);
    }
    set diameter(diameter) {
    this.radius = diameter / 2;
    }
    get area() {
    return (Math.PI * this.radius * this.radius);
    }
}

```

```javascript
// Class with a static method

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(pointA, pointB) {
	var xDiff = pointA.x - pointB.x;
    var yDiff = pointA.y - pointB.y;

	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  }

}

```

```javascript
// To make a private property readable/writable from any function, it's common to define getters/setters.

class Example {
    #privateField;
    constructor() { this.#privateField = 42 }
    get privateField() { return this.#privateField }
}

const instance = new Example()

console.log(instance.private); //42

```