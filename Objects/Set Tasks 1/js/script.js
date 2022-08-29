'use strict';


// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:
// showExperience(personalPlanPeter) => '1 month'

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;

        let result = `Мне ${age} и я владею языками: `;
        languages.forEach(elem => {
            result+= `${elem.toUpperCase()} `;
            
        });
        return result;
    }
};


console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
const exp = plan.skills.exp;
return exp;
}

//console.log(showExperience(personalPlanPeter));


// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

function showProgrammingLangs(plan) {
let result ='';
const {programmingLangs} = plan.skills;
console.log(programmingLangs);
     for (let key in programmingLangs) {
        result+= `Язык ${key} изучен на ${programmingLangs[key]}\n`;
     }
     return result;
}

console.log(showProgrammingLangs(personalPlanPeter));

