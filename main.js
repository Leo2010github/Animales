//https://teachablemachine.withgoogle.com/models/iJeWpsOHS/
function Escuchar(){
    navigator.mediaDevices.getUserMedia({audio:true});
    Modelo = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/iJeWpsOHS/model.json", Cargar);
}
function Cargar(){
    console.log("Modelo cargado");
    Modelo.classify(gotResult);
}
function gotResult(error, results){
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        Animales = results[0].label;
        Bien = results[0].confidence;
        Bien2 = Bien.toFixed(2)*100;
        document.getElementById("Animal").innerHTML = Animales;
        document.getElementById("Precision").innerHTML = Bien2 + "%";
        Perro = document.getElementById("PerroIMG");
        Vaca = document.getElementById("VacaIMG");
        Gallo = document.getElementById("GalloIMG");
        Gato = document.getElementById("GatoIMG");
        if (Animales == "Perro") {
            Perro.src = "Perro.gif";
            Vaca.src = "Vaca.png";
            Gallo.src = "Gallo.png";
            Gato.src = "Gato.png";
        }
        else if (Animales == "gato") {
            Perro.src = "Perro.png";
            Vaca.src = "Vaca.png";
            Gallo.src = "Gallo.png";
            Gato.src = "Gato.gif";
        }
        else if (Animales == "gallo") {
            Perro.src = "Perro.png";
            Vaca.src = "Vaca.png";
            Gallo.src = "Gallo.gif";
            Gato.src = "Gato.png";
        }
        else if (Animales == "Vaca") {
            Perro.src = "Perro.png";
            Vaca.src = "Vaca.gif";
            Gallo.src = "Gallo.png";
            Gato.src = "Gato.png";
        }
        else if (Animales == "Background Noise") {
            Perro.src = "Perro.png";
            Vaca.src = "Vaca.png";
            Gallo.src = "Gallo.png";
            Gato.src = "Gato.png";
        }
    }
}