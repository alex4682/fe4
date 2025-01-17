const myBirthday = new Date('2025-04-01T00:00:00').getTime();
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const happyMessage = document.getElementById('happy');
const timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = myBirthday - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    days.textContent = d < 10 ? '0' + d : d;
    hours.textContent = h < 10 ? '0' + h : h;
    minutes.textContent = m < 10 ? '0' + m : m;
    seconds.textContent = s < 10 ? '0' + s : s;
    if (diff < 0) {
        clearInterval(timer);
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
        happyMessage.style.display = 'block';
    }
}, 1000);
