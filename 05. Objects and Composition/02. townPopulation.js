function townPopulation(towns) {
    let townRecords = {}
    towns.forEach(town => {
      const [name, population] = town.split(' <-> ');
      if (townRecords.hasOwnProperty(name)) {
        townRecords[name].population += Number(population);
      } else {
        townRecords[name] = {
          population: Number(population)
        }
      }
    })
  
    for (let town in townRecords) {
      console.log(`${town} : ${townRecords[town].population}`)
    }
}
