const setInterval = (callback, interval) => {
  let ref = {
    current: 0
  }

  const func = () => {
    ref.current = setTimeout(() => {
      callback()
      func()
    }, interval)
  }

  func()
  return ref
}

setInterval(() => console.log(1), 100)
