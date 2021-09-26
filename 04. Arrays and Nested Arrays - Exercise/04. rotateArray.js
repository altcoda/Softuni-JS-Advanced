function rotateArray(arr,d) {
	for(let i = 1; i <= d; i++) {
  	arr.unshift(...arr.splice(arr.length - 1, 1))
  }
  
  return arr.join(' ')
}
