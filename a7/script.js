const add = (a, b) => {
    return a + b;
  };
  
  const subtract = (a, b) => {
    return a - b;
  };
  
  const multiply = (a, b) => {
    return a * b;
  };
  
  const divide = (a, b) => {
    return a / b;
  };
  
  const dispResult = () => {
    // resultDiv.style.display = "block"
    resultDiv.style.left = "70%";
  };
  
  const hideResult = () => {
    //  resultDiv.style.display = "none"
    resultDiv.style.left = "100%";
  };
  const calc = () => {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let r1 = add(n1, n2);
    let r2 = subtract(n1, n2);
    let r3 = multiply(n1, n2);
    let r4 = divide(n1, n2);
    dvAdd.innerHTML = "Addition: " + r1;
    dvSubtract.innerHTML = `Subtraction: ${r2}`;
    dvMultiply.innerHTML = `Multiplication: ${r3}`;
    dvDivide.innerHTML = `Division: ${r4}`;
  };