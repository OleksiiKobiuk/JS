// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
// const textArea = document.getElementById('exc1');
// textArea.onchange = () => {
//     localStorage.setItem('text', textArea.value);
// }
// textArea.value = localStorage.getItem('text');
// console.log(textArea.value);

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
//
// const myForm1 = document.forms.myForm1;
// for (const myForm1Element of myForm1) {
//     if (myForm1Element.type === "checkbox" || myForm1Element.type === "radio") {
//         myForm1Element.checked = JSON.parse(localStorage.getItem(myForm1Element.id));
//     } else {
//         myForm1Element.value = localStorage.getItem(myForm1Element.id)
//     }
// }
// myForm1.oninput = () => {
//     for (const element of myForm1) {
//         if (element.type === "checkbox" || element.type === "radio") {
//             localStorage.setItem(element.id, element.checked);
//         } else {
//             localStorage.setItem(element.id, element.value);
//         }
//     }
// }
// // myForm1.oninput = ({target:{type,id,checked,value}}) => {  // чомусь даний метод не спрацьовує, не оновлюються значення radio
// //     for (const element of myForm1) {
// //         if (type === "checkbox" || type === "radio") {
// //             console.log(id, checked);
// //             localStorage.setItem(id, checked);
// //         } else {
// //             localStorage.setItem(id, value);
// //         }
// //     }
// // }

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
const textArea = document.getElementById('exc1');
const but1 = document.getElementById('but1');
const back = document.getElementById('back');
const forward = document.getElementById('forward');
let curIndex = 0;
let maxIndex = 0;
let keyName = 'textArea';
if (localStorage.getItem('curIndex')) {
    curIndex = JSON.parse(localStorage.getItem('curIndex'));
    keyName = curIndex + 'textArea';
    maxIndex = JSON.parse(localStorage.getItem('maxIndex'));
    textArea.value = localStorage.getItem(keyName);
}
console.log(curIndex);

but1.onclick = () => {
    curIndex++;
    maxIndex = Math.max(maxIndex, curIndex);
    keyName = curIndex + 'textArea';
    localStorage.setItem(keyName, textArea.value);
    localStorage.setItem('curIndex', curIndex);
    localStorage.setItem('maxIndex', maxIndex);

}
back.onclick = () => {
    curIndex--;
    if (curIndex < 0) {
        curIndex = 0
    }
    keyName = curIndex + 'textArea';
    localStorage.setItem('curIndex', curIndex);
    textArea.value = localStorage.getItem(keyName);
}
forward.onclick = () => {
    curIndex++;
    if (curIndex > maxIndex) {
        curIndex = maxIndex
    }
    keyName = curIndex + 'textArea';
    localStorage.setItem('curIndex', curIndex);
    textArea.value = localStorage.getItem(keyName);

}
console.log(keyName);
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
