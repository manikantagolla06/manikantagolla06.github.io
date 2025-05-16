let fruits = [
  { id: 1, name: "Apple", price: 250 },
  { id: 2, name: "Orange", price: 100 },
  { id: 3, name: "Mango", price: 80 },
];

let totalPrice = fruits.reduce((sum, fruit) => sum + fruit.price, 0);

fruits.push({ id: 4, name: "Total", price: totalPrice });

fruits.forEach((element) => {
  console.log(element.price);
});
