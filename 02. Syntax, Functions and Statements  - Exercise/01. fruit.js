function fruit(fruit, gr, pricePerKg) {
    const kg = gr / 1000;
    const money = kg * pricePerKg;
    return `I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`
}
