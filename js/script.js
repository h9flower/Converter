'use strict';

const inputUAH = document.querySelector('#uah'),
  inputUSD = document.querySelector('#usd'),
  p = document.querySelector('p');

inputUAH.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
    } else {
      p.innerText = "Ошибка";
    }
  });
}); 