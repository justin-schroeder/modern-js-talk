const cart = []
const handlers = []

export function addToCart(item) {
  cart.push(item)
  handlers.forEach(handler => handler())
}

export function total() {
  return cart.length
}

export function onChange(callback) {
  handlers.push(callback)
}

export function items() {
  return Object.values(cart.reduce((allItems, item) => {
    if (item.id in allItems) {
      allItems[item.id].qty++
    } else {
      allItems[item.id] = { ...item, qty: 1 }
    }
    return allItems
  }, {}))
}