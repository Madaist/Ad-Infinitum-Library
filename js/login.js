function createInput(type, id, className, divId) {
    let input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.className = className;
    let nameDiv = document.getElementById(divId);
    nameDiv.appendChild(input);
}

createInput("email", "exampleInputEmail1", "form-control", "email-div");
createInput("password", "exampleInputPassword1", "form-control", "password-div");

const emailInput = document.querySelector("#exampleInputEmail1");
const passwordInput = document.querySelector("#exampleInputPassword1");
const submitButton = document.querySelector("button");

function login(email, password) {
    let users = JSON.parse(localStorage.getItem("users"));
    let i;
    let found = 0;
    for(i = 0; i < users.length; i++){
        if (users[i].email === email && users[i].password === password){
            found = 1;
            sessionStorage.setItem("userEmail", email);
            sessionStorage.setItem("password", password);
        }

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
    } else {
        window.location.href = "book-api.html";
    }
});
