// Topic: enchanced object literals

export function Bookshop (inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0)
    },
    priceForTitle: function (title) {
      return this.inventory.find(book => book.title === title).price
    }
  }
}

export function EnhancedBookshop (inventory) {
  return {
    inventory,
    inventoryValue () {
      return this.inventory.reduce((total, book) => total + book.price, 0)
    },
    priceForTitle (title) {
      return this.inventory.find(book => book.title === title).price
    }
  }
}
