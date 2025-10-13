import { loadFromStorage, productsDisplay, addToCart, cart, saveCartBoxToStorage, cartQuantity } from "./productDisplay.js";

loadFromStorage()

let flashSaleProductBoxHTML = ''

productsDisplay.forEach((product) => {
  flashSaleProductBoxHTML += `
    <div class="product-image">
      <img src="${product.image}" alt="">

      <div class="share">
        <p>SHARE THIS PRODUCT</p>

        <div class="links">
          <a href="#">
          <img src="fontawesome-free-7.0.0-desktop/svgs/brands/facebook.svg" alt="" width="20px">
        </a>
        <a href="#">
          <img src="fontawesome-free-7.0.0-desktop/svgs/brands/x-twitter.svg" alt="" width="20px">
        </a>
        <a href="#">
          <img src="fontawesome-free-7.0.0-desktop/svgs/brands/whatsapp.svg" alt="" width="20px">
        </a>
        </div>
      </div>
    </div>

    <div class="product-details">

      <div class="product-name">
        <div class="store">
        <span>Official Store</span>
        <span>Non-Returnable</span>
        </div>

        <h2>${product.name}</h2>
      </div>

      <div class="product-price">
        <div class="price">
        <h3>₦${(product.price).toLocaleString('en-US')}</h3>
        <p>₦${(product.oldPrice).toLocaleString('en-US')}</p>
        <span>12%</span>
        </div>
        <p>In Stock</p>
        <div class="ratings">
          <img src="" alt="">
        </div>

        <button class="add-to-cart" data-id="${product.id}">
          Add to Cart
        </button>
      </div>

      <div class="promotion">
        <a href="#">
          Call 08034216705 to Place Your Order
        </a>
      </div>
    </div>
  `
});


function showAddedToCartPopup() {
  const popup = document.querySelector('.added-to-cart-display');
  const overlay = document.querySelector('.dim-overlay');
  overlay.style.display = 'block';
  popup.style.display = 'flex';
  setTimeout(() => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  }, 2000);
}


document.querySelector('.product-box')
  .innerHTML = flashSaleProductBoxHTML;


// Use event delegation for dynamically rendered buttons
document.querySelector('.product-box')
  .addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
      const productId = e.target.getAttribute('data-id');
      addToCart(productId);
      saveCartBoxToStorage();
      showAddedToCartPopup();
      // Optionally reload after a short delay if needed
    setTimeout(()=>{
      document.location.reload()
    }, 2000)
    }
    
    
  });

  const quantity = cartQuantity();
  document.querySelector('.cart-quantity-display').textContent = quantity

