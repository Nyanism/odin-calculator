function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch(operator) {
    case "+":
      return add(num1,num2);
    
    case "-":
      return subtract(num1,num2);

    case "*":
      return multiply(num1,num2);

    case "/":
      return divide(num1,num2);
  }
}

function populate(num) {
  if(num === Infinity) {
    document.querySelector(".result-display").textContent = "Are you trying to destroy the world?"
    equation = {};
    storedValue = 0;
    return;
  } else {
    document.querySelector(".result-display").textContent = num;
  }
  storedValue = num;
}

let storedValue = 0;
const numberButtons = Array.from(document.querySelectorAll(".button-number"));
numberButtons.forEach(button => {
  let number = button.textContent;
  button.addEventListener("click", () => {
    if(storedValue === 0 ) {
      populate(number);
    } else {
      populate(storedValue += number);
    }
  });
})

let equation = {};
const operatorButtons = Array.from(document.querySelectorAll(".button-operator"));
operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    if(!("operator" in equation)) {
      equation.operator = button.textContent;
      equation.stored = storedValue;
      storedValue = 0;
    } else {
      equation.stored = operate(equation.operator, parseInt(equation.stored), parseInt(storedValue));
      equation.operator = button.textContent;
      populate(Math.round(equation.stored * 10000)/10000);
      storedValue = 0;
    }
    
  })
});

const equalsButton = document.querySelector(".button-equals");
equalsButton.addEventListener("click", () => {
  let result = operate(equation.operator, parseInt(equation.stored), parseInt(storedValue));
  if(result === undefined) {
    populate(0);
  } else {
    populate(Math.round(result * 10000)/10000);
  }
  equation = {};
  storedValue = 0;
});

const clearButton = document.querySelector(".button-clear");
clearButton.addEventListener("click", () => {
  equation = {};
  populate(0);
})