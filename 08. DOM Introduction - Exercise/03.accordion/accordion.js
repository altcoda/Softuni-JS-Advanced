function toggle() {
    const button = document.querySelector('.head .button');
    button.textContent = button.textContent === 'More' ? 'Less' : 'More';

    const hiddenBox = document.getElementById('extra');
    if(hiddenBox.style.display === 'none') {
        hiddenBox.style.display = 'block';
    } else {
        hiddenBox.style.display = 'none';
    }
}
