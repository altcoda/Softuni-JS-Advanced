function playingCards(face,suit) {

	const suits = {
  	S: '\u2660',
    H: '\u2665',
    D: '\u2666',
    C: '\u2663'
  }
  
  if(Object.keys(suits).includes(suit) === false) {
  	throw new Error('Invalid suit');
  }
  
  const validCardFaces = /^([2-9]|10|J|Q|K|A){1}$/;
  if(face.match(validCardFaces) === null || face === '') {
  	throw new Error('Error')
  }
  
  return {
  	face: face.toString(),
    suit: suits[suit],
    toString() {
    	return this.face + this.suit
    }
  }
}
