import { cartQuantity, productsDisplay, } from "./productDisplay.js"
import { saveToStorage } from "./productDisplay.js";
import { flashSaleProducts, topSaleProducts, productsCategory, awoof, getProducts } from "./productslist.js";

// -----DISPLAYING THE AWOOF HTML FROM JAVASCRIPT-----
let awoofHTML = ''

awoof.forEach((deal) => {

  awoofHTML +=`
    <a href="#">
      <div class="awoof-deals">
        <img src=${deal.image} alt="">
        <p>${deal.summary}</p>
      </div>
    </a>
  `
})

document.querySelector('.awoof-box').innerHTML = awoofHTML;

// -------DISPLAYING THE FLASH SALE PRODUCTS FROM JAVASCRIPT-----

let flashSaleProductsHTML = '';

flashSaleProducts.forEach((flashProduct) => {
  
  flashSaleProductsHTML += `
    <a href="product.html">
      <div class="products" data-id="${flashProduct.id}">
          <div class="image">
            <img src="${flashProduct.image}" alt="">
          </div>

          <div class="details">
            <h3>${flashProduct.name}</h3>
            <p>₦${(flashProduct.price).toLocaleString('en-US')}</p>
            <del>₦${(flashProduct.oldPrice).toLocaleString('en-US')}</del>
            <pre>${flashProduct.itemsLeft} items Left</pre>
            <input type="range">
          </div>
        </div>
    </a>
  `
  
});

document.querySelector('.flash-products')
  .innerHTML = flashSaleProductsHTML;


// -------DISPLAYING THE PRODUCTS CATEGORIES FROM JAVASCRIPT-----

let productsCategoryHTML ='';

productsCategory.forEach((category) => {
    productsCategoryHTML += `
    <a href="product.html">
      <div class="category">
        <img src="${category.image}" alt="">
        <p>${category.name}</p>
      </div>
    </a>
  `
})

document.querySelector('.products-categories')
  .innerHTML = productsCategoryHTML


// ------DISPLAYING THE TOP SALE PRODUCTS FROM JAVASCRIPT-----

let topSaleProductsHTML = '';

topSaleProducts.forEach((topProduct) => {
  topSaleProductsHTML += `
    <a href="product.html">
      <div class="products" data-id="${topProduct.id}">
          <div class="image">
            <img src="${topProduct.image}" alt="">
          </div>

          <div class="details">
            <h3>${topProduct.name}</h3>
            <p>₦${(topProduct.price).toLocaleString('en-US')}</p>
            <del>₦${(topProduct.oldPrice).toLocaleString('en-US')}</del>
          </div>
        </div>
    </a>
  `
})

document.querySelector('.top-sellers-products')
  .innerHTML = topSaleProductsHTML

    document.querySelectorAll('.products').forEach((product) => {
      product.addEventListener('click',() => {
       const productId = product.dataset.id
       
        const same = getProducts(productId)
        productsDisplay[0] = same
        saveToStorage()
      })
    })



// MAKING THE HOVER DISPLAY TO DISPLAY ON HOVER OF THE PRODUCT TYPES BUTTONS

document.querySelector('.appliances')
  .addEventListener('mouseover', () => {
        document.querySelector('.hover-display').style.display='block'; 
        document.querySelector('.swiper-box').style.display='none'

        document.querySelector('.hover-content').innerHTML = `<div class="small-appliances">
            <h3>SMALL APPLIANCES</h3>
            <a href="#">Irons & Steamers</a>
            <a href="#">Fans & Heaters</a>
            <a href="#">Air Conditioners</a>
            <a href="#">Vacuum Cleaners</a>
            <a href="#">Sewing Machines</a>
            <a href="#">Water Heaters</a>
            <a href="#">Air Coolers</a>
            <a href="#">Air Purifiers</a>
            <a href="#">Electric Cookers</a>
            <a href="#">Blenders & Mixers</a>
            <a href="#">Juicers & Extractors</a>
            <a href="#">Food Processors</a>
            <a href="#">Microwaves</a>
            <a href="#">Toasters & Grills</a>
            <a href="#">Kettles</a>
            <a href="#">Coffee Makers</a>
            <a href="#">Electric Cookers</a>
            <a href="#">Induction Cookers</a>
          </div>
          <div class="large-appliances">
            <h3>LARGE APPLIANCES</h3>
            <a href="#">Refrigerators & Freezers</a>
            <a href="#">Washing Machines</a>
            <a href="#">Dryers</a>
            <a href="#">Dishwashers</a>
            <a href="#">Cookers & Ovens</a>
            <a href="#">Hobs & Hoods</a>
            <a href="#">Water Dispensers</a>
            <a href="#">Solar Water Heaters</a>
          </div>
          `

  });

document.querySelector('.phones')
  .addEventListener('mouseover', () => {
        document.querySelector('.hover-display').style.display='block'; 
        document.querySelector('.swiper-box').style.display='none'

        document.querySelector('.hover-content').innerHTML = `
          <div class="mobile-phones">
            <h3>MOBILE PHONES</h3>
            <a href="#">Smartphones</a>
            <a href="#">Feature Phones</a>
            <a href="#">Refurbished Phones</a>
            <a href="#">Cordless Telephones</a>
            <a href="#">Dual-Sim Phones</a>
            <a href="#">Dual-Sim Phones</a>
            <a href="#">Basic Phones</a>
          </div>

          <div class="mobile-accessories">
            <h3>MOBILE ACCESSORIES</h3>
            <a href="#">Phone Cases & Covers</a>
            <a href="#">Screen Protectors</a>
            <a href="#">Power Banks</a>
            <a href="#">Chargers & Cables</a>
            <a href="#">Selfie Sticks & Tripods</a>
            <a href="#">Memory Cards</a>
            <a href="#">Smart Watches & Bands</a>
            <a href="#">Bluetooth Headsets</a>
            <a href="#">Car Accessories</a>
            <a href="#">Other Accessories</a>
          </div>

          <div class="tablets">
            <h3>TABLETS</h3>
            <a href="#">All Tablets</a>
            <a href="#">iPads</a>
            <a href="#">Android Tablets</a>
            <a href="#">Windows Tablets</a>
            <a href="#">E-Readers</a>
            <a href="#">Tablet Accessories</a>
          </div>
        `
  });

document.querySelector('.health')
  .addEventListener('mouseover', () => {
        document.querySelector('.hover-display').style.display='block'; 
        document.querySelector('.swiper-box').style.display='none'

        document.querySelector('.hover-content').innerHTML = `
          <div class="make-up">
            <h3>MAKE UP</h3>
            <a href="#">Lipstick</a>
            <a href="#">Foundation</a>
            <a href="#">Eyeliner</a>
            <a href="#">Mascara</a>
            <a href="#">Nail Polish</a>
            <a href="#">Blush</a>
            <a href="#">Concealers</a>
          </div>

          <div class="personal-care">
            <h3>PERSONAL CARE</h3>
            <a href="#">Sunscreen and Training Products</a>
            <a href="#">Contraceptives & Lubricants</a>
            <a href="#">Piercing & Tattoo Supplies</a>
            <a href="#">Deodorants & Antiperspirants</a>
            <a href="#">Lip Care</a>
          </div>

          <div class="healthcare">
            <h3>PERSONAL CARE</h3>
            <a href="#">First Aid</a>
            <a href="#">Medical Supplies & Equipment</a>
            <a href="#">Alternative Medicine</a>
            <a href="#">Feminine Care</a>
            <a href="#">Diabetes Care</a>
          </div>

        `
  });

document.querySelector('.home')
  .addEventListener('mouseover', () => {
        document.querySelector('.hover-display').style.display='block'; 
        document.querySelector('.swiper-box').style.display='none'
  });

document.querySelector('.electronics')
  .addEventListener('mouseover', () => {
        document.querySelector('.hover-display').style.display='block'; 
        document.querySelector('.swiper-box').style.display='none'
  });

document.querySelector('.fashion')
  .addEventListener('mouseover', () => {
        document.querySelector('.hover-display').style.display='block'; 
        document.querySelector('.swiper-box').style.display='none'
  });

document.querySelector('.supermarket')
  .addEventListener('mouseover', () => {
        document.querySelector('.hover-display').style.display='block'; 
        document.querySelector('.swiper-box').style.display='none'
  });

document.querySelector('.computing')
  .addEventListener('mouseover', () => {
        document.querySelector('.hover-display').style.display='block'; 
        document.querySelector('.swiper-box').style.display='none'
  });

document.querySelector('.baby')
  .addEventListener('mouseover', () => {
        document.querySelector('.hover-display').style.display='block'; 
        document.querySelector('.swiper-box').style.display='none'
  });

document.querySelector('.gaming')
  .addEventListener('mouseover', () => {
        document.querySelector('.hover-display').style.display='block'; 
        document.querySelector('.swiper-box').style.display='none'
  });

document.querySelector('.music')
  .addEventListener('mouseover', () => {
        document.querySelector('.hover-display').style.display='block'; 
        document.querySelector('.swiper-box').style.display='none'
  });

document.querySelector('.others')
  .addEventListener('mouseover', () => {
        document.querySelector('.hover-display').style.display='block'; 
        document.querySelector('.swiper-box').style.display='none'
  });

document.querySelector('.product-types') 
  .addEventListener('mouseleave', () => {
        document.querySelector('.hover-display').style.display='none'; 
        document.querySelector('.swiper-box').style.display='block'
    
  })


const quantity = cartQuantity();
document.querySelector('.cart-quantity-display').textContent = quantity