const input = document.querySelector(".input");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

keys.forEach(key=>{
  key.addEventListener("click",onClickButton);
});

var a,b,operator,sum;

function addNumbers(a, b){
    return a + b;
}

function subtractNumbers(a, b){
    return a - b;
}
function multiplyNumbers(a, b){
  return a * b;
  
}
function divideNumbers(a, b){
  if (b === 0){
    throw SyntaxError("error");
  }
  return a / b;
}
var arraynumb = [0,1,2,3,456789]






function onClickButton(){

  let buttonText = this.innerText;

  input.textContent.concat(buttonText);
  


  if(buttonText === "="){
    result.innerText = eval(input.innerText);
  }
  
  else{
    input.textContent += buttonText;
    return;
  }
  
 }



  

