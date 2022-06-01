document.querySelector("button").onclick=doit;
document.getElementById('0').onclick=tapped;
document.getElementById('1').onclick=tapped;
document.getElementById('2').onclick=tapped;
document.getElementById('3').onclick=tapped;
document.getElementById('4').onclick=tapped;
document.getElementById('5').onclick=tapped;
document.getElementById('6').onclick=tapped;
document.getElementById('7').onclick=tapped;
document.getElementById('8').onclick=tapped;
document.getElementById('9').onclick=tapped;
document.getElementById('10').onclick=tapped;
document.getElementById('11').onclick=tapped;
document.getElementById('12').onclick=tapped;
document.getElementById('13').onclick=tapped;
document.getElementById('14').onclick=tapped;
document.getElementById('15').onclick=tapped;
var b=null;
var p=[];
var q=[];
var x=1;
function tapped(){
    if (this.id !=undefined){
        b=String(this.id);
        if(q.includes(b)){
            console.log('same');
        }
        else{
            q.push(b);
            blinkColor1(b);
            compare(b);
        }
    }
}
function doit(){
    document.getElementById("demo").innerHTML = " ";
    next();
}
function next(){
        if (p.length==16){
            finish();
        }
        var j=randomNumber();
        unique_element(j);
        for(y of p){
            blinkColor(y); // have to make delay here
        }
}
function unique_element(j){
    if (p.includes(String(j))){
        var x=randomNumber();
        unique_element(x);
    }
    else{
        p.push(String(j));
        console.log(p);
    }
}
function finish(){
    alert("Congratulations, Game successfully completed");
    document.getElementById("demo").innerHTML = "Score: "+String(x-1);
    p=[];
    x=1;
}
function compare(b){
        if (p.includes(b)){
            if(p.length == q.length){
                next();
                x+=1;
                q=[];
            }
        }
        else{
            end();
        }
}
function end(){
    document.getElementById("demo").innerHTML = "Score: "+String(x-1);
    alert('Game over');
    p=[];
    q=[];
    x=1;
}
function randomNumber(){
    return Math.floor((Math.random() * 16));
}
function blinkColor(color) {
    let colorButton = document.getElementById(color);
    console.log(color);
    colorButton.style.background = "blue";  
    setTimeout(() => {colorButton.style.background = "Black"}, 1000);
}
function blinkColor1(color) {
    let colorButton = document.getElementById(color);
    console.log(color);
    colorButton.style.background = "green";  
    setTimeout(() => {colorButton.style.background = "Black"}, 1000);
}