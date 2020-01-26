function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}

/*
This function works by picking an element in the middle of two indexes.
It will "rule out" half the elements of this array depending on the item's 
  value being less than or greater than the halfway point between the indexes.
It will iterate much less than a naive search because it doesn't have to
  check each element along the way.
It's big O is O(n) because it will run n times before completion.
*/