//connecting to API and requering datas from user's city

function popularUF () {
     const ufSelected =  document.querySelector('select[name=uf]');
    
     fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
     .then( res => res.json())
     .then(states => {
         for(const state of states){
             ufSelected.innerHTML += `<option value = "${state.id}">${state.nome}</option>`
         }
     }
     )};

     //function calling
     popularUF();

//-----------------------------------------------------------

 function cityByUF(event){

        const citySelected = document.querySelector('select[name=city]');
        const stateInput = document.querySelector('input[name=state');

        const ufValue = event.target.value;
        
        const indexOfSelectedState = event.target.selectedIndex;
        stateInput.value = event.target.options[indexOfSelectedState].text;

        const urlCity = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

        citySelected.innerHTML = "<option value>Selecione a cidade</option>";
        citySelected.disabled = true;


        fetch(urlCity).then( res => res.json())
        .then(cities => {
          

         for(const city of cities){
             citySelected.innerHTML += `<option value = "${city.nome}">${city.nome}</option>`

             citySelected.disabled = false;
         }
     })
 };


//-------------------------------------------------------------------


     document.querySelector('select[name=uf').addEventListener('change', cityByUF);


     const itemToSelect = document.querySelectorAll('.items-grid li');

     for(const item of itemToSelect){
         item.addEventListener("click", handleSelectedItem)
     }

     const colectedItems = document.querySelector('input[name=items]');

     let selectedItems = []
     //check for selected items. if == true, catch them


     function handleSelectedItem(event){

        const itemLi = event.target;

        itemLi.classList.toggle('selected');

         const itemId = itemLi.dataset.id;
         console.log('ITEM ID:', itemId)

         const alreadySelected = selectedItems.findIndex(item => {
             const itemFound = item == itemId;
             return itemFound });

             if(alreadySelected >= 0){
                 const filteredItems = selectedItems.filter(item => {
                     const itemIsDifferent = item != itemId;
                     return itemIsDifferent;
                 })

                 selectedItems = filteredItems
             }else{
                 selectedItems.push(itemId);
             }

             console.log('selectedItems', selectedItems)

             colectedItems.value = selectedItems;

             
     }