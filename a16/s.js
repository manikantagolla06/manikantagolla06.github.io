let users = [];

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => users = data)
  .catch(error => console.error("Error fetching data:", error));

function findUser() {
  const emailInput = document.getElementById("emailInput").value.trim().toLowerCase();
  const result = document.getElementById("result");

  const user = users.find(u => u.email.toLowerCase() === emailInput);

  if (user) {
    result.textContent = "Name: " + user.name;
    result.style.color = "green";
  } else {
    result.textContent = "No user found with that email.";
    result.style.color = "red";
  }
}