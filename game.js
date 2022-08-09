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
function randomNumber(){
    let p1bn= 1 + Math.floor(Math.random() * 5);
    let p2bn= 1 + Math.floor(Math.random() * 5);
    if (p1bn==1){
        document.getElementById("01").innerHTML = "Box Number(Player 1): 1";
        if (p1b1<=4){
            p1b1+=1;
            figureMaking('5',p1b1);
        }
        else{
            p1b1+=1;
        }
    }
    if (p1bn==2){
        document.getElementById("01").innerHTML = "Box Number(Player 1): 2";
        if (p1b2<=4){
            p1b2+=1;
            figureMaking('8',p1b2);
        }
        else{
            p1b2+=1;
        }
    }
    if (p1bn==3){
        document.getElementById("01").innerHTML = "Box Number(Player 1): 3";
        if (p1b3<=4){
            p1b3+=1;
            figureMaking('11',p1b3);
        }
        else{
            p1b3+=1;
        }
    }
    if (p1bn==4){
        document.getElementById("01").innerHTML = "Box Number(Player 1): 4";
        if (p1b4<=4){
            p1b4+=1;
            figureMaking('14',p1b4);
        }
        else{
            p1b4+=1;
        }
    }
    if (p1bn==5){
        document.getElementById("01").innerHTML = "Box Number(Player 1): 5";
        if (p1b5<=4){
            p1b5+=1;
            figureMaking('17',p1b5);
        }
        else{
            p1b5+=1;
        }
    }

    if (p2bn==1){
        document.getElementById("02").innerHTML = "Box Number(Player 2): 1";
        if (p2b1<=4){
            p2b1+=1;
            figureMaking('6',p2b1);
        }
        else{
            p2b1+=1;
        }
    }
    if (p2bn==2){
        document.getElementById("02").innerHTML = "Box Number(Player 2): 2";
        if (p2b2<=4){
            p2b2+=1;
            figureMaking('9',p2b2);
        }
        else{
            p2b2+=1;
        }
    }
    if (p2bn==3){
        document.getElementById("02").innerHTML = "Box Number(Player 2): 3";
        if (p2b3<=4){
            p2b3+=1;
            figureMaking('12',p2b3);
        }
        else{
            p2b3+=1;
        }
    }
    if (p2bn==4){
        document.getElementById("02").innerHTML = "Box Number(Player 2): 4";
        if (p2b4<=4){
            p2b4+=1;
            figureMaking('15',p2b4);
        }
        else{
            p2b4+=1;
        }
    }
    if (p2bn==5){
        document.getElementById("02").innerHTML = "Box Number(Player 2): 5";
        if (p2b5<=4){
            p2b5+=1;
            figureMaking('18',p2b5);
        }
        else{
            p2b5+=1;
        }
    }
    const delay= setTimeout(function(){
        if (p1b1>=4 && p1b2>=4 && p1b3>=4 && p1b4>=4 && p1b5>=4){
            alert("Player 1 won the game");
            clearTimeout(myTimeout);
            clearTimeout(delay);
            gameOver();
        }
    
        if (p2b1>=4 && p2b2>=4 && p2b3>=4 && p2b4>=4 && p2b5>=4){
            alert("Player 2 won the game");
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
    if (number>=4){
        elem.setAttribute("src", "a4.png");
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
}