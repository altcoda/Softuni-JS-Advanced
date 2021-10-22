function cityTaxes(name, population, treasury) {
  return {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += Math.floor(this.population * this.taxRate);
    },
    applyGrowth(pct) {
      const increment = (pct / 100) * this.population;
      this.population = Math.floor(this.population + increment);
    },
    applyRecession(pct) {
      const decrement = (pct / 100) * this.treasury;
      this.treasury = Math.floor(this.treasury - decrement);
    }
  }
}
