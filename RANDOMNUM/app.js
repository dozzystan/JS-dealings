"use strict"

let headingTag = document.querySelector('h1');
let btn = document.querySelector('.btn');
// let determinant = 0

function generateNumbers(){
    let randomNumbers = Math.ceil(Math.random() * 10)
    headingTag.innerText = randomNumbers
    // console.log(randomNumbers);

}

btn.addEventListener('click',generateNumbers)