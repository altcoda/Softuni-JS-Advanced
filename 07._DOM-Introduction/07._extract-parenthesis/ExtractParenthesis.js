function extract(id) {
    const re = /\([^)]+\)/g;
    const element = document.getElementById(id);
    const text = element.textContent.match(re).join('; ');

    return text;
}
