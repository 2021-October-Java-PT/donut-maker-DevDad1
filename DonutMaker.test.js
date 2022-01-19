import Donut from "./DonutMaker.js";

describe("Donut", () => {

 
  test("does it return a donutCount", () => {
    const underTest = new Donut(2);
    expect(typeof underTest.donutCount).toMatch("number");
  });

  test("does it return a click", () => {
    const underTest = new Donut(0,0,0,10,100);
    underTest.click();
    expect(underTest.donutCount).toEqual(1);
  });

  test("does it return a autoClickerCount", () => {
    const underTest = new Donut(2, 2);
    expect(typeof underTest.autoClickerCount).toMatch("number");
  });

  test("does it add an autoClicker", () => {
    const underTest = new Donut(100, 0, 0, 10, 100);
    underTest.purchaseAutoClicker();
    expect(underTest.autoClickerCount).toEqual(1);
  });

  test("does it remove 100 donuts, and add an autoClicker", () => {
    const underTest = new Donut(100, 0, 0, 10, 100);
    underTest.purchaseAutoClicker();
    expect(underTest.autoClickerCount).toEqual(1);
    expect(underTest.donutCount).toEqual(0);
  });

  test("does it remove 110 donuts, and add an autoClicker", () => {
    const underTest = new Donut(110, 1, 0, 10, 110);
    underTest.purchaseAutoClicker();
    expect(underTest.autoClickerCount).toEqual(2);
    expect(underTest.donutCount).toEqual(0);
  });

  test("does it remove 121 donuts, and add an autoClicker", () => {
    const underTest = new Donut(121, 2, 0, 10, 121);
    underTest.purchaseAutoClicker();
    expect(underTest.autoClickerCount).toEqual(3);
    expect(underTest.donutCount).toEqual(0);
  });

  test("does it remove 133 donuts, and add an autoClicker", () => {
    const underTest = new Donut(133, 3, 0, 10, 133);
    underTest.purchaseAutoClicker();
    expect(underTest.autoClickerCount).toEqual(4);
    expect(underTest.donutCount).toEqual(0);
  });

  test("should not allow you to buy an autoClicker if you dont have enough donuts", () => {
    const underTest = new Donut(99, 0, 0, 10, 100);
    underTest.purchaseAutoClicker();
    expect(underTest.autoClickerCount).toEqual(0);
    expect(underTest.donutCount).toEqual(99);
  });

  test("should enable autoClickers", () => {
    const underTest = new Donut(100, 3,0,0);
    underTest.enableAutoClickers();
    expect(underTest.donutCount).toEqual(103);
  });

  test("does it return a clickMultiplierCount", () => {
    const underTest = new Donut(100, 2, 2);
    expect(typeof underTest.clickMultiplierCount).toMatch("number");
  });

  test("does it add an clickMultiplierCount", () => {
    const underTest = new Donut(10, 0, 0, 0);
    underTest.purchaseClickMultiplier();
    expect(underTest.clickMultiplierCount).toEqual(1);
  });

  test("does it remove 10 donuts, and add an clickMultiplierCount", () => {
    const underTest = new Donut(10, 0, 0, 10, 100);
    underTest.purchaseClickMultiplier();
    expect(underTest.clickMultiplierCount).toEqual(1);
    expect(underTest.donutCount).toEqual(0);
  });


  test("a second clickMultiplier should cost 10 percent more", () => {
    const underTest = new Donut(12, 0, 1, 10);
    underTest.purchaseClickMultiplier();
    expect(underTest.clickMultiplierCount).toEqual(2);
    expect(underTest.donutCount).toEqual(2);
  });

  test("each clickMultiplier should cost 10 percent more", () => {
    const underTest = new Donut(24, 0, 1, 11, 100);
    underTest.purchaseClickMultiplier();
    expect(underTest.clickMultiplierCount).toEqual(2);
    underTest.purchaseClickMultiplier();
    expect(underTest.clickMultiplierCount).toEqual(3);
    expect(underTest.donutCount).toEqual(0.8999999999999986);
  });

  test("clickMultiplierCount should not go up if there is not enough donuts", () => {
    const underTest = new Donut(9, 0, 0, 10, 100);
    underTest.purchaseClickMultiplier();
    expect(underTest.clickMultiplierCount).toEqual(0);
  });

  test("with 1 multiplier the count should increase by 1.2 times click", () => {
    const underTest = new Donut(0, 0, 1, 0);
    underTest.click();
    expect(underTest.donutCount).toEqual(1.2);
  });

  test("with 3 multiplier the count should increase by 1.728 times click", () => {
    const underTest = new Donut(11, 0, 2, 11, 100, 1.44);
    underTest.purchaseClickMultiplier();
    underTest.click();
    expect(underTest.donutCount).toEqual(1.7279999999999998);
  });

  test("should enable autoClickers and use multipliers", () => {
    const underTest = new Donut(100, 3,3,0);
    underTest.enableAutoClickers();
    expect(underTest.donutCount).toEqual(105.184);
  });


});
