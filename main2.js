function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/tW69Uysb9/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);

        // Generar colores aleatorios para los textos
        let random_number_r = Math.floor(Math.random() * 255) + 1;
        let random_number_g = Math.floor(Math.random() * 255) + 1;
        let random_number_b = Math.floor(Math.random() * 255) + 1;

        // Extraer el label reconocido
        let recognizedLabel = results[0].label;

        // Actualizar textos de resultados
        document.getElementById("result_label").innerHTML = "Escucho - " + recognizedLabel;
        document.getElementById("result_confidence").innerHTML = "Precisión - " + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        // Aplicar el efecto de zoom parpadeante a la imagen correspondiente
        let targetImage = document.getElementById(recognizedLabel);
        if (targetImage) {
            // Reiniciar la animación eliminando y reañadiendo la clase
            targetImage.classList.remove("zoom-animation");
            void targetImage.offsetWidth;  // Fuerza el reflow para reiniciar la animación
            targetImage.classList.add("zoom-animation");
        }

        // Reproducir el audio asociado a la imagen reconocida
        let audioFiles = {
            "tulum": "tulum.mp3",
            "ibiza": "ibiza.mp3",
            "berlin": "berlin.mp3",
            "cairo": "cairo.mp3",
            "paris": "paris.mp3"
        };
        if (audioFiles[recognizedLabel]) {
            let audio = new Audio(audioFiles[recognizedLabel]);
            audio.play();
        }
    }
}
