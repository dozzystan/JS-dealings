"use strict"

// DOM ---- Document object model
// The process of reaching elements in html page and using it in javascript is known as querying the DOM

// document.body.style.backgroundColor = 'blue';

// document.body.style.color = 'yellow';

// lets set a variable to avoid repeatition DRY(dont repeat ursef)

// let body = document.body.style
// body.backgroundColor = 'blue';
// body.color = 'yellow'
// so lets dive in properly
// =========================================================
// getELementById()
// Select d element or grp of elements u wnt
// Decide d effect u wnt 2 apply 2d selection   
// 
// getELementById(element) -- make sure d id matches
// We can assing 2 a variable or go straight
// lets do basic tins so u understand cox we wud go into complex tins wich wud need d basic tins learnt
// let select h1 tag

// document.getElementById('title').style.color = 'red';
// document.getElementById('title').style.backgroundColor = 'yellow';

let heading = document.getElementById('title').style;
heading.color = 'red';
heading.backgroundColor = 'yellow';

let button = document.getElementById('btn').style;
button.color = 'white';
button.backgroundColor = 'blue';

// getElementsByTagName()
// Html-collection which is almost similar to an array like obj
// index,lenght prop wud work bt not all array methods wud work

const headingTag = document.getElementsByTagName('h2');
console.log(headingTag);

// headingTag[1].style.color = 'green';

// headingTag.forEach((singleHeadingTag)=> singleHeadingTag.style.color = 'green')

// let newHeading = [...headingTag]

// newHeading.forEach((dd)=> dd.style.color = 'green')

// getELementsByClassName()
// let listItems = document.getElementsByClassName('special')
// console.log(listItems);

// awa lax 2 methods(selectors)
// - select d element or grp of elements we wnt
// - Decide d effect we wnt 2 apply 2d selection

// querySelector('any css') -- selects d first element dt matches d selector picked
// querySelectorAll('any css') -- selects all,foreach wud work here

// =============================================
// querySelector('any css') 
// ===========================================
// const listItems = document.querySelector('.special')
// console.log(listItems);

// listItems.style.color = 'pink';

// querySelectorAll('any css')
const listItems = document.querySelectorAll('.special')
console.log(listItems);

listItems.forEach((pp)=>pp.style.color = 'pink')

let tags = document.querySelector('h2')
console.log(tags);

// innerText()
// const para = document.querySelector('p')
// console.log(para.textContent);

// para.innerText += ' We nr dey go break today';

// innerHtml
let newPara = document.querySelector('p')
newPara.innerHTML = '<h1>we dn run am finally</h1>'

// changing d attribute
const link = document.querySelector('a')
// console.log(link.getAttribute('href'));
// console.log(link);
console.log(link.getAttribute("href"));
link.setAttribute("href","https://facebook.com")


link.innerText = 'link to facebook'

// classList
// className
// contain
let headingTag5 =  document.querySelector('h5')
// console.log(headingTag5.className);
// headingTag5.classList.add('red')
// console.log(headingTag5.classList.contains('blue'));
let hasClass = headingTag5.classList.contains('red')

if(hasClass){
    // console.log('e det am');
    headingTag5.classList.remove('red')

}else{
    // console.log('e nr get am');
    headingTag5.classList.add('red')
}

// events
// select d element and decide d effect
// what event?
// addEventListener()

let btns = document.querySelector('.btns');
let paragraph = document.querySelector('.parag');

function changeColor(){
    let hasClass = paragraph.classList.contains('red');

    hasClass ? paragraph.classList.remove('red') : paragraph.classList.add('red')
}

btns.addEventListener('click',changeColor)