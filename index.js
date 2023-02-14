let divs=document.querySelectorAll(".inner-square")
    
let selected=0
let div_1=divs[selected]
div_1.style.backgroundColor="teal"

console.log(divs)

   let down=document.getElementById("down").addEventListener("click",downfunction)
   let right=document.getElementById("right").addEventListener("click",rightfunction)
   let left=document.getElementById("left").addEventListener("click",leftfunction)
   let up=document.getElementById("up").addEventListener("click",upfunction)
   

function downfunction(){

    if(selected==6 || selected==7 || selected==8) {
        // console.log("true")
        return 
    }



       for (let index = 0; index < divs.length; index++) {
        divs[index].style.backgroundColor="yellow"
        
       }
    //    div_1.style.backgroundColor="yellow"
       selected=selected+3
       divs[selected].style.backgroundColor="teal"
       console.log(selected)
     
}

function rightfunction(){


    if(selected==2 || selected==5 || selected==8) {
        // console.log("true")
        return 
    }


       for (let index = 0; index < divs.length; index++) {
        divs[index].style.backgroundColor="yellow"
        
       }
    //    div_1.style.backgroundColor="yellow"
       selected=selected+1
       divs[selected].style.backgroundColor="teal"
       
       console.log(selected)
}

function leftfunction(){
    if(selected==0 || selected==3 || selected==6) {
        // console.log("true")
        return 
    }

    for (let index = 0; index < divs.length; index++) {
        divs[index].style.backgroundColor="yellow"
        
       }
    //    div_1.style.backgroundColor="yellow"
       selected=selected-1
       divs[selected].style.backgroundColor="teal"
       
       console.log(selected)
}


function upfunction(){

    if(selected==0 || selected==1 || selected==2) {
        // console.log("true")
        return 
    }


    for (let index = 0; index < divs.length; index++) {
        divs[index].style.backgroundColor="yellow"
        
       }
    //    div_1.style.backgroundColor="yellow"
       selected=selected-3
       divs[selected].style.backgroundColor="teal"
       
       console.log(selected)
    }