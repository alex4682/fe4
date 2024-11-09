const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Q'];
let currentKeyIndex;

function setNewKey() {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    document.getElementById("key").textContent = keys[currentKeyIndex];
    document.getElementById("points").textContent = points
}

let points = 0;
document.addEventListener('keydown', (event) => {
    const pressedKey = event.key.toUpperCase();
    if (pressedKey === keys[currentKeyIndex]) {
        points += 100;
        PNotify.alert({
            text: "Правильна клавіша! Продовжуйте!",
            type: 'success',
            delay: 500
        });
    } else {
        if (points > 0) { points -= 100; }
        PNotify.alert({
            text: `Помилка! Ви натиснули "${pressedKey}", а потрібно "${keys[currentKeyIndex]}".`,
            type: 'error',
            delay: 500
        });
    }
    setNewKey();
});

document.addEventListener('keypress', (event) => {
    event.preventDefault();
});

document.getElementById("newGameBtn").addEventListener('click', () => {
    points = 0;
    setNewKey();
    PNotify.alert({
        text: "Нова гра розпочата! Натисніть на вказану клавішу.",
        type: 'info',
        delay: 500
    });
});

setNewKey();
// 2
const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
        {
            label: "Продажі за останній місяць",
            data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
            borderWidth: 1,
        },
    ],
};

const config = {
    type: 'line',
    data: chartData,
    options: {}
};

const myChart = new Chart(document.getElementById("myChart"), config);