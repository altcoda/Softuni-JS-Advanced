function extractText() {
    let listItems = document.getElementById('items').getElementsByTagName('li');
    for(let i = 0; i < listItems.length; i++) {
        text = listItems[i].textContent;
        document.getElementById('result').textContent += text + '\n';
    }
}
