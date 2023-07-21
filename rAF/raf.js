setTimeout(() => {
  console.log("sto")
  queueMicrotask(() => console.log('mic4'))
  requestAnimationFrame(() => console.log("rAF"))
})
setTimeout(() => {
  console.log("sto")
  requestAnimationFrame(() => console.log("rAF"))
})

queueMicrotask(() => {
  console.log("mic1")
  queueMicrotask(() => console.log('mic3'))
})
queueMicrotask(() => console.log("mic2"))