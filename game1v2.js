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
document.getElementById('16').onclick=tapped;
document.getElementById('17').onclick=tapped;
document.getElementById('18').onclick=tapped;
document.getElementById('19').onclick=tapped;
document.getElementById('20').onclick=tapped;
document.getElementById('21').onclick=tapped;
document.getElementById('22').onclick=tapped;
document.getElementById('23').onclick=tapped;
document.getElementById('24').onclick=tapped;
document.getElementById('25').onclick=tapped;
document.getElementById('26').onclick=tapped;
document.getElementById('27').onclick=tapped;
document.getElementById('28').onclick=tapped;
document.getElementById('29').onclick=tapped;
document.getElementById('30').onclick=tapped;
document.getElementById('31').onclick=tapped;
document.getElementById('32').onclick=tapped;
document.getElementById('33').onclick=tapped;
document.getElementById('34').onclick=tapped;
document.getElementById('35').onclick=tapped;
document.querySelector("button").disabled = false;
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
    document.querySelector("button").disabled = true;
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
    document.getElementById('16').disabled = true;
    document.getElementById('17').disabled = true;
    document.getElementById('18').disabled = true;
    document.getElementById('19').disabled = true;
    document.getElementById('20').disabled = true;
    document.getElementById('21').disabled = true;
    document.getElementById('22').disabled = true;
    document.getElementById('23').disabled = true;
    document.getElementById('24').disabled = true;
    document.getElementById('25').disabled = true;
    document.getElementById('26').disabled = true;
    document.getElementById('27').disabled = true;
    document.getElementById('28').disabled = true;
    document.getElementById('29').disabled = true;
    document.getElementById('30').disabled = true;
    document.getElementById('31').disabled = true;
    document.getElementById('32').disabled = true;
    document.getElementById('33').disabled = true;
    document.getElementById('34').disabled = true;
    document.getElementById('35').disabled = true;
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
    document.getElementById('16').disabled = false;
    document.getElementById('17').disabled = false;
    document.getElementById('18').disabled = false;
    document.getElementById('19').disabled = false;
    document.getElementById('20').disabled = false;
    document.getElementById('21').disabled = false;
    document.getElementById('22').disabled = false;
    document.getElementById('23').disabled = false;
    document.getElementById('24').disabled = false;
    document.getElementById('25').disabled = false;
    document.getElementById('26').disabled = false;
    document.getElementById('27').disabled = false;
    document.getElementById('28').disabled = false;
    document.getElementById('29').disabled = false;
    document.getElementById('30').disabled = false;
    document.getElementById('31').disabled = false;
    document.getElementById('32').disabled = false;
    document.getElementById('33').disabled = false;
    document.getElementById('34').disabled = false;
    document.getElementById('35').disabled = false;
}
function finish(){
    alert("Congratulations, Game successfully completed");
    document.getElementById("demo").innerHTML = "Score: "+String((x-1)*25);
    disable_button();
    p=[];
    x=1;
    setTimeout(()=>{
        document.getElementById("demo").innerHTML = " ";
        document.querySelector("button").disabled = false;
    },750);
}
function compare(b){
        var h=q.indexOf(b);
        if (p.includes(b) && p[h]==q[h]){
            if(p.length == q.length){
                if (p.length==36){
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
    alert('Game over');
    document.getElementById("demo").innerHTML = "Score: "+String((x-1)*25);
    disable_button();
    p=[];
    q=[];
    x=1;
    setTimeout(()=>{
        document.getElementById("demo").innerHTML = " ";
        document.querySelector("button").disabled = false;
    },750);
}
function randomNumber(){
    return Math.floor((Math.random() * 36));
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