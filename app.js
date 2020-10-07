// store variables
let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let clearBtn = document.querySelector('.clear-operator');
let equalBtn = document.querySelector('.equal-button');
let operators = document.querySelectorAll('.operator')


clearBtn.addEventListener('click', clearScreen());

let reuslt = '';


//render to screen
function displayScreen(){
  for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
      display.innerHTML += this.textContent;
      // store value
      result = e.target.value;
      return result;
      
    })
  }
  operate(result);
}

// calculate expressions
function operate(num1, num2, operator) {
  let equation;
  switch(operator) {
    case '+':
    equation = add(num1 + num2);
    break;
    case '-':
    equation = subtract(num1 - num2);
    break;
    case '*':
    equation = multiply(num1 * num2);
    break;
    case '/':
      if(num2 !== 0){
        equation = divde(a / b);
      } else {
        equation = 'Error!';
      }
    break;


  }
}




// create functions for operators
function addExpression(a, b) {
  //add
  let result = eval(a + b);
  return result;
   
};

function subtractExpression(a, b) {
  // subtract
  let result = eval(a + b);
  return result;
  
};

function multiplyExpression(a, b) {
  // multipy
  let result = eval(a * b);
  return result;
  
};

function divideExpression(a, b) {
  // divide
  if(b){
    return a / b
} else {
    return 'REALLY?';
}
  
};


function  clearScreen() {
  display.innerHTML = '';
}


// Initialize functions
displayScreen();