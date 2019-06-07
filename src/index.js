/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

require('./styles/main.styl')
require('./img/nav-logo.png')

console.log('hello world!@@')

const navToggle = document.querySelector('.nav-toggle')
console.log(navToggle)
const navCollapse = document.querySelector('.nav-collapse')
console.log(navCollapse)

//*******************onload event*******************
// when window loads, setup events on buttons and browser
window.onload = () => {
  navToggle.addEventListener('click', () => {
    console.log('You clicked it!')
    const open = navCollapse.classList.contains('open')
    if (open) {
      navToggle.classList.remove('open')
      navToggle.classList.add('closed')
      navCollapse.classList.remove('open')
      navCollapse.classList.add('closed')
    } else {
      navToggle.classList.remove('closed')
      navToggle.classList.add('open')
      navCollapse.classList.remove('closed')
      navCollapse.classList.add('open')
    }
  })
}
