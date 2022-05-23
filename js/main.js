let elForm = document.querySelector(".form");
let elInput = document.querySelector("#write");
let elInputOut = document.querySelector("#out");
let elBtn = document.querySelector("button");
let elSelect = document.querySelector(".select");

num = Number(elInput);
elInputOut.disabled = true;
  
let usd = 11102;
let eur = 11769;
let rub = 188;


elForm.addEventListener("submit", function(evt){
  evt.preventDefault();


  if(elSelect.value == "usd"){
    elInputOut.value = elInput.value * usd;
  }else  if(elSelect.value == "eur"){
    elInputOut.value = elInput.value * eur;
  }else  if(elSelect.value == "rub"){
    elInputOut.value = elInput.value * rub;
  }

} )