function starClasification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/tW69Uysb9/model.json", modelReady);
  }
  
  function modelReady() {
    classifier.classify(gotResults);
  }
  
  function gotResults(error, results) {
    if (error) {
      console.error(error);
      return;
    }
  
    console.log(results);
  
    let random_number_r = Math.floor(Math.random() * 255) + 1;
    let random_number_g = Math.floor(Math.random() * 255) + 1;
    let random_number_b = Math.floor(Math.random() * 255) + 1;
  
    document.getElementById("result_label").innerHTML = "Escucho - " + results[0].label;
    document.getElementById("result_confidence").innerHTML = "Precisión - " + (results[0].confidence * 100).toFixed(2) + " %";
    document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
    document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
  
    let img1 = document.getElementById('grita tulum');
    let img2 = document.getElementById('grita ibiza');
    let img3 = document.getElementById('grita berlin');
    let img4 = document.getElementById('grita cairo');
    let img5 = document.getElementById('grita paris');
  
    img1.src = 'tulum.jpg';
    img2.src = 'ibiza.jpg';
    img3.src = 'berlin.jpeg';
    img4.src = 'cairo.jpg';
    img5.src = 'paris.jpg';
  
    // Identificar la etiqueta reconocida (convertir a minúsculas para evitar errores)
    let recognizedLabel = results[0].label.toLowerCase();
  
    // Obtener el elemento de imagen correspondiente
    let targetImage;
    switch (recognizedLabel) {
      case "grita tulum":
        targetImage = img1;
        break;
      case "grita ibiza":
        targetImage = img2;
        break;
      case "grita berlin":
        targetImage = img3;
        break;
      case "grita cairo":
        targetImage = img4;
        break;
      case "grita paris":
        targetImage = img5;
        break;
      default:
        // Si no se reconoce la etiqueta, no hacemos nada
        console.warn("Etiqueta de sonido no reconocida:", recognizedLabel);
        return; // Salir de la función si no se reconoce la etiqueta
    }
  
    // Verificar si se encontró la imagen
    if (targetImage) {
      // Reiniciar la animación eliminando y reañadiendo la clase
      targetImage.classList.remove("zoom-animation");
      void targetImage.offsetWidth; // Fuerza el reflow para reiniciar la animación
      targetImage.classList.add("zoom-animation");
    } else {
      console.warn("No se encontró la imagen para la etiqueta:", recognizedLabel);
    }
  }
  