// CALLBACK

sum(displayPage, 3 , 6 )

function sum(callback , x , y) {
    let result = x + y
    callback(result)
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result
}