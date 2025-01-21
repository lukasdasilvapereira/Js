// Variable scopes = Local x global

let x = 3
// global

function function1() {
   let x = 1
   console.log(x)
}

function function2() {
   let x = 2
   console.log(x)
}

// local

function1()

// Vão dar prioridades para os locais primeiro pois eles estão sendo declarados dentro de uma função