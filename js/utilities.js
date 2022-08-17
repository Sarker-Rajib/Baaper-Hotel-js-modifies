function getInput(inputId){
   const inputField = document.getElementById(inputId);
   const inputValueString = inputField.value;
   const inputValue = parseFloat(inputValueString);
   inputField.value = '';
   return inputValue;
}


function getStatus(elementId){
   const previousStatusElement = document.getElementById(elementId);
   const previousAmountString = previousStatusElement.innerText; 
   const previousAmount = parseFloat(previousAmountString);
   return previousAmount;
}


function setAmount (elementId, newValue){
   const textElement = document.getElementById(elementId);
   textElement.innerHTML = newValue;
}