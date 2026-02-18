const tasks = [
    { name: "Assignment", status: "Completed" },
    { name: "Project", status: "Pending" },
    { name: "Exam Prep", status: "Completed" }
];

const prices = [100, 200, 300];

const expenses = [5000, 2000, 3000];

function filterTasks() {
    const completed = tasks.filter(task => task.status === "Completed");
    const pending = tasks.filter(task => task.status === "Pending");

    document.getElementById("output").innerText =
        "Completed: " + completed.length + " | Pending: " + pending.length;
}

function calculatePrices() {
    const taxPrices = prices.map(price => price + price * 0.10);

    document.getElementById("output").innerText =
        "Prices with Tax: " + taxPrices.join(", ");
}

function calculateBudget() {
    const total = expenses.reduce((sum, value) => sum + value, 0);

    document.getElementById("output").innerText =
        "Total Company Budget: ₹" + total;
}
