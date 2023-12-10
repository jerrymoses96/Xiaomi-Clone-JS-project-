const products = [
  {
    id: 0,
    image: "assests/images/img-5.png",
    title: "Xiaomi 12T Pro",
    price: 1200,
  },
  {
    id: 1,
    image: "assests/images/img-2.png",
    title: "Xiaomi TV pro",
    price: 1000,
  },
  {
    id: 2,
    image: "assests/images/img-3.webp",
    title: "Xiaomi Watch 2 Pro",
    price: 200,
  },
  {
    id: 3,
    image: "assests/images/img-4.webp",
    title: "Xiaomi Buds 2 Pro",
    price: 100,
  },
];

const cart = [];

function addToCart(product) {
  console.log(product);
  cart.push({ ...product });
  displayCart();
  //   console.log(cart);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cartItem");
  const totalElement = document.getElementById("total");
  const countElement = document.getElementById("count");

  countElement.innerHTML = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = "Your cart is empty";
    totalElement.innerHTML = "$ 0.00";
  } else {
    let total = 0;
    cartItems.innerHTML = cart
      .map((item, index) => {
        const { image, title, price } = item;
        total += price;
        totalElement.innerHTML = `$ ${total}.00`;

        return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='removeFromCart(${index})'></i>
                </div>`;
      })
      .join("");
  }
}

function initializeProducts() {
  const rootElement = document.getElementById("root");
  rootElement.innerHTML = products
    .map((product) => {
      const { image, title, price } = product;
      return `
            <div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                    <button onclick='addToCart(${JSON.stringify(
                      product
                    )})'>Add to cart</button>
                </div>
            </div>`;
    })
    .join("");
}

// Initialize the products
initializeProducts();
