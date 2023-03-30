window.addEventListener('load',inicializarEventos,false);

function inicializarEventos(e)
{
  var boton1=document.getElementById('b1');
  boton1.addEventListener('click',presionBoton1,false);  
  var boton2=document.getElementById('b2');
  boton2.addEventListener('click',presionBoton2,false);  
  var boton3=document.getElementById('b3');
  boton3.addEventListener('click',presionBoton3,false);  
  var boton4=document.getElementById('b4');
  boton4.addEventListener('click',presionBoton4,false); 
}

function presionBoton1(e)
{
  var boton1=document.getElementById('b1');
  alert(boton1.getAttribute('value'));
}

function presionBoton2(e)
{
  var boton2=document.getElementById('b2');
  alert(boton2.getAttribute('value'));
}

function presionBoton3(e)
{
  var boton3=document.getElementById('b3');
  alert(boton3.getAttribute('value'));
}

function presionBoton4(e)
{
  var boton4=document.getElementById('b4');
  alert(boton4.getAttribute('value'));
}