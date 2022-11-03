const products = {
  lotr: { name: 'Lord of the Rings', price: 19, id: 'lotr' },
  foundation: { name: 'Foundation', price: 15, id: 'foundation' },
  arabian: { name: 'Arabian Nights', price: 9, id: 'arabian' },
  hobbit: { name: 'The Hobbit', price: 12, id: 'hobbit'},
  samurai: { name: 'The Last Samurai', price: 17, id: 'samurai' },
  cuckoo: { name: 'Saga of Cuckoo', price: 5, id: 'cuckoo' },
}


export default function getProduct(id) {
  return products[id]
}