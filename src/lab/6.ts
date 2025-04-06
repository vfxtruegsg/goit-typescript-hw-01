// 3.2.2 Напишіть функцію під назвою reverseString, яка приймає рядок як вхід і
// повертає зворотну версію рядка за допомогою рекурсії. Уникайте використання будьяких вбудованих функцій для зміни рядка. Приклад: reverseString ("hello") повинен
// повернути "olleh".

function reverseString(str: string): string {
  if (str.length <= 1) {
    return str;
  }

  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"));
console.log(reverseString("ararat"));

// 3.3.8 Сформувати з двох заданих переліків чисел однакової довжини,
// відсортованих за зростанням, третій. Елементи сформованого переліку повинні бути
// також відсортовані за зростанням.

function mergeSortedImperative(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

const listA = [1, 3, 5, 7];
const listB = [2, 4, 6, 8];

console.log(mergeSortedImperative(listA, listB));
