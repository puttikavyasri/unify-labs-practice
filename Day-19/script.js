let input = document.getElementById("input");
let addBtn = document.querySelector("#add");
let list = document.getElementById("list");

addBtn.addEventListener("click", function () {

    if (input.value === "") return;

    let li = document.createElement("li");
    li.textContent = input.value;

    let del = document.createElement("button");
    del.textContent = "Delete";

    li.appendChild(del);
    list.appendChild(li);

    input.value = "";

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    del.addEventListener("click", function (e) {
        e.stopPropagation();
        li.remove();
    });

});