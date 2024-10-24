let pointer = 0;
const colorList = ['crimson', 'red', 'orange', 'gold', 'yellow', 'limegreen', 'green', 'cyan', 'blue', 'navy', 'indigo', 'purple', 'black', 'grey', 'saddlebrown', 'white'];

function upperCase(str) {
  let upperCaseStr = str[0].toUpperCase() + str.slice(1, str.length);

  if (upperCaseStr == 'Limegreen') {
    return 'Lime';
  } else if (upperCaseStr == 'Saddlebrown') {
    return 'Brown';
  } else if (upperCaseStr == 'White') {
    return 'White';
  } else {
    return upperCaseStr;
  }
}

function addEventForBackground() {
  const body = document.querySelector('body');
  body.style.backgroundColor = colorList[pointer];
  body.style.transitionDuration = '0.25s';

  let textColor;

  if (pointer == 0 || pointer == 1 || pointer == 6 || pointer == 8 || pointer == 9 || pointer == 10 || pointer == 11 || pointer == 12 || pointer == 13 || pointer == 14) {
    textColor = 'white';
  }
  else if (pointer == 2 || pointer == 3 || pointer == 4 || pointer == 5 || pointer == 7 || pointer == 15) {
    textColor = 'black';  
  }
  document.querySelector('h1').style.color = textColor;
  document.querySelector('h4').style.color = textColor;
  document.querySelector('#currentColor').style.color = textColor;

  document.querySelector('#currentColor').textContent = 'Current Color: '+upperCase(colorList[pointer]);

  pointer++;
  if (pointer >= colorList.length) {
    pointer = 0;
  }
}

document.querySelector('.div > div > button').addEventListener('click', function () {addEventForBackground()});

document.querySelector('#random').addEventListener('click', function () {
  let randomNumber = Math.floor(Math.random() * colorList.length);
  while (randomNumber == pointer) {
    randomNumber = Math.floor(Math.random() * colorList.length);
  }
  pointer = randomNumber;
  
  addEventForBackground();
});

for (let i = 0; i <= colorList.length; i++) {
  document.querySelectorAll('.div > p > span')[i].addEventListener('click', function () {
    pointer = i;
    addEventForBackground();
  });
}
