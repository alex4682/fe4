const gallery = document.querySelector("#gallery");
const backdrop = document.querySelector(".backdrop");
const closeButton = document.querySelector("#close");

gallery.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        const listItem = event.target.closest("li");
        const allItems = Array.from(gallery.children);
        const index = allItems.indexOf(listItem) + 1;

        backdrop.style.display = 'flex';

        const modalDivs = backdrop.querySelectorAll("div");
        modalDivs.forEach(div => div.style.display = 'none');

        const modalDivToShow = backdrop.querySelector(`div[id='${index}`);
        modalDivToShow.style.display = 'block';
    }
});
closeButton.addEventListener("click", () => {
    backdrop.style.display = 'none';
});
