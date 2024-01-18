var numberOfSteps = function (num) {
  let count = 0;

    if (num == 0) {
        count = 0;
    } else {
        do {
          if (num % 2 == 0) {
            num = num / 2;
          } else {
            num = num - 1;
          }

          count++;
        } while (num !== 0);
  }

  

  return count;
};

console.log(numberOfSteps(0));

// Input: num = 8
// Output: 4
// Explanation:
// Step 1) 8 is even; divide by 2 and obtain 4.
// Step 2) 4 is even; divide by 2 and obtain 2.
// Step 3) 2 is even; divide by 2 and obtain 1.
// Step 4) 1 is odd; subtract 1 and obtain 0.
