//Convert string to object and load score from localStorage
const score = JSON.parse(localStorage.getItem("score")) || {
  //for when score become null
  win: 0,
  losses: 0,
  ties: 0,
};

document.querySelector('.js-auto-play')
  .addEventListener('click', () => {
    autoplay();
  });

let isAutoplay = false;
let intervalId;

function autoplay() {
  if (!isAutoplay) {
    //generate unique id for each interval
    intervalId = setInterval(() => {
      const moves = pickComputerMove();
      playGame(moves);
    }, 1300);
    isAutoplay = true;
  }
  else {
    clearInterval(intervalId);   //stop the autoplay
    isAutoplay = false;
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    resetScore();
  });


//playing using keyboard
document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    playGame('rock');
  } else if(event.key === 'p'){
    playGame('paper');
  } else if(event.key === 's'){
    playGame('scissors');
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === computerMove) {
    result = "TIE.";
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You WIN.";
  } else {
    result = "You LOSE";
  }

  // Update score based on the result
  if (result === "You WIN.") {
    score.win++;
  } else if (result === "You LOSE") {
    score.losses++;
  } else {
    score.ties++;
  }

  // Store the score in localStorage
  localStorage.setItem("score", JSON.stringify(score));

  //Show the result and moves in the webpage using DOM
  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-move").innerHTML = 
      `You
      <img src="handSigns/${playerMove}-emoji.png" class="move-icon">
      <img src="handSigns/${computerMove}-emoji.png" class="move-icon">
      Computer`;

  // Update the score display
  updateScoreEle();
}

function pickComputerMove() {
  const random = Math.random();
  const bias = Math.random(); // adds unpredictability

  if (random < 1 / 3 + bias * 0.1) {
    return "rock";
  } else if (random < 2 / 3 + bias * 0.1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Use DOM to update the score display
function updateScoreEle() {
  document.querySelector(".js-score")
    .innerHTML = `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
  score.win = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.removeItem('score');

    updateScoreEle();
}
