import { onChange, total, addToCart } from './cart.mjs'
import getProduct from './products.mjs'

// Find the root of the cart element
const el = document.getElementById('cart')

// Create a badge indicator
const badge = document.createElement('span')
badge.setAttribute('data-count', total())
el.appendChild(badge)

// When the cart changes, update the badge
onChange(() => {
  badge.setAttribute('data-count', total())
})

// Add event listeners to all the add-to-cart buttons, and the cart itself
document.addEventListener('click', (e) => {
  if (e.target.dataset.product) {
    addToCart(getProduct(e.target.dataset.product))
  }
})
