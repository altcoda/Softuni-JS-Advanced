function mathOperations(num1, num2, operator) {

	const operations = {
  	'+' : () => {
    	return num1 + num2;
    },
  	'-' : () => {
    	return num1 - num2;
    },
  	'*' : () => {
    	return num1 * num2;
    },
  	'/' : () => {
    	return num1 / num2;
    },
  	'%' : () => {
    	return num1 % num2;
    },
  	'**' : () => {
    	return num1 ** num2;
    }
  }
  
  return operations[operator]()
  
}