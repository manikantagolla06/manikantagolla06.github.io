let fruits = [
  { id: 1, name: "Apple", price: 250 },
  { id: 2, name: "Orange", price: 100 },
  { id: 3, name: "Mango", price: 80 },
];

fruits.forEach((element) => {
    element.price+=5;
  console.log(element.name+" "+element.price);
});