// 1) створити функцію яка приймає масив та виводить його
//
// let array = [1,2,3,4,5,6,7];
// function printArray(array) {
//     console.log(array);
//     for (const number of array) {
//         console.log(number);
//     }
// }
// printArray(array);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попередню функцію.

// function arr(x) {
//     x = prompt('Введіть кількість елементів масиву');
//     let arr1 = [];
//     for (let i = 0; i < x; i++) {
//       arr1[i]=Number(Math.round(Math.random()*100));
//     }
//     console.log(arr1);
// }
// arr();

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function min3() {
//     let arr1 = [];
//     for (let i = 0; i <= 2; i++) {
//         arr1[i] = Number(prompt('Enter a number:'));
//     }
//     let min = arr1[0];
//     for (let i = 1; i < arr1.length; i++) {
//         if (arr1[i] < min) {
//             min = arr1[i];
//         }
//     }
//     console.log(`Minimum value is ${min}`)
// }
// min3();

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max3() {
//     let arr1 = [];
//     for (let i = 0; i <= 2; i++) {
//         arr1[i] = Number(prompt('Enter a number:'));
//     }
//     let max = arr1[arr1.length-1];
//     for (let i = arr1.length-1; i >= 0; i--) {
//         if (arr1[i] > max) {
//             max = arr1[i];
//         }
//     }
//     return max
// }
// console.log(`Maximum value is ${max3()}`);

// 5) створити функцію яка повертає найбільше число з масиву

// let max3 = () => {
//     let arr1 = prompt("Enter numbers using coma as a separator:");
//     let arr2 = arr1.split(',');
//     let arr3 = [];
//     for (let i = 0; i < arr2.length; i++) {
//         arr3[i] = parseFloat(arr2[i]);
//     }
//     let max = arr3[arr3.length - 1];
//     for (let i = arr3.length - 1; i >= 0; i--) {
//         if (arr3[i] > max) {
//             max = arr3[i];
//         }
//     }
//     return max
// }
//
// console.log(max3());

// 6) створити функцію яка повертає найменьше число з масиву

// let minN = () => {
//     let arr1 = prompt("Enter numbers using coma as a separator:");
//     let arr2 = arr1.split(',');
//     let arr3 = [];
//     for (let i = 0; i < arr2.length; i++) {
//         arr3[i] = parseFloat(arr2[i]);
//     }
//     let min = arr3[arr3.length - 1];
//     for (let i = arr3.length - 1; i >= 0; i--) {
//         if (arr3[i] < min) {
//             min = arr3[i];
//         }
//     }
//     return min
// }
//
// console.log(minN());

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// let sumN = () => {
//     let arr1 = prompt("Enter numbers using coma as a separator:");
//     let arr2 = arr1.split(',');
//     let arr3 = [];
//     for (let i = 0; i < arr2.length; i++) {
//         arr3[i] = parseFloat(arr2[i]);
//     }
//     let sum = arr3[arr3.length - 1];
//     for (let i = arr3.length - 2; i >= 0; i--) {
//             sum += arr3[i];
//     }
//     return sum
// }
//
// console.log(sumN());

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let averSumN = () => {
//     let arr1 = prompt("Enter numbers using coma as a separator:");
//     let arr2 = arr1.split(',');
//     let arr3 = [];
//     for (let i = 0; i < arr2.length; i++) {
//         arr3[i] = parseFloat(arr2[i]);
//     }
//     let sum = arr3[arr3.length - 1];
//     for (let i = arr3.length - 2; i >= 0; i--) {
//             sum += arr3[i];
//     }
//     return sum/arr3.length
// }
//
// console.log(averSumN());

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let keys = x => {
//     let arr1 = [];
//     for (const xElement in x) {
//         for (const x2Element in x[xElement]) {
//             arr1.push(x2Element);
//         }
//     }
//     return arr1;
// }
// console.log(keys(arr));

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let keys = x => {
//     let arr1 = [];
//     let arr2 = [];
//     for (const xElement in x) {
//         arr1.push(Object.values(x[xElement]));
//         for (const x2Element of arr1[xElement]) {
//             arr2.push(x2Element);
//         }
//     }
//     return arr2;
// }
// console.log(keys(arr));

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
//
// arr1 = [1, 2, 3, 4];
// arr2 = [2, 3, 4, 5];
// let arrSum = (x, y) => {
//     let sumArr = [];
//     if (x.length === y.length) {
//         for (let i = 0; i < x.length; i++) {
//             sumArr.push(x[i] + y[i])
//         }
//         return sumArr
//     }
//     console.log(sumArr[0] = 'Масиви різної довжини');
// }
// console.log(arrSum(arr1, arr2));

// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

// let maxMin = () => {
//     let arr1 = prompt("Enter numbers using coma as a separator:");
//     let arr2 = arr1.split(',');
//     let arr3 = [];
//     for (let i = 0; i < arr2.length; i++) {
//         arr3[i] = parseFloat(arr2[i]);
//     }
//     let max = arr3[arr3.length - 1];
//     for (let i = arr3.length - 1; i >= 0; i--) {
//         if (arr3[i] > max) {
//             max = arr3[i];
//         }
//     }
//     console.log(max);
//     let min = arr3[arr3.length - 1];
//     for (let i = arr3.length - 1; i >= 0; i--) {
//         if (arr3[i] < min) {
//             min = arr3[i];
//         }
//     }
//     return min
// }
// console.log(maxMin());

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let keysOrValues = x => {
//     let choose = confirm('Хочете отримати ключі масиву?')
//     if (choose) {
//         let arr1 = [];
//         for (const xElement in x) {
//             for (const x2Element in x[xElement]) {
//                 arr1.push(x2Element);
//             }
//         }
//         return arr1;
//     } else {
//         alert("Надаємо значення об'єктів!");
//         let arr1 = [];
//         let arr2 = [];
//         for (const xElement in x) {
//             arr1.push(Object.values(x[xElement]));
//             for (const x2Element of arr1[xElement]) {
//                 arr2.push(x2Element);
//             }
//         }
//         return arr2;
//     }
// }
// console.log(keysOrValues(arr));


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let change = (arr, i) => {
//     arr = prompt("Enter numbers of massive using coma as a separator:");
//     let arr2 = arr.split(',');
//     let arr3 = [];
//     for (let i = 0; i < arr2.length; i++) {
//         arr3[i] = parseFloat(arr2[i]);
//     }
//     i = +prompt('Enter index:');
//     arr2.length = 0;
//     let a = arr3[i];
//     let b = arr3[i + 1];
//     for (let j = 0; j <= i - 1; j++) {
//         arr2.push(arr3[j])
//     }
//     arr2.push(b);
//     arr2.push(a);
//     for (let j = i + 2; j < arr3.length; j++) {
//         arr2.push(arr3[j])
//     }
//     return arr2;
// }
// console.log(change());

//
// - Сворити функцію яка буде переносити елементи зі значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Довжина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//

// let changeZeros = () => {
//     let arr = prompt("Enter numbers of massive using coma as a separator:");
//     let arr2 = arr.split(',');
//     let arr3 = [];
//     for (let i = 0; i < arr2.length; i++) {
//         arr3[i] = parseFloat(arr2[i]);
//     }
//     arr2.length = 0;
//     for (let i = arr3.length - 1; i >= 0; i--) {
//         if (arr3[i] !== 0) {
//             arr2.unshift(arr3[i])
//         } else {
//             arr2.push(arr3[i])
//         }
//     }
// return arr2
// }
// console.log(changeZeros());

// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//

// let n1 = '    Harry       Potter      ';
// let n2 = '    Ron       Whisley      ';
// let n3 = '    Hermione       Granger      ';
// let normalize = x => {
//     let wo_space = x.trim();
//     let arr = wo_space.split(' ');
//     let b = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== '') {
//             b +=` ${arr[i]}`;
//         }
//     }
//     return b.trim()
// }
// console.log(normalize(n1));
// console.log(normalize(n2));
// console.log(normalize(n3));

// ============================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function pushator() {
//     const blockDiv = document.createElement("div");
//     blockDiv.innerText = "Hello owu";
//     document.body.appendChild(blockDiv);
// }
// pushator();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function pushator(type, text) {
//     const elementType = document.createElement(type);
//     elementType.innerText = text;
//     document.body.appendChild(elementType);
// }
// let type1 = 'h1';
// let text1 = 'Hello Alex!'
// pushator(type1, text1);

// - приймає масив автомобілів (можна взяти з попередніх дз )
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Всі властивості авто в одному блоці
// arr1 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function pushator(arr = [], type = '') {
//     for (const arrElement in arr) {
//         const blockQualities = document.createElement(type);
//         blockQualities.style.border = '3px solid blue';
//         document.body.appendChild(blockQualities);
//         let elementType = [];
//         for (const arr2Element in arr[arrElement]) {
//             elementType += `${arr2Element}: ${arr[arrElement][arr2Element]} <br> `;
//         }
//         blockQualities.innerHTML = elementType;
//     }
// }
//
// let type1 = 'h1';
// pushator(arr1, type1);


// - приймає масив автомобілів (можна взяти з попередніх дз )
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
arr1 = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function pushator(arr = [], type = '') {
    for (const arrElement in arr) {
        const blockQualities = document.createElement(type);
        blockQualities.style.border = '3px solid blue';
        document.body.appendChild(blockQualities);
        for (const arr2Element in arr[arrElement]) {
            const elementType = document.createElement(type);
            elementType.innerHTML = `${arr2Element}: ${arr[arrElement][arr2Element]}`;
            elementType.style.border = '2px solid green';
            blockQualities.appendChild(elementType);
        }
    }
}

let type1 = 'h1';
pushator(arr1, type1);


// // ******************* НАЗАД В МИНУЛЕ *********************** //
//
//
//
// ============================================================================================
//                              ЗАДАЧІ ПІДВИЩЕНОГО РІВНЯ СКЛАДНОСТІ
// ============================================================================================
//
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]