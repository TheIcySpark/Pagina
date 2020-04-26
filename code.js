document.getElementById("b1").addEventListener("click",IniciarProceso);

function IniciarProceso(){
	///Vibrar telefono
	navigator.vibrate([250,250,250,250,5000]);
	///Mostar Imagen
	var imagen=document.getElementById("img");
	imagen.className="noOculto";
	///Reproducir sonido
	var sonido=new Audio("Sounds/newMessage.mp3");
	sonido.play();
}
