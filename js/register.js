function createInput(type, placeholder, id, className, divId, areaDescribedBy){
	let input = document.createElement("input");
	input.type = type;
	input.placeholder = placeholder;
	input.id = id;
	input.className = className;
	input.setAttribute("area-describedby", areaDescribedBy);
	const nameDiv = document.getElementById(divId);
	nameDiv.appendChild(input);
}

function createGenderInput(type, className, id, value, labelClass, labelId, divId){
	let radioBtn = document.createElement("input");
	radioBtn.setAttribute("type", type);
	radioBtn.className = className;
	radioBtn.id = id;
	radioBtn.value = value;

	let label = document.createElement("label");
	label.className = labelClass;
	label.id = labelId;
	label.htmlFor = radioBtn.id;
	label.innerHTML = radioBtn.value;

	const genderDiv = document.getElementById(divId);
	genderDiv.appendChild(radioBtn);
	genderDiv.appendChild(label);
}

function createSmallText(id, className, innerHTML, divId){
	let small = document.createElement("small");
	small.id = id;
	small.className = className;
	small.innerHTML = innerHTML;
	const smallDiv = document.getElementById(divId);
	smallDiv.appendChild(small);
}

function createLabel(className, htmlFor, innerHTML, divId){
	let label = document.createElement("label");
	label.className = className;
	label.htmlFor = htmlFor;
	label.innerHTML = innerHTML;
	const labelDiv = document.getElementById(divId);
	labelDiv.appendChild(label);
}

function createSelectInput(id, className, divId){
	let selectInput = document.createElement("select");
	selectInput.id = id;
	selectInput.className = className;
	const selectDiv = document.getElementById(divId);
	selectDiv.appendChild(selectInput);
	return selectInput;
}

createInput("text", "First name", "first-name", "form-control", "first-name-div", "");
createInput("text", "Last name", "last-name", "form-control", "last-name-div", "");
createInput("text", "", "formGroupUsername", "form-control",  "username-div", "");
createInput("email", "", "exampleInputEmail1", "form-control", "email-div", "emailHelp");
createInput("password", "", "exampleInputPassword1", "form-control", "password-div", "");
createInput("checkbox", "", "exampleCheck1",  "form-check-input", "checkbox-div", "");
createInput("range", "", "formControlRange", "form-control-range", "range-div", "");

createGenderInput("radio", "form-check", "exampleRadios1", "Male", "form-check-label", "m-label", "male-div");
createGenderInput("radio", "form-check", "exampleRadios2", "Female", "form-check-label", "f-label", "female-div");

createSmallText("usernameHelpBlock", "form-text", "Username must be 4-16 characters long and can contain letters, numbers and -._",  "username-div");
createSmallText("emailHelp", "form-text text-muted", "We'll never share your email with anyone else.", "email-div");
createSmallText("passwordHelpBlock", "form-text", "Your password must be 8-20 characters long, contain at least a capital letter, a lower letter, a digit and a special character.", "password-div");
createLabel("form-check-label", "exampleCheck1", "Check me out", "checkbox-div");

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const radioBtnMale = document.querySelector("#exampleRadios1");
const radioBtnFemale = document.querySelector("#exampleRadios2");
const usernameInput = document.querySelector("#formGroupUsername");
const emailInput = document.querySelector("#exampleInputEmail1");
const emailHelp = document.querySelector("#emailHelp");
const passwordInput = document.querySelector("#exampleInputPassword1");
const rangeInput = document.querySelector("#formControlRange");

let selectDayInput = createSelectInput("selectDay", "form-control", "select-day-div");
let i;
let option;
for(i = 1; i < 32; i++ ){
	option = document.createElement("option");
	option.text = i;
	selectDayInput.add(option);
}

const selectMonthInput = createSelectInput("selectMonth", "form-control", "select-month-div");
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];
for(i = 0; i < months.length; i++ ){
	option = document.createElement("option");
	option.text = months[i];
	selectMonthInput.add(option);
}

const selectYearInput = createSelectInput("selectYear", "form-control", "select-year-div");
for(i = 1920; i < 2010; i++ ){
	option = document.createElement("option");
	option.text = i;
	selectYearInput.add(option);
}

// pentru input-ul de tip Range se afiseaza valoarea la fiecare modificare
const rangeValue = document.createElement("p");
rangeValue.innerHTML = rangeInput.value;
rangeInput.parentNode.insertBefore(rangeValue, rangeInput.nextSibling);
rangeInput.addEventListener("change", function(){
	rangeValue.innerHTML = rangeInput.value;
});
	

// ********************************* validari  *************************************** //
const emailRegex = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9]+([a-z0-9]*)\.)+[a-zA-Z]+$/;
/*
^ - incepe de la inceputul stringului
[a-zA-Z0-9_-] - face match cu un singur caracter din range-urile a-z,A-Z,0-9
+ - face match cu cel putin o aparitie
\. - folosim \ ca sa facem escape pentru ., care e caracter special
* - face match cu 0 sau mai multe aparitii, deci grupul (\.[a-zA-Z0-9_-]+) este optional
nu puteam pune punctul direct in primul range pentru ca un email nu trebuie sa inceapa cu punct si nici sa aiba punct chiar inainte de @
dupa @ trebuie sa avem litere sau cifre neaprat si apoi un punct, apoi iar litere
([a-z0-9]*)\.)+ - putem avea punct de mai multe ori dupa @
$ - sfarsitul sting-ului
*/

const passwordRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[?!~@#$%^&*`'"_=+,\.?{}-])[a-zA-Z0-9!?@#$%^&*_=+,\.?{}-]{8,20}/;
/*
.* matches any character (except for line terminators)
?=.* - CEL PUTIN UNA
*/
const nameRegex = /^([a-zA-Z]{3,16})$/;
const usernameRegex = /^([a-zA-Z0-9_\.-]{4,16})$/;

function fieldIsValid(field, fieldRegex){
	return fieldRegex.test(field);
}


// La incarcarea paginii, butonul de "Submit" este dezactivat
const submitButton = document.querySelector("button");
submitButton.disabled = true;
submitButton.style.cursor = "not-allowed";

// Butonul de submit se reactiveaza cand checkbox-ul este bifat (si se dezactiveaza cand este debifat din nou checkbox-ul).
const checkBox = document.querySelector("#exampleCheck1");
checkBox.checked = false;
checkBox.addEventListener("click", function(){
	if(checkBox.checked === true){
		submitButton.disabled = false;
		submitButton.style.cursor = "pointer";
	}
	else {
	submitButton.disabled = true;
	submitButton.style.cursor = "not-allowed";
	}
});

function swalFire(icon, title, text){
	Swal.fire({
			icon: icon,
			title: title,
			text: text
		})
}

function fieldsValidation(){
	let wrongs = 0;
	if(fieldIsValid(firstNameInput.value, nameRegex) === false || fieldIsValid(lastNameInput.value, nameRegex) === false ||
	   firstNameInput.value === "" || lastNameInput.value === ""){
		   swalFire('error', 'Invalid name', 'Please insert your real name.');
		   wrongs++;
	}
	if(radioBtnFemale.checked === false && radioBtnMale.checked === false){
		swalFire('error', 'Oops..', 'Please insert your gender.');
		wrongs++;
	}
	if(radioBtnFemale.checked === true && radioBtnMale.checked === true){
		swalFire('error', 'Oops..', 'Please insert a single gender.');
		wrongs++;
	}
	if(usernameInput.value === "" || fieldIsValid(usernameInput.value, usernameRegex) === false){
		swalFire('error', 'Invalid username', 'Please insert a valid username.');
		wrongs++;
	}
	if (emailInput.value === "" || fieldIsValid(emailInput.value, emailRegex) === false){
		swalFire('error', 'Invalid email', 'Please insert a valid email.');
		wrongs++;
	}
	if(passwordInput.value === "" || fieldIsValid(passwordInput.value, passwordRegex) === false){
		swalFire('error', 'Invalid password', 'Your password must be 8-20 characters long, contain at least a capital letter, a lower letter, a digit and a special character.');
		wrongs++;
	}
	return wrongs;
}

function saveUserToLocalStorage(user){
	//in localStorage putem avea doar string-uri, deci folosim JSON.stringify cand setam si JSON.parse cand extragem din localStorage
	let users = JSON.parse(localStorage.getItem("users"));
	if(users === null){
		users = [];
		users.push(user);
	} else {
		users.push(user);
	}
	localStorage.setItem("users", JSON.stringify(users));
	users = JSON.parse(localStorage.getItem("users"));
	let i;
	for(i = 0; i < users.length; i++ )
		 console.log(users[i]);
}
// cand apasam butonul de submit, se apeleaza functiile de validare a campurilor si apar mesaje de eroare in caz ca sunt probleme
// daca toate campurile sunt in regula, se salveaza datele in localStorage
submitButton.addEventListener("click", function(){

	if(fieldsValidation() === 0) {

		let gender;
		if (radioBtnMale.checked)
			gender = "male";
		else
			gender = "female";

		const userInfo = {
			lastName: lastNameInput.value,
			firstName: firstNameInput.value,
			email: emailInput.value,
			password: passwordInput.value,
			username: usernameInput.value,
			bookAddiction: rangeInput.value,
			birthDate: selectDayInput.value + "-" + selectMonthInput.value + "-" + selectYearInput.value,
			gender: gender
		};

		saveUserToLocalStorage(userInfo);

		Swal.fire(
				'Account created',
				'Welcome!',
				'success'
			)
	}
});

// cand apasam enter, se apeleaza aceeasi functie ca atunci cand pasam submit
document.body.addEventListener("keypress", function(event){
	const tasta = event.keyCode;
	if (tasta === 13)
		submitButton.click();
});

function instantValidationHidden(input, regex, errorClass){

	const errorText = document.querySelector(errorClass);
	if(input.value.match(regex)){
		errorText.classList.add("hidden");
	} else{
		errorText.classList.remove("hidden");
	}
}

function instantValidationColor(input, regex, errorId){
	const errorText = document.querySelector(errorId);
	if(input.value.match(regex)){
		errorText.classList.remove("color-red");
		errorText.classList.add("color-gray");
	} else{
		errorText.classList.remove("color-gray");
		errorText.classList.add("color-red");
	}
}

const events = ["keypress", "keyup"];
events.forEach(function(event){
	firstNameInput.addEventListener(event, function(){
		instantValidationHidden(this, nameRegex, ".emsg");
	});
	lastNameInput.addEventListener(event, function(){
		instantValidationHidden(this, nameRegex, ".emsg");
	});
	emailInput.addEventListener(event, function(){
		instantValidationHidden(this, emailRegex, ".email-err");
	});
	passwordInput.addEventListener(event, function(){
		instantValidationColor(this, passwordRegex, "#passwordHelpBlock");
	});
	usernameInput.addEventListener(event, function(){
		instantValidationColor(this, usernameRegex, "#usernameHelpBlock");
	});
});

