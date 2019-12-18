function changeBackgroundColor() {
    let color = randomColor(); // a hex code for an attractive color
    console.log("Color is ", color);
    document.body.style.background = color;
}

let interval = setInterval(changeBackgroundColor, 3000); //apelam functia de schimabre a background-ului

const keepBackground = document.querySelector("#keep-background-btn");
//cand facem click pe butonul de keep background, functia nu se mai repeta
keepBackground.addEventListener("click", function(){
    clearInterval(interval);
});