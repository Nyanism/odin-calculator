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
  document.querySelector(".result-display").textContent = num;
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
      populate(equation.stored);
      storedValue = 0;
    }
    
  })
});

const equalsButton = document.querySelector(".button-equals");
equalsButton.addEventListener("click", () => {
  let result = operate(equation.operator, parseInt(equation.stored), parseInt(storedValue));
  populate(result);
  equation = {};
  storedValue = 0;
});