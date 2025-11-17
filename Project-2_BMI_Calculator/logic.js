let height=document.getElementById("height");
let weight=document.getElementById("weight");

let outpur=document.getElementById("output-area");

let btn=document.querySelector("button");


// formula-: bmi=weight(kg)/(height(m))square
btn.addEventListener('click', ()=>{
    let bmi =weight.value/(height.value/100)**2;
    if(bmi<18.6)
    {
        outpur.textContent=`BMI: ${bmi}\n Under Weight`;
    }
    else if(bmi<=24.9)
    {
        outpur.textContent=`BMI: ${bmi}\n Normal Weight`;
    }
    else{
        outpur.textContent=`BMI: ${bmi}\n Over Weight`;
    }

});