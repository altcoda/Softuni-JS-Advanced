function storeCatalogue(products) {

    let catalogue = {}
  
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
  
    const sorted = Object.entries(catalogue).sort();
  
    for (let key in sorted) {
      const entries = Object.entries(sorted[key][1]);
      const sortedEntries = Array.from(entries).sort();
  
      const letter = sorted[key][0];
      console.log(letter)
      sortedEntries.map(entry => {
        const [name, price] = [...entry];
        console.log(`  ${name}: ${price}`)
      })
    }
}
