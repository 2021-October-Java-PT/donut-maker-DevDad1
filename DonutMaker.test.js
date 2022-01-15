import Donut from "./DonutMaker.js";

describe("Donut", () => {
  test("does it return a donutCount", () => {
    const underTest = new Donut(2);
    expect(typeof underTest.donutCount).toMatch("number");
  });

  test("does it return a click", () => {
    const underTest = new Donut(0);
    underTest.click();
    expect(underTest.donutCount).toEqual(1);
  });

  test("does it return a autoClickerCount", () => {
    const underTest = new Donut(2, 2);
    expect(typeof underTest.autoClickerCount).toMatch("number");
  });

  test("does it add an autoClicker", () => {
    const underTest = new Donut(100, 0);
    underTest.purchaseAutoClicker();
    expect(underTest.autoClickerCount).toEqual(1);
  });

  test("does it remove 100 donuts, and add an autoClicker", () => {
    const underTest = new Donut(100, 0);
    underTest.purchaseAutoClicker();
    expect(underTest.autoClickerCount).toEqual(1);
    expect(underTest.donutCount).toEqual(0);
  });

  test("does it remove 110 donuts, and add an autoClicker", () => {
    const underTest = new Donut(110, 1);
    underTest.purchaseAutoClicker();
    expect(underTest.autoClickerCount).toEqual(2);
    expect(underTest.donutCount).toEqual(0);
  });

  test("does it remove 121 donuts, and add an autoClicker", () => {
    const underTest = new Donut(121, 2);
    underTest.purchaseAutoClicker();
    expect(underTest.autoClickerCount).toEqual(3);
    expect(underTest.donutCount).toEqual(0);
  });

  test("does it remove 133 donuts, and add an autoClicker", () => {
    const underTest = new Donut(133, 3);
    underTest.purchaseAutoClicker();
    expect(underTest.autoClickerCount).toEqual(4);
    expect(underTest.donutCount).toEqual(0);
  });

  test("should not allow you to buy an autoClicker if you dont have enough donuts", () => {
    const underTest = new Donut(99, 0);
    underTest.purchaseAutoClicker();
    expect(underTest.autoClickerCount).toEqual(0);
    expect(underTest.donutCount).toEqual(99);
  });

  test("should enable autoClickers", () => {
    const underTest = new Donut(100, 3);
    underTest.enableAutoClickers();
    expect(underTest.donutCount).toEqual(103);
  });

  test("does it return a clickMultiplierCount", () => {
    const underTest = new Donut(100, 2, 2);
    expect(typeof underTest.clickMultiplierCount).toMatch("number");
  });

  test("does it add an clickMultiplierCount", () => {
    const underTest = new Donut(10, 0, 0);
    underTest.purchaseClickMultiplier();
    expect(underTest.clickMultiplierCount).toEqual(1);
  });

  test("does it remove 10 donuts, and add an clickMultiplierCount", () => {
    const underTest = new Donut(10, 0, 0);
    underTest.purchaseClickMultiplier();
    expect(underTest.clickMultiplierCount).toEqual(1);
    expect(underTest.donutCount).toEqual(0);
  });
});
//
//
//
//
//Feature 1
// Can add to donut count.
// Can retrieve a donut count.
// FEATURE 2 : Be able to purchase the first Auto Clicker with 100 donuts from your donut count.
// As a user, I want to be able to purchase Auto Clickers, so that I don't have to keep clicking a button all day.

// Can retrieve an Auto Clicker count.
// Can add to the Auto Clicker count.
// Subtract the Auto Clicker cost from your donut count.
// FEATURE 3 : The cost of each Auto Clicker will go up with each purchase.
// As a game designer, I want the game to become more difficult as the game progresses, so that users will continue to play the game.

// Increase the cost of the second Auto Clicker by an additional ten percent.
// Increase the cost of every additional Auto Clicker by an additional ten percent.
// FEATURE 4 : Ensure that there are enough clicks to buy a Auto Clicker.
// As the game designer, I want to ensure that players have to put the game into a proper state to be able to purchase a Auto Clicker, so that the game has a challenge.

// Prevent the Auto Clicker count from going up if there are not enough clicks to purchase a Auto Clicker.
// FEATURE 5 : The amount of Auto Clickers affect the amount of donuts added when an 'Activate Auto Clickers' event is called.
// As a user, I want to be able to purchase Auto Clickers, so that I don't have to keep clicking a button all day.

// When the 'activate Auto Clickers' event is executed, increase the donut total by the amount of Auto Clickers owned.
