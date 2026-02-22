let loading = document.getElementById("loading");
let dataDiv = document.getElementById("data");

async function getData() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

        let result = await response.json();

        loading.style.display = "none";

        for (let i = 0; i < 5; i++) {
            let post = document.createElement("div");
            post.innerHTML = result[i].title;
            dataDiv.appendChild(post);
        }

    } catch (error) {
        loading.innerText = "Error loading data";
    }

}

getData();