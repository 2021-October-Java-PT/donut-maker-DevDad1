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
    const underTest = new Donut(10, 0, 0, 0);
    underTest.purchaseClickMultiplier();
    expect(underTest.clickMultiplierCount).toEqual(1);
  });

  test("does it remove 10 donuts, and add an clickMultiplierCount", () => {
    const underTest = new Donut(10, 0, 0, 0);
    underTest.purchaseClickMultiplier();
    expect(underTest.clickMultiplierCount).toEqual(1);
    expect(underTest.donutCount).toEqual(0);
  });

  test("should have clickMultiplierVar set to 10", () => {
    const underTest = new Donut(10, 0, 0, 0);
    expect(underTest.clickMultiplierVar).toEqual(0);
    underTest.purchaseClickMultiplier();
    expect(underTest.clickMultiplierVar).toEqual(10);
  });

  test("a second clickMultiplier should cost 10 percent more", () => {
    const underTest = new Donut(12, 0, 1, 10);
    underTest.purchaseClickMultiplier();
    expect(underTest.clickMultiplierCount).toEqual(2);
    expect(underTest.donutCount).toEqual(1);
  });

  test("each clickMultiplier should cost 10 percent more", () => {
    const underTest = new Donut(13, 0, 2, 11);
    underTest.purchaseClickMultiplier();
    expect(underTest.clickMultiplierCount).toEqual(3);
    expect(underTest.donutCount).toEqual(0.8999999999999986);
  });
});
