function increase(){
   let numberElement = document.getElementById("number");
   let count = Number(numberElement.textContent);
   count++;
   numberElement.textContent = count; 
}
function decrease(){
   let numberElement = document.getElementById("number");
   let count = Number(numberElement.textContent);
   count--;
   numberElement.textContent = count; 
}
function reset(){
   let numberElement = document.getElementById("number") ; 
    numberElement.textContent = 0;
}