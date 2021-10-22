function validate() {
    const inputField = document.getElementById('email');
    const validEmailRe = /(?<name>[a-z]+)(@{1})(?<domain>[a-z]+)(\.{1})(?<ext>[a-z]+)/;
    inputField.addEventListener('change', ({target}) => {
        if(validEmailRe.test(target.value)) {
            target.classList.remove('error');
        } else {
            target.classList.add('error');
        }
    })
}
