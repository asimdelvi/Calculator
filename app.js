const inputButton = document.querySelectorAll('.input');
const equalButton = document.querySelector('#equal');
const calculationDisplay = document.querySelector('#display');
const totalDisplay = document.querySelector('#total');
const allClear = document.querySelector('#AC');
const removeLast = document.querySelector('#removechar');

let total = '';

for (const button of inputButton) {
  button.addEventListener('click', (e) => {
    total += e.target.innerText;
    calculationDisplay.innerText = total;
  })
}

equalButton.addEventListener('click', () => {
  try {
    totalDisplay.innerText = eval(total);
  } catch (e) {
    totalDisplay.innerText = 'Syntax Error';
  }
})

allClear.addEventListener('click', () => {
  totalDisplay.innerText = '';
  calculationDisplay.innerText = '';
  total = '';
})

removeLast.addEventListener('click', () => {
  total = total.slice(0,-1);
  calculationDisplay.innerText = total;
})