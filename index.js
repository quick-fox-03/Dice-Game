// function that changes the dice pic for a player
function changePicForPlayer(decider, img){
    switch (decider) {
        case 1:
            document.querySelector("."+img).setAttribute("src","./images/dice1.png")
            break;
        case 2:
            document.querySelector("."+img).setAttribute("src","./images/dice2.png")
            break;
        case 3:
            document.querySelector("."+img).setAttribute("src","./images/dice3.png")
            break;
        case 4:
            document.querySelector("."+img).setAttribute("src","./images/dice4.png")
            break;
        case 5:
            document.querySelector("."+img).setAttribute("src","./images/dice5.png")
            break;
        case 6:
            document.querySelector("."+img).setAttribute("src","./images/dice6.png")
            break;
        default:
            break;
    }
    
}

/*main game function, called by Roll Dice button
    creates two random variables for two players
    provides the variables to the functions for changing dice pic
    changes the heading text to declare result
    */
function diceGame(){
    var decider1 =Math.floor( Math.random()*6 + 1); //create random variable, value from 1-6
    var decider2=Math.floor( Math.random()*6 + 1); //create random variable, value from 1-6
    var img1="img1"; //strings containing the class name for first image element in HTML
    var img2="img2"; //strings containing the class name for second image element in HTML
    changePicForPlayer(decider1,img1); //call function to change first pic
    changePicForPlayer(decider2,img2); //call function to change second pic
    if(decider1 > decider2){
    document.querySelector("h1").innerText="Player 1 Wins!";}
    else if(decider1===decider2){
        document.querySelector("h1").innerText="Draw!";
    }
    else{
        document.querySelector("h1").innerText="Player 2 Wins!";
    }
}
//function for toggling visibility of "Rules", called by Rules button
function toggleRules(){
    document.querySelector(".box").classList.toggle("visibility");
}

