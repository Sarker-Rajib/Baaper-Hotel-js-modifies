document.getElementById('btn-withdraw').addEventListener('click', function(){
   // step 1
   const newWithdrawAmount = getInput('withdraw-input');

   // step 2
   const previousWithdrawAmount = getStatus('withdraw-status');

   // step 3
   const newTotalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
   setAmount ('withdraw-status', newTotalWithdrawAmount);

   // step 4 // get and set total balance amount
   const currentBalance = getStatus('balance');
   const NewBalance = currentBalance - newWithdrawAmount;

   setAmount ('balance', NewBalance);
})