const btns = document.querySelectorAll('button');
console.log(btns);
console.dir(btns[0].classList[0]);
console.log(btns[0].classList.item(0));
btns[0].addEventListener('click', (event,test) => {
    console.dir(event);
    console.dir(test);

});