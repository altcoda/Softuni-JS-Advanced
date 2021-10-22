window.addEventListener('load', solve);

function solve() {
    document.querySelector('main>div').addEventListener('click', onClick)

    const inputs = {
        modelField: document.getElementById('model'),
        yearField: document.getElementById('year'),
        descriptionField: document.getElementById('description'),
        priceField: document.getElementById('price')
    }

    let furniture = document.getElementById('furniture-list');

    function onClick(e) {
        e.preventDefault();
        
        const model = inputs.modelField.value;
        const year = Number(inputs.yearField.value);
        const description = inputs.descriptionField.value;
        const price = Number(inputs.priceField.value);

        if(e.target.tagName === 'BUTTON' && e.target.id === 'add') {
            if(model !== '' && description !== '' && year > 0 && price > 0) {
            
                let tr = el('tr', 'info', {},
                    el('td', '', {}, model),
                    el('td', '', {}, price.toFixed(2)),
                    el('td', '', {}, 
                        el('button', 'moreBtn', {}, 'More Info'),
                        el('button', 'buyBtn', {}, 'Buy it'),
                    )
                );
    
                let hiddenTr = el('tr', 'hide', {}, 
                    el('td', '', {}, `Year: ${year}`),
                    el('td', '', {}, `Description: ${description}`)
                );

                hiddenTr.children[1].colSpan = 3;
                
                furniture.appendChild(tr);
                furniture.appendChild(hiddenTr);
                
                for(let k in inputs) { inputs[k].value = '' }
            }
        } else if (e.target.tagName === 'BUTTON' && e.target.className === 'moreBtn'){
            let hidden = e.target.parentElement.parentElement.nextElementSibling;
            if(e.target.textContent === 'More Info' && !hidden.hasOwnProperty('style')) {
                e.target.textContent = 'Less Info';
                hidden.style.display = 'contents';
            } else if(e.target.textContent == 'More Info') {
                e.target.textContent = 'Less Info';
                hidden.style.display = 'contents';
            } else {
                e.target.textContent = 'More Info';
                hidden.style.display = 'none'
            }
        } else if(e.target.tagName === 'BUTTON' && e.target.className === 'buyBtn') {
            let itemPrice = Number(e.target.parentElement.parentElement.children[1].textContent);
            let totalPriceTd = document.querySelector('td.total-price');
            let previousPrice = Number(totalPriceTd.textContent);
            totalPriceTd.textContent = (previousPrice + itemPrice).toFixed(2);

            let boughtItem = e.target.parentElement.parentElement;
            let boughtInfo = boughtItem.nextElementSibling;

            boughtItem.innerHTML = '';
            boughtInfo.innerHTML = '';
        }

    }

    
    // Create element function
    function el(type, className, attr, ...content) {
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

        if(className !== '') {
            element.classList.add(className)
        }

        return element
    }

}
