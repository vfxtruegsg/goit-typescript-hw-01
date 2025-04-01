// 3.2.3 Задано сімейство множин букв. Знайти таке k, для якого можна побудувати
// безліч, що складається з k букв, причому кожна з них належить рівно k множинам
// заданого сімейства.
// 3.2.4 Впорядкувати за не зростанням 5 чисел за 7 операцій порівняння.

function findK(sets: Set<string>[]): number | null {
  const letterCounts = new Map<string, number>();

  for (const set of sets) {
    for (const letter of set) {
      letterCounts.set(letter, (letterCounts.get(letter) || 0) + 1);
    }
  }

  for (const [letter, count] of letterCounts.entries()) {
    if (count === sets.length) {
      return count;
    }
  }
  return null;
}

function sortFiveNumbers(arr: number[]): number[] {
  if (arr.length !== 5)
    throw new Error("Масив повинен містити рівно 5 елементів");

  function swap(i: number, j: number) {
    if (arr[i] < arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  swap(0, 1);
  swap(2, 3);
  swap(0, 2);
  swap(1, 3);
  swap(1, 2);
  swap(3, 4);
  swap(2, 3);

  return arr;
}

const sets: Set<string>[] = [
  new Set(["a", "b", "c"]),
  new Set(["b", "c", "d"]),
  new Set(["c", "d", "e"]),
];
console.log("Значення k:", findK(sets));

const numbers = [12, 45, 7, 23, 89];
console.log("Відсортований масив:", sortFiveNumbers(numbers));
