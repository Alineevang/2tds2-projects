const posts = []; //array 

function savePost() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;

    if (title && category && resume && author && date) {
        storePost(title, resume, author, date);
        cleanFields();
    } else {
        alert ("Preencha todos os campos!")
    }

storePost (title, resume, author, date);

cleanFields()

}

function cleanFields() {
    const title = document.getElementById("title").value = "";
    const category = document.getElementById("category").value = "";
    const resume = document.getElementById("resume").value = "";
    const author = document.getElementById("author").value = "";
    const date = document.getElementById("date").value = "";

}

function storePost (title, category, resume, author, date) {
    const post = {
        title: title, //posso tirar minha variavel
        category: category,
        resume: resume,
        author: author,
        date: date
    }

    posts.push(post);

    console.log(posts);
}
