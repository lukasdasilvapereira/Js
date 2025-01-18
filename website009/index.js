// String slicing = creating a substring from a portion of a string

// string.slice(start, end)

const email = "lucas@gmail.com"

let username = email.slice(0, email.indexOf("@"))

let extension = email.slice(email.indexOf("s") + 1)

console.log(username)

console.log(extension)

