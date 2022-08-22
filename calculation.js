function calculateAmount(elementId){
    const currentTotalElement = document.getElementById(elementId);
    const currentTotalString = currentTotalElement.value;
    const currentTotalValue = parseFloat(currentTotalString);
    return currentTotalValue;

}



document.getElementById('calculate-btn').addEventListener('click',function(){
    const tableBody = document.getElementById("select-player");
    const selectedPlayer = tableBody.children.length;
    
    const perPlayerCost = calculateAmount('per-player-field');
    

    const totalExpenseOfPlayer = selectedPlayer * perPlayerCost;
    const totalPlayerExpense = document.getElementById('player-expense');
    totalPlayerExpense.innerText = totalExpenseOfPlayer;

   
})

document.getElementById('calculate-total').addEventListener('click',function(){
    const currentTotalElement = document.getElementById('player-expense');
    const currentTotalString = currentTotalElement.innerText;
    const costOfPlayer = parseFloat(currentTotalString);

    const coachAmount = calculateAmount('coach-field');
    const managerAmount = calculateAmount('manager-field');

    const totalExpense = costOfPlayer + coachAmount + managerAmount;

    const calculateTotalField = document.getElementById('final-cost');
    calculateTotalField.innerText = totalExpense;

})