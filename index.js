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
    // fundWiner();
}

function computerChoiceS(){
   
    let choices = ['Камень', 'Воздух', 'Бумага', 'Гупка', 'Ножници', 'Огонь', 'Вода'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // computer += computerChoice;
 
    fundWiner();
    return computerChoice;
}; 


function fundWiner() {
setTimeout(function() { 
if ((computer === 'Камень' && (player === 'Огонь' || player === 'Ножници' || player === 'Гупка')) ||
(computer === 'Огонь' && (player === 'Бумага' || player === 'Ножници' || player === 'Гупка')) ||
(computer === 'Ножници' && (player === 'Воздух' || player === 'Бумага' || player === 'Гупка')) ||
(computer === 'Гупка' && (player === 'Бумага' || player === 'Воздух' || player === 'Вода')) ||
(computer === 'Бумага' && (player === 'Воздух' || player === 'Вода' || player === 'Камень')) ||
(computer === 'Воздух' && (player === 'Вода' || player === 'Камень' || player === 'Огонь')) ||
(computer === 'Вода' && (player === 'Камень' || player === 'Огонь' || player === 'Ножници'))) {
    score -= 1;
    document.getElementById('displayPlayer').innerHTML = 'Ти програв!';
    document.getElementById('displayComputer').innerHTML = 'Рахунок : ' + score;
} else if ((player === 'Камень' && (computer === 'Огонь' || computer === 'Ножници' || computer === 'Гупка')) ||
(player === 'Огонь' && (computer === 'Бумага' || computer === 'Ножници' || computer === 'Гупка')) ||
(player === 'Ножници' && (computer === 'Воздух' || computer === 'Бумага' || computer === 'Гупка')) ||
(player === 'Гупка' && (computer === 'Бумага' || computer === 'Воздух' || computer === 'Вода')) ||
(player === 'Бумага' && (computer === 'Воздух' || computer === 'Вода' || computer === 'Камень')) ||
(player === 'Воздух' && (computer === 'Вода' || computer === 'Камень' || computer === 'Огонь')) ||
(player === 'Вода' && (computer === 'Камень' || computer === 'Огонь' || computer === 'Ножници')))
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