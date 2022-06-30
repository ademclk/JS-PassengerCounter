// document.getElementById("count").innerText=0;

// initialize count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0
// Create a function that will increment the count variable by 1
function increment() {
    count += 1
    countEl.textContent = count
}
// Create a function that logs out the count variable
function save(){
    let temp = count + " - "
    saveEl.textContent += temp
    countEl.textContent = 0
    count = 0
}


