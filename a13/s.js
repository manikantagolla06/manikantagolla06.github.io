const products = [
  { id: 1, name: "Product1", price: 34 },
  { id: 2, name: "Product2", price: 56 },
  { id: 2, name: "Product3", price: 56 },
];

products.map(product => {
  console.log(product.name, product.price + 5);
});
let fruits = [
  { id: 1, name: "Apple", price: 250 },
  { id: 2, name: "Orange", price: 100 },
  { id: 3, name: "Mango", price: 80 },
];

fruits.forEach((element) => {
    element.price+=5;
  console.log(element.name+" "+element.price);
});


