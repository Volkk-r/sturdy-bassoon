let a = 3;
let b = 9;

// let sum = a + b;
let diff = a - b;

// console.log(sum, diff);
console.log(diff);

// Урок 2: Операторы сравнения и логические операторы

let title = "Прочитать конспект";

if (title === "") {
  console.log("Название задачи не указано");
} else {
  console.log("Название задачи:", title);
}


let tasks = 5;
if (tasks === 0) {
    console.log("Нет задач для выполнения");
} else if (tasks > 0 && tasks <= 3) {
    console.log("Небольшое количество задач");
} else if (tasks > 3) {
    console.log("Много задач");
}


// Урок 3: Функции в JavaScript

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3))

let result = sum(10, 15); // 25
console.log(result);


function isTaskDone(status) {
 return status === "выполнено";
}

console.log(isTaskDone("выполнено")); // true 

let done = isTaskDone("в процессе");
console.log(done); // false

function taskSummary(total, done) {
  const active = total - done;
  console.log("Всего:" + total + " активных:" + active + " выполнено:" + done);
}

taskSummary(10, 4);

// Урок 4: Массивы и объекты в JavaScript

let cities = ["Москва", "Питер", "Казань"];
cities[2] = "Новосибирск"; // изменили третий элемент
console.log(cities); // ["Москва", "Питер", "Новосибирск"]

let task = {
  id: 1,
  title: "Купить молоко",
  status: "активна",
};  

console.log(task.title); // "Купить молоко"
task.status = "выполнена";
console.log(task.status); // "выполнена"


let todoList = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
];

console.log(todoList[1].title); // "Позвонить врачу"
console.log(todoList.length); // 2


let user = {
  name: "Иван",
  tasks: todoList
};

console.log(user);