let liveLinks=["./Project-1_Color_Change/index.html","./Project-2_BMI_Calculator/index.html","./Project-3_Words/index.html"];
let repoLinks=[];

let container=document.getElementById("container");
console.log(container.children.length);

container.addEventListener("click",e=> toLiveLink(Array.from(container.children).indexOf(e.target)) )

function toLiveLink(index)
{
    window.location.href=(liveLinks[index]);
}

function toRepo(index)
{
    window.location.href=(repoLinks[index]);
}