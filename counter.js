let numContainer = document.getElementById("num");
let value = 0

function increase() {
    value++
    numContainer.innerHTML = value;
    console.log(value)
    if (value > 10) {
        document.getElementById("text").textContent = "You have cross 10 keep going"
    }  
}

function decrease() {
    value--
    numContainer.innerHTML = value;
    console.log(value)
    if (value < 11) {
        document.getElementById("text").textContent = ""
    }
}

function reset() {
    value = 0
    numContainer.innerHTML = value;
    console.log(value)
    document.getElementById("text").textContent = ""
}

