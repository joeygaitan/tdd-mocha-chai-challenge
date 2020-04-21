const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

//added in chai-things for short hand of properties :)
chai.should();
chai.use(require('chai-things'));

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// ========================================================

it("should return the area of a 5 by 6 rectangle", function (){
  const area = utils.area(5,6)
  expect(area).to.be.a("number")
  expect(area).to.be.equal(30)
  
  const areaNegative = utils.area(-2, -4)
  expect(areaNegative).to.be.equal(false)
})

it("should return the perimeter of a 5 by 6 rectangle", function(){
  const perimeter = utils.perimeter(5,6)
  expect(perimeter).to.be.a("number")
  expect(perimeter).to.be.equal(22)

  const negativePerimeter = utils.perimeter(4,-6)
  expect(negativePerimeter).to.be.equal(false)
})

it("should return the are of a circle of radius 5", function () {
  const circleArea = utils.circleArea(5)
  expect(circleArea).to.be.a("number")
  expect(circleArea).to.be.equal(78.53981633974483)
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

it("Should create a new (object) Item with name and price", function () {
  const inventoryItem = utils.createItem('apple',0.99)

  expect(inventoryItem).to.be.a('object')
  expect(inventoryItem.name).to.be.a('string')
  expect(inventoryItem.price).to.be.a('number')
  expect(inventoryItem.quantity).to.be.a('number')
  
  expect(inventoryItem.name).to.be.equal('apple')
  expect(inventoryItem.price).to.be.equal(0.99)
  expect(inventoryItem.quantity).to.be.equal(1)

  //chai things == properties. Checks all properties are inside basically property
  
})

it("Should return an array containing all items in cart", function(){
  utils.addItemToShoppingCart('apple',0.99)
  utils.addItemToShoppingCart('peach',2.00,3)
  utils.addItemToShoppingCart('orange',1.50,8)

  expect(utils.shoppingCart.length).to.be.equal(3)

  utils.displayShoppingCart()

  utils.clearShoppingCart()
})

it("Should add a new item to the shopping cart", function () {
  const cartItem1 = utils.addItemToShoppingCart('apple',0.99)
  const cartItem2 = utils.addItemToShoppingCart('peach',2.00,3)
  const cartItem3 = utils.addItemToShoppingCart('orange',1.50,8)

  utils.shoppingCart.should.include.something.that.deep.equals(cartItem1)
  utils.shoppingCart.should.include.something.that.deep.equals(cartItem2)
  utils.shoppingCart.should.include.something.that.deep.equals(cartItem3)

  utils.clearShoppingCart()
})

it("Should return the number of items in the cart", function () {
  utils.addItemToShoppingCart('apple',0.99)
  utils.addItemToShoppingCart('peach',2.00,3)
  utils.addItemToShoppingCart('orange',1.50,8)

  const sumOfItems = utils.totalQuantityOfCartItems()

  expect(sumOfItems).to.be.a('number')
  expect(sumOfItems).to.be.equal(12)

  utils.clearShoppingCart()
})

it("Should remove items from cart", function () {
  utils.addItemToShoppingCart('apple',0.99)
  utils.addItemToShoppingCart('peach',2.00,3)
  utils.addItemToShoppingCart('orange',1.50,8)

  
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
