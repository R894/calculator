var total;
var num;
var operator;

var nums = Array.from(document.getElementsByClassName("num"));
var operators = Array.from(document.getElementsByClassName("op"));
var display = document.getElementById("text");
var clearButton = document.getElementById("AC");
var equalsButton = document.getElementById("=");

function numClickHandler() {
  display.textContent += this.textContent;
}

function operatorClickHandler() {
  if (operator) {
    operate();
  }
  operator = this.textContent;
  num = parseFloat(display.textContent);
  display.textContent = "";
}

function operate() {
  var currentNum = parseFloat(display.textContent);
  switch (operator) {
    case "+":
      total = num + currentNum;
      break;
    case "-":
      total = num - currentNum;
      break;
    case "*":
      total = num * currentNum;
      break;
    case "/":
      total = num / currentNum;
      break;
  }
  display.textContent = total;
  num = total;
  operator = null;
}

function clearDisplay() {
  display.textContent = "";
}

function resetCalc() {
  clearDisplay();
  total = null;
  num = null;
  operator = null;
}

operators.forEach((element) => {
  element.addEventListener("click", operatorClickHandler);
});

nums.forEach((element) => {
  element.addEventListener("click", numClickHandler);
});

clearButton.addEventListener("click", resetCalc);
equalsButton.addEventListener("click", operate);