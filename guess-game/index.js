let guess;
let attempts = 0;
let minnum = 1;
let maxnum = 100;
let answer = Math.floor(Math.random() * (maxnum - minnum) + 1);
let running = true;

while(running) {
   guess = window.prompt("Please type a number between 1 and 100")
   guess = Number(guess);

   if(isNaN(guess)) {
      window.alert("Please enter a number")
   }
   else if(guess < minnum || guess > maxnum) {
      window.alert("Please enter a number between 1 and 100")
   }

   else if(guess < answer) {
      window.alert("Too low. Try again")
      attempts++;
   }

   else if (guess > answer) {
      window.alert("Too high. Try again")
      attempts++;
   }

   else {
      window.alert(`Congratulations! You guessed the correct number in ${attempts} attempts`)
      running = false;
   }

}