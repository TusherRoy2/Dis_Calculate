"use strict";


//code start

  
// function time (){
//   let date = new Date;
//   let ghonta = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();
//   let din = "PM";
//   let demo = document.getElementById("demo");
  
//   if (ghonta > 12 || ghonta == 0) {
//     din = "AM";
//   }
//   if (ghonta > 12){
//     ghonta = ghonta - 12;
//   }
//   if (ghonta === 0){
//     ghonta = 12;
//   }
//   if (min < 10){
//     min = "0" + min;
//   }
//   if (sec < 10){
//     sec = "0" + sec;
//   }
//   demo.innerText = ghonta + " : " + min + " : " + sec + " " + din;
// }
// time();
// setInterval(time, 1000);



let payment = true;
let marks = 57;

function enroll(){
  console.log("Course payment is progressing...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function(){
      if(payment){
        resolve();
      }else{
        reject("Payment Failed !");
      }
    }, 2000);
  });
  
  return promise;
}

function progress(){
  console.log("Course in progressing...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function(){
      if (marks >= 70){
        resolve();
      }else{
        reject("You didn't get enough marks to get the certificate!!!");
      }
    }, 3000);
  });

  return promise;
}

function certificate(){
  console.log("Wait a minute to prepare your Certificate...");

  const promise = new Promise(function (resolve){
    setTimeout(function(){
      resolve("Congratulation's you got the certificate <3 !!!")
    }, 1000)
  });

  return promise;
}


// enroll(function(){
//   progress(function(){
//     certificate();
//   })
// })

// !! =================================

// enroll()
//   .then(progress)
//   .then(certificate)
//   .then(function (val){
//     console.log(val);
//   })
//   .catch(function(err){
//     console.log(err);
//   });


// !===================================

async function course (){
  try{
    await enroll()
    await progress()
    const msg = await certificate()
    console.log(msg)
  }catch(err){
    console.log(err);
  }
  
}

// course();

// !===========================

let btn = document.querySelector('.btn');
let p = document.querySelector('p');
let inputP = document.querySelector('#p').value;
let inputD = document.querySelector('#d').value;

function disPrice(price){
  let dis = price / 100 * inputD;
  let disPri = price - dis;
  let o = Math.floor(disPri).toString();

  p.innerHTML = `<b>${o} Tk</b> is the <em>${inputD}%</em> discount price 💸`
}

btn.addEventListener("click", function (){
  disPrice(inputP);
})