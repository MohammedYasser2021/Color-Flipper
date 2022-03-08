let btn = document.querySelector('.special-btn')
let color = document.querySelector('.color')

btn.addEventListener('click', function () {
  color.textContent = 'Background-Color: '
  let randomColor = getRandomColor()

  document.body.style.backgroundColor = randomColor
  color.textContent += randomColor
})

const getRandomColor = () => {
  let chars = 'ABCDEF0123456789'
  let col = '#'
  for (let i = 1; i <= 6; i++) {
    let random = Math.floor(Math.random() * chars.length)
    col += chars[random]
  }
  return col
}
