class Donut {
  
  constructor(
    donutCount,
    autoClickerCount,
    clickMultiplierCount,
    clickMultiplierVar,
    autoClickerVar,
    clickIncrease
  ) {
    this.donutCount = donutCount;
    this.autoClickerCount = autoClickerCount;
    this.clickMultiplierCount = clickMultiplierCount;
    this.clickMultiplierVar = clickMultiplierVar;
    this.autoClickerVar = autoClickerVar;
    this.clickIncrease = clickIncrease;
  }

  click() {
    if (this.clickMultiplierCount === 0) {
      this.donutCount += 1;
    } else {
      this.donutCount += Math.pow(1.2, this.clickMultiplierCount);
    }
  }

 

  purchaseAutoClicker(){
    if (this.donutCount >= this.autoClickerVar) {
      { this.donutCount -= this.autoClickerVar;
        this.autoClickerVar = this.autoClickerVar * 1.1;
        this.autoClickerCount += 1;
      }
    }
  }

  enableAutoClickers() {
    if (this.autoClickerCount === 0) {
    } else if (this.clickMultiplierCount === 0 && this.autoClickerCount >= 1) {
      this.donutCount += this.autoClickerCount * 1;
    } else {
      this.donutCount +=
        Math.pow(1.2, this.clickMultiplierCount) * this.autoClickerCount;
    }
  }

  purchaseClickMultiplier() {
    if (this.donutCount >= this.clickMultiplierVar) {
        this.donutCount -= this.clickMultiplierVar;
        this.clickMultiplierVar = this.clickMultiplierVar * 1.1;
        this.clickMultiplierCount += 1;
        this.clickIncrease = this.clickIncrease * 1.2;
      }
    }

    reset() {
      this.donutCount = 0;
      this.autoClickerCount = 0;
      this.clickMultiplierCount = 0;
      this.clickMultiplierVar = 10;
      this.autoClickerVar = 100;
      this.clickIncrease = 1;
    }
    
  }

 


export default Donut;
