"use strict";


//code start

let btn = document.querySelector('.btn');
let p = document.querySelector('p');
let inputP = document.querySelector('#p').value;
let inputD = document.querySelector('#d').value;

function disPrice(price){
  let dis = price / 100 * inputD;
  let disPri = price - dis;
  let netPrice = Math.floor(disPri).toString();

  p.innerHTML = '<b>' + netPrice + 'Tk</b>' + 'is the <em>' + inputD + '%</em> discount price 💸'
}

btn.addEventListener("click", function (){
  disPrice(inputP);
})
