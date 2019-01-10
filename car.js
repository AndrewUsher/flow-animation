function Car ({ fill, length, x, y }) {
  function increaseX (amt) {
    this.x += amt
  }

  function increaseY (amt) {
    this.y += amt
  }

  return {
    increaseX: increaseX,
    increaseY: increaseY,
    fill,
    length,
    x,
    y
  }
}

class Car2 {
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

export default Car2
