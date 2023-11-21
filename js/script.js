'use strict';

const reviews = [
    {
        id: 1,
        name: "Koi Gstrein",
        job: "Artist",
        img: "img/ko1.jpg",
        text: "Ich hasse es hier",
    },
    {
        id: 2,
        name: "hannes moser",
        job: "sani",
        img: "img/koi2.jpg",
        text: "jehggefuw  weufiuw wfuiwgfukeghiehsdf",
    },
    {
        id: 3,
        name: "Tina haiger",
        job: "bauer",
        img: "img/koi3.jpg",
        text: "je fwegfeuwgfudfdf   iwgfukeghi ehsdf",
    },

];


// elemente auswählen 

const $img = document.querySelector('#person-img');
const $author = document.querySelector('#author');
const $job = document.querySelector('#job');
const $info = document.querySelector('#info');

const $prevBtn = document.querySelector('.prev-btn');
const $nextBtn = document.querySelector('.next-btn');
const $randomBtn = document.querySelector('.random-btn');

// start-element
let currentItem = 0;

// Lade erstes Element 
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});


// zeige Person auf basis des aktuellen items 
function showPerson(person){
   const item = reviews[person];
   $img.src = item.img;
   $author.textContent = item.name;
   $job.textContent = item.job;
   $info.textContent = item.text;
}


// zeige nächste person
$nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length-1) {
    currentItem = 0; 
    }
    showPerson(currentItem);
});

$prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0) {
      currentItem = reviews.length-1
    }
    showPerson(currentItem);
});

// zeige zufählige person

$randomBtn.addEventListener('click', function(){
    currentItem =Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});