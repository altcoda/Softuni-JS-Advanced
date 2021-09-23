function search() {

   const listItems = document.getElementById('towns').children;
   const inputValue = document.getElementById('searchText').value;

   let matches = 0;
   for(let i = 0; i < listItems.length; i++) {
      let text = listItems[i].textContent;
      listItems[i].outerHTML = `<li>${text}</li>`;
      if(text.includes(inputValue)) { 
         matches++; 
         listItems[i].outerHTML = `<li><u><bold>${text}</bold></u></li>`;
      }
      console.log(listItems[i].outerHTML)
   }
   
   document.getElementById('result').textContent = `${matches} matches found`;
}
