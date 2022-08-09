ShootPlayer1_Off();
ShootPlayer2_Off();
document.addEventListener("keypress", function(event) {
	const element = document.getElementById("text");
    element.innerHTML="";
    randomNumber();
});
var p1b1=0;
var p1b2=0;
var p1b3=0;
var p1b4=0;
var p1b5=0;
var p2b1=0;
var p2b2=0;
var p2b3=0;
var p2b4=0;
var p2b5=0;
var numberOfTurns=0;
var choicePlayer1=null;
var choicePlayer2=null;
document.getElementById("b1").addEventListener("click",function(){
    ShootPlayer1_Off();
    choicePlayer1=1;
    tapped();
});
document.getElementById("b2").addEventListener("click",function(){
    ShootPlayer1_Off();
    choicePlayer1=2;
    tapped();
});
document.getElementById("b3").addEventListener("click",function(){
    ShootPlayer1_Off();
    choicePlayer1=3;
    tapped();
});
document.getElementById("b4").addEventListener("click",function(){
    ShootPlayer1_Off();
    choicePlayer1=4;
    tapped();
});
document.getElementById("b5").addEventListener("click",function(){
    ShootPlayer1_Off();
    choicePlayer1=5;
    tapped();
});
document.getElementById("c1").addEventListener("click",function(){
    ShootPlayer2_Off();
    choicePlayer2=1;
    tapped1();
});
document.getElementById("c2").addEventListener("click",function(){
    ShootPlayer2_Off();
    choicePlayer2=2;
    tapped1();
});
document.getElementById("c3").addEventListener("click",function(){
    ShootPlayer2_Off();
    choicePlayer2=3;
    tapped1();
});
document.getElementById("c4").addEventListener("click",function(){
    ShootPlayer2_Off();
    choicePlayer2=4;
    tapped1();
});
document.getElementById("c5").addEventListener("click",function(){
    ShootPlayer2_Off();
    choicePlayer2=5;
    tapped1();
});
function randomNumber(){
    ShootPlayer1_Off();
    ShootPlayer2_Off();
    let p1bn= 1 + Math.floor(Math.random() * 5);
    let p2bn= 1 + Math.floor(Math.random() * 5);
    if (p1bn==1){
        document.getElementById("01").innerHTML = "Box Number(Player 1): 1";
        if (p1b1<=6){
            p1b1+=1;
            figureMaking('5',p1b1);
        }
        else{
            p1b1+=1;
        }
    }
    if (p1bn==2){
        document.getElementById("01").innerHTML = "Box Number(Player 1): 2";
        if (p1b2<=6){
            p1b2+=1;
            figureMaking('8',p1b2);
        }
        else{
            p1b2+=1;
        }
    }
    if (p1bn==3){
        document.getElementById("01").innerHTML = "Box Number(Player 1): 3";
        if (p1b3<=6){
            p1b3+=1;
            figureMaking('11',p1b3);
        }
        else{
            p1b3+=1;
        }
    }
    if (p1bn==4){
        document.getElementById("01").innerHTML = "Box Number(Player 1): 4";
        if (p1b4<=6){
            p1b4+=1;
            figureMaking('14',p1b4);
        }
        else{
            p1b4+=1;
        }
    }
    if (p1bn==5){
        document.getElementById("01").innerHTML = "Box Number(Player 1): 5";
        if (p1b5<=6){
            p1b5+=1;
            figureMaking('17',p1b5);
        }
        else{
            p1b5+=1;
        }
    }

    if (p2bn==1){
        document.getElementById("02").innerHTML = "Box Number(Player 2): 1";
        if (p2b1<=6){
            p2b1+=1;
            figureMaking('6',p2b1);
        }
        else{
            p2b1+=1;
        }
    }
    if (p2bn==2){
        document.getElementById("02").innerHTML = "Box Number(Player 2): 2";
        if (p2b2<=6){
            p2b2+=1;
            figureMaking('9',p2b2);
        }
        else{
            p2b2+=1;
        }
    }
    if (p2bn==3){
        document.getElementById("02").innerHTML = "Box Number(Player 2): 3";
        if (p2b3<=6){
            p2b3+=1;
            figureMaking('12',p2b3);
        }
        else{
            p2b3+=1;
        }
    }
    if (p2bn==4){
        document.getElementById("02").innerHTML = "Box Number(Player 2): 4";
        if (p2b4<=6){
            p2b4+=1;
            figureMaking('15',p2b4);
        }
        else{
            p2b4+=1;
        }
    }
    if (p2bn==5){
        document.getElementById("02").innerHTML = "Box Number(Player 2): 5";
        if (p2b5<=6){
            p2b5+=1;
            figureMaking('18',p2b5);
        }
        else{
            p2b5+=1;
        }
    }
    const delay= setTimeout(function(){
        if(p1b1==6 || p1b2==6 || p1b3==6 || p1b4==6 || p1b5==6){
            clearTimeout(myTimeout);
            ShootPlayer1_On();
        }
    
        if(p2b1==6 || p2b2==6 || p2b3==6 || p2b4==6 || p2b5==6){
            clearTimeout(myTimeout);
            ShootPlayer2_On();
        }
    },100);
    const randomDelay =setTimeout(function(){
        numberOfTurns+=1;
        if (numberOfTurns<20){
            document.getElementById("text").innerHTML="Round "+numberOfTurns;
        }
        if (numberOfTurns==20){
            let p1Total=p1b1+p1b2+p1b3+p1b4+p1b5;
            let p2Total=p2b1+p2b2+p2b3+p2b4+p2b5;
            if(p1Total>p2Total){
                alert("Score(Player1): "+(p1Total*5)+"\n"+"Score(Player2): "+(p2Total*5)+"\n"+"Player1 wins");
            }
            if(p1Total==p2Total){
                alert("Score(Player1): "+(p1Total*5)+"\n"+"Score(Player2): "+(p2Total*5)+"\n"+"Tie between Player1 and Player2");
            }
            if (p2Total>p1Total){
                alert("Score(Player1): "+(p1Total*5)+"\n"+"Score(Player2): "+(p2Total*5)+"\n"+"Player2 wins");
            }
            document.getElementById("text").innerHTML="";
            clearTimeout(randomDelay);
            clearTimeout(myTimeout);
            clearTimeout(delay);
            gameOver();
        }
    },100);

    const myTimeout = setTimeout(randomNumber,1500);
}
function figureMaking(id, number){
    document.getElementById(id).innerHTML = "";
    let elem = document.createElement("img");
    elem.setAttribute("height", "100");
    elem.setAttribute("width", "200");
    elem.setAttribute("alt", "Figure");
    if (number==1){
        elem.setAttribute("src", "a1.png");
    }
    if (number==2){
        elem.setAttribute("src", "a2.png");
    }
    if (number==3){
        elem.setAttribute("src", "a3.png");
    }
    if (number==4){
        elem.setAttribute("src", "a4.png");
    }
    if (number==5){
        elem.setAttribute("src", "a5.png");
    }
    if (number>=6){
        elem.setAttribute("src", "a6.png");
    }
    document.getElementById(id).appendChild(elem);
}
function gameOver(){
    p1b1=0;
    p1b2=0;
    p1b3=0;
    p1b4=0;
    p1b5=0;
    p2b1=0;
    p2b2=0;
    p2b3=0;
    p2b4=0;
    p2b5=0;
    numberOfTurns=0;
    choicePlayer1=null;
    choicePlayer2=null;
    document.getElementById('5').innerHTML = "";
    document.getElementById('6').innerHTML = "";
    document.getElementById('8').innerHTML = "";
    document.getElementById('9').innerHTML = "";
    document.getElementById('11').innerHTML = "";
    document.getElementById('12').innerHTML = "";
    document.getElementById('14').innerHTML = "";
    document.getElementById('15').innerHTML = "";
    document.getElementById('17').innerHTML = "";
    document.getElementById('18').innerHTML = "";
    document.getElementById("01").innerHTML = "Box Number(Player 1): --";
    document.getElementById("02").innerHTML = "Box Number(Player 2): --";
    document.getElementById('text').innerHTML = "Press any key to start";
    ShootPlayer1_Off();
    ShootPlayer2_Off();
}
function ShootPlayer1_Off(){
    document.getElementById("b1").disabled=true;
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b5").disabled=true;
}
function ShootPlayer2_Off(){
    document.getElementById("c1").disabled=true;
    document.getElementById("c2").disabled=true;
    document.getElementById("c3").disabled=true;
    document.getElementById("c4").disabled=true;
    document.getElementById("c5").disabled=true;
}
function ShootPlayer1_On(){
    document.getElementById("b1").disabled=false;
    document.getElementById("b2").disabled=false;
    document.getElementById("b3").disabled=false;
    document.getElementById("b4").disabled=false;
    document.getElementById("b5").disabled=false;
}
function ShootPlayer2_On(){
    document.getElementById("c1").disabled=false;
    document.getElementById("c2").disabled=false;
    document.getElementById("c3").disabled=false;
    document.getElementById("c4").disabled=false;
    document.getElementById("c5").disabled=false;
}
function tapped(){
    if (choicePlayer1!=null){
        if (p1b1==6){
            p1b1-=1;
            figureMaking('5',p1b1);
        }
        if (p1b2==6){
            p1b2-=1;
            figureMaking('8',p1b2);
        }
        if (p1b3==6){
            p1b3-=1;
            figureMaking('11',p1b3);
        }
        if (p1b4==6){
            p1b4-=1;
            figureMaking('14',p1b4);
        }
        if (p1b5==6){
            p1b5-=1;
            figureMaking('17',p1b5);
        }
        if (choicePlayer1==1){
            p2b1=0;
            document.getElementById('6').innerHTML="";
        }
        if (choicePlayer1==2){
            p2b2=0;
            document.getElementById('9').innerHTML="";
        }
        if (choicePlayer1==3){
            p2b3=0;
            document.getElementById('12').innerHTML="";
        }
        if (choicePlayer1==4){
            p2b4=0;
            document.getElementById('15').innerHTML="";
        }
        if (choicePlayer1==5){
            p2b5=0;
            document.getElementById('18').innerHTML="";
        }
    }
    choicePlayer1=null;
    randomNumber();
        
}
function tapped1(){
    if (choicePlayer2!=null){
        if (p2b1==6){
            p2b1-=1;
            figureMaking('6',p2b1);
        }
        if (p2b2==6){
            p2b2-=1;
            figureMaking('9',p2b2);
        }
        if (p2b3==6){
            p2b3-=1;
            figureMaking('12',p2b3);
        }
        if (p2b4==6){
            p2b4-=1;
            figureMaking('15',p2b4);
        }
        if (p2b5==6){
            p2b5-=1;
            figureMaking('18',p2b5);
        }
        if (choicePlayer2==1){
            p1b1=0;
            document.getElementById('5').innerHTML="";
        }
        if (choicePlayer2==2){
            p1b2=0;
            document.getElementById('8').innerHTML="";
        }
        if (choicePlayer2==3){
            p1b3=0;
            document.getElementById('11').innerHTML="";
        }
        if (choicePlayer2==4){
            p1b4=0;
            document.getElementById('14').innerHTML="";
        }
        if (choicePlayer2==5){
            p1b5=0;
            document.getElementById('17').innerHTML="";
        }
    }
    choicePlayer2=null;
    randomNumber();
}