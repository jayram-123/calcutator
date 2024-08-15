let userInput=document.getElementById("userinput");
let  Btn=document.querySelectorAll("button");
let result="";
let arr=Array.from(Btn);

arr.forEach(element => {
    element.addEventListener('click', (e)=>{
        if(e.target.textContent==='='){
            result=eval(result);
            userInput.value=result;
        }
        else if(e.target.textContent==='AC'){
            result="";
            userInput.value=result;
        }
        else if(e.target.textContent==='DEL'){
            result=result.substring(0,result.length-1);
            userInput.value=result;
        }
       else{
         result+=e.target.textContent;
         userInput.value=result;
       }
    })
});
