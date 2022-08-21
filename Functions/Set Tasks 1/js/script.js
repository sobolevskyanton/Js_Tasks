// Задача  
//Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

function sayHello(name) {
    return ("Привет, "+ name +"!");
}

console.log(sayHello('Антон'));



// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
let arr = [];
function returnNeighboringNumbers(num) {
    
    for (let i=0; i<=2; i++) {
        arr[i]=num-1+i;
    }
    return arr;
}

returnNeighboringNumbers(5);
console.log(arr);




// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

let result='';
function getMathResult(num,counter) {
    if (typeof(counter) === 'string' || counter <=0) {
        result=num;
        return result;
    } else {
    for (let i=1; i<=counter;i++) {
        if(i===counter) {
            result+=num*i;
        } else {
        result+=num*i+'---';
        }
    }
    return result;
}
}

getMathResult(10, 2);
console.log (result);
