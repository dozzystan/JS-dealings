"use strict"



document.querySelectorAll('.button-js').forEach((item)=>{
    item.addEventListener('click',()=>{
        alert('Hello world')
    })
})

// Task 1
let continent = 'Africa';
let language = 'pidgin English';
let ghanaPopulation = 500;
let finlandPopulation = 800;
let country = 'nigeria';
let nigeriaPopulation = 1000
console.log(continent);
console.log(language);
console.log(nigeriaPopulation);
console.log(country);

let half = 2
let halfOfNigeriaPopulation = nigeriaPopulation / half;
console.log(halfOfNigeriaPopulation);

let newNigeriaPopulation = nigeriaPopulation + 1;
console.log(newNigeriaPopulation);
console.log(finlandPopulation);
console.log(nigeriaPopulation > finlandPopulation);
console.log(ghanaPopulation < finlandPopulation);

let description = `${country} is in ${continent} and it's ${nigeriaPopulation} people speak ${language}`;
console.log(description);

// Task 2
let trainees = ['Precious', 'Izu', 'Lekan', 'Marshal', 'Momoh', 'Gift', 'Stanley'];
console.log(trainees);
trainees[0] = 'pappi';
console.log(trainees);

let newTrainees = trainees.concat(['Amos', 'Mike']);
console.log(newTrainees);

let removeTrainee = trainees.splice(['Mike']);
console.log(removeTrainee);

let aNewTrainees = ['Queen', 'segun', 'Pius', 'emeka'];
let latestTrainees = trainees.concat(aNewTrainees);
console.log(latestTrainees);

// 26th August
// Take Home Task

let momohHeight = 10
let preciousHeight = 9
let momohWeight = 60
let preciousWeight = 70

// BMI CAL
let momohBMI = momohWeight / momohHeight **2
console.log(momohBMI);

let preciousBMI = preciousWeight / preciousHeight **2
console.log(preciousBMI);

if(momohBMI > preciousBMI){
    console.log('Momoh BMI is greater than Precious');
}else{
    console.log('This is not correct');
}

// Task 2

let spartansScore = [60,70,80];
let alphaScore = [88,91,120];

let spartansAverage = 60 + 70 + 80 / 3;
console.log(spartansAverage);

let alphaAverage = 88 + 91 + 120 / 3;
console.log(alphaAverage);

if(spartansAverage < alphaAverage){
    console.log('Alpha Tech Team is the winner of the competition');
}


