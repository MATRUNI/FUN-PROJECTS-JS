const body=document.querySelector("body");
const color1=document.getElementById("c1");
const color2=document.getElementById("c2");
const color3=document.getElementById("c3");
const color4=document.getElementById("c4");

const buttn=document.getElementById("btn");

color1.addEventListener('click', ()=>{
    body.classList.remove("color2", "color3", "color4", "clrblack");
    body.classList.add("color1");
});
color2.addEventListener('click', ()=>{
    body.classList.remove("color1", "color3", "color4", "clrblack");
    body.classList.add("color2");
});
color3.addEventListener('click', ()=>{
    body.classList.remove("color1", "color2", "color4", "clrblack");
    body.classList.add("color3");
});
color4.addEventListener('click', ()=>{
    body.classList.remove("color1", "color2", "color3", "clrblack");
    body.classList.add("color4");
});

buttn.addEventListener('click', ()=>{
    body.classList.remove("color1", "color2", "color3", "color4");
    body.classList.add("clrblack");

})