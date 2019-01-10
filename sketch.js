import { SPACER, RECT_H, WIDTH, ROWS, HEIGHT } from './constants'
import Train from './train'
const state = []

for (var i = 0; i < ROWS; i++) {
  const T = new Train()
  T.setMaxTrainWidth(WIDTH * 1.5)
  T.createCars(i * (RECT_H + 5) + 5)
  state.push(T)
}

const Sketch = p => {
  p.setup = () => {
    p.createCanvas(WIDTH, HEIGHT)
    p.background(0)
  }
  p.draw = () => {
    state.forEach(train => {
      train.cars.forEach(({ fill, length, x, y }) => {
        p.stroke('#000')
        p.fill(fill)
        if (x > WIDTH) {
          train.addCar(y)
          train.removeLastCar()
        } else {
          p.rect(x, y, length, RECT_H, SPACER)
        }
      })
      train.advanceCarsX()
    })
  }
}

export default Sketch
