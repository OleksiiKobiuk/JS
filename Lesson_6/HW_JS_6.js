// // 1) Створити масив з 20 чисел та:
// //
// // let arr = [23, 33, 43, 45, 56, 123, 45, 56, 36, 18, 43, 18, 67, 200, 100, 345, 54, 1, -1, 0];
// //
// // //  a) відсортувати його від меншого до більшого.
// //
// // let arrSort = arr.sort((a, b) => a - b);
// //
// // //  b) відсортувати його від більшого до меншого.
// //
// // arrSort = arr.sort((a, b) => b - a);
// //
// // //  c) Відфілтрувати числа які є кратними 3.
// //
// // let filtrArr = arr.filter(value => value % 3 === 0);
// //
// // //  d) Відфілтрувати числа які є більшими за 10.
// //
// // let filtrArrMore = arr.filter(value => value > 10);
// //
// // //  e) Проітерувати його forEach та вивести кожен елемент за допомогою document.write
// //
// // arr.forEach(value => document.write(`${value} <br>`));
// //
// // //  f) За допомогою map збільшити кожен елемент в масиві в три рази.
// //
// // let map = arr.map(number => number * 3);
// //
// // //  g) Порахувати загальну суму всіх елментів у масиві (reduce)
// //
// // let sumArr = arr.reduce((acc, cur) => (acc + cur), 0);
// //
// //
// // //
// // console.log(arrSort);
// // console.log(arr);
// // console.log(filtrArr);
// // console.log(filtrArrMore);
// // console.log(map);
// // console.log(sumArr);
// //
// // // 2) Створити масив з 20 стрічок та:
// // let strings = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet,', 'consectetur', 'adipisicing', 'elit.', 'Accusamus', 'cupiditate',
// //     'fuga', 'ipsam', 'nostrum', 'quas', 'qui', 'quo', 'rem', 'tenetur', 'veniam', 'voluptas'];
// // //  a) Відсортувати його в алфавітному порядку
// // let sortString = strings.sort();
// // //  b) Відсортувати в зворотньому порядку
// // let sortStringRev = strings.sort((a, b) => {
// //     if (a < b) {
// //         return 1
// //     }
// //     return -1
// // });
// // //  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// // let filtrStr = strings.filter(name => name.length > 4);
// // //  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// //
// // let addWords = strings.map(value => (`Sam says: ${value}`));
// //
// // //
// // console.log(sortStringRev);
// // console.log(filtrStr);
// // console.log(addWords);
// // 3) Все робити тільки за допомогою методів масивів!
// // Дано масив :
// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];
//
// // a) відсортувати його за  віком (зростання , а потім окремо спадання)
// // let newUsers = users.sort((a, b) => a.age - b.age);
// // newUsers = users.sort((a, b) => b.age - a.age);
// // console.log(users);
//
// // b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// // newUsers = users.sort((a, b) => a.name.length - b.name.length);
// // newUsers = users.sort((a, b) => b.name.length - a.name.length);
// // console.log(users);
//
// // c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// //    та зберегти це в новий масив (первинний масив залишиться без змін)
//
// let userWith = JSON.stringify(users);
// userWith = JSON.parse(userWith);
// const userWithId = userWith.map((value, index) => {
// value.id = index;
// return value
// });
// console.log(userWith);
// console.log(userWithId);
// console.log(users);

// // d) відсортувати його за індентифікатором
//
// userIdSort = userWith.sort((a, b) => b.id - a.id);
// console.log(userIdSort);
//
// // e) Всі хто одружений мають попасти у новий масив та отримати квартиру (reduce)
// //
// let withFlat = userWith.reduce((acc, cur) => {
//     if (cur.isMarried) {
//         cur.flat = true;
//         acc.push(cur);
//     }
//     return acc;
// }, []);
// console.log(withFlat);
// console.log(userWith); // чому масив userWith знову змінюється?

// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// const cars = [
//     {
//         producer: "subaru",
//         model: "wrx",
//         year: 2010,
//         color: "blue",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 400
//     },
//     {
//         producer: "subaru",
//         model: "legacy",
//         year: 2007,
//         color: "silver",
//         type: "sedan",
//         engine: "ez30",
//         volume: 3,
//         power: 250
//     },
//     {
//         producer: "subaru",
//         model: "tribeca",
//         year: 2011,
//         color: "white",
//         type: "jeep",
//         engine: "ej20",
//         volume: 2,
//         power: 300
//     },
//     {
//         producer: "subaru",
//         model: "leone",
//         year: 1998,
//         color: "yellow",
//         type: "sedan",
//         engine: "ez20x",
//         volume: 2,
//         power: 140
//     },
//     {
//         producer: "subaru",
//         model: "impreza",
//         year: 2014,
//         color: "red",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 200
//     },
//     {
//         producer: "subaru",
//         model: "outback",
//         year: 2014,
//         color: "red",
//         type: "hachback",
//         engine: "ej204",
//         volume: 2,
//         power: 165
//     },
//     {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
//     {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
//     {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
//     {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
//     {
//         producer: "mercedes",
//         model: "e200",
//         year: 1990,
//         color: "silver",
//         type: "sedan",
//         engine: "eng200",
//         volume: 2,
//         power: 180
//     },
//     {
//         producer: "mercedes",
//         model: "e63",
//         year: 2017,
//         color: "yellow",
//         type: "sedan",
//         engine: "amg63",
//         volume: 3,
//         power: 400
//     },
//     {
//         producer: "mercedes",
//         model: "c250",
//         year: 2017,
//         color: "red",
//         type: "sedan",
//         engine: "eng25",
//         volume: 2.5,
//         power: 230
//     }
// ];
// //
// // Відфільтрувати масив за наступними крітеріями :
// console.log(cars);
// // - двигун більше 3х літрів
//
// let volume3 = cars.filter(value => value.volume > 3);
// console.log(volume3);
//
// // - двигун = 2л
//
// let volume2 = cars.filter(value => value.volume === 2);
// console.log(volume2);
//
// // - виробник мерс
//
// let mers = cars.filter(value => value.producer === "mercedes");
// console.log(mers);
//
// // - двигун більше 3х літрів + виробник мерседес
//
//
// let mers3 = cars.filter(value => value.volume > 3 && value.producer === "mercedes");
// console.log(mers3);
//
// // - двигун більше 3х літрів + виробник субару
//
// let subaru3 = cars.filter(value => value.volume > 3 && value.producer === "subaru");
// console.log(subaru3);
//
// // - сили більше ніж 300
//
// let power300 = cars.filter(value => value.power > 300);
// console.log(power300);
//
// // - сили більше ніж 300 + виробник субару
//
// let subaruPower300 = cars.filter(value => value.power > 300 && value.producer === "subaru");
// console.log(subaruPower300);
//
// // - мотор серіі ej
//
// let engineEj = cars.filter(value => value.engine.includes("ej"));
// console.log(engineEj);
//
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
//
// let subaruPower300Ej = cars.filter(value => value.power > 300 && value.producer === "subaru" && value.engine.includes("ej"));
// console.log(subaruPower300Ej);
//
// // - двигун меньше 3х літрів + виробник мерседес
//
// let mersLess3 = cars.filter(value => value.volume < 3 && value.producer === "mercedes");
// console.log(mersLess3);
//
// // - двигун більше 2л + сили більше 250
//
// let eng2Power250 = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(eng2Power250);
//
// // - сили більше 250  + виробник бмв
//
// let power250Bmw = cars.filter(value => value.power > 250 && value.producer === 'bmw');
// console.log(power250Bmw);

//
//
// - взять слдующий массив
const usersWithAddress = [
   {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
   {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
   {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
   {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
   {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
   {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
   {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
   {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
   {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
   {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
   {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
//
// -- Відсортувати їх по ID

let idSort = usersWithAddress.sort((a, b) => a.id - b.id);
console.log(usersWithAddress);

// -- Відсортувати їх по ID в зворотньому порядку

idSort = usersWithAddress.sort((a, b) => b.id - a.id);
console.log(usersWithAddress);

// -- Відсортувати по віку

let ageSort = usersWithAddress.sort((a, b) => a.age - b.age);
console.log(usersWithAddress);

// -- Відсортувати по віку в зворотньому порядку

ageSort = usersWithAddress.sort((a, b) => b.age - a.age);
console.log(usersWithAddress);

// -- Відсорутвати по імені

let nameSort = usersWithAddress.sort((a, b) => {
    if (a.name > b.name) {
        return 1
    } else {
        return -1
    }
});
console.log(usersWithAddress);

// -- Відсорутвати по назві вулиці

let streetSort = usersWithAddress.sort((a, b) => {
    if (a.address.street > b.address.street) {
        return 1
    } else {
        return -1
    }
});
console.log(usersWithAddress);

// -- Відсорутвати по номеру будинку

let numberSort = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
console.log(usersWithAddress);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)

let younger30 = usersWithAddress.filter(value => value.age < 30);
console.log(younger30);

// -- Залишити тільки одружених

let married = usersWithAddress.filter(value => value.isMarried);
console.log(married);

// -- Залишити тільки одружених, які молодні за 30

let marriedYounger30 = usersWithAddress.filter(value => value.isMarried && value.age < 30);
console.log(marriedYounger30);

// -- Залишити лише тих, в кого парні номери будинків.

let evenNumber = usersWithAddress.filter(value => value.address.number % 2 === 0);
console.log(evenNumber);

// -- Порахувати загальний вік всіх людей. (reduce)

let fullAge = usersWithAddress.reduce((acc,cur) => {
    return acc + cur.age;
}, 0);
console.log(fullAge);

// -- Ті, хто одружений і старший за 30 має отримати обєкти child і попасти в новий масив (reduce)

let marriedOlder30withChild = usersWithAddress.reduce((acc, cur) => {
    if (cur.isMarried && cur.age > 30){
        cur.child = true;
        acc.push(cur);
    }
    return acc;
}, []);
console.log(marriedOlder30withChild);
//
//
// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
let a = 5;
let minIndex = arr.indexOf(a);
let maxIndex = arr.lastIndexOf(a);
if (minIndex >= 0) {
    console.log(`MinIndex = ${minIndex} MaxIndex = ${maxIndex}`);
} else {
    console.log(-1);
}