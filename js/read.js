//adaugare si stergere de elemente din javascript
//incarcarea unui element audio din javascript
window.onload = function(){
	//sterge elemente din javascript
	var audio1 = document.getElementById("audio1");
	audio1.parentNode.removeChild(audio1);

	var audio2 = document.getElementById("audio2");
	audio2.parentNode.removeChild(audio2);

	//adaugare elemente audio din javascript
	audio1 = document.createElement("audio");
	audio1.id = "audio1";
	audio1.setAttribute("src", "../audio/Lullaby.mp3");
	audio1.setAttribute("controls", "controls");
	document.body.appendChild(audio1);
	
	audio2 = document.createElement("audio");
	audio2.id = "audio2";
	audio2.setAttribute("src", "../audio/RainyMood.mp3");
	audio2.setAttribute("controls", "controls");
	document.body.appendChild(audio2);
	
	//adaugare element video din javascript
	var iframe = document.createElement("iframe");
	iframe.src = "https://www.youtube.com/embed/3ihxQlOlMf8";
	iframe.id = "video";
	iframe.setAttribute('allowFullScreen', '');
	document.body.appendChild(iframe);
}; 