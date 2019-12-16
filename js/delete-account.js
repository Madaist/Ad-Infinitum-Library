function createInput(type, id, className, divId){
	var input = document.createElement("input");
	input.type = type;
	input.id = id;
	input.className = className;
	var nameDiv = document.getElementById(divId);
	nameDiv.appendChild(input);
}

createInput("email", "exampleInputEmail1", "form-control", "email-div");
createInput("password", "exampleInputPassword1", "form-control", "password-div");

var emailInput = document.querySelector("#exampleInputEmail1");
var passwordInput = document.querySelector("#exampleInputPassword1");

var submitButton = document.querySelector("button");

function deleteAccount(email, password){
	var users = JSON.parse(localStorage.getItem("users"));
	var i;
	var found = false;
	for(i = 0; i < users.length; i++){
		if(users[i].email == email && users[i].password == password){
			users.splice(i);
			found = true;
			localStorage.setItem("users", JSON.stringify(users));
		};
	};
	return found;
}



submitButton.addEventListener("click", function(){
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
		confirmButton: 'btn btn-success',
		cancelButton: 'btn btn-danger'
		},
	buttonsStyling: false
	})

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
				'Your file has been deleted.',
				'success'
			)}
			else{
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

// 1@Asdfgh