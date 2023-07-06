
var tam=document.querySelector("#tamaño");
var cant=document.querySelector("#cantidad");
var ref=document.querySelector("#refresco");
var papas=document.querySelector("#papas");
var alitas=document.querySelector("#alitas");
var valor=document.querySelector("#vcan");
var res=document.querySelector("#res");


var ingrediente2=document.querySelector("#dos");
var ingrediente3=document.querySelector("#tres");



tam.onchange=()=>{calcular();}
cant.oninput=()=>{calcular();}
ref.onchange=()=>{calcular();}
papas.onchange=()=>{calcular();}
alitas.onchange=()=>{calcular();}
const calcular=()=>{ 
  n=parseInt(cant.value);
    valor.innerHTML=cant.value;
    let costoPizza=0;
    let total=0;
    let extras=0;
    let costoExtra=0;
    switch(tam.value){
        case "individual":costoPizza=100;break;
        case "grande":costoPizza=120;break;
        case "familiar":costoPizza=150;break;
        case "jumbo":costoPizza=180;break;
    }

    if (ref.checked){
      extras=40;
    }
    if (papas.checked){
        extras=50;
    }
    if (alitas.checked){
        extras=75;
      }
      if (ingrediente2.checked){
        extras=20;
    }
    if (ingrediente3.checked){
        extras=35;
      }
costoPizza=costoPizza+costoExtra
total=(costoPizza*n)+extras;
res.innerHTML=total.toFixed(2);
}