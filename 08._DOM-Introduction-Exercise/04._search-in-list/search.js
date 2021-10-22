function search() {

   const listItems = document.getElementById('towns').children;
   const inputValue = document.getElementById('searchText').value;

   let matches = 0;
   for(let i = 0; i < listItems.length; i++) {
      const li = listItems[i];
      li.style.fontWeight = '';
      li.style.textDecoration = '';

      if(li.textContent.includes(inputValue)) { 
         matches++;
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
      }
   }
   document.getElementById('result').textContent = `${matches} matches found`;
}
