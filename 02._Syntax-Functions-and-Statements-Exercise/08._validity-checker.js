function validityChecker(x1, y1, x2, y2) {

    const pointsToCompare = [
      [x1, y1, 0, 0],
      [x2, y2, 0, 0],
      [x1, y1, x2, y2]
    ]
  
    pointsToCompare.map(points => {
        const [x1, y1, x2, y2] = [...points];
        const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        const isValid = Number.isInteger(distance) ? 'valid' : 'invalid';
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`)
    })
  
}
