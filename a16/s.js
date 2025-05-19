/*let users = [];

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
}*/
let users = [];

async function loadUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

loadUsers();

async function findUser() {
  const emailInput = document.getElementById("emailInput").value.trim().toLowerCase();
  const result = document.getElementById("result");

  
  if (users.length === 0) {
    result.textContent = "Loading user data, please try again...";
    result.style.color = "orange";
    return;
  }

  const user = users.find(u => u.email.toLowerCase() === emailInput);

  if (user) {
    result.textContent = "Name: " + user.name;
    result.style.color = "green";
  } else {
    result.textContent = "No user found with that email.";
    result.style.color = "red";
  }
}
