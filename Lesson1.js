// 1. - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// let q = 'hello';
// let w = 'owu';
// let e = 'com';
// let r = 'ua';
// let x = 1;
// let y = 10;
// let n = -999,
//     n1 = 123,
//     pi = 3.14,
//     a = 2.7,
//     b = 16,
//     t = true,
//     f = false;

// console.log(q);
// console.log(w);
// console.log(e);
// console.log(r);
// console.log(x);
// console.log(y);
// console.log(n);
// console.log(n1);
// console.log(pi);
// console.log(a);
// console.log(b);
// console.log(t);
// console.log(f);

// alert(q);
// alert(w);
// alert(e);
// alert(r);
// alert(x);
// alert(y);
// alert(n);
// alert(n1);
// alert(pi);
// alert(a);
// alert(b);
// alert(t);
// alert(f);

// document.write(q);
// document.write(w);
// document.write(e);
// document.write(r);
// document.write(x);
// document.write(y);
// document.write(n);
// document.write(n1);
// document.write(pi);
// document.write(a);
// document.write(b);
// document.write(f);
// document.write(t);

// 2. - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// q = 'O';
// w = 'l';
// e = 'e';
// r = 'k';
// x = 's';
// y = 'i';
// n = 'i';
// n1 = '_';
// pi = 18;
// a = '_';
// b = 0;
// t = 1;
// f = '!';

// console.log(q);
// console.log(w);
// console.log(e);
// console.log(r);
// console.log(x);
// console.log(y);
// console.log(n);
// console.log(n1);
// console.log(pi);
// console.log(a);
// console.log(b);
// console.log(t);
// console.log(f);

// alert(q);
// alert(w);
// alert(e);
// alert(r);
// alert(x);
// alert(y);
// alert(n);
// alert(n1);
// alert(pi);
// alert(a);
// alert(b);
// alert(t);
// alert(f);

// document.write(q);
// document.write(w);
// document.write(e);
// document.write(r);
// document.write(x);
// document.write(y);
// document.write(n);
// document.write(n1);
// document.write(pi);
// document.write(a);
// document.write(b);
// document.write(t);
// document.write(f);

// 3. - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// const Name = prompt("Введіть ваше ім'я");
// const FName = prompt("Введіть ім'я по-батькові");
// const Age = prompt("Введіть свій вік");
// document.write('Вітаю ' + Name + ' ' + FName + '. Тобі ' + Age + ' років')

// 4. - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
// let Conc = Name + FName + Age;
// document.write(Conc);

// 5. - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

// let x = prompt("Enter the first number: ");
// let y = prompt("Enter the second number: ");
// let z = prompt("Enter the third number: ");
// document.write(Number(x) + Number(y) + Number(z)); //виводжу суму, щоб було точно видно, що перевело в число

// 6. - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою parseInt.
// Додати їх всі мож собою і результат вивести в консоль.
// let x = prompt("Enter the first number: ");
// let y = prompt("Enter the second number: ");
// let z = prompt("Enter the third number: ");
// let q = prompt("Enter the forth number: ");
// console.log(parseInt(x, 10) + parseInt(y, 10) + parseInt(z, 10) + parseInt(q, 10))

// 7. - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//   Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let x = parseFloat(prompt("Enter the first number: "));
// let y = parseFloat(prompt("Enter the second number: "));
// let z = parseFloat(prompt("Enter the third number: "));
// let result = x+y+z;
// console.log(result);

// 8. - За допомогою prompt() отримати 3 числа з плаваючою точкою.
//     Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// let x = parseFloat(prompt("Enter the first number: "));
// let y = parseFloat(prompt("Enter the second number: "));
// let z = parseFloat(prompt("Enter the third number: "));
// console.log(Math.round(x) + Math.round(y) + Math.round(z));

// 9. - За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня. Друге число - це число, яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25

// let x = parseInt(prompt("Enter the first number: "));
// let y = parseInt(prompt("Enter the second number: "));
// console.log(Math.pow(x, y));

// 10. - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// 11. Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true

// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 == 6);
// console.log(5 === 6);
// console.log(10 == 10);
// console.log(10 === 10);
// console.log(10 !== 10);
// console.log(10 < 10);
// console.log(10 > 10);
// console.log(123 === '123');
// console.log(123 == '123');

// Додатково:
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
//   console.log(132 > 100 && 45 < 12 ); //false
//   console.log(34 > 33 && 23 < 90 ); //true
//   console.log(99 > 100 && 45 > 12 ); //false
//   console.log(132 > 100 || 45 < 12 ); //true
//   console.log(111 > 11 || 45 < 111 ); //true
//   console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); //true
//   console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); //true
//   console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); //false
//   console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); //true
//   console.log(!!'-1'); //true
//   console.log(!!-1); //true
//   console.log(!!'0'); //true
//   console.log(!!'null'); //true
//   console.log(!!'undefined'); //true
//   console.log(!!(3/'owu')); //false
//   console.log((111 > 11 || 45 < 111) ||  !!'0'); //true
//   console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); //false

// =====================
// ======ДОП============
// =====================

// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// let a = Number(prompt('Enter 1 number:'));
// let b = Number(prompt('Enter 2 number:'));
// let c = Number(prompt('Enter 3 number:'));
// if (a <= b && b <= c && a <= c) {
//     console.log(a + ', ' + b + ', ' + c);
// } else if (a <= c && a <= b && c <= b) {
//     console.log(a + ', ' + c + ', ' + b);
// } else if (c <= a && c <= b && a <= b ) {
//     console.log(c + ', ' + a + ', ' + b);
// } else if (c <= b && c <= a && b <= a) {
//     console.log(c + ', ' + b + ', ' + a);
// } else if (b <= c && b <= a && c <= a) {
//     console.log(b + ', ' + c + ', ' + a);
// } else {
//     console.log(b + ', ' + a + ', ' + c);
// }

// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
//
// let colour = prompt("Введіть колір світлофору українською мовою:", 'зелений');
// switch (colour) {
//     case ('зелений' || 'Зелений'):
//         alert('Іди');
//         break;
//     case ('жовтий' || 'Жовтий'):
//         alert('Чекай');
//         break;
//     case ('Червоний' || 'червоний'):
//         alert('Стій');
//         break;
//     default:
//         alert('Роби, що хочеш');
// }

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

let colour = prompt('Якого кольору сигнал світлофору?');
let isRoadClear = prompt('Чи є на дорозі машини? (так/ні)');
if (colour === 'зелений' && isRoadClear === 'ні') {
    alert('Іди!');
} else if (colour === 'зелений' && isRoadClear === 'так') {
    alert('Почекай поки порушники проїдуть!');
} else if (colour === 'жовтий' && isRoadClear === 'так') {
    alert('Чекай!');
} else if (colour === 'жовтий' && isRoadClear === 'ні') {
    alert('Всерівно чекай!');
} else if (colour === 'червоний' && isRoadClear === 'ні') {
    alert('Стій, ще рано!');
} else if (colour === 'червоний' && isRoadClear === 'так') {
    alert('Стій і чекай!');
} else {
    alert('Роби, що хочеш');
}