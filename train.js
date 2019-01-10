import { SPACER, RECT_H, WIDTH } from './constants'
import Car from './car'
import colors from './colors'
import createRandomLength from './createRandomLength'

class Train {
  constructor () {
    this.cars = []
    this.maxTrainWidth = 100
  }

  getTrainWidth () {
    return (
      this.cars.reduce(function (car1, car2) {
        return car1.length + car2.length
      }) +
      SPACER * this.cars.length
    )
  }

  advanceCarsX () {
    this.cars.forEach(function (car) {
      car.increaseX(1)
    })
  }

  setMaxTrainWidth (maxTrainWidth) {
    this.maxTrainWidth = maxTrainWidth
  }

  createCars (y) {
    let x = 0
    while (x > this.maxTrainWidth * -1) {
      let randomizedLength = createRandomLength(RECT_H * 7)
      let r = new Car({
        length: randomizedLength,
        y: y,
        x: x - randomizedLength + WIDTH,
        fill: colors[Math.floor(Math.random() * colors.length)]
      })
      this.cars.push(r)
      x = x - randomizedLength - SPACER
    }
  }

  addCar (y) {
    let lastCar = this.cars[this.cars.length - 1]
    let randomizedLength = createRandomLength(RECT_H * 7)
    let x = lastCar.x - SPACER - randomizedLength
    let r = new Car({
      length: randomizedLength,
      y: y,
      x: x,
      fill: colors[Math.floor(Math.random() * colors.length)]
    })
    this.cars.push(r)
  }

  removeLastCar () {
    this.cars.shift()
  }
}

export default Train
