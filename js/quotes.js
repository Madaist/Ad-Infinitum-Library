//la incarcarea paginii, luam citatele din local storage si le afisam
window.onload = function (){
	let quotesFromUser =  JSON.parse(localStorage.getItem("quotesFromUser"));
	let i;
	for (i = 1; i < quotesFromUser.length; i++){
		createQuoteDiv(quotesFromUser[i].quote, quotesFromUser[i].userName);
	}
};

function createQuoteDiv(quote, user) {
		//in div-ul mic vom avea citatul in sine iar in div-ul mare vom avea div-ul mic + numele utilizatorului.
		let largeDiv = document.createElement("div");
		largeDiv.style.borderStyle = "solid";
		largeDiv.style.height = "14vh";
		largeDiv.style.left = "2vw";
		largeDiv.style.width = "94vw";
		largeDiv.style.position = "relative";
		
		let smallDiv = document.createElement("div");
		smallDiv.style.borderBottom = "dotted";
		smallDiv.style.height = "4vh";
		
		let quoteParagraph = document.createElement("p");
		quoteParagraph.style.fontSize = "large";
		quoteParagraph.innerHTML = quote;
		
		smallDiv.appendChild(quoteParagraph);
		largeDiv.appendChild(smallDiv);
		
		let userParagraph = document.createElement("p");
		userParagraph.style.fontSize = "medium";
		userParagraph.innerHTML = user;
		
		largeDiv.appendChild(userParagraph);
		document.body.appendChild(largeDiv);
		document.body.appendChild(document.createElement('br'));
}