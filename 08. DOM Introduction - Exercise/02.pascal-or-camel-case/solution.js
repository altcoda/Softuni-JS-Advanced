function changeCasing() {
  const resultId = document.getElementById('result');
  let text = document.getElementById('text').value;

  switch(document.getElementById('naming-convention').value) {
    case 'Camel Case':
      resultId.textContent = text.split(' ')
      	.map((word, index) => index === 0 ? word.toLowerCase() : 
          word.charAt(0).toUpperCase() + word.toLowerCase().slice(1))
        .join('')
      break;
    case 'Pascal Case':
      resultId.textContent = text.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1))
        .join('');
      break;
    default:
      resultId.textContent = 'Error!';
      break;
  }
}
