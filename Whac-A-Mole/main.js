let squares = document.querySelectorAll(".square");
let hitPosition;
let score = 0;
let scoreText = document.querySelector("#score");

let time = 10;
let timeLeft = document.querySelector("#time-left");

let timerId = null;
function randomSquare() {
  squares.forEach((elem) => {
    elem.classList.remove("mole");
  });
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  hitPosition = randomSquare.id;
  randomSquare.classList.add("mole");
}

function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}
moveMole();

squares.forEach((elem) => {
  elem.addEventListener("click", function () {
    if (elem.id == hitPosition) {
      score++;
      scoreText.innerHTML = score;
    }
  });
});

function countDown() {
  time--;
  timeLeft.innerHTML = time;
  if (time == 0) {
    clearInterval(countDownTimer);
    clearInterval(timerId);
    alert("your result is " + score);
  }
}
let countDownTimer = setInterval(countDown, 1000);
