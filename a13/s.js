const products = [
  { id: 1, name: "Product1", price: 34 },
  { id: 2, name: "Product2", price: 56 },
  { id: 2, name: "Product3", price: 56 },
];

products.map(product => {
  console.log(product.name, product.price + 5);
});
