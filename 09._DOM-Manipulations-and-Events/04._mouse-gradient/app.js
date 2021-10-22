function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);
    const output = document.getElementById('result');

    function onMove(e) {
        const box = e.target;
        const offset = Math.floor(e.offsetX / box.clientWidth * 100);
        output.textContent = `${offset}%`;
    }
}
