// Arrow function: Title Case
const toTitleCase = (text) => {
    return text
        .trim()
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

// Arrow function: Count Vowels
const countVowelFunc = (text) => {
    let vowels = "aeiou";
    let count = 0;

    for (let char of text.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

// Arrow function: Secret Message Generator
const secretGenerator = (text) => {
    const secretWords = ["bad", "secret", "wrong"];
    let result = text;

    secretWords.forEach(word => {
        let regex = new RegExp(word, "gi");
        result = result.replace(regex, "***");
    });

    return result;
};

// Button functions
function titleCase() {
    let text = document.getElementById("inputText").value;
    document.getElementById("output").innerText =
        toTitleCase(text);
}

function countVowels() {
    let text = document.getElementById("inputText").value;
    let count = countVowelFunc(text);
    document.getElementById("output").innerText =
        "Vowel Count: " + count;
}

function secretMessage() {
    let text = document.getElementById("inputText").value;
    document.getElementById("output").innerText =
        secretGenerator(text);
}
