// IF CONDITIONS

const texto = document.getElementById('MyText')
const submit = document.getElementById('Mysubmit')
const elemento = document.getElementById('element')
let age

submit.onclick = function() {


   age = texto.value;
   age = Number(age)

   if(age == 0) {
    elemento.textContent = "You can not be 0 years old"
   }
   else if (age >= 100) {
    elemento.textContent = "You are Too old for this site"
   }
   else if (age < 0) {
    elemento.textContent = "You can not be a negative age"
   }
   else if (age >= 18) {
    elemento.textContent = "You are old enough to access this site"
   }
   else {
    elemento.textContent = "You are not old enough to access this site"
   }
}