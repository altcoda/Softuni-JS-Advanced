function cityTaxes(name, population, treasury) {
    return {
      name,
      population,
      treasury,
      taxRate: 10,
      collectTaxes: function() {
        this.treasury += Math.floor(this.population * this.taxRate);
      },
      applyGrowth: function(pct) {
        const increment = (pct / 100) * this.population;
        this.population = Math.floor(this.population + increment);
      },
      applyRecession: function(pct) {
        const decrement = (pct / 100) * this.treasury;
        this.treasury = Math.floor(this.treasury - decrement);
      }
    }
}
