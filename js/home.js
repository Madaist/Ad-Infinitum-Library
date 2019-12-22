// vector de citate
let quotes = [
    '"So many books, so little time." ― Frank Zappa',
    '"Never trust anyone who has not brought a book with them."― Lemony Snicket',
    '"If one cannot enjoy reading a book over and over again, there is no use in reading it at all." ― Oscar Wilde',
    '"There is no friend as loyal as a book." ― Ernest Hemingway',
    '"′Classic′ - a book which people praise and don\'t read."― Mark Twain',
    '"Books are a uniquely portable magic."― Stephen King',
    '"Be careful about reading health books. Some fine day you\'ll die of a misprint."― Markus Herz',
    '"Sleep is good, he said, and books are better."― George R. R. Martin',
    '"Make it a rule never to give a child a book you would not read yourself."― George Bernard Shaw',
    '"Where is human nature so weak as in the bookstore?" ― Henry Ward Beecherr',
    '"Think before you speak. Read before you think." ― Fran Lebowitz',
    '"Books may well be the only true magic."― Alice Hoffman',
    '"If you have a garden and a library, you have everything you need."― Cicero',
    '"Books are the mirrors of the soul." ― Virginia Woolf',
    '"I lived in books more than I lived anywhere else."― Neil Gaiman',
    '"The world was hers for the reading."― Betty Smith',
    '"She read books as one would breathe air, to fill up and live."― Annie Dillard',
    '"A half-read book is a half-finished love affair."― David Mitchell',
    '"A book lying idle on a shelf is wasted ammunition." ― Henry Miller',
    '"A house without books is like a room without windows."― Horace Mann',
    '"Go, my book, and help destroy the world as it is."― Russell Banks',
    '"Books were safer than other people anyway."― Neil Gaiman',
    '"If you don’t like to read, you haven’t found the right book."― J.K Rowling'
];

// creare buton cu textul "Get a quote"
let quoteButton = document.createElement("button");
quoteButton.innerHTML = "Get a quote";
quoteButton.id = "quoteButton";
// butonul il plasam in div-ul cu id-ul "quotes"
const divQuotes = document.querySelector("#quotes");
divQuotes.appendChild(quoteButton);
// cand apasam pe buton, se genereaza un numar aleator care va fi un index in vectorul de citate si se va afisa citatul corespunzator
quoteButton.addEventListener("click", function (){
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.querySelector("#generated-quote").innerHTML = quotes[randomNumber];
});


// ********************************************************************************* //
//imaginea de background se schimba la fiecare 3 secunde.

//vector cu surse de imagini pentru background
let backgroundImgSrc = [
    "../imagini/banner2.jpg",
    "../imagini/backgr2.jpg",
    "../imagini/backgr3.jpg",
    "../imagini/backgr4.jpg",
    "../imagini/bakgr1.jpg"
];

let timeout = null; // in timeout vom tine id-ul timerului setat, pentru a putea face clearTimeout mai tarziu
let i = parseInt("0"); // variabila folosita pentru indexarea in vectorul de surse de imagini
function changeBackgroundImage() {
    //selectam imaginile carora vrem sa le setam src-ul
    const backgroundImg = document.querySelector("#banner-img");
    const mirroredImg = document.querySelector("#mirrored-img");
    //setam sursa
    backgroundImg.src = backgroundImgSrc[i];
    mirroredImg.src = backgroundImgSrc[i];
    i = i + 1; 
    
    if (i === backgroundImgSrc.length) { // daca am ajuns la sfarsitul vectorului, o luam de la capat
        i = 0;
    }
    timeout = setTimeout(changeBackgroundImage, 3000); //functia se va repeta la fiecare 3 secunde
}

changeBackgroundImage(); //apelam functia de schimbare a background-ului


const keepBackground = document.querySelector("#keep-background-btn");
//cand facem click pe butonul de keep background, functia nu se mai repeta
keepBackground.addEventListener("click", function (){
    clearTimeout(timeout);
});


// ********************************************************************************* //
//citatele introduse de utilizator vor fi salvate in local storage sub forma unui array de obiecte
// un obiect din array va contine userName-ul si citatul propriu-zis
//in localStorage putem avea doar string-uri, deci folosim JSON.stringify cand setam si JSON.parse cand extragem din localStorage
function saveQuotesToLocalStorage(data) {
    //luam vectorul de citate din localStorage
	let quotesFromUser = JSON.parse(localStorage.getItem("quotesFromUser"));
	if (quotesFromUser === null) { //daca vectorul nu exista inca, il cream si punem in el citatul data de user
        quotesFromUser = [];
        quotesFromUser.push(data);
    } else { //daca exista, doar adaugam citatul
        quotesFromUser.push(data);
    }
	//salvam din nou vectorul in localStorage
	localStorage.setItem("quotesFromUser", JSON.stringify(quotesFromUser));
}

submitButton.addEventListener("click", function (){
    let user = document.getElementById("user").value;
    if (user === ""){  // utilizatorul poate alege sa nu isi dea numele cand trimite un citat
		user = "Anonymous"; //in acest caz, utilizatorul este trecut ca anonim
	}
    const userWords = document.getElementById("quote-from-user").value;
    if (userWords === ""){ // daca nu introduce niciun citat, apare eroare
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'You have to enter a quote first!'
		})
	} else { // altfel, cream un obiect cu usernameul si citatul
		let quote = {
			userName: user,
			quote: userWords
		};
		saveQuotesToLocalStorage(quote); // salvam obiectul in localStorage
	}
});


//adauagare buton pentru vizualizarea tuturor citatelor adaugate de utilizatori
let seeQuotesButton = document.createElement("button");
seeQuotesButton.innerHTML = "See all quotes";
seeQuotesButton.id = "see-quotes-btn";
seeQuotesButton.setAttribute("onclick", "location.href='quotes.html'"); // cand apasam pe buton, va redirecta catre pagina Quotes, unde vor aparea toate citatele.
const divAddQuote = document.querySelector("#add-quote"); //selectam div-ul in care vrem sa adaugam butonul
divAddQuote.appendChild(seeQuotesButton); //adaugam butonul in div