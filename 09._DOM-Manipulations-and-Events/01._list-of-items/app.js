function addItem() {
    const items = document.getElementById('items');
    const newItem = document.createElement('li');
    newItem.textContent = document.getElementById('newItemText').value;
    items.appendChild(newItem)
}
