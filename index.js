let inputChoice = '';


function makeChoice(button){
    if(inputChoice.includes('ok')) {
        inputChoice = button;
    }
else if (inputChoice === 'Error'){
    inputChoice = button;
} else {
    inputChoice += button;
}
updateDisplay();
}

function buttonOk(button){
    if (inputChoice.includes('Вашь вибор:')){
        inputChoice = button;
    }
    else {
        inputChoice = 'Вашь вибор:' + button;
    }
    updateDisplay();
}










function updateDisplay(){
document.getElementById('display').innerHTML = inputChoice}