const cleanLaundry = 'Прання завершено';
askMaster = () => {
    console.log('Телефоную майстру')
}
washDog = () => {
    console.log('Помита собака')
}

function wakeUp(alarmCall, callback) {
    if (!alarmCall) {
        console.log('Все ще сплю');
        setTimeout(() => {
            callback('Дзвенить другий будильник');
        }, 2000)
        setTimeout(() => {
            callback('Прокинувся');
        }, 3000)
        return
    }
    callback(null, 'Я прокинувся');
}

function doLaundry(electicity, callback) {
    setTimeout(() => {
        console.log('Одяг завантажено');
        console.log('Прання розпочато');
    }, 3000)
    if (!electicity) {
        setTimeout(() => {
            callback('Неможливо завершити прання');
            callback('Відсутня електроенергія');
            askMaster()
        }, 3000)
        return
    }
    setTimeout(() => {
        washDog()
    }, 500);
    setTimeout(() => {
        callback(null, cleanLaundry);

    }, 2000)
}

wakeUp(false, (err, getUp) => {
    if (err) {
        console.log(err);
        doLaundry(false, (err, cleanLaundry) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(cleanLaundry)
        });
        return
    }
    console.log(getUp);
})
//
// doLaundry(false, (err, cleanLaundry) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(cleanLaundry)
// });


// // doLaundry(false, (err, cleanLaundry) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(cleanLaundry)
//     }
// );
// doLaundry(false, (err, cleanLaundry) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(cleanLaundry)
//     }
// );

//   // Иногда наша стиральная машина ломается
//   // Лучше обработайте эту возможную ошибку
//   if (err) throw err;
//   // Если нет никакой ошибки, то переключаемся на сушку белья после того, как постиралось бельё
//   // Та-да! Наш обратный звонок (вызов) оповестит нас когда стирка завершится
//   switchToDryer(cleanLaundry);
// });
//
// console.log(cleanLaundry);


// function gotToVacation(money, covidTest, city, cb) {
//     console.log(`Доюрого дня. У нас гарячі тури в ${city}`);
//
//     if (covidTest) {
//         //     ERROR              SUCCESS
//         cb('Ми вас не пастимо');
//         return;
//     }
//
//     console.log('На яку суму розраховуєте?');
//
//     if (money < 1000) {
//         //             ERROR                     SUCCESS
//         cb('Нажалт, за такі гроші лише у Бердичів');
//         return;
//     }
//
//     //ERROR           SUCCESS
//     cb(null, `Ваш політ в ${city} заброньовано`);
// }
//
// gotToVacation(
//     0,
//     true,
//     'Dakha',
//     function (err, success) {
//         if (err) {
//             console.warn('Цього року нікуда не литемо, тому, що')
//             console.error(err);
//             return;
//         }
//
//         console.log('Пакуй валізи. Щавтра летимо в відпустку')
//     }
// )
//
// gotToVacation(
//     700,
//     false,
//     'Marmaris',
//     function (err, data) {
//         if (err) {
//             console.warn('ДА Я НА НИХ В СУД ПОДАМ. МЕНІ СКАЗАЛИ ....')
//             console.error(err);
//             return;
//         }
//
//         console.log('Мала, я наршав нам відпустку, йоу')
//     }
// )
//
// gotToVacation(
//     2000,
//     false,
//     'Marmaris',
//     (err, data) => {
//         if (err) {
//             console.warn('Шось не так, але нічого. Полетимо іншим разом')
//             console.error(err);
//             return;
//         }
//         console.log(data);
//
//         console.log('Мала, я наршав нам відпустку, йоу')
//     }
// )