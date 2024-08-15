const numvalue=document.getElementById("numvalue");
const ctof=document.getElementById("ctof");
const ftoc=document.getElementById("ftoc");
const btn=document.getElementById("btn");
const ans=document.getElementById("ans");
let ip;

function celtof(){
    ip=Number(numvalue.value);
    ip=ip * 9 / 5 + 32;
    ans.textContent=ip.toFixed(1)+"F";
}

function ftocel(){
    ip=Number(numvalue.value);
    ip=( ip - 32) * (5/9);
    ans.textContent=ip.toFixed(1)+"C";
}

btn.onclick=function(){

    if(ctof.checked){
        celtof();
    }

    else if(ftoc.checked){
        ftocel();
    }

    else{
        ans.textContent='You have to enter some value';
    }
}

