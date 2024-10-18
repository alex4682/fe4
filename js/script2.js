const slider = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

const changeImgSize = () => {
    const size = slider.value * 5 + "px";
    img.style.height = size;
    img.style.width = size;
}


document.addEventListener("input", _.debounce(changeImgSize, 100));

const box = document.querySelector("#box");

box.addEventListener("mousemove", _.debounce(() => {
    console.log(Math.random())
}, 100))