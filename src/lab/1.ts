// 3.2.7 У заданій послідовності цілих чисел знайти максимально довгу підпослідовність
// чисел таку, що кожен наступний елемент підпослідовності ділився націло на попередній.
// 3.2.8 Звести число a в натуральну ступінь n за якомога меншу кількість множень.
// 3.2.9 Задані z та y – дві послідовності. Чи можна отримати послідовність z
// викреслюванням елементів з y.

// 1

function longestDivisibleSubsequence(arr: number[]): number[] {
  let n = arr.length;
  let dp = new Array(n).fill(1);
  let prev = new Array(n).fill(-1);
  let maxLength = 1,
    lastIndex = 0;

  arr.sort((a, b) => a - b);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] % arr[j] === 0 && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[i] > maxLength) {
      maxLength = dp[i];
      lastIndex = i;
    }
  }

  let result: number[] = [];
  while (lastIndex !== -1) {
    result.push(arr[lastIndex]);
    lastIndex = prev[lastIndex];
  }

  return result.reverse();
}

console.log(longestDivisibleSubsequence([3, 5, 10, 20, 40]));

// 2

function fastExponentiation(a: number, n: number): number {
  let result = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      result *= a;
    }
    a *= a;
    n = Math.floor(n / 2);
  }
  return result;
}

console.log(fastExponentiation(2, 10));

// 3

function canObtainSubsequence(z: number[], y: number[]): boolean {
  let i = 0,
    j = 0;
  while (i < z.length && j < y.length) {
    if (z[i] === y[j]) {
      i++;
    }
    j++;
  }
  return i === z.length;
}

console.log(canObtainSubsequence([1, 3, 5], [1, 2, 3, 4, 5]));
