let divs=document.querySelectorAll(".inner-square")
    
let selected=0
let div_1=divs[selected]
div_1.style.backgroundColor="teal"



   let down=document.getElementById("down").addEventListener("click",downfunction)
   let right=document.getElementById("right").addEventListener("click",rightfunction)
   let left=document.getElementById("left").addEventListener("click",leftfunction)
   let up=document.getElementById("up").addEventListener("click",upfunction)
   

function downfunction(){
       for (let index = 0; index < divs.length; index++) {
        divs[index].style.backgroundColor="yellow"
        
       }
    //    div_1.style.backgroundColor="yellow"
       selected=selected+3
       divs[selected].style.backgroundColor="teal"
       
       console.log(selected)
     
}

function rightfunction(){
       for (let index = 0; index < divs.length; index++) {
        divs[index].style.backgroundColor="yellow"
        
       }
    //    div_1.style.backgroundColor="yellow"
       selected=selected+1
       divs[selected].style.backgroundColor="teal"
       
       console.log(selected)
}

function leftfunction(){
    for (let index = 0; index < divs.length; index++) {
        divs[index].style.backgroundColor="yellow"
        
       }
    //    div_1.style.backgroundColor="yellow"
       selected=selected-1
       divs[selected].style.backgroundColor="teal"
       
       console.log(selected)
}


function upfunction(){
    for (let index = 0; index < divs.length; index++) {
        divs[index].style.backgroundColor="yellow"
        
       }
    //    div_1.style.backgroundColor="yellow"
       selected=selected-3
       divs[selected].style.backgroundColor="teal"
       
       console.log(selected)
}

