function addItem() {

    // Extend the previous problem to display a [Delete] link after each list item
    // Clicking it, should delete the item with no confirmation.
    // You have to add href="#" to the link element.

    const items = document.getElementById('items');

    const newItem = document.createElement('li');
    newItem.textContent = document.getElementById('newItemText').value;

    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
    newItem.appendChild(deleteBtn)

    items.appendChild(newItem)
}
