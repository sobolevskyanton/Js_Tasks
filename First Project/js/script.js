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








let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if( personalMovieDB.count <10) {
            console.log("Просмотрено мало фильмов");
        } else if (personalMovieDB.count <30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >=30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        let genr;
        for (let i=1; i<=3; i++) {
            genr = prompt(`Ваш любимый жанр под номером ${i} ?`,"");
            if (genr == null || genr === '') {
                i--;
            } else {
            personalMovieDB.genres[i-1]=genr;
            console.log(genr);
            }
        }
        personalMovieDB.genres.forEach(function(element,i) {
            console.log(`Любимый жанр под номером ${i+1} - это ${element}`);
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};

personalMovieDB.writeYourGenres();

