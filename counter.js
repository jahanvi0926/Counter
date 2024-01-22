document.getElementById("incre").addEventListener("click",increment);
document.getElementById("decre").addEventListener("click",decrement);
document.getElementById("btn2").addEventListener("click",reset);
let cv =document.getElementById("display");
let counterValue=0;
function updateCounterDisplay(){
   cv.textContent = counterValue;
}
function increment(){
    counterValue++;
    updateCounterDisplay();
}
function decrement(){
    if(counterValue>0){
    counterValue--;
    updateCounterDisplay();
    }
}
function reset(){
   counterValue=0;
   updateCounterDisplay();
}