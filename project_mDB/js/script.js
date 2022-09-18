/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener('DOMContentLoaded',() => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__bg .promo__genre'),
          img = document.querySelector('.promo__bg'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          btn = addForm.querySelector('button'),
          input = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
console.log(movieList);

    const deleteAdv = (arr) => {
        arr.forEach(item=> {
            item.remove();
        });
    };
    deleteAdv(adv);

    const makeChanges = () => {
        genre.textContent= "Драма";
        img.style.cssText = "background: url('img/bg.jpg') center center/cover no-repeat";
    };
    makeChanges();

    const sortArr = (arr) => {
        arr.sort();
    };
    
 
    
    function createMovieList (films,parent) {
        parent.innerHTML="";
        sortArr(films);
        films.forEach( (item, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">
                ${i+1}. ${item}
            <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach( (btn,i) => {
            btn.addEventListener('click',() => {
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);
                createMovieList (films,parent);
            });
        });
    }
    createMovieList (movieDB.movies,movieList);



    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = input.value;
        const favorite = checkbox.checked;
        if(newFilm) {
            if(newFilm.length > 21) {
                newFilm=`${newFilm.substr(0, 22)}...`;
            }
            if(favorite) {
                console.log('Добавляем новый фильм');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList (movieDB.movies,movieList);
        }
        event.target.reset();


        // if(newFilm.length <=21) {
        //     movieDB.movies.push(newFilm);
        //     sortArr(movieDB.movies);
        //     event.target.reset();
        //     createMovieList (movieDB.movies,movieList);
        // } else {
        //     movieDB.movies.push(newFilm.substr(0, 21)+'...');
        //     sortArr(movieDB.movies);
        //     event.target.reset();
        //     createMovieList (movieDB.movies,movieList);
        // }
        
    });


    // btn.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     if(input.value.length <=21) {
    //         movieDB.movies.push(input.value);
    //         input.value='';
    //     } else {
    //         movieDB.movies.push(input.value.substr(0, 21)+'...');
    //         input.value='';
    //     }
    //     sortMovies ();
    // });




    
    
    
    
    
    
    
    
    //Задача на рекурсию
    // Напишите функцию, которая вычисляет факториал.
    
    function factorial(num) {
    
        if(typeof(num) == "number" && Number.isInteger(num) && num >0) {
            if(num ===1) {
                return 1;
            } else {
            return num*factorial(num-1);
            }
            
        }
            else if (num <=0){
                return 1;
            } else {
                return "Введите целое положительное число больше 1";
            }
    
    }

    //console.log(factorial(5));
});




// Задание:

// В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.

// Пример:

// Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.

// Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.

//         amountOfPages(5) => 5

//         amountOfPages(25) => 17

//         amountOfPages(1095) => 401   

//         amountOfPages(185) => 97

function amountOfPages(summary) {
let i=0;
while (summary > 0) {
    i++;
    summary = summary - i.toString().length;
  }
return i;
}

//console.log(amountOfPages(25));





function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

isPangram('Hello there');


/*
let count=0;
function deepCount(a){
    
    //return console.log (a.length);
    a.forEach(element => {
        if(Array.isArray(element)) {
            count+=1;
            deepCount(element);
        } else {
            count+=1;
        }
    });
    return count;
}
*/
//console.log(deepCount([1,2,[1,2]]));
//console.log(deepCount([[[[[[[[[]]]]]]]]]));
//console.log(deepCount(["1", 5, "3", ["10"]]));




function deepCount(a) {
    let count = a.length;
    for (let i=0; i<a.length; i++) {
        if(Array.isArray(a[i])) {
            count += deepCount(a[i]);
        }
    }
    return count;
}
console.log(deepCount([1,2,[1,2]]));


