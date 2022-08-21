'use strict';

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
let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
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
}

rememberMyFilms();


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