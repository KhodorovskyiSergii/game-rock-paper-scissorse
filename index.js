let computer = '';
let player = '';
let score = 0;

function buttonHelp(){
    let elem = document.getElementById('instruction');
    let styl = getComputedStyle(elem);
        if(styl.display === 'none'){
        document.getElementById('instruction').style.display = 'grid';
        document.getElementById('myGame').style.display = 'none';
    } 
   } 

function backToGame(){
    let elem = document.getElementById('myGame');
    let styl = getComputedStyle(elem);
    if (styl.display === 'none') {
        document.getElementById('myGame').style.display = 'grid';
        document.getElementById('instruction').style.display = 'none';
    } 
 }

function playerChoice(button) {
    player = button;
    computer = computerChoiceS();
    displayPlayer();
    displayComputer();
}

function computerChoiceS(){
   
    let choices = ['Камінь', 'Повітря', 'Папір', 'Гупка', 'Ножиці', 'Вогонь', 'Вода'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    fundWiner();
    return computerChoice;
}; 


function fundWiner() {
setTimeout(function() { 
if ((computer === 'Камінь' && (player === 'Вогонь' || player === 'Ножиці' || player === 'Гупка')) ||
(computer === 'Вогонь' && (player === 'Папір' || player === 'Ножиці' || player === 'Гупка')) ||
(computer === 'Ножиці' && (player === 'Повітря' || player === 'Папір' || player === 'Гупка')) ||
(computer === 'Гупка' && (player === 'Папір' || player === 'Повітря' || player === 'Вода')) ||
(computer === 'Папір' && (player === 'Повітря' || player === 'Вода' || player === 'Камінь')) ||
(computer === 'Повітря' && (player === 'Вода' || player === 'Камінь' || player === 'Вогонь')) ||
(computer === 'Вода' && (player === 'Камінь' || player === 'Вогонь' || player === 'Ножиці'))) {
    score -= 1;
    document.getElementById('displayPlayer').innerHTML = 'Ти програв!';
    document.getElementById('displayComputer').innerHTML = 'Рахунок : ' + score;
} else if ((player === 'Камінь' && (computer === 'Вогонь' || computer === 'Ножиці' || computer === 'Гупка')) ||
(player === 'Вогонь' && (computer === 'Папір' || computer === 'Ножиці' || computer === 'Гупка')) ||
(player === 'Ножиці' && (computer === 'Повітря' || computer === 'Папір' || computer === 'Гупка')) ||
(player === 'Гупка' && (computer === 'Папір' || computer === 'Повітря' || computer === 'Вода')) ||
(player === 'Папір' && (computer === 'Повітря' || computer === 'Вода' || computer === 'Камінь')) ||
(player === 'Повітря' && (computer === 'Вода' || computer === 'Камінь' || computer === 'Вогонь')) ||
(player === 'Вода' && (computer === 'Камінь' || computer === 'Вогонь' || computer === 'Ножиці')))
{     score += 1;
document.getElementById('displayPlayer').innerHTML = 'Ти виграв, вітаю!!!';
document.getElementById('displayComputer').innerHTML = 'Рахунок : ' + score;
} else {
    player += 'Нічия!'
    document.getElementById('displayPlayer').innerHTML = 'Нічия!';
    document.getElementById('displayComputer').innerHTML = 'Рахунок : ' + score;
}

 },1000); 
 }



function buttonclear() {
    // Очистіть значення гравця та комп'ютера для нового раунду
    player = 'Тут вибір гравця';
    computer = 'Тут вибір компютера';
    score = 0;
    displayPlayer();
    displayComputer();
}



function displayPlayer(){
document.getElementById('displayPlayer').innerHTML = player;
}


function displayComputer(){
document.getElementById('displayComputer').innerHTML = computer;
}