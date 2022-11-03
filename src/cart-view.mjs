import { items, onChange } from './cart.mjs';

const list = document.createElement('ul')
list.classList.add('cart-view')
document.body.appendChild(list)

onChange(render)

/**
 * A simple map of image dom nodes.
 */
const images = {}

const dollars = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format

document.addEventListener('click', (e) => {
  if (!e.target.closest('.cart-view') && !e.target.closest('#cart') && !e.target.hasAttribute('data-product')) {
    list.classList.remove('open')
  } else if (e.target.closest('#cart')) {
    list.classList.add('open')
  }
})

/**
 * Who needs a virtual DOM? Lets just make some dom nodes!
 */
function render() {
  let total = 0
  const listItems = items().map(item => {
    const li = document.createElement('li')
    if (!images[item.id]) {
      const img = document.createElement('img')
      img.src = `/img/${item.id}.png`
      images[item.id] = img
    }
    const details = document.createElement('div')
    const title = document.createElement('span')
    title.textContent = item.name
    const price = document.createElement('span')
    price.textContent = `${dollars(item.price)} x ${item.qty}`
    total += item.price * item.qty
    details.append(title, price)
    li.prepend(images[item.id], details)
    return li
  })
  if (!listItems.length) {
    const noItems = document.createElement('span')
    noItems.classList.add('empty')
    noItems.textContent = 'Your cart is empty'
    listItems.push(noItems)
  }
  const children = list.children
  list.replaceChildren(...listItems)

  const totalPrice = document.createElement('div')
  totalPrice.classList.add('total')
  totalPrice.innerHTML = `Total: <span>${dollars(total)}</span>`
  list.append(totalPrice)
}

render()