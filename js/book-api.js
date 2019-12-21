const booksButton = document.getElementById("show-books-btn");

// apel AJAX catre metoda GET a API-ului
booksButton.addEventListener("click", function (){
    const booksDiv = document.getElementById("books-div");
    $.get("http://localhost:3000/books/")
        .done(function (response) {
            console.log( "s-a terminat cu bine",response);
            if (response != null) {
                response.forEach(function (element) {
                    let paragraph = document.createElement("p");
                    paragraph.innerHTML = "Title:  " + element.title +
                        ",  Author:  " + element.author +
                        ",  Genre:  " + element.genre +
                        ",  Price:  " + element.price + " euros" +
                        ",  Id:  " + element._id;
                    booksDiv.appendChild(paragraph);
                })
            }
        })
        .fail(function (error) {
            console.log( "error",error);
        });
    });


// apel AJAX catre metoda POST a API-ului
const postButton = document.getElementById("submit-post");
postButton.addEventListener("click", function (){
    const title =  document.getElementById("title").value;
    const author =  document.getElementById("author").value;
    const genre =  document.getElementById("genre").value;
    const price =  document.getElementById("price").value;
    let data = {"title": title, "author": author, "genre": genre, "price":price};
    $.ajax({
        type: 'POST',
        url: "http://localhost:3000/books/",
        contentType: 'application/json',
        data: JSON.stringify(data),
    }).done(function () {
        console.log('POST successful');
    }).fail(function () {
        console.log('POST failed');
    });
});

// apel AJAX catre metoda PUT a API-ului
let updateButton = document.getElementById("submit-update");
updateButton.addEventListener("click", function (){
    const id = document.getElementById("book-id").value;
    const title =  document.getElementById("title1").value;
    const author =  document.getElementById("author1").value;
    const genre =  document.getElementById("genre1").value;
    const price =  document.getElementById("price").value;
    let data = {"title": title, "author": author, "genre": genre, "price":price};
    $.ajax({
        type: 'PUT',
        url: "http://localhost:3000/books/" + id,
        contentType: 'application/json',
        data: JSON.stringify(data),
    }).done(function (){
        console.log('UPDATE successfully');
    }).fail(function (){
        console.log('UPDATE failed');
    });
});

// apel AJAX catre metoda DELETE a API-ului
const deleteButton = document.getElementById("submit-delete");
deleteButton.addEventListener("click", function (){
    const id = document.getElementById("book-id-del").value;
    $.ajax({
        type: 'DELETE',
        url: "http://localhost:3000/books/" + id,
        contentType: 'application/json',
    }).done(function (){
        console.log('DELETE successfully');
    }).fail(function (){
        console.log('DELETE failed');
    });
});