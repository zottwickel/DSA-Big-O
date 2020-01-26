function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
      array[i] *= 2;
  }
  return array;
}

/*
This algorithm perform a single operation for each element in an array.
It has a big o notation of O(n)
*/