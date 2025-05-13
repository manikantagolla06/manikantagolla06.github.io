function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    document.getElementById('addition').innerText = 'Addition: ' + (num1 + num2);
    document.getElementById('subtraction').innerText = 'Subtraction: ' + (num1 - num2);
    document.getElementById('multiplication').innerText = 'Multiplication: ' + (num1 * num2);
    document.getElementById('division').innerText = 'Division: ' + (num2 !== 0 ? (num1 / num2) : 'Cannot divide by zero');
  }
  