let decrease=document.getElementById("decrease");
let increase=document.getElementById("increase");
let reset=document.getElementById("reset");
let value=document.getElementById("value");

let count=0;

updateDisplay();

increase.addEventListener("click", ()=>{
    count++;
    updateDisplay();
});

decrease.addEventListener("click", ()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    value.innerHTML = count;
};