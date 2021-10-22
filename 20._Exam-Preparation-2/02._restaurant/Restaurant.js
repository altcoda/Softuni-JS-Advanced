class Restaurant {
    constructor(budget) {
      this.budgetMoney = Number(budget);
      this.menu = {};
      this.stockProducts = {};
      this.history = [];
    }
  
    loadProducts(products) {
      for (let product of products) {
        let [name, quantity, totalPrice] = product.split(' ');
  
        quantity = Number(quantity);
        totalPrice = Number(totalPrice);
  
        if (totalPrice <= this.budgetMoney) {
          if (!this.stockProducts[name]) {
            this.stockProducts[name] = 0;
          }
          this.stockProducts[name] += quantity;
          this.budgetMoney -= totalPrice;
          this.history.push(`Successfully loaded ${quantity} ${name}`)
        } else {
          this.history.push(`There was not enough money to load ${quantity} ${name}`)
        }
      }
  
      return this.history.join('\n');
    }
  
    addToMenu(meal, neededProducts, price) {
  
      if (!this.menu[meal]) {
        this.menu[meal] = {
          products: {},
          price: Number(price)
        }
  
        for (let product of neededProducts) {
          let [name, quantity] = product.split(' ');
          quantity = Number(quantity);
          this.menu[meal].products[name] = quantity;
        }
  
        const mealCount = Object.keys(this.menu).length;
        if (mealCount === 1) {
          return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        } else {
          return `Great idea! Now with the ${meal} we have ${mealCount} meals in the menu, other ideas?`
        }
      } else {
        return `The ${meal} is already in the our menu, try something different.`
      }
    }
  
    showTheMenu() {
      if (Object.keys(this.menu).length === 0) {
        return 'Our menu is not ready yet, please come later...'
      } else {
        let output = [];
        for (let meal in this.menu) {
          output.push(`${meal} - $ ${this.menu[meal].price}`)
        }
        return output.join('\n')
      }
    }
  
    makeTheOrder(meal) {
      if (!this.menu[meal]) {
        return `There is not ${meal} yet in our menu, do you want to order something else?`
      } else {
        const neededProducts = this.menu[meal].products;
        const neededArr = Object.keys(this.menu[meal].products)
  
        for (let product in neededProducts) {
          if (!this.stockProducts[product] || this.stockProducts[product] < this.menu[meal].products[product]) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
          } else {
            neededArr.splice(neededArr.indexOf(product, 1))
          }
        }
  
        if (neededArr.length === 0) {
          for (let product in neededProducts) {
            this.stockProducts[product] -= neededProducts[product];
          }
  
          this.budgetMoney += this.menu[meal].price;
          return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        } else {
          return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
        }
      }
    }
}
