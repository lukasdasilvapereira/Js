function diceRoller() {
    const input = document.getElementById("numofDice").value 
    const result = document.getElementById("diceResult")
    const diceimages = document.getElementById("diceImages")
    let values = []
    let images = []

    for(let i = 0; i < input; i++) {
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value)
        images.push(`<img src="dice-images/Dice-${value}.png" alt="Dice ${value}"`)
    }

    result.textContent = `Dice: ${values.join(', ')}`
    diceimages.innerHTML = images.join("")
}