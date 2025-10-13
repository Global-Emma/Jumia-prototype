export let productsDisplay;

export function saveToStorage() {
  localStorage.setItem('productsDisplay', JSON.stringify(productsDisplay))
}

export function saveCartBoxToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function loadCartBoxFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'))

}

export function loadFromStorage() {
  productsDisplay = JSON.parse(localStorage.getItem('productsDisplay'))

}


loadFromStorage()

if (!productsDisplay) {
  productsDisplay = [
    {
      productName: 'Baileys Original Irish Cream',
      price: '6,500',
      oldPrice: '7,500',
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/4108073/1.jpg?8614'
    }
  ]

}

export let cart;
loadCartBoxFromStorage()
if (!cart) {
  cart = []
}




export function addToCart(productId) {
  let sameItem;
  cart.forEach((cartItem) => {

    if (cartItem.productId === productId) {
      sameItem = cartItem;
    }

  });

  if (sameItem) {
    sameItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    })
  }
}

export function remove(productId) {
  let newCart = [];

  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i]
    if (productId !== cartItem.productId) {
      newCart.push(cartItem)
    }
  }
  return cart = newCart
}


export function decrease(productId) {
  let itemIndex;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      itemIndex = cartItem;
    }
  });
  if (itemIndex) {
    itemIndex.quantity -= 1;
  }

  if (itemIndex.quantity < 1) {
    remove(productId)
  }
  return itemIndex;
}

export function increase(productId) {
  let itemIndex;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      itemIndex = cartItem;
    }
  });
  if (itemIndex) {
    itemIndex.quantity += 1;
  }
  return itemIndex;
}

export const cartQuantity = () => {
  let quantity = 0

  cart.forEach((item) => {
    quantity += item.quantity
  })
  return quantity;

}

