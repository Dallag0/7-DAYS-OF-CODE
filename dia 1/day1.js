let input = document.getElementsByClassName('inputDay1')
let btn = document.querySelector('button')

btn.addEventListener('click', function () {
  if (isNaN(input)) {
    return alert('O dado inserido é um string')
  } else {
    return alert('O dado inserido é uma number')
  }
})
