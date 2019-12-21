const booksButton = document.createElement("button");
booksButton.innerHTML = "Show all books";
booksButton.className = "btn btn-primary";
document.body.appendChild(booksButton);

booksButton.addEventListener("click", function(){

    $.get("http://localhost:3000/books/")
        .done(function(response) {
            console.log( "s-a terminat cu bine",response);
            response.forEach(function(element){
                let paragraph = document.createElement("p");
                paragraph.innerHTML = "Title:  " + element.title +
                    ",  Author:  " + element.author +
                    ",  Genre:  " + element.genre +
                    ",  Price:  " + element.price + " euros" +
                    ",  Id:  " + element._id;

                document.body.appendChild(paragraph);
        })
        .fail(function(error) {
            console.log( "error",error);
        });
    });
});

let updateButton = document.getElementById("submit-update");
updateButton.addEventListener("click", function(){
    const id = document.getElementById("book-id").value;
    const title =  document.getElementById("title1").value;
    const author =  document.getElementById("author1").value;
    const genre =  document.getElementById("genre1").value;
    const price =  document.getElementById("price").value;
    let data = {"title": title, "author": author, "genre": genre, "price":price};
    // if(id !== "" && title !== "" && author !== "" && genre !== "" && price !== "") {
        $.ajax({
            type: 'PUT',
            url: "http://localhost:3000/books/" + id,
            contentType: 'application/json',
            data: JSON.stringify(data), // access in body
        }).done(function () {
            console.log('update successfully');
        }).fail(function (msg) {
            console.log('update failed');
        });
    //}
});



const deleteButton = document.getElementById("submit-delete");
deleteButton.addEventListener("click", function(){
    const id = document.getElementById("book-id-del").value;
    $.ajax({
        type: 'DELETE',
        url: "http://localhost:3000/books/" + id,
        contentType: 'application/json',
    }).done(function () {
        console.log('delete successfully');
    }).fail(function (msg) {
        console.log('delete failed');
    });
});