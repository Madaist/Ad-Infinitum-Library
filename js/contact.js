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

let i = 0; // variabila folosita pentru indexarea in vectorul de surse de imagini
function changeBackgroundImage() {
    //selectam imaginile carora vrem sa le setam src-ul
    const backgroundImg = document.querySelector("#banner-img");
    const mirroredImg = document.querySelector("#mirrored-img");

    backgroundImg.src = backgroundImgSrc[i]; //setam sursa
    mirroredImg.src = backgroundImgSrc[i];
    i = i + 1; 
    
    if (i === backgroundImgSrc.length){ // daca am ajuns la sfarsitul vectorului, o luam de la capat
        i = 0;
    }
}

let interval = setInterval(changeBackgroundImage, 3000); //apelam functia de schimabre a background-ului

const keepBackground = document.querySelector("#keep-backgr-btn");
//cand facem click pe butonul de keep background, functia nu se mai repeta
keepBackground.addEventListener("click", function (){
    clearInterval(interval);
});
