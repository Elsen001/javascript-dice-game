var btn = document.getElementById("btn");
var money = document.getElementById("money");
var zer = document.querySelector(".zer");
var zer2 = document.querySelector(".zer2");
var rd1 = document.querySelector("#radio1");
var rd2 = document.querySelector("#radio2");
var rd3 = document.querySelector("#radio3");
var over = document.querySelector(".hesab");
var mny = 100;
    money.innerHTML=mny

function gameover(){
    if(mny===0){
        over.style.display="block"
        btn.style.display="block"
        
    }
}


btn.addEventListener("click",function(){
    mny=100;
    over.style.display="none"
    money.innerHTML=mny
    zer.innerText=""
    zer2.innerText=""


})

function startanimation(element) {

    element.classList.add("animatelsh");

    element.addEventListener( "animationend",  function() {

      element.classList.remove("animatelsh");    

    } );

  }

rd1.addEventListener("click",function(){
    var num1 = Math.ceil(Math.random()*6)
    var num2 = Math.ceil(Math.random()*6)
    var total = num1+num2;
    zer.innerHTML=num1
    zer2.innerHTML=num2
    startanimation(zer)
    startanimation(zer2)

     if(total<7){
        mny+=10;
     }else{
        mny-=10;

     }
    money.innerHTML=mny
    gameover()


})

rd2.addEventListener("click",function(callback){
    var num1 = Math.ceil(Math.random()*6)
    var num2 = Math.ceil(Math.random()*6)
    var total = num1+num2;
    zer.innerHTML=num1
    zer2.innerHTML=num2
    startanimation(zer)
    startanimation(zer2)
    console.log(zer)
     if(total>7){
        mny+=10
     }else{
        mny-=10
     }
     money.innerHTML=mny
     gameover()

})

rd3.addEventListener("click",function(){
    var num1 = Math.ceil(Math.random()*6)
    var num2 = Math.ceil(Math.random()*6)
    var total = num1+num2;
    zer.innerHTML=num1
    zer2.innerHTML=num2
    startanimation(zer)
    startanimation(zer2)
    money.innerHTML=mny
     if(total===7){
        mny+=10
     }else{
        mny-=10
     }
    money.innerHTML=mny
    gameover()


})



