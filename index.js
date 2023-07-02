var randomDice1=Math.floor(Math.random()*6)+1;
var randomDice2=Math.floor(Math.random()*6)+1;
if(randomDice1>randomDice2){
    document.querySelector("h1").textContent="Player1 Winner!!";
}else if(randomDice1==randomDice2){
    document.querySelector("h1").textContent="Refresh Me";
}else{
    document.querySelector("h1").textContent="Player2 Winner!!";
}
//dice1;
if(randomDice1==1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(randomDice1==2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if(randomDice1==3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
else if(randomDice1==4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");   
}
else if(randomDice1==5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");    
}
else if(randomDice1==6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");   
}

//dice 2
if(randomDice2==1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if(randomDice2==2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
else if(randomDice2==3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
else if(randomDice2==4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");   
}
else if(randomDice2==5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");    
}
else if(randomDice2==6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");   
}
