// COUNTER PROGRAM

const decrease = document.getElementById('dcr')
const increase = document.getElementById('icr')
const reset = document.getElementById('reset') 
const countla = document.getElementById('cnt')

let count = 0

increase.onclick = function() {
    count++
    countla.textContent = count
}

decrease.onclick = function() {
    count--
    countla.textContent = count
}

reset.onclick = function() {
    count = 0
    countla.textContent = count
}


