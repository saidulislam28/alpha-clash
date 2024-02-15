// function play(){
//   // hide the home screen
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');
//   // console.log(homeSection);



//   // show the play ground
//   const playGroundSection = document.getElementById('play-ground');
//   playGroundSection.classList.remove('hidden');
//   console.log(playGroundSection);
// }


// capture keyboard key press 
function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;


// stop the game if pressed 'esc'
if(playerPressed == 'Escape'){
  gameOver();
}

  console.log('player pressed', playerPressed);

  // get the expected to press 
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);
  // checking mathed or not 
  if (playerPressed === expectedAlphabet) {
    console.log('you got point ');

    const currentScore = getTextElementValueById('current-score');

    const updatedScore = currentScore + 1;

    setTextElementValueById('current-score', updatedScore);










    //--------------------------------------------------------
    // // get the curret score 
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    // console.log(currentScore);

    // // increase score by +1
    // const newScore = currentScore + 1;

    // // show the updated score 
    // currentScoreElement.innerText = newScore;


    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {

    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }



    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // console.log('you lost a life');
    // // get the current life number 
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);

    // // reduse the life 
    // const newLife = currentLife - 1;

    // // disply the update life 
    // currentLifeElement.innerText = newLife;


  }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
  // generate random alphabate
  const alphabet = getRandomAlphabet();
  // console.log('your random', alphabet);
  // randomly alphabet in screen 
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

  // set background  color 
  setBackgroundColorById(alphabet);


}


function play() {
  // hide everything show only the playground 

  hideElementById('home-screen');
  hideElementById('final-score');

  showElementById('play-ground');
  // reset score and life 
  setTextElementValueById('current-life', 5);
  setTextElementValueById('current-score', 0);
  continueGame()
}



function gameOver() {
  hideElementById('play-ground');
  showElementById('final-score');
  // update final score 
  // 1. get the final score 
  const lastScore = getTextElementValueById('current-score');
  console.log(lastScore);
  setTextElementValueById('last-score', lastScore);

  // clear the last alphabet
  const currentAlphabet = getElementTextById('current-alphabet');
  removeBackgroundColorById(currentAlphabet)
}