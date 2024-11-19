function showFactorial(num) {
  if (num === 0) return 1;
  let final = 1;

  for (let i = 1; i <= num; i++) {
    final *= i;
  }
  return final;
}

exports.showFactorial = showFactorial;
