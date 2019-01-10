class Car {
  constructor ({ fill, length, x, y }) {
    this.fill = fill
    this.length = length
    this.x = x
    this.y = y
  }

  increaseX (amount) {
    this.x += amount
  }

  increaseY (amount) {
    this.y += amount
  }
}

export default Car
