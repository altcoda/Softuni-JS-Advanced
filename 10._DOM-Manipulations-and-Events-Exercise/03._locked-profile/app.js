function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(button => button.addEventListener('click', onToggle));

    function onToggle(e) {
        let profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if(isActive) {
            const infoDiv = Array
                .from(profile.querySelectorAll('div'))
                .find(div => div.id.includes('HiddenFields'));

            if(e.target.textContent == 'Show more') {
                infoDiv.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                infoDiv.style.display = '';
                e.target.textContent = 'Show more';
            }
        }
    }
}
