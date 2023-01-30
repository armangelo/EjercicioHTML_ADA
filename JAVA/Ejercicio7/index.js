function sumEvenNumbers(numbersArray) {
    let sum = 0;
    for (let number of numbersArray) {
      if (number % 2 === 0) {
        sum += number;
      }
    }
    return sum;
  }
    