function addIntern() {
    var name = document.getElementById("name").value;
    var role = document.getElementById("role").value;
    var date = document.getElementById("date").value;

    if (name === "" || role === "" || date === "") {
        alert("Please fill all fields");
        return;
    }

    var list = document.getElementById("internList");

    var li = document.createElement("li");
    li.innerText = name + " - " + role + " - " + date;

    list.appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
    document.getElementById("date").value = "";
}