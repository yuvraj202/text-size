function setup()
{
   video = createCapture(VIDEO);
   video.size(500, 500);
   video.position(50,150)

   canvas = createCanvas(700, 400);
   canvas.position(620,190);
   
   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses)

}

function draw()
{
   background("pink");
   textSize(30);
   fill('black');
   text(Yuvraj,20,30);
}

function modelLoaded()
{
   console.log("model initialized !");
}

function gotPoses(results)
{
   if(results.length > 0)
   {
      console.log(results);
     
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);
   }
}
