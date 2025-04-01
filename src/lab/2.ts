// 3.2.3 Обчислити 100! + 2 ^100
// 3.2.4 Обчислити 100! − 2 ^100

function factorial(n: bigint): bigint {
  let result: bigint = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}

function power(base: bigint, exponent: bigint): bigint {
  let result: bigint = 1n;
  for (let i = 0n; i < exponent; i++) {
    result *= base;
  }
  return result;
}

const fact100 = factorial(100n);
const power100 = power(2n, 100n);

const sumResult = fact100 + power100;
const diffResult = fact100 - power100;

console.log("100! + 2^100 =", sumResult);
console.log("100! - 2^100 =", diffResult);
