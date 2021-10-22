function focused() {
    Array.from(document.getElementsByTagName('input'))
    .forEach(input => {
        input.addEventListener('focus', (e) => {
            e.target.parentElement.className = 'focused';
        })
        input.addEventListener('blur', (e) => {
            e.target.parentElement.className = '';
        })
    })
}
