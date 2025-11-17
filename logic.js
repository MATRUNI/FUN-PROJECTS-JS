let liveLinks=["./Project-1_Color_Change/index.html","./Project-2_BMI_Calculator/index.html","./Project-3_Words/index.html"];
let repoLinks=["https://github.com/MATRUNI/FUN-PROJECTS-JS/tree/master/Project-1_Color_Change","https://github.com/MATRUNI/FUN-PROJECTS-JS/tree/master/Project-2_BMI_Calculator"];

let container=document.getElementById("container");
console.log(container.children.length);

container.addEventListener("click",e=> toLiveLink(Array.from(container.children).indexOf(e.target)) )

container.addEventListener('click', e=>{
    if(e.target.tagName === "i")
    {
        toRepo(indexOf(e.target));
    }
});
function toLiveLink(index)
{
    window.location.href=(liveLinks[index]);
}

function toRepo(index)
{
    window.open(repoLinks[index]);
}