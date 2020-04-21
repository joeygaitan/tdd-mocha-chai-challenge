// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  if (w >= 1 && h >= 1) {
    return w * h
  } else {
    return false
  }
}

const perimeter = (w, h) => {
  if (w >= 1 && h >= 1) {
    return w + w + h + h
  } else {
    return false
  }
}

const circleArea = r => {
  return Math.PI * r * r
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

let shoppingCart = []
let storeInventory = []

const createItem = (name,price, quantity=1) => {
  
  //should return a JSON object for the item

  storeInventory.push({name, price, quantity})

  console.log(storeInventory)

  return {name, price, quantity}
}



const addItemToShoppingCart = item => {
  //should add it to shopping cart
  
  for (let i = 0;i < shoppingCart.length; i += 1) {
    if (shoppingCart[i].name == item.name) {
      shoppingCart[i].price = item.price
      shoppingCart[i].quantity += item.quantity
      return shoppingCart[i]
    }
  }
  shoppingCart.push(createItem(item))
  return shoppingCart[shoppingCart.length-1]
}

const displayShoppingCart = () => {
  if (shoppingCart.length == 0){
    return 'empty shopping cart please add items to shopping cart'
  } else {
    return shoppingCart
  }
}

const displayStoreInventory = () => {
  if (storeInventory.length == 0) {
    return 'no items inventory please contact administration for error or lack of shipments'
  } else {
    return storeInventory
  }
}

const numberOfItemsInCart = () => {
  if (shoppingCart.length == 0) {
    return 'empty shopping cart please add items to shopping cart'
  } else {
    let counter = 0
    for (let i = 0; i < shoppingCart.length;i += 1) {
      counter += shoppingCart[i].quantity
    }
    return counter
  }
}

const remoteItemFromCart = item => {
  if (shoppingCart.length == 0) {
    return 'empty shopping cart please add items to shopping cart'
  } else {
    for (let i = 0; i < shoppingCart.length; i += 1) {
      if (shoppingCart.name == item.name) {
        shoppingCart.splice(i, 1)
      }
    }
    return shoppingCart
  }
}

const totalCostOfCart = () => {
  if (shoppingCart.length == 0) {
    return 'empty shopping cart please add items to shopping cart'
  } else {
    let amount = 0
    for (let i = 0; i < shoppingCart.length; i += 1) {
      amount += shoppingCart[i].price * shoppingCart[i].quantity
      amount
    }
    amount = amount.toFixed(2)
    return amount
  }
}

const totalQuantityOfCartItems = () => {
  if (shoppingCart.length == 0) {
    return 'empty shopping cart please add items to shopping cart'
  } else {
    let amount = 0
    for (let i = 0; i < shoppingCart.length; i += 1) {
      amount += shoppingCart[i].quantity
    }
    return amount
  }
}

const clearShoppingCart = () => {
  if (shoppingCart.length == 0) {
    return 'empty shopping cart please add items to shopping cart'
  } else {
    shoppingCart.splice(0,shoppingCart.length)
    return 'cart empty'
  }
}

module.exports = { 
  sayHello, area, perimeter, circleArea, createItem, addItemToShoppingCart, shoppingCart, storeInventory, displayShoppingCart, displayStoreInventory, numberOfItemsInCart, remoteItemFromCart, totalCostOfCart, clearShoppingCart,totalQuantityOfCartItems
}
