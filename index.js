let score = 0;
debugger;
prevValue = -1;

let scoreDisplay = document.querySelector("#score");
let mole = document.querySelectorAll(".hole");
// let randomNumber = Math.floor(Math.random()*9)
setInterval(function () {
  if (mole[prevValue]) {
    console.log(prevValue);
    mole[prevValue].classList.remove("mole");
  }
  let randomNumber = Math.floor(Math.random() * 9);
  mole[randomNumber].classList.add("mole");
  prevValue = randomNumber;
}, 1000);

let gameArea = document.querySelector("#whack-a-mole");
gameArea.addEventListener("click", function (clickEvent) {
  if (clickEvent.target.matches(".mole")) {
    console.log(clickEvent.target);
    clickEvent.target.classList.remove("mole");
    score++;
    scoreDisplay.innerHTML = score;
    //console.log(clickEvent.target);
  }
});
