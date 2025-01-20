// While Loop

let Loogedin = false
let username;
let password;

while (!Loogedin) {
    username = prompt("Enter your username:");
    password = prompt("Enter your password:");

    if(username === "myusername" && password === "mypassword") {
        Loogedin = true;
        console.log("Login successful!");
    }

    else {
        console.log("Invalid username or password")
    }
}