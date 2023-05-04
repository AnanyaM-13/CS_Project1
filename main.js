var canvas;
var video;
var noseX = 0
var noseY = 0


function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}


//part1
function modelLoaded(){
    console.log("Posenet is loaded")
}

if(results.net > 0){
    console.log( "x  = "+ results[0].pose.nose.x)
    noseX = results[0].pose.nose.x
    console.log( "y  = "+ results[0].pose.nose.y)
    noseY = results[0].pose.nose.y


}



//part2
function gotPoses(results){
    console.log( "x  = "+ results[0].pose.nose.x)
    noseX = results[0].pose.nose.x
    console.log( "y  = "+ results[0].pose.nose.y)
    noseY = results[0].pose.nose.y

}


function draw(){
    image(video,0,0,400,400);
    fill(255,0,0);
    circle(noseX-105,noseY-54,20,20);

}

function TakeSnapshot(){
save("MyName.jpg");

}