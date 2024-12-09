let sound = document.querySelector('.btn');

function playSound (){
  let newSound = new Audio('https://www.soundjay.com/buttons/sounds/button-20.mp3');
  newSound.play();
}

sound.addEventListener('click', playSound);