const readout = document.getElementById('readout');
const clear = document.getElementById('clear');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const point = document.getElementById('point');

const divide = document.getElementById('divide');
const times = document.getElementById('times');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const equals = document.getElementById('equals');

let total = 0
let currentCalc = ''

// Update readout
function updateReadout(e) {
  let value = e.path[0].innerHTML
  if (value == 'X') {
    value = '*';
  } else {
    
  }
  currentCalc = currentCalc + value
  
  readout.innerHTML = currentCalc;
}

// Calculate total and update readout
function calculateTotal() {
  total = eval(currentCalc);
  readout.innerHTML = currentCalc + ' = ' + total;
  currentCalc = ''
}

// Clear everything and reset readout
function clearEverything() {
  currentCalc = '';
  total = 0;
  readout.innerHTML = 0;
}

// Event listeners
one.addEventListener('click', updateReadout);
two.addEventListener('click', updateReadout);
three.addEventListener('click', updateReadout);
four.addEventListener('click', updateReadout);
five.addEventListener('click', updateReadout);
six.addEventListener('click', updateReadout);
seven.addEventListener('click', updateReadout);
eight.addEventListener('click', updateReadout);
nine.addEventListener('click', updateReadout);
zero.addEventListener('click', updateReadout);
point.addEventListener('click', updateReadout);

divide.addEventListener('click', updateReadout);
times.addEventListener('click', updateReadout);
plus.addEventListener('click', updateReadout);
minus.addEventListener('click', updateReadout);
equals.addEventListener('click', calculateTotal);

clear.addEventListener('click', clearEverything);