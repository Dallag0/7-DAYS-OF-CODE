let p1 = document.querySelector('.p1Day3')
let p2 = document.querySelector('.p2Day3')
let p3 = document.querySelector('.p3Day3')
let s1 = document.querySelector('.sP1day3')
let s2 = document.querySelector('.sP2day3')
let s3 = document.querySelector('.sP3day3')

let pergunta1 = prompt(
  'Se quer seguir para área de Front-End ou seguir para a área de Back-End.'
)

if (
  pergunta1 == 'front-end' ||
  pergunta1 == 'front end' ||
  pergunta1 == 'front'
) {
  p1.innerHTML =
    'Se quer seguir para área de Front-End ou seguir para a área de Back-End.'
  s1.innerHTML = pergunta1

  let pergunta2p1 = prompt(
    'Caso esteja na área de Front-End, se quer aprender React ou aprender Vue.'
  )

  if (pergunta2p1 == 'react' || pergunta2p1 == 'vue') {
    p2.innerHTML =
      'Caso esteja na área de Front-End, se quer aprender React ou aprender Vue.'
    s2.innerHTML = pergunta2p1

    let pergunta3 = prompt(
      'Você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack.'
    )

    if (
      pergunta3 == 'especializar' ||
      pergunta3 == 'especializando' ||
      pergunta3 == 'fullstack' ||
      pergunta3 == 'full'
    ) {
      p3.innerHTML =
        'Você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack.'
      s3.innerHTML = pergunta3
    }
  }
} else if (pergunta1 == 'back' || pergunta1 == 'back-end') {
  p1.innerHTML =
    'Se quer seguir para área de Front-End ou seguir para a área de Back-End.'
  s1.innerHTML = pergunta1

  let pergunta2p2 = prompt(
    'Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.'
  )

  if (pergunta2p2 == 'c#' || pergunta2p2 == 'java') {
    p2.innerHTML =
      'Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.'
    s2.innerHTML = pergunta2p2

    let pergunta3 = prompt(
      'Você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack.'
    )

    if (
      pergunta3 == 'especializar' ||
      pergunta3 == 'especializando' ||
      pergunta3 == 'fullstack' ||
      pergunta3 == 'full'
    ) {
      p3.innerHTML =
        'Você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack.'
      s3.innerHTML = pergunta3
    }
  }
}
