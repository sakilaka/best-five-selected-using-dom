const playerNameArray = [];

function displaySelectedV(playerNameList){
    const tableBody = document.getElementById('players');
      
    tableBody.innerHTML = "";
    const selectedPlayerLength =  playerNameList.length;
   
    
    for(let i = 0; i < selectedPlayerLength; i++){
       const tr = document.createElement('tr');
      
       if(playerNameList.length < 6){
       
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${playerNameList[i]}</td>
        `
        tableBody.appendChild(tr);
      
        
        
      }
    
      else{
        
        alert('Dont add')

        return;

     }  
     
    }     
   
   
}

function addToSelectedV(element){

    const playerName = element.parentNode.children[0].innerText;
    playerNameArray.push(playerName);
    displaySelectedV(playerNameArray);
    element.classList.add("disabled");
   
}