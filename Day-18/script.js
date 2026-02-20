class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this._health = 50;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        if (value > 100) this._health = 100;
        else if (value < 0) this._health = 0;
        else this._health = value;
    }

    feed() {
        this.health = this.health + 10;
    }

    play() {
        this.health = this.health - 10;
    }

    getStatus() {
        return this.name + " | " + this.type + " | Health: " + this.health;
    }
}

let pet;

function createPet() {
    let name = document.getElementById("petName").value;
    let type = document.getElementById("petType").value;

    if (name === "") return;

    pet = new Pet(name, type);

    document.getElementById("petArea").classList.remove("hide");
    document.getElementById("title").innerText = name + " - " + type;
    update();
}

function feedPet() {
    pet.feed();
    update();
}

function playPet() {
    pet.play();
    update();
}

function update() {
    document.getElementById("status").innerText = pet.getStatus();
}