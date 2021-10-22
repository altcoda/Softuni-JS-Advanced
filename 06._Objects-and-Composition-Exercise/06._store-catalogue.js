function storeCatalogue(products) {

  let catalogue = {}

  // Create a catalogue of products and prices
  products.forEach(info => {
    const [name, price] = info.split(' : ');
    const letter = name.charAt(0);
    if (!catalogue.hasOwnProperty(letter)) {
      catalogue[letter] = {};
      catalogue[letter][name] = Number(price);
    } else {
      catalogue[letter][name] = Number(price);
    }
  })

  const arr = [];
  arr.push(catalogue)

  // Sort outer layer alphabetically
  const sorted = Object.entries(catalogue).sort();

  for (let key in sorted) {
    const letter = sorted[key][0];
    console.log(letter)

    // Sort product names alphabetically and print by letter
    const entries = Object.entries(sorted[key][1]);
    const sortedEntries = Array.from(entries).sort();
    sortedEntries.map(entry => {
      const [name, price] = [...entry];
      console.log(`  ${name}: ${price}`)
    })
  }
}
