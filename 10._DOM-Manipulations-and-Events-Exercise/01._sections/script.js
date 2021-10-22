function create(words) {
  let content = document.getElementById('content');
  [...words].forEach(word => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = word;
    p.style.display = 'none';
    div.appendChild(p);
    div.addEventListener('click', onClick);
    content.appendChild(div);
  })

  function onClick(e) {
    const divChildren = e.currentTarget;
    const text = divChildren.querySelectorAll('p');
    [...text].forEach(p => p.style.display = '');
  }
}
