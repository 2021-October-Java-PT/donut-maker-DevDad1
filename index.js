// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("modalBtn");


// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


class Donut {
    
  constructor(donutCount, autoClickerCount) {
      this.donutCount = donutCount;
      this.autoClickerCount = autoClickerCount;
  }
  
  click() {
      this.donutCount += 1; 
  }
  
  
    
  
  purchaseAutoClicker() {
    if (this.autoClickerCount === 0) { 
    this.donutCount -=100;
    } else if(this.autoClickerCount === 1){
     this.donutCount -=110;
    } else if(this.autoClickerCount === 2){
      this.donutCount -= 121;
    } else{
      this.donutCount -= 133;
    }
    this.autoClickerCount +=1;
  }
  

  
      
  }
  
export default Donut;

