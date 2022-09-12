/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

console.log(movieDB.movies.sort());

document.querySelectorAll('.promo__adv img').forEach(item=> {
    item.remove();
});

document.querySelector('.promo__bg .promo__genre').textContent= "Драма";

document.querySelector('.promo__bg').style.cssText = "background: url('img/bg.jpg') center center/cover no-repeat";

const promoList = document.querySelector('.promo__interactive-list');
promoList.innerHTML="";


movieDB.movies.forEach( (item, i) => {
    promoList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${item}
    <div class="delete"></div>
    </li>
    `;
});


//console.dir(document.querySelector('.promo__bg'));





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

