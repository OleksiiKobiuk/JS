// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.
// ===

class Pc {
    constructor(ram, processor, name) {
        this.ram = ram;
        this.processor = processor;
        this.name = name;
    }

    switchOn() {
        console.log(`Power of ${this.name} is on`);
    }

    switchOff() {
        console.log(`Power of ${this.name} is off`);
    }
}

let pc1 = new Pc(64, 560, 'Lenovo');
console.log(pc1);
pc1.switchOn();
pc1.switchOff();

// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
//
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===

class Laptop extends Pc {
    constructor(ram, processor, name, screen_size) {
        super(ram, processor, name);
        this.screen_size = screen_size;
    }

    battery_p() {
        return this.processor / (this.screen_size * this.ram);
    }
}

let laptop1 = new Laptop(16, 567, 'Sony', 15);
console.log(laptop1.battery_p());

// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
class Ultrabook extends Laptop {
    constructor(ram, processor, name, screen_size, weight) {
        super(ram, processor, name, screen_size);
        this.weight = weight;
    }

    switchOn() {
        if (this.weight > 2 && (this.processor / (this.screen_size * this.ram)) < 4) {
            console.log('ERROR');
        } else {
            console.log(`Power of ${this.name} is on`);
        }

    }
}

let ultrabook1 = new Ultrabook(16, 567, 'Sony', 15, 1);
console.log(ultrabook1);
console.log(ultrabook1.battery_p());
ultrabook1.switchOn();

// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example:
//         You
//         are
//         playing * GAME_NAME *
//         with *
//         FPS_COUNT * FSP
//
// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===

class BasePc extends Pc {
    constructor(ram, processor, name, game_name) {
        super(ram, processor, name);
        this.game_name = game_name;
        this.fps_count = this.processor / this.ram;
        this.init_processor = processor;
        this.init_ram = ram;
    }

    playGame() {
        console.log(`You are playing ${this.game_name} with ${this.fps_count} FPS`);
    }

    increase_processor() {
        let a = 0;
        a += 0.01;
        this.processor = this.processor * (1 + a);
        if (this.processor <= this.init_processor * 1.1) {
            console.log(`You updated your processor power to ${this.processor} Gb`);
        } else {
            console.log(`You reached maximum processor power of ${this.processor = this.init_processor * 1.1} Gb`);
        }
    }

    increase_ram() {
        let x = parseFloat(prompt('Add additional number of RAM, Gb:'));
        this.ram = this.ram + x;
        if (this.ram <= this.init_ram * 2) {
            console.log(`You updated your RAM to ${this.ram} Gb`);
        } else {
            console.log(`You reached maximum RAM ${this.ram = this.init_ram * 2} Gb`);
        }
    }
}

let basepc1 = new BasePc(16, 800, 'HP', 'NFC');
basepc1.playGame();
// basepc1.increase_processor();
// basepc1.increase_processor();
// basepc1.increase_processor();
// basepc1.increase_processor();
// basepc1.increase_processor();
// basepc1.increase_processor();
// basepc1.increase_processor();
// basepc1.increase_processor();
// basepc1.increase_processor();
// basepc1.increase_processor();
// basepc1.increase_processor();
// basepc1.increase_processor();
// basepc1.increase_processor();
// basepc1.increase_ram();
// basepc1.increase_ram();
// basepc1.increase_ram();
// basepc1.increase_ram();
// basepc1.increase_ram();
// basepc1.increase_ram();


// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку,
// що на цьому відрі ігри не запускаються.
//
// class GamingPc extends BasePc {
//     constructor(ram, processor, name, game_name) {
//         super(ram, processor, name, game_name);
//         this.fps_count = 2 * (pc1.processor / pc1.ram);
//     }
//
//     playGame() {
//         this.processor = this.processor * (1 - 0.001);
//         if (this.processor < 500 && this.ram < 8) {
//             console.log(`STOP! This bucket can not run ${this.game_name}`);
//         } else {
//             console.log(`You are playing ${this.game_name} with ${this.fps_count} FPS`);
//         }
//         console.log(this.processor);
//         console.log(this.ram);
//     }
//
// }
//
// let gamingPc1 = new GamingPc(6, 500, "Asus", "NFS");
// gamingPc1.playGame();
// gamingPc1.playGame();
// gamingPc1.playGame();


// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//

class Car {
    constructor(model, producer, year, max_speed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.max_speed = max_speed;
        this.volume = volume;
        this.driver = 'No name';
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.max_speed} км/год на годину`)
    }

    info() {
        console.log(`Модель: ${this.model}, виробник: ${this.producer}, рік випуску: ${this.year}, 
        максимальна швидкість: ${this.max_speed}, об'єм двигуна: ${this.volume}, водій: ${this.driver}`)
    }

    increaseMaxSpeed(newSpeed) {
        this.max_speed = newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(newDriver) {
        this.driver = newDriver;
    }
}

let murano = new Car('Murano', 'Nissan', 2013, 260, 3.5)
murano.addDriver({name: 'Vitya', age: 30});

murano.info();
murano.increaseMaxSpeed(350);
murano.drive();
console.log(murano.driver);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// class Prince {
//     constructor(name, age, shoesSize) {
//         this.name = name;
//         this.age = age;
//         this.shoesSize = shoesSize;
//     }
// }
//
// const prince1 = new Prince('Grisha', 25, 36.5);
// const cinderellas = [
//     new Cinderella('Anya', 23, 37),
//     new Cinderella('Manya', 23, 37.5),
//     new Cinderella('Svyeta', 23, 36),
//     new Cinderella('Sasha', 23, 35),
//     new Cinderella('Maya', 23, 36.5),
//     new Cinderella('Masha', 23, 39),
//     new Cinderella('Vira', 23, 40),
//     new Cinderella('Natasha', 23, 41),
//     new Cinderella('Dasha', 23, 40.5),
//     new Cinderella('Vita', 23, 42)
// ]
// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince1.shoesSize) {
//         console.log(cinderella)
//     }
// }
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
//
function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

function Prince(name, age, shoesSize) {
    this.name = name;
    this.age = age;
    this.shoesSize = shoesSize;
    this.findCinderella = function (array) {
        for (const cinderella of array) {
            if (cinderella.footSize === prince1.shoesSize) {
                console.log(cinderella)
            }
        }

    }
}

const prince1 = new Prince('Grisha', 25, 36.5);
const cinderellas = [
    new Cinderella('Anya', 23, 37),
    new Cinderella('Manya', 23, 37.5),
    new Cinderella('Svyeta', 23, 36),
    new Cinderella('Sasha', 23, 35),
    new Cinderella('Maya', 23, 36.5),
    new Cinderella('Masha', 23, 39),
    new Cinderella('Vira', 23, 40),
    new Cinderella('Natasha', 23, 41),
    new Cinderella('Dasha', 23, 40.5),
    new Cinderella('Vita', 23, 42)
]
 prince1.findCinderella(cinderellas);

// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
// //         action:
//         Каждый
//         элемент < area > определяет
//         активные
//         области
//         изображения, которые
//         являются
//         ссылками
//     ...
//         ,
// //         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
//
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action:
//         Каждый
//         элемент < area > определяет
//         активные
//         области
//         изображения, которые
//         являются
//         ссылками
//     ...

//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
