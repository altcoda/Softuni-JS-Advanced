function squareOfStars(num = 5) {
    const symbol = '*';
    for (let i = 0; i < num; i++) {
      console.log((symbol + ' ').repeat(num).trimRight())
    }
}
