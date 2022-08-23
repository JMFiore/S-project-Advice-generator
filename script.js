const boutton= document.querySelector('.roll-advice');
const advice=document.querySelector(".advice").getElementsByTagName("p")[0];
const adviceN=document.getElementsByTagName("h6")[0];

console.log(advice)

const rolear =()=> {
    fetch("https://api.adviceslip.com/advice")
    .then(res=> res.json())
    .then(res=>
    {advice.innerHTML=res.slip.advice
    adviceN.innerHTML=`ADVICE #${res.slip.id}`})
};

boutton.addEventListener("click", rolear);