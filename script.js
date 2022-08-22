
const playerNameArray = [];
function displaySelectedV(players) {
    const tableBody = document.getElementById("select-player");

    if (players.length > 5) {
        alert("You can't add more players");
      return;

    }
    else {
        tableBody.innerHTML = '';
        for (let i = 0; i < players.length; i++) {

            const player = players[i];
            const tr = document.createElement('tr');

            tr.innerHTML = `  
            <th> ${i + 1} </th>
            
            <td>${player} </td>
            `

            tableBody.appendChild(tr);
          
        }
    }

}

function addToSelectedV(element){

    const playerName = element.parentNode.children[0].innerText;
    playerNameArray.push(playerName);
    displaySelectedV(playerNameArray);
    if(playerNameArray.length < 6){
      element.classList.add("disabled");
      return;
    }

    
   
}