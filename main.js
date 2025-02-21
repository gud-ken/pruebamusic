function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/tW69Uysb9/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Escucho -" + results[0].label;
        document.getElementById("result_confidence").innerHTML="Presición -" + (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("result_label").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";

        img1= document.getElementById('tulum')
        img2=document.getElementById('ibiza')
        img3=document.getElementById('berlin')
        img4=document.getElementById('cairo')
        img5=document.getElementById('paris')

        if(results[0].label=="tulum"){
            img1.src='tulum.jpg';
            img2.src= 'ibiza.jpg';
            img3.src= 'berlin.jpeg';
            img4.src= 'cairo.jpg';
            img5.src= 'paris.jpg';
        }else if(results[0].label=="ibiza"){
            img1.src='tulum.jpg';
            img2.src= 'ibiza.jpg';
            img3.src= 'berlin.jpeg';
            img4.src= 'cairo.jpg';
            img5.src= 'paris.jpg';
        }else if(results[0].label=="berlin"){
            img1.src='tulum.jpg';
            img2.src= 'ibiza.jpg';
            img3.src= 'berlin.jpg';
            img4.src= 'cairo.jpeg';
            img5.src= 'paris.jpg';
        }else if(results[0].label=="cairo"){
            img1.src='tulum.jpg';
            img2.src= 'ibiza.jpg';
            img3.src= 'berlin.jpeg';
            img4.src= 'cairo.jpg';
            img5.src= 'paris.jpg';
        }else if(results[0].label=="paris"){
            img1.src='tulum.jpg';
            img2.src= 'ibiza.jpg';
            img3.src= 'berlin.jpeg';
            img4.src= 'cairo.jpg';
            img5.src= 'paris.jpg';
        }else{
            img.src='tulum.jpg';
            img2.src= 'ibiza.jpg';
            img3.src= 'berlin.jpeg';
            img4.src= 'cairo.jpg';
            img5.src= 'paris.jpg';
        }
        
       // Aplicar efecto de zoom a la imagen reconocida 
       var targetImage = document.getElementById(recognizedLabel); if (targetImage) { 
        // Reiniciar animación eliminando y reañadiendo la clase 
        targetImage.classList.remove("zoom-animation"); void targetImage.offsetWidth; 
        // Fuerza el reflow para reiniciar la animación 
        targetImage.classList.add("zoom-animation"); }

        // Reproducir el audio correspondiente a la imagen reconocida 
        var audioFiles = { tulum: "tulum.mp3", ibiza: "ibiza.mp3", berlin: "berlin.mp3", cairo: "cairo.mp3", paris: "paris.mp3" };
        if (audioFiles[recognizedLabel]) { var audio = new Audio(audioFiles[recognizedLabel]); audio.play(); 
        } 
    }
        

    
    

}