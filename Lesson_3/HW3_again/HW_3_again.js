// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// // 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// //     a) отримує текст з параграфа з id "content"
// let content = document.getElementById('content');
// console.log(content);
//
// //     b) отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules');
// console.log(rules);
// //     c) замініть текст параграфа з id 'content' на будь-який інший
// content.innerText = "Доброго вечора, ми з України!"
//
// //     d) замініть текст параграфа з id 'rules' на будь-який інший
// rules.innerText = "Україна переможе!"
//
// //     e) змініть кожному елементу колір фону на червоний
// content.style.backgroundColor = 'red'
// rules.style.backgroundColor = 'red'
// //     f) змініть кожному елементу колір тексту на синій
// content.style.color = 'blue'
// rules.style.color = 'blue'
// //     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// let arr_rules = document.getElementById('rules')
// console.log(arr_rules)
// //     h) отримати всі елементи з класом fc_rules
// const arr_fc_rules = document.getElementsByClassName('fc_rules')
// console.log(arr_fc_rules)
// //     i) поміняти колір тексту у всіх елементів fc_rules на червоний
// for(let fc_rule of arr_fc_rules) {
//     fc_rule.style.color = 'red'
// }
//
//

//
// //
// let users = [{
//   name: 'vasya',
//   age: 31,
//   status: false,
//   address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//   name: 'petya',
//   age: 30,
//   status: true,
//   address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//   name: 'kolya',
//   age: 29,
//   status: true,
//   address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//   name: 'olya',
//   age: 28,
//   status: false,
//   address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//   name: 'max',
//   age: 30,
//   status: true,
//   address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//   name: 'anya',
//   age: 31,
//   status: false,
//   address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//   name: 'oleg',
//   age: 28,
//   status: false,
//   address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//   name: 'andrey',
//   age: 29,
//   status: true,
//   address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//   name: 'masha',
//   age: 30,
//   status: true,
//   address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//   name: 'olya',
//   age: 31,
//   status: false,
//   address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//   name: 'max',
//   age: 31,
//   status: true,
//   address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку

// for (let user of users) {
//     new_div = document.createElement('div');
//     new_div.innerText = JSON.stringify(user)
//     document.body.appendChild(new_div)
// }

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let user of users) {
//     let new_div = document.createElement('div');
//     new_div.innerText = `Ім'я: ${user.name} \n Вік: ${user.age} \n Статус ${user.status} \n Адреса:`
//     document.body.appendChild(new_div);
//     let city = document.createElement('p');
//     city.innerText = `City: ${user.address.city}`;
//     document.body.appendChild(city);
//     let country = document.createElement('p');
//     country.innerText = `Country: ${user.address.country}`;
//     document.body.appendChild(country);
//     let street = document.createElement('p');
//     street.innerText = `Street: ${user.address.street}`;
//     document.body.appendChild(street);
//     let houseNumber = document.createElement('p');
//     houseNumber.innerText = `House number: ${user.address.houseNumber}`;
//     document.body.appendChild(houseNumber);
// }


// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
// //
// // Взяти файл template_2.html та працювати в ньому
// // 1) Напишіть код, який :
// //     a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
// let header = document.getElementById('main_header');
// header.innerText = 'Tue-Feb'
// //     b) робить шириниу елементу ul 400px
// let ul400 = document.getElementsByTagName('ul');
// for (let ul of ul400){
//   ul.style.width = '200px';
// }
// //     c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName('linkList');
// for (const linkListElement of linkList) {
//   linkListElement.style.width = '50%';
// }
// //     d) отримує текст який зберігається в елементі з класом listElement2
// let listElement2 = document.getElementsByClassName('listElement2');
// console.log(listElement2.length);
// //     e) отримує всі елементи li та змінює ім колір фону на сірий
// let allLis = document.getElementsByTagName('li');
// for (let li of allLis) {
//   li.style.backgroundColor = 'grey'
// }
// //     f) отримує всі елементи 'a' та додає їм клас anchor
// let anchors = document.getElementsByTagName ('a');
// console.log(anchors.length)
// for (let anch of anchors) {
//   anch.classList.add('anchor')
// }
// //     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// for (let anch of anchors) {
//   if (anch.innerText === 'link3') {
//     anch.style.fontSize = '40px'
//   }
// }
// //     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// for (let anch of anchors) {
//   anch.classList.add(anch.innerText)
// }
// //     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeaders = document.getElementsByClassName('sub-header')
// // for (let subHeader of subHeaders){
// //   let backColor = prompt(`Input color:`)
// //   subHeader.style.backgroundColor = backColor
// // }
//
// //     j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment .
// //     Колір отримати з prompt()
// for (let subHeader of subHeaders){
//   if (subHeader.innerText === 'content 2 segment') {
//     let content_2 = prompt(`Input color for "content 2 segment":`);
//     subHeader.style.color = content_2;
//   }
// }
// //     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let contents_1 = document.getElementsByClassName('content_1');
// for (let content_1 of contents_1){
//   content_1.innerText = prompt('Add content')
// }
// //     l) отримати елементи p та змінити їм padding на 20px
// let peshky = document.getElementsByTagName('p');
// for(let p of peshky){
//   p.style.padding = '20px'
// }
// //     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let texts2 = document.getElementsByClassName('text2')
// for (let text2 of texts2){
//   text2.innerText = 'Feb-2021'
// }
// //
// // 2) Є масив котрий характеризує правила.
// //    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
// //    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// //    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
// //
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				}
// 			];
// //
// for (let rule of rules){
//   const h_title = document.createElement('h2');
//   const p_body = document.createElement('p');
//   h_title.innerText = `${rule.title}`;
//   document.body.appendChild(h_title);
//   p_body.innerText = `${rule.body}`;
//   document.body.appendChild(p_body);
// }

// ===========================================================================
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

let usersWithCities = []
for (let user of usersWithId){
    for (let city of citiesWithId){
        if (user.id === city.user_id){
            user.address = city;
        }
    }
}
usersWithCities = JSON.parse(JSON.stringify(usersWithId)); // копіюємо новостворений масив в новий, щоб не було лінкового посилання

for (let i of usersWithId){
    delete i.address
}
console.log(usersWithId)
console.log(usersWithCities)
