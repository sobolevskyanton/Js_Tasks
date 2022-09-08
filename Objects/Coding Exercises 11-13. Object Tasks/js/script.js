'use strict';

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let result = '';
    let names = '';
    if (arr.length === 0) {
        result += 'Семья пуста';
        return result;
    } {
        names += arr.join(' ');
        result+= `Семья состоит из: ${names}`;
        return result;
    }
}
console.log(showFamily(family));


// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];


function standardizeStrings(arr) {
    arr.forEach(elem => {
        console.log(elem.toLowerCase());
    });

    
}
console.log(standardizeStrings(favoriteCities));



// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str) === 'string') {
        return str.split('').reverse().join('');
    } else {
        return 'Ошибка!';
    }

}

console.log(reverse(someString));




const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str='';
    
if (arr.length === 0) {
    str='Нет доступных валют';
    return str;
} else {    
    str = str = 'Доступные валюты:\n';
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === missingCurr) {
            continue;
        } else {
        str += `${arr[i]}\n`;
        }
    }
    return str;
}
}
console.log(availableCurr([...baseCurrencies,...additionalCurrencies],'USD'));



console.log([1,2,3]);
console.dir([1,2,3]);







// Задача:

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'.


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square=0;
    let rent=0;
    data.shops.forEach(elem => {
        square+=elem.width*elem.length;
    });
    rent=square*data.height*data.moneyPer1m3;
    if(rent>=data.budget) {
        return "Бюджета недостаточно";
    } else {
        return "Бюджета достаточно";
    }
}

isBudgetEnough(shoppingMallData);







// Задача:

// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]


//Попытки сделать без фиксированной длины первоначального массива
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
// arr.sort();
// //console.log(arr);
// let result=[];
// let group =[];
// console.log(Math.floor(arr.length/3));
// //Math.floor - в меньшую сторону
// //Math.ceil - в большую сторону
// for (let i=0; i<Math.ceil(arr.length/3); i++ ) {
//     group=[];
// for (let j=i*3; j<(i*3)+3; j++) {
//     if(i === Math.floor(arr.length/3)) {
//         if(arr[j] != null) {
//             group.push(arr[j]);
//         }
//     } else {
//         group.push(arr[j]);
//     }
// }
// result.push(group);
// }
// result.push(`Оставшиеся студенты: ${group.join(', ')}`);
// return result;
// }
// console.log(sortStudentsByGroups(students));





//
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

sortStudentsByGroups(students);


//Замыкание
function test1() {
    let test =1;
    function test2() {
        return (test = test+1); 
    }
    return test2; 
}

let resultTest1 = test1(); 
//let resultTest2 = resultTest1();
console.log(resultTest1());
console.log(resultTest1());
console.log(resultTest1()); 







const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

//console.log(isOpen(openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

//console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));
console.log(restorantData);

