// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так,
// щоб при кліку на кнопку зникавл елемент з id="text".
// const newElem = document.createElement('div');
// newElem.setAttribute('id', 'text');
// newElem.style.backgroundColor = 'green';
// newElem.style.height = '60px';
// document.body.appendChild(newElem);
// console.log(newElem);
// newElem.onclick = () => {
//     newElem.hidden = true;
// }

// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// const but = document.getElementById('but1');
// but.onclick = () => {
//     but.hidden = true;
// }

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18,
//     та повідомити про це користувача

// const numb = document.getElementById('number');
// const but = document.getElementById('but1');
// but.onclick = () => {
//     if (parseInt(numb.value) < 18) {
//         alert('Your age is less than 18! Go away!')
//     }
// }

// - Створіть меню, яке розгортається/згортається при клику

// const menu1 = document.getElementById('menu');
// const but = document.getElementById('but1');
// const arr1 = [];
// but.onclick = (ev) => {
//     arr1.push(ev);
//     menu1.hidden = arr1.length % 2 !== 0;
// }

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.

// const comments = [
//     {
//         "postId": 1,
//         "id": 1,
//         "title": "id labore ex et quam laborum",
//         "email": "Eliseo@gardner.biz",
//         "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//     },
//     {
//         "postId": 1,
//         "id": 2,
//         "title": "quo vero reiciendis velit similique earum",
//         "email": "Jayne_Kuhic@sydney.com",
//         "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//     },
//     {
//         "postId": 1,
//         "id": 3,
//         "title": "odio adipisci rerum aut animi",
//         "email": "Nikita@garfield.biz",
//         "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
//     },
//     {
//         "postId": 1,
//         "id": 4,
//         "title": "alias odio sit",
//         "email": "Lew@alysha.tv",
//         "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
//     },
//     {
//         "postId": 1,
//         "id": 5,
//         "title": "vero eaque aliquid doloribus et culpa",
//         "email": "Hayden@althea.biz",
//         "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
//     },
//     {
//         "postId": 2,
//         "id": 6,
//         "title": "et fugit eligendi deleniti quidem qui sint nihil autem",
//         "email": "Presley.Mueller@myrl.com",
//         "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
//     },
//     {
//         "postId": 2,
//         "id": 7,
//         "title": "repellat consequatur praesentium vel minus molestias voluptatum",
//         "email": "Dallas@ole.me",
//         "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
//     },
//     {
//         "postId": 2,
//         "id": 8,
//         "title": "et omnis dolorem",
//         "email": "Mallory_Kunze@marie.org",
//         "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
//     },
//     {
//         "postId": 2,
//         "id": 9,
//         "title": "provident id voluptas",
//         "email": "Meghan_Littel@rene.us",
//         "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
//     },
//     {
//         "postId": 2,
//         "id": 10,
//         "title": "eaque et deleniti atque tenetur ut quo ut",
//         "email": "Carmen_Keeling@caroline.comment",
//         "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
//     }];
// const mainElement = document.getElementById('main');
//
// comments.forEach(element => {
//     const elementDiv = document.createElement('div');
//     const titleComments = document.createElement('p');
//     const bodyComments = document.createElement('p');
//     const butComments = document.createElement('button');
//     butComments.onclick = () => {
//         bodyComments.hidden = !bodyComments.hidden;
//     }
//     // const butComments = document.getElementById('but1');
//     // elementDiv.appendChild(butComments);
//     butComments.innerText = 'Hide comment';
//     titleComments.innerHTML = element.title;
//     bodyComments.innerHTML = element.body;
//     elementDiv.appendChild(butComments);
//     elementDiv.appendChild(titleComments);
//     elementDiv.appendChild(bodyComments);
//
//     mainElement.appendChild(elementDiv);
// });


// - Створити 2 форми  по 2 інпути в кожній. створити кнопку, при кліку на яку зчитується та
// виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const butForms = document.createElement('button');
// butForms.innerText = 'Click me';
// document.body.appendChild(butForms);
// const myForm1 = document.forms.myForm1; // по name форми
// const myForm2 = document.forms.form2;  // по id форми
// butForms.onclick = (ev) => {
//     for (const element of myForm1) {
//         console.log(element.value)
//     }
//     for (const item of myForm2) {
//         console.log(item.value)
//     }
// }
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

// <table>
//   <tr>                // стрічка
//     <td>John</td>     // стовпчик
//     <td>Doe</td>
//     <td>Doe</td>
//   </tr>
// </table>
// const divMain = document.getElementById('main')
// const tableFunc = (str, col, tagElement = 'body') => {
//     const tableCreate = document.createElement('table');
//     for (let i = 0; i < str; i++) {
//         let strCreate = document.createElement('tr');
//         for (let j = 0; j < col; j++) {
//             let colCreate = document.createElement('td');
//             colCreate.innerText = `|${i} : ${j}|`;
//             strCreate.appendChild(colCreate);
//                     }
//         tableCreate.appendChild(strCreate);
//     }
//     tagElement.appendChild(tableCreate);
// }
//  tableFunc(5, 6, divMain);


// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
//

const arrImg = [
    {
        alt: 'car1',
        url: 'img/car1.jpg'
    },
    {
        alt: 'car2',
        url: 'img/car2.jpg'
    },
    {
        alt: 'car3',
        url: 'img/car3.jpg'
    }
]
const butLeft = document.getElementById('butLeft');
const butRight = document.getElementById('butRight');
const imgBlock = document.getElementById('imgBlock');
let curIndex = 0;
imgBlock.style.width = '500px';
imgBlock.style.height = '350px';
butLeft.onclick = () => {
    if (curIndex - 1 < 0) {
        curIndex = arrImg.length - 1;
    } else {
        curIndex = curIndex - 1;
    }
    imgBlock.src = arrImg[curIndex].url;
    imgBlock.alt = arrImg[curIndex].alt;
}
butRight.onclick = () => {
    if (curIndex + 1 > arrImg.length - 1) {
        curIndex = 0;
    } else {
        curIndex = curIndex + 1;
    }
    // imgBlock.src = arrImg[curIndex].url;
    imgBlock.alt = arrImg[curIndex].alt;
    imgBlock.setAttribute('src', arrImg[curIndex].url)
}

// ______________________________________________________________________________________________________________________________________________________
//                                                               РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках,
// які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
// -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, comment: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
