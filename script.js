let maDiv = document.querySelector(".circle");
let score = document.getElementById('score');
let all = document.getElementById('allCircle');

window.addEventListener('click', clicSurElement);

let scoreTot =0;
function clicSurElement(event) {
    if(event.target.classList[1]==="redColor"){
        console.log("Un clic est capté");
        console.log(event);
        score.innerHTML = scoreTot ;
        console.log(score);
        scoreTot++;


    }
   
    
}

let i;
for (i = 0; i < 11; i++) {
    var divClone = maDiv.cloneNode(true); 
    divClone.className = "circle";
    divClone.id =  i;
    all.appendChild(divClone);
}

setInterval(function() {
    // jump is a number between 0 and 10
    var jump = Math.floor(Math.random() * (10-0));
    var els = document.getElementById(jump);
    console.log(jump);
    console.log(els);
    els.classList.add('redColor');
    setTimeout(() => {
        els.classList.remove('redColor');
    }, 1000);
    
  }, 1000);

  //do while pour correcteur