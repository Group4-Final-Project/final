const modal2 = document.getElementById('Service-Modal2');
const modal1 = document.getElementById('Service-Modal1');
const modalbtn2 = document.querySelector('.Care-modal2');
const modalbtn1 = document.querySelector('.Care-modal1');

modalbtn2.addEventListener('click', ()=>{
  modal2.style.display="flex";
});

modalbtn1.addEventListener('click', ()=>{
    modal1.style.display="flex";
});

const btnclose1 = document.getElementById('close1');
const btnclose2 = document.getElementById('close2');


btnclose1.addEventListener("click",()=>{
  modal1.style.display="none"
});

btnclose2.addEventListener("click",()=>{
  modal2.style.display="none"
});

