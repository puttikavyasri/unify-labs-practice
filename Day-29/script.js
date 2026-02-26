const api = "/api/posts";

async function loadPosts() {
    const res = await fetch(api);
    const data = await res.json();

    const container = document.getElementById("posts");
    container.innerHTML = "";

    data.forEach(post => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p><b>${post.category}</b></p>
            <p>${post.content.substring(0,100)}...</p>
            <button onclick="deletePost('${post._id}')">Delete</button>
        `;
        container.appendChild(div);
    });
}

async function createPost() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const content = document.getElementById("content").value;

    await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, category, content })
    });

    loadPosts();
}

async function deletePost(id) {
    await fetch(api + "/" + id, {
        method: "DELETE"
    });

    loadPosts();
}

function toggleMode() {
    document.body.classList.toggle("dark");
}

loadPosts();