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
disable_button();
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
        disable_button();
        var j=randomNumber();
        unique_element(j);
        setTimeout(function(){
            for(y of p){
                var e=p.indexOf(y);
                delay(e);
            }
        }, 1000);
        setTimeout(function(){
            document.getElementById("demo1").innerHTML = "Your turn!";
        }, 1500+500*(p.length));
        setTimeout(function(){
            document.getElementById("demo1").innerHTML = " ";
            enable_button();
        }, 2000+500*(p.length));
}
function delay(e){
    setTimeout(function(){
        blinkColor(p[e]);
    },500*(e+1));
}
function unique_element(j){
    if (p.includes(String(j))){
        var w=randomNumber();
        unique_element(w);
    }
    else{
        p.push(String(j));
        console.log(p);
    }
}
function disable_button(){
    document.getElementById('0').disabled = true;
    document.getElementById('1').disabled = true;
    document.getElementById('2').disabled = true;
    document.getElementById('3').disabled = true;
    document.getElementById('4').disabled = true;
    document.getElementById('5').disabled = true;
    document.getElementById('6').disabled = true;
    document.getElementById('7').disabled = true;
    document.getElementById('8').disabled = true;
    document.getElementById('9').disabled = true;
    document.getElementById('10').disabled = true;
    document.getElementById('11').disabled = true;
    document.getElementById('12').disabled = true;
    document.getElementById('13').disabled = true;
    document.getElementById('14').disabled = true;
    document.getElementById('15').disabled = true;
}
function enable_button(){
    document.getElementById('0').disabled = false;
    document.getElementById('1').disabled = false;
    document.getElementById('2').disabled = false;
    document.getElementById('3').disabled = false;
    document.getElementById('4').disabled = false;
    document.getElementById('5').disabled = false;
    document.getElementById('6').disabled = false;
    document.getElementById('7').disabled = false;
    document.getElementById('8').disabled = false;
    document.getElementById('9').disabled = false;
    document.getElementById('10').disabled = false;
    document.getElementById('11').disabled = false;
    document.getElementById('12').disabled = false;
    document.getElementById('13').disabled = false;
    document.getElementById('14').disabled = false;
    document.getElementById('15').disabled = false;
}
function finish(){
    alert("Congratulations, Game successfully completed");
    document.getElementById("demo").innerHTML = "Score: "+String((x-1)*25);
    disable_button();
    p=[];
    x=1;
}
function compare(b){
        var h=q.indexOf(b);
        if (p.includes(b) && p[h]==q[h]){
            if(p.length == q.length){
                if (p.length==16){
                    x+=1;
                    finish();
                }
                else{
                    next();
                    x+=1;
                    q=[];
                }
                
            }
        }
        else{
            end();
        }
}
function end(){
    document.getElementById("demo").innerHTML = "Score: "+String((x-1)*25);
    alert('Game over');
    disable_button();
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
    setTimeout(() => {colorButton.style.background = "Black"}, 500);
}
function blinkColor1(color) {
    let colorButton = document.getElementById(color);
    console.log(color);
    colorButton.style.background = "green";  
    setTimeout(() => {colorButton.style.background = "Black"}, 250);
}