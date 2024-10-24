let pointer = 0;
const colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white'];

document.querySelector('.div > button').addEventListener('click', function () {
  const body = document.querySelector('body');
  body.style.backgroundColor = colorList[pointer];
  body.style.transitionDuration = '0.25s';

  if (pointer == 0 || pointer == 3 || pointer == 4 || pointer == 5 || pointer == 6) {
    document.querySelector('h1').style.color = 'white';
    document.querySelector('h4').style.color = 'white';
  } else if (pointer == 1 || pointer == 2 || pointer ==7) {
    document.querySelector('h1').style.color = 'black';
    document.querySelector('h4').style.color = 'black';
  }

  pointer++;
  if (pointer >= colorList.length) {
    pointer = 0;
  }
});

for (let i = 0; i <= colorList.length; i++) {
  document.querySelectorAll('.div > p > span')[i].addEventListener('click', function () {
    const body = document.querySelector('body');
    body.style.backgroundColor = colorList[i];
    body.style.transitionDuration = '0.25s';

    pointer = i+1;
    
    if (i == 0 || i == 3 || i == 4 || i == 5 || i == 6) {
      document.querySelector('h1').style.color = 'white';
      document.querySelector('h4').style.color = 'white';
    } else if (i == 1 || i == 2 || i ==7) {
      document.querySelector('h1').style.color = 'black';
      document.querySelector('h4').style.color = 'black';
    }

    if (pointer == colorList.length) {
      pointer = 0;
    }
  });
}