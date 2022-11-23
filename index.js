const input = document.getElementById("input");
const add = document.getElementById("add-icon");
const tasks = document.getElementById("tasks");

let inputValue = "";
let isComplete = false;

input.addEventListener("change", (e) => {
  inputValue = e.target.value;
});

add.addEventListener("click", () => {
  if (inputValue.length >= 3) {
    let li = document.createElement("li");
    li.setAttribute("class", "task");
    tasks.appendChild(li);

    let span = document.createElement("span");
    span.setAttribute("class", "text");
    span.innerText = inputValue;
    li.appendChild(span);

    let div = document.createElement("div");
    div.setAttribute("class", "buttons");

    let button1 = document.createElement("button");
    button1.classList.add("btn");
    button1.setAttribute("id", "complete");
    button1.innerHTML = `<i class="fa-solid fa-check"></i>`;
    div.appendChild(button1);

    let button2 = document.createElement("button");
    button2.classList.add("btn");
    button2.setAttribute("id", "delete");
    button2.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    div.appendChild(button2);

    li.appendChild(div);
    inputValue = "";
    input.value = "";

    button1.addEventListener("click", () => {
      if (!isComplete) {
        span.classList.add("completed");
        button1.innerHTML = `<i class="fa-solid fa-rotate-left"></i>`;
        isComplete = true;
      } else {
        span.classList.remove("completed");
        button1.innerHTML = `<i class="fa-solid fa-check"></i>`;
        isComplete = false;
      }
    });

    button2.addEventListener("click", () => {
      li.remove();
    });
  } else {
    alert("Task must be greater than 3 characters");
  }
});
