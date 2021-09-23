function searchTable() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
 
   function onClick() {
     const inputValue = document.getElementById('searchField').value;
     const tData = document.querySelector('.container tbody').children;

     // Loop through table rows
     for (let i = 0; i < tData.length; i++) {
       const tr = tData[i];
       tr.classList.remove('select');

       // Loop through cells in rows and add class select if included in search
       const td = Array.from(tr.children);
       td.forEach(el => {
         if (el.textContent.includes(inputValue)) {
           tr.classList.add('select')
         }
       })
     }
     // Clear search field
     document.getElementById('searchField').value = '';
   }
}
