import { cart, saveCartBoxToStorage, remove, decrease, increase, cartQuantity } from './productDisplay.js';
import { getProducts } from './productslist.js';

function renderCartItems() {
  let cartItemsHTML = '';
  let itemPrice = 0;

  cart.forEach((cartItem) => {

    const CartItemId = cartItem.productId;
    const item = getProducts(CartItemId);

    itemPrice += (item.price) * cartItem.quantity

    cartItemsHTML += `
    <div class="item">
        <img src="${item.image}" alt="Product Image" height="80px" style="margin-right: 20px;">
        <div class="item-details">
          <h3>${item.name}</h3>
          <p>In Stock</p>
        </div>
        <div class="item-price">
          <p>₦${(item.price).toLocaleString('en-US')}</p>
          <div class="old-price">
            <p>₦${(item.oldPrice).toLocaleString('en-US')}</p>
            <div>-41%</div>
          </div>
        </div>
        <div class="item-quantity">
          <button class="remove" data-id="${cartItem.productId}">
            <img src="fontawesome-free-7.0.0-desktop/svgs-full/solid/trash-can.svg" alt="" width="20px">
            Remove
          </button>

          <div class="increase-quantity">
            <button class="decrease" data-id="${cartItem.productId}">-</button>
            <p>${cartItem.quantity}</p>
            <button class="increase" data-id="${cartItem.productId}">+</button>
          </div>
        </div>
      </div>
  `
  });

  document.querySelector('.cart-items')
    .innerHTML = cartItemsHTML;

  let quantity = cartQuantity();

  document.querySelector('.cart-quantity').textContent = `Cart(${quantity})`

  document.querySelector('.cart-quantity-display').textContent = quantity

  document.querySelector('.checkout-btn').textContent = `Checkout (${(itemPrice).toLocaleString('en-US')})`

};
renderCartItems();

// -------- MAKING THE INCREASE AND DECREASE BUTTONS INTERACTIVE


const decreaseButtons = document.querySelectorAll('.decrease');
decreaseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.id;
    decrease(productId);
    saveCartBoxToStorage();
    document.location.reload()
  });
});

const increaseButtons = document.querySelectorAll('.increase');
increaseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.id;
    increase(productId);
    saveCartBoxToStorage();
    document.location.reload()
  });
});

const removeButton = document.querySelectorAll('.remove')
removeButton.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.id;
    remove(productId);
    saveCartBoxToStorage()
    document.location.reload()
  })
});

// the null cart display
if (cart[0] === undefined) {
  document.querySelector('.null-cart').style.display = 'block'
} else {
  document.querySelector('.null-cart').style.display = 'none'
}



