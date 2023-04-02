function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(400,400);
    canvas.position(430,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}


function modelLoaded(){
    console.log("PoseNet Is Initialized And Loaded");
}
function gotPoses(results)
{
    if(results.length> 0)
    {
        console.log(results);
    }
}
function draw(){
    background("#5196e3");
}


