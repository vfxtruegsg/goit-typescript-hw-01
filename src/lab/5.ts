// 3.2.3
function countValidNumbers(N: number, K: number): number {
  const dp: number[][] = Array.from({ length: N + 1 }, () => Array(K).fill(0));
  for (let digit = 1; digit < K; digit++) {
    dp[1][digit] = 1;
  }

  for (let len = 2; len <= N; len++) {
    for (let digit = 0; digit < K; digit++) {
      for (let prevDigit = 0; prevDigit < K; prevDigit++) {
        if (!(digit === 0 && prevDigit === 0)) {
          dp[len][digit] += dp[len - 1][prevDigit];
        }
      }
    }
  }

  let result = 0;
  for (let digit = 0; digit < K; digit++) {
    result += dp[N][digit];
  }
  return result;
}

// 3.2.7
function countLuckyTickets(N: number): number {
  const halfN = N / 2;
  const dp: number[][] = Array.from({ length: halfN + 1 }, () =>
    Array(9 * halfN + 1).fill(0)
  );
  dp[0][0] = 1;

  for (let i = 1; i <= halfN; i++) {
    for (let sum = 0; sum <= 9 * halfN; sum++) {
      for (let digit = 0; digit <= 9; digit++) {
        if (sum >= digit) {
          dp[i][sum] += dp[i - 1][sum - digit];
        }
      }
    }
  }

  let result = 0;
  for (let sum = 0; sum <= 9 * halfN; sum++) {
    result += dp[halfN][sum] ** 2;
  }
  return result;
}

// 3.2.3
console.log("Task 3.2.3");
console.log(countValidNumbers(2, 10));
console.log(countValidNumbers(4, 2));
console.log(countValidNumbers(6, 3));

// 3.2.7
console.log("Task 3.2.7");
console.log(countLuckyTickets(4));
console.log(countLuckyTickets(6));
console.log(countLuckyTickets(12));
