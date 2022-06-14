// // 1) створити функцію яка приймає масив та виводить його
// let arr1 = [34, 45, 45, 56, 2, 'array finish']
// let arrFunction = (arr) => {
//     for (let i of arr){
//         console.log(i)
//     }
// }
// arrFunction(arr1)
// // 2) створити функцію, яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
//
// let randomArray = (x) => {
//     let arr2 = []
//     for (let i = 0; i < x; i++){
//         arr2[i] = Number(Math.round(Math.random()*100))
//     }
//     arrFunction(arr2)
// }
// randomArray(23)
// // 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minFunc = (a,b,c) => {
//     if (a <= b && a <= c){
//         console.log(`Min number is ${a}`)
//         return a
//     }
//     else if (b <= a && b <= c){
//         console.log(`Min number is ${b}`)
//         return b
//     }
//     else {
//         console.log(`Min number is ${c}`)
//         return c
//     }
// }
// minFunc(6, 5, 3)
// // 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxFunc = (a,b,c) => {
//     if (a >= b && a >= c){
//         console.log(`Max number is ${a}`)
//         return a
//     }
//     else if (b >= a && b >= c){
//         console.log(`Max number is ${b}`)
//         return b
//     }
//     else {
//         console.log(`Max number is ${c}`)
//         return c
//     }
// }
// maxFunc(6, 5, 3)

// // 5) створити функцію яка повертає найбільше число з масиву
// let maxInArr = (arr) => {
//     let max = arr[0];
//     for(let i=1; i < arr.length; i ++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// let testArr = [45, 2, 'mother', 34, 67, 185]
// console.log(`Max value in array is: ${maxInArr(testArr)}`)
//
// // 6) створити функцію яка повертає найменьше число з масиву
//
// let minInArr = (arr) => {
//     let min = arr[0];
//     for(let i=1; i < arr.length; i ++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }
//     return min
// }
// console.log(`Min value in array is: ${minInArr(testArr)}`)

// // 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let sumArr = numberArr => {
//     let sumOfArr = null
//     for (let i of numberArr){
//         sumOfArr += i;
//     }
//     return sumOfArr
// }
// let testArr1 = [1, 2, 3, 4, 43]
// console.log(sumArr(testArr1))
//
// // 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let averArr = numberArr => {
//     let sumOfArr = null
//     for (let i of numberArr){
//         sumOfArr += i;
//     }
//     return sumOfArr / numberArr.length
// }
// console.log(averArr(testArr1))
// // 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// // EXAMPLE:
// // [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// let keyOfObjects = arrayWithObjects => {
//     let objectsArray = [];
//     for (let i of arrayWithObjects){
//         for (let key in i){
//             objectsArray.push(key);
//         }
//
//         // objectsArray.push(Object.keys(i))
//     }
//     return objectsArray
// }
// let profile = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// console.log(keyOfObjects(profile))
//
// // 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// // EXAMPLE:
// // [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// let itemsOfObjects = arrayWithObjects => {
//     let itemsArray = [];
//     for (let i of arrayWithObjects){
//         for (let key in i){
//             itemsArray.push(i[key]);
//         }
//     }
//     return itemsArray
// }
// console.log(itemsOfObjects(profile))
// // 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //   EXAMPLE:
// //   [1,2,3,4]
// //   [2,3,4,5]
// //   результат
// //   [3,5,7,9]
//
// let sumByIndex = (arr1, arr2) =>{
//     let sumArrByIndex = [];
//     for (let a = 0; a < arr1.length; a++){
//         sumArrByIndex.push(arr1[a] + arr2[a]);
//         }
//     return sumArrByIndex
// }
// let testArr1 = [1,2,3,4];
// let testArr2 = [2,3,4,5];
// console.log(sumByIndex(testArr1, testArr2))
// //
// //
// // ============================================================================================
// //
// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function maxMin(){
//     let maxV = arguments[0];
//     let minV = arguments[0];
//     for (const argument of arguments){
//         if (maxV < argument) {
//             maxV = argument
//         }
//         if (minV > argument) {
//             minV = argument
//         }
//     }
//     console.log(`Max value = ${maxV}`)
//     return `Min value = ${minV}`
// }
//
// console.log(maxMin(5,6,7,2,1,120,-1,-56))

// // - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
// //   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// let keyOrValue = (arrayWithObjects, choice = 'key') => {
//     let objectsArray = [];
//     if (choice === 'key') {
//         for (let i of arrayWithObjects){
//             for (let key in i){
//                 objectsArray.push(key);
//             }
//         }
//         return objectsArray
//     }
//     else if (choice === 'value'){
//         for (let i of arrayWithObjects){
//             for (let key in i){
//                 objectsArray.push(i[key]);
//             }
//         }
//         return objectsArray
//     }
//     else {
//         return 'Make correct choice between "key" or "value"!'
//     }
// }
// let profile = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// console.log(keyOrValue(profile, 'key'))

// // - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// //   EXAMPLE:
// //   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// //   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// //   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// let changeElements = (changingArray, index) => {
//     if (index < 0 || index >= changingArray.length-1){
//         return 'Please, choose a correct index for changing!'
//     }
//     else {
//         let first = changingArray[index];
//         let second = changingArray[index+1];
//         changingArray[index] = second;
//         changingArray[index + 1] = first;
//         return changingArray
//     }
// }
// let testArr = [9,8,0,4]
// console.log(changeElements(testArr, 2))
//
// //
// // - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // EXAMPLE:
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// // [0,0,1,0]   => [1,0,0,0]
//
// let zeroToEnd = arrayWithZeros => {
//     let newArr = []
//     for (let i = 0; i < arrayWithZeros.length; i++){
//         if (arrayWithZeros[i] !== 0){
//             newArr.push(arrayWithZeros[i]);
//         }
//     }
//     for (let i = 0; i < arrayWithZeros.length; i++){
//         if (i < newArr.length){
//             arrayWithZeros[i] = newArr[i];
//         }
//         else {
//             arrayWithZeros[i] = 0;
//         }
//     }
//     return arrayWithZeros
// }
// let arrForTest = [1,0,6,0,3]
// console.log(zeroToEnd(arrForTest))
//
// // - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
//
// let validName = name =>{
//     let newName = name.trim();
//     let oneSpace = newName.replace(' ','_');
//     let allSpaces = oneSpace.split(' ').join('');
//     let finalName = allSpaces.replace('_', ' ');
//     return finalName
// }
// console.log(validName(n1))
// console.log(validName(n2))
// console.log(validName(n3))
// //
// ============================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// // Створити функцію яка :
// // - Додає в боді блок з текстом "Hello owu"
// let addText = () => {
//     const divElement = document.createElement('div');
//     divElement.innerText = "Hello owu";
//     document.body.appendChild(divElement);
// }
// addText()
// // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// let addTagText = (tagName, text) => {
//     const divElement = document.createElement(tagName);
//     divElement.innerText = text;
//     document.body.appendChild(divElement);
// }
// addTagText('p', "What's your name?");


let users = [{
  name: 'vasya',
  age: 31,
  status: false,
  address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
  name: 'petya',
  age: 30,
  status: true,
  address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
  name: 'kolya',
  age: 29,
  status: true,
  address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
  name: 'olya',
  age: 28,
  status: false,
  address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
  name: 'max',
  age: 30,
  status: true,
  address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
  name: 'anya',
  age: 31,
  status: false,
  address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
  name: 'oleg',
  age: 28,
  status: false,
  address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
  name: 'andrey',
  age: 29,
  status: true,
  address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
  name: 'masha',
  age: 30,
  status: true,
  address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
  name: 'olya',
  age: 31,
  status: false,
  address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
  name: 'max',
  age: 31,
  status: true,
  address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];
// - приймає масив автомобілів (можна взяти з попередніх дз ) та  індентифікатор елементу,
// в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок та додати його в елемент,
// індентифікатор якого ви отримали. Всі властивості авто в обному блоці

// let arrayInTeg = (profile, tagName) =>{
//     for (const element of profile){
//         const newTag = document.createElement(tagName);
//         newTag.style.border = '3px solid blue';
//         newTag.innerHTML = JSON.stringify(element);
//         document.body.appendChild(newTag)
//     }
// }
//
// arrayInTeg(users, 'p')

// - приймає масив автомобілів (можна взяти з попередніх дз ) та індентифікатор елемнту,
// в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок та додати його в елемент,
// індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомобіля свій блок

let arrayInTeg2 = (profile, tagNameMain, tagName) =>{
    for (const element of profile){
        const newTag = document.createElement(tagNameMain);
        newTag.style.border = '3px solid blue';
        document.body.appendChild(newTag);
        for (const character in element){
            const tagInside = document.createElement(tagName);
            const tagInsideValue = document.createElement(tagName);
            tagInside.style.border = '2px solid red';
            tagInside.innerHTML = JSON.stringify(character);
            tagInsideValue.innerHTML = JSON.stringify(element[character]);
            newTag.appendChild(tagInside);
            tagInside.appendChild(tagInsideValue);
        }
    }
}
arrayInTeg2(users, 'div', 'li')

// // ******************* НАЗАД В МИНУЛЕ *********************** //