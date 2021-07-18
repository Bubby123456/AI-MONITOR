object=document.getElementById("object_input").value;
status="";
objects=[];
function setup() {
    canvas=createCanvas(480,480);
    canvas.position(570,300);
    video=createCapture(VIDEO);
    video.hide();

    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded() {
    console.log("COCO SSD INITIALIZED");
    status=true;
}
function gotResults(results,error) {
    if (error) {
        console.log(error);    
    }
    console.log(results);
    objects=results;
}
function draw() {
    image(video,0,0,480,480);
        
        if (status!="") {
            objectDetector.detect(video,gotResults);
        
            if (object[i].label==object) {
                
            
        for ( i = 0; i < objects.length; i++) {
                        document.getElementById("status").innerHTML="Status : OBJECT DETECTED";
                        document.getElementById("object_found").innerHTML="Detected : "+object;
                        
                        fill("#FF0000");
                        percent=floor(objects[i].confidence*100);
                        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
                        noFill();
                        stroke("#FF0000");
                        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
                        }
                    }
        }
    }

    
