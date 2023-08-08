const posts = []; //array 
let postIndex = -1;

function savePost() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;

    if (title && category && resume && author && date) {
        if (postIndex == -1) {
            storePost(title, category, resume, author, date);
            cleanFields();
            showPosts();
        } else {
            posts[postIndex] = {
                title,
                category,
                resume,
                author,
                date,
            };
        }
        cleanFields();
        showPosts();
        postIndex = -1;
    } else {
        alert("Preencha todos os campos!")
    }

    storePost(title, category, resume, author, date);

    cleanFields()

}

function cleanFields() {
    const title = document.getElementById("title").value = "";
    const category = document.getElementById("category").value = "";
    const resume = document.getElementById("resume").value = "";
    const author = document.getElementById("author").value = "";
    const date = document.getElementById("date").value = "";

}

function storePost(title, category, resume, author, date) {
    const post = {
        title, //posso colocar minha variavel
        category,
        resume,
        author,
        date,
    };

    posts.push(post);

    console.log(posts);
}

function showPosts() {
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
        <div class= "itemPost">
        <h2>${post.title}</h2>
        <p><strong>Categoria: </strong>${post.category}</p>
        <p><strong>Resumo: </strong>${post.resume}</p>
        <p><strong>Autor: </strong>${post.author}</p>
        <p><strong>Data de Publicação: </strong>${post.date}</p>

        <button onclik= "editPost(${index})">Editar</button>
        <button onclik= "deletePost(${index})">Excluir</button>
        </div>
    
        `;
    })

    document.getElementById("list").innerHTML = showContent;

}


function editPost(index) {
    const post = posts[index];

    const title = document.getElementById("title").value = post.title;
    const category = document.getElementById("category").value = post.category;
    const resume = document.getElementById("resume").value = post.resume;
    const author = document.getElementById("author").value = post.author;
    const date = document.getElementById("date").value = post.date;

    postIndex = index;

}