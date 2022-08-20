// Задача  
// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i=0; i<arr.length; i++) {
//     result[i]=arr[i];
// }
// console.log(result);








// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for(let i=0;i<data.length; i++) {
//     if (typeof(data[i]) == 'number') {
//         data[i]=data[i]*2;
//     } else {
//         data[i] = data[i]+' - done';
//     }
// }
// console.log(data);







// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i=0; i<data.length; i++) {
//     result[i]=data[data.length-1-i]; 
// }
// console.log (result);



// Задача. Построить фигуру
//      *         6 пробелов и 1 *
//     ***        5 пробелов и 3 *
//    *****       4 пробела и 5 *
//   *******
//  *********
// ***********

const lines = 5;
let spaces='';
let result = '';
for (let i=0; i<=lines; i++) {
    spaces='';
    for (let j=0; j<lines-i; j++) {
        spaces+=" ";
    }
    result += spaces;
    for (let k=0;k<2*i+1;k++) {
        result+="*";
    }
    result+="\n";
}
console.log(result);


