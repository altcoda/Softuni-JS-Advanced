function addItem() {
    const button = document.querySelector('input[type="button"]');
    button.addEventListener('click', addItem)

    let newText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.value = newItemValue.value;
    option.textContent = newText.value;
    const menu = document.getElementById('menu');
    
    menu.add(option)

    newText.value = '';
    newItemValue.value = '';
}
