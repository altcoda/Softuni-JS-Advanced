function furniture() {

  const table = document.querySelector('table.table tbody');
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  generateBtn.addEventListener('click', generate)
  buyBtn.addEventListener('click', buy)

  function createCell(nestedTag, props, content) {
    const cell = document.createElement('td');
    const nested = document.createElement(nestedTag);

    for(let prop in props) {
      nested[prop] = props[prop];
    }

    if(content) {
      nested.textContent = content;
    }

    cell.appendChild(nested);

    return cell;
  }

  function generate(e) {
    const data = JSON.parse(input.value);

    for(let item of data) {
      const row = document.createElement('tr');

      row.appendChild(createCell('img', {src: item.img}));
      row.appendChild(createCell('p', {}, item.name));
      row.appendChild(createCell('p', {}, item.price));
      row.appendChild(createCell('p', {}, item.decFactor));
      row.appendChild(createCell('input', {type: 'checkbox'}));

      table.appendChild(row);
    }

  }

  function buy(e) {
    const furniture = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(b => b.parentElement.parentElement)
    .map(r => ({
      name: r.children[1].textContent,
      price: Number(r.children[2].textContent),
      decFactor: Number(r.children[3].textContent)
    }))
    .reduce((acc, c, i, a) => {
      acc.names.push(c.name)
      acc.total += c.price;
      acc.decFactor += c.decFactor / a.length;
      return acc;
    }, { names: [], total: 0, decFactor: 0})

    const result = `Bought furniture: ${furniture.names.join(', ')}
Total price: ${furniture.total.toFixed(2)}
Average decoration factor: ${furniture.decFactor}`;

    output.value = result;
  }
  
}