// SPREAD => ... O spread serve para separar elementos ou juntar eles


let numbers = [1 , 2 , 3 , 4 , 5 , 6]

let max = Math.max(...numbers)
let min = Math.min(...numbers)

console.log(max)
console.log(min)

let fruits = ["apple", "orange", "coconut"]
let vegetables = ["carrots", "potatoes", "celery"]

let foods = [...fruits, ...vegetables, "eggs", "milk"]

console.log(foods)