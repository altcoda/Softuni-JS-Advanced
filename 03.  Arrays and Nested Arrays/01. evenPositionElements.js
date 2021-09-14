function evenPosition(strings) {
    let arr = [];
    for (let i = 0; i < strings.length; i++) {
      if (i % 2 === 0) { arr.push(strings[i]) }
    }
    return arr.join(' ')
}
