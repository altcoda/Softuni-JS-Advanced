function aggregateElements(els) {

  const sum = els.reduce((a, b) => Number(a) + Number(b));
  const sumInverseValues = els.reduce((a, b) => Number(a) + 1 / Number(b), 0);
  const concat = els.join('');

  console.log(sum)
  console.log(sumInverseValues)
  console.log(concat)

}
