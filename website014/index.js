// FUNCTION

function soma(x, y) {
   return x + y
}

console.log(soma(4, 5))

function diminuir(x , y) {
   return x - y
}

console.log(diminuir(10, 5))

function multiplicar(x , y) {
   return x * y
}

console.log(multiplicar(3, 5))

function dividir(x , y) {
   return x / y
}

console.log(dividir(15, 5))

function isEven(x) {
   if(x % 2 === 0) {
      return true
   }
   else {
      return false
   }
}

console.log(isEven(2))

function isValidEmail(email) {
   if( email.includes("@")) {
      return true
   }
   else {
      return false
   }
}