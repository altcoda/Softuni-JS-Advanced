function calorieObject(arr) {

	let caloriesPer100gr = {};
	for (let i = 0; i < arr.length; i++) {
	  const name = arr[i++];
	  const calories = Number(arr[i]);
	  caloriesPer100gr[name] = calories;
	}
  
	return caloriesPer100gr;
}
