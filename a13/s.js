const items = [
  { name: "apple", price: 50, qty: 3, status: "pending" },
  { name: "banana", price: 30, qty: 5, status: "pending" },
  { name: "orange", price: 80, qty: 2, status: "pending" }
];
const updatedItems = items
  .filter(item => item.qty > 2)
  .map(item => ({
    name: item.name,
    price: item.price,
    qty: item.qty,
    total: item.price * item.qty
  }));

console.log(updatedItems);