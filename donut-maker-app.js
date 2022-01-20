import Donut from "./DonutMaker.js";

var btn = document.querySelectorAll("button.modal-button");
var modals = document.querySelectorAll(".modal");
var spans = document.getElementsByClassName("close");

const autoNumber = document.querySelector("#autoNumber");
const autoPurchase = document.querySelector("#autoClickPurchase");
const autoPurchaseAmt = document.querySelector("#autoPurchaseAmt");
const clicked = document.querySelector("#click");
const clickValue = document.querySelector("#click-value");
const donutsMade = document.querySelector("#donutCountNum");
const multiNumber = document.querySelector("#multiNumber");
const multiPurchase = document.querySelector("#multiplierPurchase");
const multiPurchaseAmt = document.querySelector("#multiPurchaseAmt");
const reset = document.querySelector("#reset");

const donut = new Donut(0, 0, 0, 10, 100, 1);

renderPage();

function renderPage() {
  greyMulti();
  greyAuto();
  update();
}

setInterval(() => {
  donut.enableAutoClickers();
  update();
}, 1000);

function greyMulti() {
  if (donut.donutCount <= donut.clickMultiplierVar) {
    multiPurchase.style.color = "grey";
  } else {
    multiPurchase.style.color = "black";
  }
}

function greyAuto() {
  if (donut.donutCount <= donut.autoClickerVar) {
    autoPurchase.style.color = "grey";
  } else {
    autoPurchase.style.color = "black";
  }
}

function update() {
  autoNumber.innerText = donut.autoClickerCount;
  multiNumber.innerText = donut.clickMultiplierCount;
  clickValue.innerText = donut.clickIncrease;
  donutsMade.innerText = donut.donutCount;
  autoPurchaseAmt.innerText = donut.autoClickerVar;
  multiPurchaseAmt.innerText = donut.clickMultiplierVar;

  greyAuto();
  greyMulti();
}

clicked.addEventListener("click", () => {
  donut.click();
  update();
});

multiPurchase.addEventListener("click", () => {
  donut.purchaseClickMultiplier();
  update();
});

autoPurchase.addEventListener("click", () => {
  donut.purchaseAutoClicker();
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
