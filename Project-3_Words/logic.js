// const https= require("https")
let div=document.getElementById("explaination");
let synonyms =document.getElementById("synonyms");
function getMeaning(str)
{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${str}`)
    .then(response => response.json())
    .then(data=> {
        div.innerText="";
        synonyms.innerText="";
        data.forEach(element => {
            for(let meaning of element.meanings)
            {
                for(let def of meaning.definitions)
                {
                    if(def!=null)
                    {
                        let list=document.createElement("li");
                        list.innerText=def.definition;
                        div.appendChild(list);
                    }
                }
                meaning.synonyms.forEach(syn =>{
                    if(syn!=null)
                    {
                        let list=document.createElement("li");
                        list.innerText=syn;
                        synonyms.appendChild(list)        
                    }
                });
            }  
        });      
    });
}

let input= document.getElementById('word');
input.addEventListener('blur', ()=>{
    getMeaning(input.value);
})