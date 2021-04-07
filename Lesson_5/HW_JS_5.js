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
            console.log('ERROR')
        } else {
            console.log(`Power of ${this.name} is on`);
        }

    }
}

let ultrabook1 = new Ultrabook(16, 567, 'Sony', 15, 3);
console.log(ultrabook1);
console.log(ultrabook1.battery_p());
console.log(ultrabook1.switchOn());  // чому тут видає в консолі undefined?

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

let
    basepc1 = new BasePc(16, 800, 'HP', 'NFC');
basepc1.playGame();
basepc1.increase_processor();
basepc1.increase_processor();
basepc1.increase_processor();
basepc1.increase_processor();
basepc1.increase_processor();
basepc1.increase_processor();
basepc1.increase_processor();
basepc1.increase_processor();
basepc1.increase_processor();
basepc1.increase_processor();
basepc1.increase_processor();
basepc1.increase_processor();
basepc1.increase_processor();
basepc1.increase_ram();
basepc1.increase_ram();
basepc1.increase_ram();
basepc1.increase_ram();
basepc1.increase_ram();
basepc1.increase_ram();


// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку,
// що на цьому відрі ігри не запускаються.
//
// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
//
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
//
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
//
// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car