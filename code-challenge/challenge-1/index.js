
const burger_open = document.querySelector('.burger_open')
const burger_close = document.querySelector('.burger_close')
const nav = document.querySelector('nav')

burger_open.addEventListener('click', (e) => {
  nav.classList.remove('close')
  nav.classList.add('open')
  burger_close.classList.remove('close')
  burger_close.classList.add('open')
  burger_open.classList.add('close')
  burger_open.classList.remove('open')
})

burger_close.addEventListener('click', (e) => {
    nav.classList.remove('open')
    nav.classList.add('close')
    burger_close.classList.remove('open')
    burger_close.classList.add('close')
    burger_open.classList.add('open')
    burger_open.classList.remove('close')
  })