const computerNumber = Math.floor(Math.random() * 100);
console.log(computerNumber);

let attempt = 0;

document.querySelector('#check_Btn').addEventListener('click', () => {
  
   const inputNumber = document.querySelector('#input');
   const num = parseInt(inputNumber.value, 10);
   
   if (num) {
      attempt++;
      if (num < 1 || num > 100) {
         printResult('Out of range');
      }
      else {
         if (num < computerNumber) {
            printResult('low');
         } 
         else if (num > computerNumber) {
            printResult('high');
         } 
         else {
            printResult(`correct, attempt: ${attempt}`);
         }
      }
   
      inputNumber.value = '';
   }
   
});

const resultString = document.querySelector('#result');

function printResult(param) {
   resultString.innerHTML = '';
   resultString.textContent = param;
}