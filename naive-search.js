function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}

/*
Big O is O(n) - the number of iterations
varies based on how far into the array the
searched for item is.
*/