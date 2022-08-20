// 'use strict';

// let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// console.log(numberOfFilms);

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);




// Переписанная задача с помощью циклов
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i=0; i<2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          if(a == null || b == null || !a.trim() || !b.trim() || a.length > 50 ) {
            i--;
            console.log("error");
          } else {
            personalMovieDB.movies[a] = b;
            console.log("done");
          }       
}
console.log(personalMovieDB);
if( personalMovieDB.count <10) {
    console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count <30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >=30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}






console.log(NaN && 5  && 3);


let x=3;
let y=3;
let z= 0;
let n = 2;
console.log(x===3 && z===2 || x ===3 && n ===3);



console.log( NaN || 2 || undefined );
// 2

console.log( NaN && 2 && undefined );
//NaN

console.log( 1 && 2 && 3 );
//3
 
console.log( !1 && 2 || !3 );
//!1 - ошибка, будет false

 
console.log( 25 || null && !3 );
//25
 
console.log( NaN || null || !3 || undefined || 5);
//5
 
console.log( NaN || null && !3 && undefined || 5);
console.log( NaN || null && !3 && undefined);
//5
 
console.log( 5 === 5 && 3 > 1 || 5);
console.log( 5 === 5);
//true
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}

for (let i =0; i<3;i++) {
    console.log (i);
}


// Создать символ астерикс при помощи вложенных циклов:
// *
// **
// ***
// ****
// *****
// ******
let result = '';
for (let i=1; i<=6; i++) {
    for (let j=1; j<=i; j++ ) {
        result += '*';
    }
    result += '\n';
}
console.log(result);

// Задача. При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

for(let i=5; i<=10; i++) {
    console.log(i);
}

// Задача. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

for(let i=20; i>=10; i--) {
    if(i===13) {
        break;
    }
    console.log(i);
}

//Задача. При помощи цикла for выведите чётные числа от 2 до 10 включительно

for (let i=2;i<=10; i++) {
    if(i % 2) {
        continue;
    }
    console.log(i);
}

// Задача 
// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//  Цикл, который нужно переписать:
 
//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }
let i=2;
while (i<16) {
    i++;
    if(i % 2) {
        console.log (i);
        
    } 
}

// Заполните массив цифрами от 5 до 10 включительно. 

let arr = [];
let num=5;
for(let i=0; i<=5; i++) {
    arr[i]=num;
    num++;
}
console.log(arr);



