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


