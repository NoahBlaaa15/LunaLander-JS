let lunarLander = "\u2A39";
let hintergrund = document.getElementById('mond');

let velocity = 0;
let fallvelocity = 0;
let height = 500;
let gravity = 0.5;

function mainFrameProcessor() {
    //CALCULATING
    if(velocity > 0){
        fallvelocity = fallvelocity + 0.1;
    }else{
        fallvelocity = fallvelocity - 0.1;
    }

    height += velocity;
    height -= gravity;
    height += fallvelocity;
    //DRAWING
    let infoAnzeige = "Geschwindigkeit: " + velocity + "<br>Fallgeschwindigkeit: " + Math.round(fallvelocity) + "<br>Höhe: " + Math.round(height);
    document.getElementById('display').innerHTML = infoAnzeige;
    if (hintergrund.getContext('2d')){
        let zeichen = hintergrund.getContext('2d');
        zeichen.clearRect(0,0,hintergrund.width, hintergrund.height);
        zeichen.fillStyle = "#FFFFF";
        zeichen.fillRect(0,510,hintergrund.width,20);
        zeichen.fillText(lunarLander, hintergrund.width / 2,520-height);
    }else {
        console.log("Failure in mainFrameProcessor()")
    }

    if(height <= 14) {
        if(velocity >= -1 && fallvelocity >= -3.5) {
            document.getElementById('display').innerHTML += "<br>Gelandet!";
        }else {
           document.getElementById('display').innerHTML += "<br>Gecrasht!"
        }
        document.getElementById('restarter').style.visibility = 'visible';
    }else{
        setTimeout(mainFrameProcessor, 50);
    }
}

function keyDownEvent(e){
    switch (e.key) {
        case "w":
            velocity -= 0.5;
            break;
        case "s":
            velocity += 0.5;
            break;
    }
}
