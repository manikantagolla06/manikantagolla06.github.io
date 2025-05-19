/*const customers = [
  { cart: "1234567890", pin: "1234", name: "John", balance: 0 },
  { cart: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];-*/
function Submit() {
  const number = document.getElementById('number').value;
  const pin = document.getElementById('pin').value;


  if (number === "1234567890" && pin === "1234") {
    document.getElementById('message').textContent = "Welcome Manikanta!";
  } else {
    document.getElementById('message').textContent = "Invalid number or pin.";
  }
}
