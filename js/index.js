window.addEventListener('click', (ev) => {
  // menu open/close 
  if (document.querySelector('body').offsetWidth > 1201 & ev.target.classList.contains('header__sublist')) {
    ev.target.classList.toggle('open')
  }

  // mobile menu open / close
  if (ev.target.classList.contains('nav-mobile')) {
    ev.target.classList.toggle('active')
    document.querySelector('.header__nav').classList.toggle('show')
  }
  if (ev.target.classList.contains('nav-mobile__item')) {
    ev.target.parentNode.classList.toggle('active')
    document.querySelector('.header__nav').classList.toggle('show')
  }
})

// range input scroll
const range = document.querySelector('.form__fieldset-range')
range.classList.add('js');

range.addEventListener('input', e => {
  let _t = e.target;
  _t.style.setProperty('--val', +_t.value)
  document.querySelector('.form__range-value span').textContent = _t.value
}, false)


//====================
//Animation

let tl = gsap.timeline()
gsap.from('.main__text-block', { duration: 1, xPercent: -100 })
gsap.from('.main__img', { duration: 1, xPercent: 200 })
tl.to('.main__scroll', { duration: 1, y: '30px', repeat: -1, yoyo: true })

