function createInput(type, id, className, divId) {
	let input = document.createElement("input");
	input.type = type;
	input.id = id;
	input.className = className;
	let nameDiv = document.getElementById(divId); // div-ul in care vrem sa punem input-ul
	nameDiv.appendChild(input);
}
//cream inputuri pentru email si parola
createInput("email", "exampleInputEmail1", "form-control", "email-div");
createInput("password", "exampleInputPassword1", "form-control", "password-div");
//luam inputurile date de user
const emailInput = document.querySelector("#exampleInputEmail1");
const passwordInput = document.querySelector("#exampleInputPassword1");
const submitButton = document.querySelector("button");

function deleteAccount(email, password) {
	//preluam vectorul de useri salvti in localStorage
	let users = JSON.parse(localStorage.getItem("users"));
	let i;
	let found = false;
	for(i = 0; i < users.length; i++){
		if (users[i].email === email && users[i].password === password){ //daca gasim userul cu emailul si parola date ca input
			users.splice(i); // stergem elementul de pe pozitia i
			found = true;
			localStorage.setItem("users", JSON.stringify(users)); //salvam noul vector in localStorage
		}
	}
	return found;
}



submitButton.addEventListener("click", function (){
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
		confirmButton: 'btn btn-success',
		cancelButton: 'btn btn-danger'
		},
	buttonsStyling: false
	});

	swalWithBootstrapButtons.fire({
		title: 'Are you sure?',
		text: "You won't be able to revert this!",
		icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: 'No, cancel!',
			reverseButtons: true
	}).then((result) => {
		if (result.value) {
			
			if(deleteAccount(emailInput.value, passwordInput.value)){
				swalWithBootstrapButtons.fire(
				'Deleted!',
				'Your account has been deleted.',
				'success'
			)} else {
				swalWithBootstrapButtons.fire(
				'Oops..',
				'This account doesn\'t exist',
				'error'
				)
			}	
		} else if (
		
		result.dismiss === Swal.DismissReason.cancel
		){
			swalWithBootstrapButtons.fire(
			'Cancelled',
			'Your account is safe :)',
			'error'
		)}
	})
});
