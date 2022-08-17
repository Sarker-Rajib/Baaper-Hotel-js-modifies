/**
 * 1. add event listener to the deposit button
 * 2. get deposit amount from input field ( and make it Number formate)
 * 3. clear the input field after getting value
 * 4. get the previous deposit amount
 * 5. calculate new deposit amount and set the total
*/

/**
   // step 1
   document.getElementById('btn-deposit').addEventListener('click', function(){
      // step 2 get input amount
      const depositInput = document.getElementById('deposit-input');
      const newDepositAmount = parseFloat(depositInput.value);
      
      // step 3
      depositInput.value = '';
      
      
      // step 4
      const depositTotalElement = document.getElementById('deposit-status');
      const previousDepositAmount = parseFloat(depositTotalElement.innerText);
      
      // step 5
      const newTotalDepositAmount = previousDepositAmount + newDepositAmount;
      depositTotalElement.innerText = newTotalDepositAmount;
   })
   */
  
  document.getElementById('btn-deposit').addEventListener('click', function(){
      // step 1
      const newDepositAmount = getInput('deposit-input');

      // step 2
      const previousDepositAmount = getStatus('deposit-status');

      // step 3
      const newTotalDepositAmount = previousDepositAmount + newDepositAmount;
      setAmount ('deposit-status', newTotalDepositAmount)

      // step 4 // get and set total balance amount
      const currentBalance = getStatus('balance');
      const NewBalance = currentBalance + newDepositAmount;

      setAmount ('balance', NewBalance);
   })
  
  