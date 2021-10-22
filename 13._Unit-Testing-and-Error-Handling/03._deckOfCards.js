function createDeck(cards) {

  const createCard = (face, suit) => {

    const suits = {
      S: '\u2660',
      H: '\u2665',
      D: '\u2666',
      C: '\u2663'
    }

    const validCardFaces = /^([2-9]|10|J|Q|K|A){1}$/;

    if (Object.keys(suits).includes(suit) === false) {
      throw new Error('Invalid suit');
    }

    if (face.match(validCardFaces) === null || face === '') {
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

  console.log(
    cards.map(card => {
      const face = card.slice(0, -1);
      const suit = card.slice(-1);
      try {
        return createCard(face, suit)
      } catch (e) {
        return `Invalid card: ${face}${suit}`
      }
    }).join(' ')
  )
}
