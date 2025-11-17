let liveLinks=["./Project-1_Color_Change/index.html","./Project-2_BMI_Calculator/index.html","./Project-3_Words/index.html"];
let repoLinks=["https://github.com/MATRUNI/FUN-PROJECTS-JS/tree/master/Project-1_Color_Change","https://github.com/MATRUNI/FUN-PROJECTS-JS/tree/master/Project-2_BMI_Calculator","https://github.com/MATRUNI/FUN-PROJECTS-JS/tree/master/Project-3_Words"];

let container=document.getElementById("container");
console.log(container.children.length);

container.addEventListener("click",e=>{
    let card=e.target.closest(".card");
    if(e.target.classList.contains("fa-square-github"))
    {
        console.log("ICON Clicked!!")
        let card=e.target.closest(".card")
        toRepo(Array.from(container.children).indexOf(card));
        return;
    }
    if(!card) return;
    toLiveLink(Array.from(container.children).indexOf(card));
});

function toLiveLink(index)
{
    window.location.href=(liveLinks[index]);
}

function toRepo(index)
{
    window.open(repoLinks[index]);
}