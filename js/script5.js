// Завдання 1
// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.
let a = 0;
const intervalId = setInterval(() => {
    console.log('Hello World');
    a++;
    if (a === 5) {
        clearInterval(intervalId);
    }
}, 1000);



// Завдання 2
// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.

const d1 = document.querySelector('#d1');
const d2 = document.querySelector('#d2');
const d3 = document.querySelector('#d3');
const d4 = document.querySelector('#d4');

const anim = () => {
    d1.style.transform = 'rotate(45deg)';
    d2.style.transform = 'scale(1.5)';
    d3.style.transform = 'translateX(50px)';
    d4.style.transform = 'translateY(50px)';
};

const intervalId2 = setInterval(() => {
    anim();
    setTimeout(() => {
        d1.style.transform = 'rotate(0deg)';
        d2.style.transform = 'scale(1)';
        d3.style.transform = 'translateX(0px)';
        d4.style.transform = 'translateY(0px)';
    }, 500);
}, 1000);

// Завдання 3
// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.

let score = 0;
let timeLeft = 15;
let gameOver = false;
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const gameBox = document.getElementById('gameBox');

function getRandomPosition() {
    const boxWidth = gameBox.clientWidth;
    const boxHeight = gameBox.clientHeight;
    const x = Math.floor(Math.random() * (boxWidth - 50));
    const y = Math.floor(Math.random() * (boxHeight - 50));
    return { x, y };
}

function createClickableElement() {
    if (gameOver) return;

    const clickable = document.createElement('div');
    clickable.classList.add('clickable');
    const { x, y } = getRandomPosition();
    clickable.style.left = `${x}px`;
    clickable.style.top = `${y}px`;

    clickable.addEventListener('click', function () {
        score++;
        scoreDisplay.textContent = score;
        clickable.remove();
    });

    gameBox.appendChild(clickable);
}

const gameTimer = setInterval(function () {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(gameTimer);
        gameOver = true;
        alert(`Гру завершено! Ваші очки: ${score}`);
    }
}, 1000);

const gameInterval = setInterval(createClickableElement, 1000);

// Завдання 4
// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.
const timeInput = document.getElementById('timeInput');
const startButton = document.getElementById('startButton');
const remainingTimeDisplay = document.getElementById('remainingTime');

startButton.addEventListener('click', function () {
    const time = parseInt(timeInput.value);

    if (isNaN(time) || time <= 0) {
        alert('Будь ласка, введіть правильне значення часу.');
        return;
    }

    let remainingTime = time;
    remainingTimeDisplay.textContent = remainingTime;

    const countdown = setInterval(function () {
        remainingTime--;
        remainingTimeDisplay.textContent = remainingTime;

        if (remainingTime <= 0) {
            clearInterval(countdown);
            alert(`Час вичерпано!`);
        }
    }, 1000);
});