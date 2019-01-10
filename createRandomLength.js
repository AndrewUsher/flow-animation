import { SPACER } from './constants'

const createRandomLength = max => {
  const num = Math.floor(Math.random() * Math.floor(max))
  return num >= SPACER * 2 ? num : SPACER * 2
}

export default createRandomLength
