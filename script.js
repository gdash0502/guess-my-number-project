
'use strict';
let secreatnumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
document.querySelector('.check').addEventListener('click',function(){
     let guess=Number(document.querySelector('.guess').value);
     console.log(guess);

//when player has no input
if(!guess){
    document.querySelector('.message').textContent='no number';
    //when player match with secreatnumber
}else if(guess===secreatnumber){
    document.querySelector('.message').textContent='correct number';
    document.querySelector('.number').textContent=secreatnumber;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
}
//when enter number is high
else if(guess>secreatnumber) {
    if(score>1){
document.querySelector('.message').textContent='too high number';
score--;
document.querySelector('.score').textContent=score;
}
else{document.querySelector('.message').textContent='you loose the game';
document.querySelector('.score').textContent=0;
}
}
//when enter number is low 
  else if(guess<secreatnumber){
    if(score>1){
    document.querySelector('.message').textContent='too low number';
    score--;
    document.querySelector('.score').textContent=score; 
    }
else{document.querySelector('.message').textContent='you loose the game';
document.querySelector('.score').textContent=0;
}
}
})
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secreatnumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='start guessing....';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value=null;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
})
