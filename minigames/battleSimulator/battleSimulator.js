const information = document.getElementById("information");
const playerCharacter = document.getElementById("playerCharacter");
const enemyCharacter = document.getElementById("enemyCharacter");
const playerHP = document.getElementById("playerHP");
const limitBreakPoint = document.getElementById("limitBreakPoint");
const enemyHP = document.getElementById("enemyHP");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");
const choice5 = document.getElementById("choice5");
const action1 = document.getElementById("action1");
const action2 = document.getElementById("action2");
const action3 = document.getElementById("action3");
const action4 = document.getElementById("action4");

let playerCurrentHP = 0;
let enemyCurrentHP = 0;
let playerChoice = 0;
let limitBreak = 0;
let limitBreakAvailable = false;

choice1.addEventListener("click", () => {
    playerChoice = 1;
    playerCurrentHP = 60;
    playerHP.innerHTML = playerCurrentHP;
    enemyCurrentHP = 70;
    enemyHP.innerHTML = enemyCurrentHP;
    action1.innerHTML = ("Attack");
    action2.innerHTML = ("Banishing Strike");
    action3.innerHTML = ("Healing Smite");
    action4.innerHTML = ("Ultimate End");
});

choice2.addEventListener("click", () => {
    playerChoice = 2;
    playerCurrentHP = 60;
    playerHP.innerHTML = playerCurrentHP;
    enemyCurrentHP = 70;
    enemyHP.innerHTML = enemyCurrentHP;
    action1.innerHTML = ("Attack");
    action2.innerHTML = ("Fire");
    action3.innerHTML = ("Blizzard");
    action4.innerHTML = ("Chaos Burst");
});

choice3.addEventListener("click", () => {
    playerChoice = 3;
    playerCurrentHP = 60;
    playerHP.innerHTML = playerCurrentHP;
    enemyCurrentHP = 70;
    enemyHP.innerHTML = enemyCurrentHP;
    choice1.innerHTML = ("Attack");
    choice2.innerHTML = ("Braver");
    choice3.innerHTML = ("Finishing Touch");
    choice4.innerHTML = ("Omni Slash");
});

choice4.addEventListener("click", () => {
    playerChoice = 4;
    playerCurrentHP = 60;
    playerHP.innerHTML = playerCurrentHP;
    enemyCurrentHP = 70;
    enemyHP.innerHTML = enemyCurrentHP;
    choice1.innerHTML = ("Attack");
    choice2.innerHTML = ("Spiral Cut");
    choice3.innerHTML = ("Energy Rain");
    choice4.innerHTML = ("Blitz Ace");
});

choice5.addEventListener("click", () => {
    playerChoice = 5;
    playerCurrentHP = 60;
    playerHP.innerHTML = playerCurrentHP;
    enemyCurrentHP = 70;
    enemyHP.innerHTML = enemyCurrentHP;
    choice1.innerHTML = ("Attack");
    choice2.innerHTML = ("Fast Blade");
    choice3.innerHTML = ("Cure");
    choice4.innerHTML = ("Word of the Mother");
});

action1.addEventListener("click", () =>{
    if (playerChoice == 1) {
        enemyCurrentHP - 2;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 1;
        playerHP.innerHTML = playerCurrentHP;
        limitBreak + 1
        limitBreakPoint.innerHTML = limitBreak;
    };
    if (playerChoice == 2) {
        enemyCurrentHP - 3;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 3;
        playerHP.innerHTML = playerCurrentHP;
        limitBreak + 1
        limitBreakPoint.innerHTML = limitBreak;
    }
    if (playerChoice == 3) {
        enemyCurrentHP - 3;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 2;
        playerHP.innerHTML = playerCurrentHP;
        limitBreak + 1
        limitBreakPoint.innerHTML = limitBreak;
    }
    if (playerChoice == 4) {
        enemyCurrentHP - 3;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 3;
        playerHP.innerHTML = playerCurrentHP;
        limitBreak + 1
        limitBreakPoint.innerHTML = limitBreak;
    }
    if (playerChoice == 5) {
        enemyCurrentHP - 2;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 1;
        playerHP.innerHTML = playerCurrentHP;
        limitBreak + 1
        limitBreakPoint.innerHTML = limitBreak;
    }
});

action2.addEventListener("click", () =>{
    if (playerChoice == 1) {
        enemyCurrentHP - 4;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 5;
        playerHP.innerHTML = playerCurrentHP;
        limitBreak + 2
        limitBreakPoint.innerHTML = limitBreak;
    };
    if (playerChoice == 2) {
        enemyCurrentHP - 4;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 3;
        playerHP.innerHTML = playerCurrentHP;
        limitBreak + 2
        limitBreakPoint.innerHTML = limitBreak;
    }
    if (playerChoice == 3) {
        enemyCurrentHP - 3;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 3;
        playerHP.innerHTML = playerCurrentHP;
        limitBreak + 2
        limitBreakPoint.innerHTML = limitBreak;
    }
    if (playerChoice == 4) {
        enemyCurrentHP - 3;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 3;
        playerHP.innerHTML = playerCurrentHP;
        limitBreak + 2
        limitBreakPoint.innerHTML = limitBreak;
    }
    if (playerChoice == 5) {
        enemyCurrentHP - 4;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 4;
        playerHP.innerHTML = playerCurrentHP;
        limitBreak + 2
        limitBreakPoint.innerHTML = limitBreak;
    }
});

action3.addEventListener("click", () =>{
    if (playerChoice == 1) {
        enemyCurrentHP - 2;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 1;
        playerHP.innerHTML = playerCurrentHP;
        limitBreak + 3
        limitBreakPoint.innerHTML = limitBreak;
    };
    if (playerChoice == 2) {
        enemyCurrentHP - 2;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 1;
        playerHP.innerHTML = playerCurrentHP;
        limitBreak + 3
        limitBreakPoint.innerHTML = limitBreak;
    }
    if (playerChoice == 3) {
        enemyCurrentHP - 2;
        enemyHP.innerHTML = enemyCurrentHP;
        limitBreak + 3
        limitBreakPoint.innerHTML = limitBreak;
    }
    if (playerChoice == 4) {
        enemyCurrentHP - 3*4;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 3;
        playerHP.innerHTML = playerCurrentHP;
        limitBreak + 3
        limitBreakPoint.innerHTML = limitBreak;
    }
    if (playerChoice == 5) {
        playerCurrentHP + 5;
        playerHP.innerHTML = playerCurrentHP;
        limitBreak + 3
        limitBreakPoint.innerHTML = limitBreak;
    }
});

action4.addEventListener("click", () =>{
    if (limitBreak => 99) {
        limitBreakAvailable = true;
    }
    if (playerChoice == 1) {
        enemyCurrentHP - 20;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP + 5;
        playerHP.innerHTML = playerCurrentHP;
    };
    if (playerChoice == 2) {
        enemyCurrentHP - 8*3;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 5;
        playerHP.innerHTML = playerCurrentHP;
    }
    if (playerChoice == 3) {
        enemyCurrentHP - 5*5;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 5;
        playerHP.innerHTML = playerCurrentHP;
    }
    if (playerChoice == 4) {
        enemyCurrentHP - 7*4;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP - 6;
        playerHP.innerHTML = playerCurrentHP;
    }
    if (playerChoice == 5) {
        enemyCurrentHP - 20;
        enemyHP.innerHTML = enemyCurrentHP;
        playerCurrentHP + 5;
        playerHP.innerHTML = playerCurrentHP;
    }
});