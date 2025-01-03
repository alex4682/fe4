// Завдання 1: Todo List
const todoList = document.querySelector("#todoList");

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(({ text, completed }) => {
        const li = document.createElement("li");
        li.classList.toggle("completed", completed);
        li.innerHTML = `<span>${text}</span><input type="checkbox" ${completed ? "checked" : ""} />`;
        todoList.appendChild(li);
    });
}

function saveTasks() {
    const tasks = Array.from(todoList.children).map((li) => ({
        text: li.querySelector("span").textContent,
        completed: li.classList.contains("completed"),
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

todoList.addEventListener("change", (e) => {
    if (e.target.matches("input[type='checkbox']")) {
        const li = e.target.closest("li");
        li.classList.toggle("completed");
        saveTasks();
    }
});

loadTasks();

// Завдання 2: Форма для збереження даних
const dataForm = document.querySelector("#dataForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

function loadData() {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
        nameInput.value = savedData.name || "";
        emailInput.value = savedData.email || "";
    }
}

function saveData() {
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
}

dataForm.addEventListener("submit", (e) => {
    e.preventDefault();
    saveData();
    alert("Дані збережено!");
});

loadData();

// Завдання 3: Список закладок
const bookmarkForm = document.querySelector("#bookmarkForm");
const bookmarkInput = document.querySelector("#bookmark");
const bookmarkList = document.querySelector("#bookmarkList");

function loadBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.forEach((bookmark) => {
        const li = document.createElement("li");
        li.innerHTML = `${bookmark} <button class="remove">Видалити</button>`;
        bookmarkList.appendChild(li);
    });
}

function saveBookmarks() {
    const bookmarks = Array.from(bookmarkList.children).map((li) => li.textContent.replace(' Видалити', ''));
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

bookmarkForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bookmark = bookmarkInput.value.trim();
    if (bookmark) {
        const li = document.createElement("li");
        li.innerHTML = `${bookmark} <button class="remove">Видалити</button>`;
        bookmarkList.appendChild(li);
        bookmarkInput.value = "";
        saveBookmarks();
    }
});

bookmarkList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        e.target.closest("li").remove();
        saveBookmarks();
    }
});

loadBookmarks();

// Завдання 4: Форма для логіна
const loginForm = document.querySelector("#loginForm");
function saveUser() {
    const user = {
        login: "alex",
        password: "1234",
    };
    localStorage.setItem("user", JSON.stringify(user));
}

saveUser();

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const login = document.querySelector("#login").value;
    const password = document.querySelector("#password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.login === login && storedUser.password === password) {
        alert("Вхід успішний!");
    } else {
        alert("Невірний логін або пароль");
    }
});

