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







