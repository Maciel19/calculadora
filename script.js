function addCharacters(num){
    const valorDisplay = document.querySelector(".display").value

 document.querySelector(".display").value = valorDisplay + num

}

function clearScreen(){
    document.querySelector(".display").value = "" 
}
function caucular(){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valorDisplay)

}

function reverse(){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay * -1

}
