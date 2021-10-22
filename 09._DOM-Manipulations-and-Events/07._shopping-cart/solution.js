function solve() {

   const cart = [];
   const output = document.querySelector('textarea');
   output.value = '';

   document.querySelector('.shopping-cart').addEventListener('click', (e) => {
      if(e.target.tagName === 'BUTTON' && e.target.classList.contains('add-product')) {
         const product = e.target.parentNode.parentNode;
         const name = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({
            name,
            price
         })

         output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      }
   })

   document.querySelector('.checkout').addEventListener('click', (e) => {
      const buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(btn => btn.disabled = true )
      const products = new Set();
      cart.forEach(p => products.add(p.name));

      const total = cart.reduce((total,current) => total + current.price, 0);

      output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`
   })
}
