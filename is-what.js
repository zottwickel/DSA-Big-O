function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}

/*
This is a prime number checker.
This function has a big o of O(n). It will run n operations.
*/