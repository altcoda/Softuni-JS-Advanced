function cookingByNumbers(num, ...operations) {

	const commands = {
  	chop: () => { num /= 2; },
    dice: () => { num = Math.sqrt(num, num); },
    spice: () => { num += 1; },
    bake: () => { num *= 3; },
    fillet: () => { num -= (20/100) * num; }
  }
  
  operations.map(i => { 
    commands[i]();
    console.log(num)
  })

}
