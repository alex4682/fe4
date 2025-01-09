// Завдання 1
// Створити таймер, який буде починати відлік з 1 години та зменшувати час кожну хвилину.При досягненні 30 хвилин, таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.
let time = 60;
const timer = document.querySelector('#time');
const intervalId = setInterval(() => {
    timer.textContent = time;
    time--;
    if (time === 30) {
        alert('Залишилось менше половини часу');
    }
    if (time === 0) {
        clearInterval(intervalId);
    }
}, 1000);


//     Завдання 2
// Створити таймер, який буде починати відлік з 30 секунд та зменшувати час кожну мілісекунду.При досягненні 10 секунд, таймер повинен відтворювати якусь анімацію, а при досягненні 0 секунд — виконувати певну дію, наприклад, робити кнопку почати знову активною.
let time2 = 30;
let millisec = 99;

const sec = document.querySelector('#sec');
const milisec = document.querySelector('#milisec');

const intervalId2 = setInterval(() => {
    milisec.textContent = millisec.toString().padStart(2, '0');
    millisec--;

    if (millisec < 0) {
        millisec = 99;
        time2--;
        sec.textContent = time2;

        if (time2 === 10) {
            sec.style.color = 'red';
            milisec.style.color = 'red';
            document.querySelector('p').style.color = 'red';
        }

        if (time2 < 0) {
            clearInterval(intervalId2);
            sec.style.color = 'black';
            milisec.style.color = 'black';
        }
    }
}, 10);
