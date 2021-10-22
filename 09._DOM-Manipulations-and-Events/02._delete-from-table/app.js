function deleteByEmail() {

    const table = document.getElementById('customers');
    const rows = Array.from(table.querySelectorAll('tbody>tr'));
    const input = document.querySelector('label input').value;

    let entryFound = false;
    rows.forEach(row => {
        const emailCell = row.querySelectorAll('td')[1];
        const email = emailCell.textContent;
        if(email === input) {
            entryFound = true;
            row.remove()
        }
    })

    let output = document.getElementById('result');
    if(entryFound) {
        output.textContent = 'Deleted.';
    } else {
        output.textContent = 'Not found.';
    }
}
