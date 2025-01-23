// TEMPERATURE PROGRAM

const textbox = document.getElementById('MyText');
const fahrenheit = document.getElementById("toFahrenheit")
const celsius = document.getElementById("toCelsius")
const result = document.getElementById('Myp')
let temp;

function convert() {
     if(fahrenheit.checked) {
        temp = Number(textbox.value)
        temp = temp * 9/5 + 32
        result.textContent = temp + "F"
     }

     else if(celsius.checked) {
        temp = Number(textbox.value)
        temp = (temp - 32) * (5/9)
        result.textContent = temp + "C"
     }

     else {
        result.textContent = "Select a unit"
     }
}