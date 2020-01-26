function algorithm1(n) {
  const numberOfPeople = n
  console.log('who here has a golden retriever and would like to be a playdate for my golden?')
  console.log('I do, be happy to bring him over')
}

algorithm1(15)
console.log('algorithm 1 has a big O of O(1)')

function algorithm2(n) {
  const numberOfPeople = n
  let i = 0
  while( i < numberOfPeople ) {
    console.log('Do you have a golden retreiver who would like to be my dog\'s playdate?')
    i++
  }
  console.log('I do, be happy to bring him over')
}

algorithm2(15)
console.log('algorithm 2 has a big O of O(n)')