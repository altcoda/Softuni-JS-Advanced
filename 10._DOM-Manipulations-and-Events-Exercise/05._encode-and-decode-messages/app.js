function encodeAndDecodeMessages() {

    let buttons = Array.from(document.querySelectorAll('main>div>button'));
    let [encodeTextArea, decodeTextArea] = document.querySelectorAll('main>div>textarea');

    const actions = {
        encode: (message) => message.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join(''),
        decode: (message) => message.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('')
    }

    buttons.forEach(btn => {
        if (btn.textContent.includes('Encode')) { 
            btn.addEventListener('click', encodeMessage);
        } else if (btn.textContent.includes('Decode')) {
            btn.addEventListener('click', decodeMessage);
        }
    })

    function encodeMessage() {
        let message = encodeTextArea.value;
        encodeTextArea.value = '';
        decodeTextArea.value = actions.encode(message);
    }

    function decodeMessage() {
        let message = decodeTextArea.value;
        decodeTextArea.value = actions.decode(message);
    }
    
}