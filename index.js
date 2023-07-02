var randomDice1=Math.floor(Math.random()*6)+1;
var randomDice2=Math.floor(Math.random()*6)+1;
var Dice1="./images/dice"+randomDice1+".png";
var Dice2="./images/dice"+randomDice2+".png";

if(randomDice1>randomDice2){
    document.querySelector("h1").textContent="Player1 Winner!!";
}else if(randomDice1==randomDice2){
    document.querySelector("h1").textContent="Refresh Me";
}else{
    document.querySelector("h1").textContent="Player2 Winner!!";
}

document.querySelector(".img1").setAttribute("src",Dice1);
document.querySelector(".img2").setAttribute("src",Dice2);