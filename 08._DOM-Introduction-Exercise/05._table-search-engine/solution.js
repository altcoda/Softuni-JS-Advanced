function searchTable() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    const searchField = document.getElementById('searchField');
    const inputValue = searchField.value;
    const container = document.querySelector('.container');
    const tableRows = Array.from(container.querySelectorAll('tbody tr'));

    tableRows.forEach(tr => {
      const text = tr.textContent;
      if (text.includes(inputValue)) {
        tr.classList.add('select')
      } else {
        tr.classList.remove('select');
      }
    })
    // Clear search field
    searchField.value = '';
  }
}
