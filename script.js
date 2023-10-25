var timer=60;
var score=0;
var hit;
function makeBubble(){

    var clutter= "" ;
    for(let i=1;i<=78;i++){
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML=clutter;
}
function runTimer(){
    var time=setInterval(function(){
        if(timer>0){
             timer--;
            document.querySelector("#timerVal").textContent=timer;
           
        }
        else{
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML="";
        }
    },1000)
}
function getHitVal(){
    var num=Math.floor(Math.random()*10);
    hit=num;
    document.querySelector("#hitVal").textContent=num;
}
function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}
document.querySelector("#pbtm").addEventListener('click',function(dtls){
   if(hit===Number(dtls.target.innerHTML)){
    increaseScore();
    getHitVal();
    makeBubble();
   }
   else{
    alert(`You lose the Game ${score}`)
    getHitVal();
    makeBubble();
    score=0;
    timer=60;
   }

})
getHitVal();
runTimer();
makeBubble();
