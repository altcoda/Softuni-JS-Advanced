const element = document.getElementById('e1');

function editElement(element, target, replacement) {
    if(element) {
        console.log(element)
        const re = new RegExp(target, 'g');
        element.textContent = element.textContent.replace(re, replacement)
    }
}

editElement(element, '%insert name here%', 'site')