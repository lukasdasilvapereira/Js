// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox
let username

document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myInput").value
    document.getElementById("myH1").textContent = `What is up ${username}?`
}
