let money = 500;

// function wakeUp(alarmCall, callback) {
//     setTimeout(() => {
//         if (!alarmCall) {
//             callback('Проспав до вечора');
//             return
//         }
//         callback(null, 'Я прокинувся');
//     }, 500)
// }
//
// function doMorningExerc(exercises, callback) {
//     setTimeout(() => {
//         if (!exercises) {
//             callback(console.error('Гіподинамія шкідливо впливає на організм'));
//             return
//         }
//         callback(null, 'Зробив зарядку');
//         callback(null, 'Зарядився енергією на цілий день');
//     }, 1000)
// }
//
// function eat(eatMeal, callback) {
//     setTimeout(() => {
//         if (!eatMeal) {
//             callback('Залишився голодним');
//             return
//         }
//         callback(null, 'Смачно поїв, набрався сил');
//     }, 1000)
// }
//
// function goToWork(inTime, callback) {
//     setTimeout(() => {
//         if (inTime) {
//             callback(null, money += 500);
//             return
//         }
//         callback('Запізнився на роботу. Йди додому!')
//     }, 500)
// }
//
// function finishWork(inTime, callback) {
//     setTimeout(() => {
//         if (!inTime) {
//             callback('Доведеться пропустити тренування');
//             return
//         }
//         callback(null, 'Вперед, гарна фізична форма чекає на тебе!')
//     }, 2000)
// }
//
// function goHome(byCar, callback) {
//     setTimeout(() => {
//         if (!byCar) {
//             callback('Йти пішки додому корисно для здоров"я');
//             return
//         }
//         callback(null, 'Приїхав швидко додому')
//     }, 2000)
//
// }
//
// function doLaundry(electricity, callback) {
//     setTimeout(() => {
//         console.log('Одяг завантажено');
//         console.log('Прання розпочато');
//         if (!electricity) {
//             callback('Неможливо завершити прання');
//             callback('Відсутня електроенергія');
//             callback('Телефонуй електрику');
//             return
//         }
//         callback(null, 'Прання завершено');
//     }, 3000)
// }
//
// wakeUp(true, (err, getUp) => {
//     if (!err) {
//         console.log(getUp);
//         doMorningExerc(true, (err, exercised) => {
//             if (!err) {
//                 console.log(exercised);
//                 eat(true, (err, haveEat) => {
//                     if (!err) {
//                         console.log(haveEat);
//                         goToWork(true, (err, goToWorkInTime) => {
//                             if (!err) {
//                                 console.log(`В мене вже є ${goToWorkInTime} грн.`);
//                             } else {
//                                 console.log(err);
//                             }
//                         })
//                     } else {
//                         console.log(err)
//                     }
//                 })
//             } else {
//                 console.log(err);
//             }
//         })
//         return
//     }
//     console.log(err);
// })

// PROMISE
//
// function wakeUp(alarmCall) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (alarmCall) {
//                 resolve('Я прокинувся');
//             } else {
//                 reject('Проспав до вечора');
//             }
//         }, 500);
//     })
// }
//
// function doMorningExerc(exercises) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (exercises) {
//                 resolve('Зробив зарядку');
//                 resolve('Зарядився енергією на цілий день');
//             } else {
//                 reject('Гіподинамія шкідливо впливає на організм');
//             }
//         }, 1000);
//     })
// }
//
// function eat(eatMeal) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (eatMeal) {
//                 resolve('Смачно поїв, набрався сил');
//             } else {
//                 reject('Залишився голодним');
//             }
//         }, 1000)
//     });
// }
//
// function goToWork(inTime) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (inTime) {
//                 resolve(money += 500);
//             } else {
//                 reject('Запізнився на роботу. Йди додому!')
//             }
//         }, 500)
//     })
// }
//
// wakeUp(true)
//     .then(value => {
//         console.log(value);
//         return doMorningExerc(true);
//     })
//     .then(value => {
//         console.log(value);
//         return eat(true);
//     })
//     .then(value => {
//         console.log(value);
//         return goToWork(true);
//     })
// .then(value => {
//         console.log(`В мене вже є ${value} грн.`);
//     })
//     .catch(reason => {
//         console.error(reason)
//     })

// ASYNC___________________________________________

function wakeUp(alarmCall) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (alarmCall) {
                resolve('Я прокинувся');
            } else {
                reject('Проспав до вечора');
            }
        }, 500);
    })
}

function doMorningExerc(exercises) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exercises) {
                resolve('Зробив зарядку');
                resolve('Зарядився енергією на цілий день');
            } else {
                reject('Гіподинамія шкідливо впливає на організм');
            }
        }, 1000);
    })
}

function eat(eatMeal) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eatMeal) {
                resolve('Смачно поїв, набрався сил');
            } else {
                reject('Залишився голодним');
            }
        }, 1000)
    });
}

function goToWork(inTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (inTime) {
                resolve(money += 500);
            } else {
                reject('Запізнився на роботу. Йди додому!')
            }
        }, 500)
    })
}

async function workingDay() {
    try {
        let wd = await wakeUp(true);
        console.log(wd);

        wd = await doMorningExerc(true);
        console.log(wd);


        wd = await eat(true);
        console.log(wd);


        wd = await goToWork(true);
        console.log(`В мене вже є ${wd} грн.`);

    } catch (err){
        console.error(err);
    }
}

workingDay();

// doLaundry(false, (err, cleanLaundry) => {
//     if (!err) {
//         console.log(cleanLaundry);
//         return;
//     }
//     console.log(err)
// });

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