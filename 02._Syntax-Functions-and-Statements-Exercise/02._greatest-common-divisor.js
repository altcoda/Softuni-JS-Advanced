function gcd(a,b) {
	while(b != 0) {
  	const temp = b;
    b = a % b;
    a = temp;
  }
  
  return a;
}