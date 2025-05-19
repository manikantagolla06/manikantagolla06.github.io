const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

const cart = {};

const addToCart = (id) => {
  //insert id and quantity as 1 ie {1:1} if add button
  // on box 1 is clicked, then if add button on box 3 is clicked then
  //cart object should be {1:1,3:1}
  // write code here....
  if (!(id in cart)) {
    cart = { ...cart, [id]: 1 };
  } 
  // console.log(cart);
};

const increment = (id) => {
  cart[id] = cart[id] + 1;
  dispCart()
};

const decrement = (id) => {
  cart[id] = cart[id] - 1;
   dispCart()
};

const dispCart = () => {
  let str = "<h2>Cart</h2>";
  products.map((value) => {
    cart[value.id] &&
      (str += `<div>
      ${value.name}
      -${value.price}
      -<button onclick='decrement(${value.id})'>-</button>
      ${cart[value.id]}
      <button onclick='increment(${value.id})'>+</button>
      -${value.price * cart[value.id]}
     </div>
    `);
  });
  root.innerHTML = str;
};

const showProducts = () => {
  let str = "";
  products.map((value) => {
    str += `<div>
      <h3>${value.name}</h3>
      <h4>${value.price}</h4>
      <button onclick='addToCart(${value.id})'>Add to Cart</button>
     </div>
    `;
  });
  root.innerHTML = "<div class='row'>" + str + "</div>";
};