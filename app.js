let lowerNumber = document.querySelector(".lowerNumber"); 
let higherNumber =document.querySelector(".higherNumber"); 
let number = document.querySelector("#number"); 




higherNumber.addEventListener("click", increase); 
lowerNumber.addEventListener("click", decrease);

let count = 0;

function increase() {
    number.innerText = ++count
    if (count > 0) {
        number.style.color = "green"; 
    }
}

function decrease() {
    number.innerText = --count
    if (count < 0) {
        number.style.color = "red"; 
    }
}


