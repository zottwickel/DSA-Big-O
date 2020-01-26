function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/*
this function simply returns a random element from an array.
it has a big O of O(1) because it is independent of the size of the array.
*/