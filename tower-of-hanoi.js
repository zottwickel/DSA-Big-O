function towerOfHanoi(height) {
  let a = height
  let b = 0
  let c = 0
  function move(height, start, middle, end) {
    if (height >= 1) {
      move(height - 1, start, middle, end)
      start -= 1
      end += 1
      console.log(`Tower A: ${start}`)
      console.log(`Tower B: ${middle}`)
      console.log(`Tower C: ${end}\r\n`)
      move(height -1, middle, end, start)
    }
    return;
  }
  move(height, a, b, c)
}

towerOfHanoi(3)