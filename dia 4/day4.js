let span1 = document.querySelector('.s1Day4');
let span2 = document.querySelector('.s2Day4');
let tentativas = 0;
let randomNumber = Math.floor(Math.random() * 10);

while (tentativas <= 2) {
  let tentativa = prompt('insira um numero de 0 à 10');
  randomNumber;
  if (tentativa === Math.floor(Math.random() * 10)) {
    alert('==== VOCÊ ACERTOU ====');
  };
  tentativas++
  span1.innerHTML = randomNumber;
  span2.innerHTML = tentativas;
};
