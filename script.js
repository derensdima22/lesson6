// 1.Методы объектов и контекст исполнения функции
// 	•	Создайте объект calculator с методами:
// 	•	read() запрашивает prompt для двух значений
//    и сохраняет их как свойства объекта x, y
// 	•	sum() возвращает сумму этих двух значений
// 	•	multi() возвращает произведение этих двух значений
// 	•	diff() возвращает разницу
// 	•	div() возвращает частное

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.multi()
(function work1() {
  const calculator = {
    read() {
      this.x = +prompt("Введите первое число");
      this.y = +prompt("Введите второе число");
      if (isNaN(this.x) || isNaN(this.y)) {
        alert("Вы ввели не число");
        this.read();
      }
    },
    sum() {
      return this.x + this.y;
    },
    multi() {
      return this.x * this.y;
    },
    diff() {
      return this.x > this.y ? this.x - this.y : this.y - this.x;
    },
    div() {
      return this.x > this.y
        ? Math.round(this.x / this.y)
        : Math.round(this.y / this.x);
    },
  };
  calculator.read();
  console.log(`Сумма чисел: ${calculator.sum()}`);
  console.log(`Произведение чисел: ${calculator.multi()}`);
  console.log(`Разность чисел: ${calculator.diff()}`);
  console.log(`Частное чисел: ${calculator.div()}`);
})();

//2.Создайте объект coffeeMachine со свойством message:
//‘Your coffee is ready!’ и методом start(), при вызове
// которого – coffeeMachine.start() – через 3 секунды
// появляется окно с сообщением, записанным в свойстве
// объекта message
const work2 = () => {
  const coffeeMachine = {
    message: "Your coffee is ready!",
    start() {
      setTimeout(() => alert(this.message), 3000);
    },
  };
  coffeeMachine.start();
};
work2();

//3.	Создайте объект counter с методами увеличения,
//уменьшения значения счетчика и методом возврата
//текущего значения. Используйте концепцию chaining
//для создания цепочки вызовов.
//     var current = counter.inc().inc().dec().inc().dec().getValue();
//     alert(current); // 1

const work3 = () => {
  const counter = {
    count: 0,
    inc: function () {
      this.count++;
      return this;
    },
    dec: function () {
      this.count--;
      return this;
    },
    getValue() {
      return this.count;
    },
  };
  let current = counter.inc().inc().dec().inc().dec().getValue();
  alert(current);
};
work3();

//4. Есть следующий код:
// var country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };
// function format(start, end) {
//     console.log(start + this.name + end);
// }
// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:
// format.call(/* Ваш код */); // Ukraine
// format.apply(/* Ваш код */); // [Ukraine]
// format.call(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // undefined
const work4 = () => {
  const country = {
    name: "Ukraine",
    language: "ukrainian",
    capital: {
      name: "Kyiv",
      population: 2907817,
      area: 847.66,
    },
  };
  function format(start, end) {
    console.log(start + this.name + end);
  }
  format.call(country, "", ""); // Ukraine
  format.apply(country, ["[", "]"]); // [Ukraine]
  format.call(country.capital, "", ""); // Kyiv
  format.call(country.capital, "", ""); // Kyiv
  format.apply(country.name, ["", ""]); // undefined
};
work4();

//5.•	Создайте объект user с полем name. Создайте функцию format
// с параметрами start и end:
// function format(start, end) {
//   console.log(start + this.name + end);
// }
// Реализуйте решение текущего задания используя метод bind().

const work5 = () => {
  const user = {
    name: "John",
  };
  function format(start, end) {
    console.log(start + this.name + end);
  }
  let newFormat = format.bind(user, "Hello ", " !");
  newFormat();
};
work5();

//6.•	Напишите функцию concat, которая соединяет две строки,
//разделенные каким-то символом: разделитель и строки
//передаются в параметрах функции. Используя карринг,
// создайте новую функцию hello, которая которая выводит
// приветствие тому, кто передан в ее параметре:
// hello('World'); // Hello World
// hello('John'); // Hello John

let work6 = () => {
  // function concat(a, b) {
  //   return a.split(b).join(" ");
  // }

  function concat(a, b, c) {
    alert(a + b + c);
  }
  let hello = concat.bind(null, "Hello", " ");
  hello("Dima");
  hello("Lesha");
};
work6();

//Рекурсия!!!!
//7.	Напишите функцию, которая возвращает куб переданного числа,
// аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:
//console.log( cube(2) ); // 8
let work7 = () => {
  function cycle(n) {
    let sum = n;
    for (let i = 1; i < 3; i++) {
      sum = sum * n;
    }
    return sum;
  }
  console.log(cycle(2));

  function recursion(num, n = 3) {
    return n === 1 ? num : num * recursion(num, n - 1);
  }
  console.log(recursion(2));
};
work7();

//8. Придумайте алгоритм расчета суммы всех фактических параметров
// функции с использованием только рекурсии:
//console.log( sum(1, 2, 3, 4, 5) ); // 15
const work8 = () => {
  function sumOfNambers(...arg) {
    if (arg.length === 1) return arg[0];
    else {
      let a = arg.pop();
      let b = arg.pop();
      return sumOfNambers(...arg, a + b);
    }
  }
  sumOfNambers(1, 2, 3, 4, 5);
};
work8();
