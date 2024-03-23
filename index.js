"use strict";


//code start

let btn = document.querySelector('.btn');
let p = document.querySelector('p');
let inputP = document.querySelector('#p').value;
let inputD = document.querySelector('#d').value;

function disPrice(price){
  let dis = price / 100 * inputD;
  let disPri = price - dis;
  let netPrice = Math.floor(disPri);
  let print = `<b>${netPrice} Tk</b> is the <em>${inputD}%</em> discount price 💸`

  p.innerHTML = print;
}

btn.addEventListener('click', function (){
  disPrice(inputP);
})
