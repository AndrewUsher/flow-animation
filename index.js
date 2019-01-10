import sketch from './sketch'

if (module.hot) {
  module.hot.accept(() => {
    window.location.reload()
  })
}

// eslint-disable-next-line
new p5(sketch)
