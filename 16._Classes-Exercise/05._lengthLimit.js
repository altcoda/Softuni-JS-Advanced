class Stringer {
	constructor(string, length) {
  	this.innerString = string;
    this.innerLength = length;
  }
  
  increase(length) {
    this.innerLength += length;
  }
  
  decrease(length) {
  	if(this.innerLength - length < 0) { this.innerLength = 0; return; }
    this.innerLength -= length;
  }
  
  toString() {
  	return (this.innerString.length > this.innerLength ?
    	`${this.innerString.slice(0, this.innerLength)}...` :
      this.innerString.length === 0 ?
      '...' :
      this.innerString)
  }
}
