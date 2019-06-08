let lunarLander = "🛸";
let hintergrund = document.getElementById('mond');
let zeichen;

let velocity = 0;
let fallvelocity = 0;
let height = 0;
let gravity = 0.5;

function mainFrameProcessor() {
    //CALCULATING
    if(velocity > 0){
        fallvelocity = fallvelocity + 0.1;
    }else{
        fallvelocity = fallvelocity - 0.1;
    }

    height += velocity/10;
    height -= gravity;
    height += fallvelocity;

    //DRAWING
    /*let infoAnzeige = "Geschwindigkeit: " + velocity + "<br>Fallgeschwindigkeit: " + Math.round(fallvelocity) + "<br>Höhe: " + Math.round(height);
    document.getElementById('display').innerHTML = infoAnzeige;*/
    if (hintergrund.getContext('2d')){
        zeichen = hintergrund.getContext('2d');
        zeichen.clearRect(0,0,hintergrund.width, hintergrund.height);
        zeichen.font = "30px Arial";
        zeichen.fillStyle = "#414141";
        zeichen.fillText(lunarLander, hintergrund.width / 2,hintergrund.height - 20 - height);
        zeichen.fillStyle = "#ffffff";
        zeichen.fillText("Geschwindigkeit: " + velocity, hintergrund.width / 20, 50);
        zeichen.fillText("Fallgeschwindigkeit: " + Math.round(fallvelocity), hintergrund.width / 20, 90);
        zeichen.fillText("Höhe: " + Math.round(height), hintergrund.width / 20, 130);
        zeichen.fillRect(0,hintergrund.height - 20,hintergrund.width,20);
    }else {
        console.log("Failure in mainFrameProcessor()")
    }

    if(height <= 5) {
        if(velocity >= -1 && fallvelocity >= -4.75) {
            zeichen.font = "45px Arial";
            zeichen.fillStyle = "#00854b";
            zeichen.fillText("Sicher Gelandet!", hintergrund.width * 0.75, 70);
            //document.getElementById('display').innerHTML += "<br>Gelandet!";
        }else {
            zeichen.font = "45px Arial";
            zeichen.fillStyle = "#851900";
            zeichen.fillText("Gecrasht!", hintergrund.width * 0.75, 70);
           //document.getElementById('display').innerHTML += "<br>Gecrasht!";
        }
        zeichen.font = "30px Arial";
        zeichen.fillStyle = "#ffffff";
        zeichen.fillText("Drücke Leertaste zum Neustarten", hintergrund.width * 0.75, 120);
    }else{
        setTimeout(mainFrameProcessor, 50);
    }
}

function keyDownEvent(e){
    switch (e.key) {
        case "w":
            if(velocity != -10){
            velocity -= 0.5;}
            break;
        case "s":
            if(velocity != 10){
            velocity += 0.5;}
            break;
        case " ":
            location.reload();
            break;
    }
}
