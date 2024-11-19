function returnPrimes(num) {
  function isPrime(num) {
    if (num === 1 || num === 2) return true;
    for (i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let final = [];

  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) final.push(i);
  }

  return final;
}

exports.returnPrimes = returnPrimes;
