function carFactory(car) { // params give client requirements for a car

    let engines = [{
        small: {
          power: 90,
          volume: 1800
        }
      },
      {
        normal: {
          power: 120,
          volume: 2400
        }
      },
      {
        monster: {
          power: 200,
          volume: 3500
        }
      }
    ]
  
    // Sorted in case you wanted to add more engine options
    const sortedByPowerAsc = engines
      .sort((a, b) => Object.values(a)[0].power - Object.values(b)[0].power);
    const chosenEngine = sortedByPowerAsc
      .find(engine => Object.values(engine)[0].power >= car.power);
  
    // The size can only be an odd number
    const wheelsDiameter = car.wheelsize % 2 === 0 ? Number(car.wheelsize) - 1 : Number(car.wheelsize);
  
    return {
      model: car.model,
      engine: Object.values(chosenEngine)[0],
      carriage: {
        type: car.carriage,
        color: car.color
      },
      wheels: new Array(4).fill(wheelsDiameter)
    }
}
