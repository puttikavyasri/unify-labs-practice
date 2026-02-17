function start() {

    let pin = "9999";
    let tries = 3;
    let ok = false;

    while (tries > 0) {
        let userPin = prompt("Enter PIN:");

        if (userPin === pin) {
            ok = true;
            alert("Welcome to " + "Virtual Core v1.0");
            break;
        } else {
            tries--;
            alert("Wrong PIN. Tries left: " + tries);
        }
    }

    if (ok === false) {
        alert("SYSTEM SELF-DESTRUCT");
        return;
    }

    
    let balance = 1000;
    let price = 50;
    let secret = "matrix";

 
    while (true) {

        let cmd = prompt("[V-CORE]> bank / shop / vault / exit");

        switch (cmd) {

       
            case "bank":
                let bankCmd = prompt("deposit / withdraw / balance / back");

                if (bankCmd === "deposit") {
                    let amt = parseFloat(prompt("Amount:"));
                    balance = balance + amt;
                    alert("Balance: " + balance);

                } else if (bankCmd === "withdraw") {
                    let amt = parseFloat(prompt("Amount:"));

                    if (amt > balance) {
                        alert("INSUFFICIENT FUNDS");
                    } else {
                        balance = balance - amt;
                        alert("Balance: " + balance);
                    }

                } else if (bankCmd === "balance") {
                    alert("Balance: " + balance);
                }
                break;

            case "shop":
                let qty = Number(prompt("Quantity:"));
                let total = qty * price;
                let discount = 0;

                if (qty > 10) {
                    discount = 0.2;
                } else if (qty > 5) {
                    discount = 0.1;
                }

                let pay = total - (total * discount);

                if (pay > balance) {
                    alert("Not enough balance");
                } else {
                    balance = balance - pay;
                    alert("Paid: " + pay + "\nBalance: " + balance);
                }
                break;

           
            case "vault":
                alert("Hint: Sci-fi movie");
                let word = prompt("Secret word:");

                if (word === secret) {
                    alert("SECRET UNLOCKED 🎉");
                } else {
                    alert("Wrong word");
                }
                break;

            case "exit":
                alert("System Off");
                return;

            default:
                alert("Invalid command");
        }
    }
}
