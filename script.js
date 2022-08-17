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
  previousDisplay = document.querySelector(".result-display").textContent;
  document.querySelector(".result-display").textContent = num;
  console.log(previousDisplay);
}

let previousDisplay = 0;
const numberButtons = Array.from(document.querySelectorAll(".button-number"));
numberButtons.forEach(button => {
  let number = button.textContent;
  button.addEventListener("click", () => populate(number));
})