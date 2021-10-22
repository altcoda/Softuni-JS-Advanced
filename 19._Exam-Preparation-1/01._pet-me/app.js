function app() {

    const container = document.getElementById('container');
    const addBtn = document.querySelector('#container button');
    const petList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');

    const input = {
        name: container.querySelector('input[placeholder="Name"]'),
        age: container.querySelector('input[placeholder="Age"]'),
        kind: container.querySelector('input[placeholder="Kind"]'),
        owner: container.querySelector('input[placeholder="Current Owner"]'),
    }

    addBtn.addEventListener('click', addPet)

    // Add a new pet
    // Read input fields
    // Validate values
    // Create new list item
    // Configure event listener for newly created element
    function addPet(e) {
        e.preventDefault();

        const name = input.name.value.trim();
        const age = Number(input.age.value.trim());
        const kind = input.kind.value.trim();
        const owner = input.owner.value.trim();

        // When you click the Add button if input is valid add a new pet
        if(name === '' || input.age.value === '' || Number.isNaN(age) || kind === '' || owner === '') { return; }

        const contactBtn = el('button', {}, 'Contact with owner');

        // Create a li element that contains a p with the name, age, and kind of the new pet.
        // The name, years and kind are in strong elements inside the paragraph.
        // After that, we have a span element with `Owner: {owner name}`, and a button [Contact with owner].

        const pet = el('li', {},
            el('p', {}, 
                el('strong', {}, name),
                ' is a ',
                el('strong', {}, age),
                ' year old ',
                el('strong', {}, kind)
            ),
            el('span', {}, `Owner: ${owner}`),
            contactBtn
        );

        contactBtn.addEventListener('click', contact);

        petList.appendChild(pet)

        // Clear input fields
        for(let k in input) { input[k].value = ''; }

        // Contact owner
        // Create confirmation div
        // Configure event listener for new button
        function contact() {
            const confirmInput = el('input', {placeholder: 'Enter your names'});
            const confirmBtn = el('button', {}, 'Yes! I take it!')
            const confirmDiv = el('div', {},
                confirmInput,
                confirmBtn
            );

            confirmBtn.addEventListener('click', adopt.bind(null, confirmInput, pet));

            // Replace existing button with confirmation div
            contactBtn.remove()
            pet.appendChild(confirmDiv)
        }
    }

    // When you click the button [Yes! I take it!],
    // if the name exists you should move the current list item to the adopted section.
    function adopt(input, pet) {
        const newOwner = input.value.trim();

        if(newOwner === '') { return; }

        const checkBtn = el('button', {}, 'Checked');
        checkBtn.addEventListener('click', check.bind(null, pet))

        pet.querySelector('div').remove();
        pet.appendChild(checkBtn);

        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;

        adoptedList.appendChild(pet);
    }

    // Check adopted pet
    // Remove element from DOM
    function check(pet) {
        pet.remove();
    }


    // Create element function
    function el(type, attr, ...content) {
        const element = document.createElement(type);

        for(let prop in attr) {
            element[prop] = attr[prop];
        }
        for(let item of content) {
            if(typeof item === 'string' || typeof item === 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item)
        }

        return element
    }

}
