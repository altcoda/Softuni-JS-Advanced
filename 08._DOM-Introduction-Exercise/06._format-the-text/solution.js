function formatText() {
  const sentences = document.getElementById('input').value.split('.').filter(el => el != '');
  let output = document.getElementById('output');
  output.innerHTML = ''; // clear output

  let paragraph = document.createElement('p');
  for(let i = 1; i <= sentences.length; i++) {
    let currentSentence = sentences[i - 1] + '.';
    paragraph.innerHTML += currentSentence;
    if(i % 3 === 0 || i === sentences.length) {
      output.appendChild(paragraph)
      paragraph = document.createElement('p');
    }
  }
}
