let starter = document.querySelector('.starter');
let levels = document.querySelector('.levels');
let level = 0;
let boxes = document.querySelectorAll('.box');
let btn = ['pink', 'green', 'yellow', 'blue'];
let winMessageArr = [
    "Swechha, my princess, you're amazing! Keep shining, baby! ❤️",
    "I love you soo much, Swechha! You're my cutie and my star! Keep going, baby! 🌟",
    "Maya Swechha, you're unstoppable! Keep pushing, my love! 💪",
    "My sweet Swechha, you're doing incredible! Keep winning, cutie! 😘",
    "Swechha, you're my sunshine! Keep going strong, love! ☀️",
    "I believe in you, Swechha! My baby is the best! Keep smashing it! 💥",
    "Swechha, my heart races for you! You're my champion! Keep going, princess! ❤️",
    "You're doing amazing, Swechha! Keep rocking, my love! 🎸",
    "My gorgeous Swechha, you're killing it! Keep it up, cutie! 😍",
    "Swechha, you're my inspiration! Keep winning, my love! 💫",
    "Swechha baby, you light up my world! Keep going, my queen! 👑",
    "My love Swechha, you're so strong! Keep pushing forward, my cutie! 💖",
    "You're incredible, Swechha! Keep fighting, baby! 🔥",
    "My adorable Swechha, you're doing fantastic! Keep it up, cutie pie! 🥧",
    "You're amazing, Swechha! My baby never gives up! 💪",
    "Swechha, my love, you make me so proud! Keep winning, sweetheart! 🏆",
    "My princess Swechha, you're unstoppable! Keep pushing, baby girl! 💕",
    "Swechha, my cutie, you're shining brighter every day! Keep going strong! ✨",
    "My baby Swechha, you're so talented! Keep proving you're the best! 💯",
    "You're magical, Swechha! My love, keep reaching for the stars! 🌠",
    "Sweetheart Swechha, you're my superstar! Keep it up, maya! 🌟",
    "You're amazing, Swechha! Keep flying high, my baby! 🚀",
    "I love you Swechha! My baby never gives up! Keep going! ❤️",
    "Swechha, my princess, you're my everything! Keep smashing it, love! 💋",
    "You inspire me, Swechha! Keep it up, my sweet love! 🐾",
    "Swechha baby, you’re a rockstar! Keep winning, love! 🎯",
    "My heart skips a beat for you, Swechha! Keep shining, cutie! 💓",
    "Swechha, my maya, you're a warrior! Keep pushing through! ⚔️",
    "My queen Swechha, you're extraordinary! Keep rocking, baby! 🎵",
    "My sweetest Swechha, you're my everything! Keep dominating, love! 💫",
    "You're my hero, Swechha! Keep pushing forward, my brave baby! 🦸‍♀️",
    "Swechha, my maya, you're full of magic! Keep enchanting me with your wins! 🪄",
    "You're a diamond, Swechha! Keep shining bright, my princess! 💎",
    "Swechha baby, my heart belongs to you! Keep going strong, cutie! 💖",
    "You're a firecracker, Swechha! Keep lighting up the world, my love! 🎆",
    "My stunning Swechha, you're on fire! Keep blazing, baby! 🔥",
    "Swechha, my maya, you're my strength! Keep pushing, my sweet warrior! ⚡",
    "My princess Swechha, you never fail to amaze me! Keep it up, baby girl! 👸",
    "Swechha, my heart, you're truly unstoppable! Keep proving you're the best! ❤️",
    "You're my shooting star, Swechha! Keep reaching for your dreams, my love! 🌌",
    "Swechha, my baby, you're my heartbeat! Keep winning for us! 💓",
    "My sweet Swechha, you inspire me every day! Keep shining, cutie! ✨",
    "You're a legend, Swechha! Keep writing your success story, baby! 📖",
    "My love Swechha, you're my joy! Keep fighting strong, sweetheart! 🥰",
    "Swechha, my maya, you're truly magical! Keep spreading your magic, baby! 🪄",
    "You're my lucky charm, Swechha! Keep winning, love! 🍀",
    "Swechha, my princess, you fill my heart with love! Keep it up, baby girl! ❤️",
    "My gorgeous Swechha, you're so powerful! Keep smashing those goals! 🚀",
    "Swechha, my love, you're my pride! Keep making me proud, cutie! 🥇",
    "You're the light of my life, Swechha! Keep glowing, my sunshine! ☀️",
    "My sweet maya Swechha, you're the best! Keep conquering the world, baby! 🌍",
    "I love you, Swechha! You're my heart, my soul, and my strength! Keep going, my princess! 💞"
];

let LossMessageArr = [
    "Swechha, my princess, it's okay to stumble! You always get back up stronger, baby! ❤️",
    "I love you soo much, Swechha! Losses are just lessons. Keep going, my cutie! 🌟",
    "Maya Swechha, you did your best, and that's what matters! I'm so proud of you, love! 💪",
    "My sweet Swechha, one setback won't stop you! Keep pushing forward, cutie! 😘",
    "Swechha, you're my sunshine! Don't worry, you'll shine brighter next time! ☀️",
    "I believe in you, Swechha! Every fall makes you stronger! Keep rising, baby! 💥",
    "Swechha, my heart races for you no matter what! You're still my champion! ❤️",
    "You gave it your all, Swechha! That's what makes you amazing! Keep rocking, my love! 🎸",
    "My gorgeous Swechha, don't be discouraged! You're still my superstar! 😍",
    "Swechha, you're my inspiration! You'll bounce back even better! 💫",
    "Swechha baby, you’re still my queen! Losses can't dull your shine! 👑",
    "My love Swechha, you’re so strong! Failure is just part of success. Keep moving, cutie! 💖",
    "You're incredible, Swechha! I know you'll rise again! 🔥",
    "My adorable Swechha, you can restart anytime! Keep that beautiful smile, cutie pie! 🥧",
    "You're amazing, Swechha! Every step, even a misstep, is progress! 💪",
    "Swechha, my love, you make me so proud! Failure is proof you're trying! 🏆",
    "My princess Swechha, one bad moment won't define you! Keep going, baby girl! 💕",
    "Swechha, my cutie, remember that you are incredible no matter what! ✨",
    "My baby Swechha, success is built on failures! Keep trying, love! 💯",
    "You're magical, Swechha! Just restart and shine brighter! 🌠",
    "Sweetheart Swechha, you'll do even better next time! Don't stop now! 🌟",
    "You're amazing, Swechha! Just pick yourself up and keep going, my baby! 🚀",
    "I love you Swechha! This is just a stepping stone! Keep moving forward! ❤️",
    "Swechha, my princess, remember your strength! Keep pushing, love! 💋",
    "You inspire me, Swechha! Every stumble is proof you're trying! 🐾",
    "Swechha baby, you’re still a rockstar! Losses can't dull your shine! 🎯",
    "My heart skips a beat for you, Swechha! Don't let this hold you down, cutie! 💓",
    "Swechha, my maya, this is just one moment in your journey! Keep moving! ⚔️",
    "My queen Swechha, you're extraordinary! Don't stop now, baby! 🎵",
    "My sweetest Swechha, you're my everything! One loss can't change that! 💫",
    "You're my hero, Swechha! Even heroes lose sometimes! Keep trying, my brave baby! 🦸‍♀️",
    "Swechha, my maya, you have endless potential! Keep moving forward! 🪄",
    "You're a diamond, Swechha! Nothing can dull your sparkle! 💎",
    "Swechha baby, you always come back stronger! Don't forget that, cutie! 💖",
    "You're a firecracker, Swechha! This loss is just a pause before you shine again! 🎆",
    "My stunning Swechha, you're unstoppable! Dust yourself off and keep going! 🔥",
    "Swechha, my maya, you'll rise even stronger! Keep pushing, my sweet warrior! ⚡",
    "My princess Swechha, this moment doesn’t define you! Keep fighting, baby girl! 👸",
    "Swechha, my heart, you're still my unstoppable love! Keep your head up! ❤️",
    "You're my shooting star, Swechha! Just aim again and shine even brighter! 🌌",
    "Swechha, my baby, you're my heartbeat! I believe in you always! 💓",
    "My sweet Swechha, failure is just part of the journey! Keep smiling, cutie! ✨",
    "You're a legend, Swechha! One setback won't stop you, baby! 📖",
    "My love Swechha, you're my joy! I'm proud of you no matter what! 🥰",
    "Swechha, my maya, you have so much potential! Get back in the game, baby! 🪄",
    "You're my lucky charm, Swechha! Good things are coming! 🍀",
    "Swechha, my princess, you're stronger than you know! Don't stop now, baby! ❤️",
    "My gorgeous Swechha, losses are just lessons in disguise! Keep going, baby! 🚀",
    "Swechha, my love, you amaze me every day! You’ve got this! 🥇",
    "You're the light of my life, Swechha! Shine brighter next time, my sunshine! ☀️",
    "My sweet maya Swechha, your strength is endless! Keep moving forward, baby! 🌍",
    "I love you, Swechha! Losses don’t matter — you matter! Keep going, my princess! 💞"
];



//variables
let gameSequenceArr = [];
let userClicksArr = [];

let gameStarted = false; //current state of the game

for(let box of boxes) {
    box.classList.add('disabled');
}


document.addEventListener('keydown', startGame);

function startGame() {
    for(let box of boxes) {
        box.classList.remove('disabled');
    }
    if(!gameStarted) {
        gameStarted = true; //changed the state to started - true
        starter.innerText = '';
        ++level;
        levels.innerText = `Level ${level}`;
        let randomBtnIndex = Math.trunc(Math.random() * 4);
        setTimeout(() => {
            flashButton(boxes[randomBtnIndex]);
        },1000)
        gameSequenceArr.push(btn[randomBtnIndex]); 
    }           
};

function checkAnswer(index) {
    if(userClicksArr[index] === gameSequenceArr[index]) {
        if(userClicksArr.length == gameSequenceArr.length) {
            starter.innerText = (winMessageArr[Math.trunc(Math.random() * (winMessageArr.length))]);
            levelUp();
        }
    } 
    else {
        document.body.style.backgroundColor = 'red';
        for(let box of boxes) {
            box.classList.add('disabled');
        }
        setTimeout(() => {
            document.body.style.backgroundColor = 'white';
        },500)
        starter.innerText = (LossMessageArr[Math.trunc(Math.random() * (LossMessageArr.length))]);
        levels.innerText = `GAME OVER! Your total score was ${level - 1}\nPress any key to restart the game.`;
        gameStarted = false;
        level = 0;
        userClicksArr = [];
        gameSequenceArr = [];
    }
}

function levelUp() {
    userClicksArr = [];
    ++level;
    levels.innerText = `Level ${level}`;
    let randomBtnIndex = Math.trunc(Math.random() * 4);
    setTimeout(() => {
        flashButton(boxes[randomBtnIndex]);
    },1000);  
    gameSequenceArr.push(btn[randomBtnIndex]); //flashed the random box
}

for(let box of boxes) {
    box.addEventListener('click', buttonPress)
}

function buttonPress() {
    userflashButton(this);
    userClicksArr.push(this.classList[2]); //push the color of the box
    checkAnswer(userClicksArr.length - 1);
}

//function to flash a box
function flashButton(box) {
    box.classList.add("flash");
    setTimeout(() => {
    box.classList.remove("flash");
    }, 200);
};

function userflashButton(box) {
    box.classList.add("userflash");
    setTimeout(() => {
    box.classList.remove("userflash");
    }, 200);
};
