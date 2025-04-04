// Задача 3.2.9
function maxActivities(activities: [number, number][]): number[] {
  activities.sort((a, b) => a[1] - b[1]);

  let result: number[] = [];
  let lastEndTime = -1;

  for (let i = 0; i < activities.length; i++) {
    if (activities[i][0] > lastEndTime) {
      result.push(i + 1);
      lastEndTime = activities[i][1];
    }
  }
  return result;
}

const activities: [number, number][] = [
  [1, 2],
  [3, 4],
  [0, 6],
  [5, 7],
  [8, 9],
  [5, 9],
];
console.log("Максимальное количество действий:", maxActivities(activities));

// Задача 3.2.10
interface Task {
  deadline: number;
  profit: number;
}

function maxProfitTasks(tasks: Task[], intervals: number): number {
  tasks.sort((a, b) => b.profit - a.profit);

  let result: (Task | null)[] = new Array(intervals).fill(null);
  let totalProfit = 0;

  for (let task of tasks) {
    for (let j = Math.min(intervals, task.deadline) - 1; j >= 0; j--) {
      if (!result[j]) {
        result[j] = task;
        totalProfit += task.profit;
        break;
      }
    }
  }
  return totalProfit;
}

const tasks: Task[] = [
  { deadline: 2, profit: 100 },
  { deadline: 1, profit: 50 },
  { deadline: 2, profit: 10 },
  { deadline: 1, profit: 20 },
];

console.log("Максимальная прибыль:", maxProfitTasks(tasks, 2));
