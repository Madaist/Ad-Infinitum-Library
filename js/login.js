function createInput(type, id, className, divId) {
    let input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.className = className;
    let nameDiv = document.getElementById(divId);
    nameDiv.appendChild(input);
}
// cream inputuri de tip email si parola
createInput("email", "exampleInputEmail1", "form-control", "email-div");
createInput("password", "exampleInputPassword1", "form-control", "password-div");
// luam varlorile inputurilor date de useri
const emailInput = document.querySelector("#exampleInputEmail1");
const passwordInput = document.querySelector("#exampleInputPassword1");
const submitButton = document.querySelector("button");

function login(email, password) {
    // luam vectorul de useri din localStorage
    let users = JSON.parse(localStorage.getItem("users"));
    let found = 0;
    for(let i = 0; i < users.length; i++){ // parcurgem vectorul
        // daca gasim valorile date de user ca input, salvam datele in sessionStorage
        if (users[i].email === email && users[i].password === password){
            found = 1;
            sessionStorage.setItem("userEmail", email);
            sessionStorage.setItem("password", password);
        }
        // daca informatiile corespund celui de administrator, setam found la 2 (ca sa stim ca s-a logat administratorul)
        if (found === 1 && email === "istrate_madalina7@yahoo.com" && password === "1@Asdfgh"){
            found = 2;
        }
    }
    return found;
}

submitButton.addEventListener("click", function (){
    const returnValue = login(emailInput.value, passwordInput.value);
    if (returnValue === 1) {
        Swal.fire(
            'You are logged in',
            'Welcome!',
            'success'
        )
    } else if (returnValue === 0){
        Swal.fire(
            'Oops..',
            'Incorrect email or password',
            'error'
        )
    } else { // daca s-a logat administratorul, redirectam catre pagina de creare/updatare/stergere carti
        window.location.href = "book-api.html";
    }
});
