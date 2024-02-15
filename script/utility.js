function hideElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function showElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');

}
//  score and life 
function getTextElementValueById(elementId){
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;

}


function setTextElementValueById(elementId, value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}



function getRandomAlphabet(){
  // transer string to array 
  const alphabetString ='abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
 

  // get random index code for array total index 
  const randomNumber = Math.random()*25;
  const index = Math.round(randomNumber);
  console.log(index);
  const alphabet = alphabets[index];
  console.log(index, alphabet);
  return alphabet;

}


function setBackgroundColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
  
}
function removeBackgroundColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
  
}
