function countingSheep(num) {
  while (num > 0) {
    console.log(num + ': another sheep jumped over the fence')
    num--
  }
  console.log('all sheep jumped over the fence')
}

//big o = O(n)

function factorial(num) {
  let ans = 1
  while (num > 0) {
    ans = num * ans
    num--
  }
  console.log(ans)
}

//big o = O(n)

function fibonacci(num) {
  let string = ''
  if (num === 1) {
    return '1'
  } else if (num === 2) {
    return '1, 1'
  }
  for (j = 0; j < num - 2; j++) {
    let prev = 1
    let next = 1
    let resp = 0
    for (let i = 0; i < num - 2 - j; i++) {
      resp = prev + next
      prev = next
      next = resp
    }
    string = string + resp
  }
  console.log('1, 1, ' + string.split('').reverse().join(', '))
}

//big o = O(n^2)

function nthTriangularNumber(num) {
  let ans = 0
  while (num > 0) {
    ans = ans + num
    num--
  }
  console.log(ans)
}

//big o = O(n)

function powerCalculator(base, power) {
  let ans = 1
  if (power === 0) {
    return console.log(1)
  } else if (power < 0) {
    return console.log('power should be >= 0')
  }
  while (power > 0) {
    ans = ans * base
    power--
  }
  return console.log(ans)
}

//big o = O(n)

function reverseString(str) {
  let arr = []
  for (i = str.length; i >= 0; i--) {
    arr.push(str[i])
  }
  console.log(arr.join(''))
}

//big o = O(n)

function stringSplitter(str, splt) {
  let ans = []
  let sub = ''
  for (i = 0; i < str.length; i++) {
    if (str[i] !== splt) {
      sub = sub + str[i]
    } else if (str[i] === splt) {
      ans.push(sub)
      sub = ''
    }
  }
  console.log(ans)
}

//big o = O(n)