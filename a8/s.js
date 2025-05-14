function getValues() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return [num1, num2];
  }
  
  function add() {
    const [a, b] = getValues();
    document.getElementById("result").innerText = "Addition: " + (a + b);
  }
  
  function subtract() {
    const [a, b] = getValues();
    document.getElementById("result").innerText = "Subtraction: " + (a - b);
  }
  
  function multiply() {
    const [a, b] = getValues();
    document.getElementById("result").innerText = "Multiplication: " + (a * b);
  }
  
  function divide() {
    const [a, b] = getValues();
    document.getElementById("result").innerText =
      b !== 0 ? "Division: " + (a / b) : "Cannot divide by zero";
  }
  