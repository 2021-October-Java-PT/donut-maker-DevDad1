import Donut from "./DonutMaker.js";

var btn = document.querySelectorAll("button.modal-button");
var modals = document.querySelectorAll(".modal");
var spans = document.getElementsByClassName("close");

const autoNumber = document.querySelector("#autoNumber");
const autoPurchase = document.querySelector("#autoClickPurchase");
const autoPurchaseAmt = document.querySelector("#autoPurchaseAmt");
const clicked = document.querySelector("#click");
const clickValue = document.querySelector("#click-value");
const donuts = document.querySelector("#donuts");
const donutsMade = document.querySelector("#donutCountNum");
const multiNumber = document.querySelector("#multiNumber");
const multiPurchase = document.querySelector("#multiplierPurchase");
const multiPurchaseAmt = document.querySelector("#multiPurchaseAmt");
const reset = document.querySelector("#reset");

const donut = new Donut(0, 0, 0, 10, 100, 1);

renderPage();

function renderPage() {
  checkDonut();
  greyAuto();
  greyMulti();
  update();
}

setInterval(() => {
  donut.enableAutoClickers();
  update();
}, 1000);

function checkDonut() {
  if (donut.clickIncrease <= 1){
    donuts.innerText = 'donut';
  } else {
    donuts.innerText = "donuts"
  }
}

function greyAuto() {
  if (donut.donutCount <= donut.autoClickerVar) {
    autoPurchase.style.color = "grey";
  } else {
    autoPurchase.style.color = "black";
  }
}

function greyMulti() {
  if (donut.donutCount <= donut.clickMultiplierVar) {
    multiPurchase.style.color = "grey";
  } else {
    multiPurchase.style.color = "black";
  }
}

function update() {
  autoNumber.innerText = donut.autoClickerCount.toFixed(2);
  multiNumber.innerText = donut.clickMultiplierCount.toFixed(2);
  clickValue.innerText = donut.clickIncrease.toFixed(2);
  donutsMade.innerText = donut.donutCount.toFixed(2);
  autoPurchaseAmt.innerText = donut.autoClickerVar.toFixed(2);
  multiPurchaseAmt.innerText = donut.clickMultiplierVar.toFixed(2);
  
  checkDonut();
  greyAuto();
  greyMulti();
}

autoPurchase.addEventListener("click", () => {
  donut.purchaseAutoClicker();
  update();
});

clicked.addEventListener("click", () => {
  donut.click();
  update();
});

multiPurchase.addEventListener("click", () => {
  donut.purchaseClickMultiplier();
  update();
});

reset.addEventListener("click", () => {
  donut.reset();
});

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  };
}

for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  };
}

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  }
};
