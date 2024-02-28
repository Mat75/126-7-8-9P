song_status=""
song2_status=""

song1=""
song2=""
rightWristX=0
rightWristY=0
leftWristX=0
leftWristY=0
ScoreRightWrist=0
ScoreLeftWrist=0

function preload(){
     song1=loadSong("music(1).mp3")
     song2=loadSong("music(2).mp3")
}
function setup(){
Canvas=createCanvas(600, 500)
Canvas.center()
Video=createCapture(VIDEO)
Video.hide()
PoseNet=ml5.poseNet(Video, modelLoaded)
PoseNet.on("pose", gotPoses)
}
function draw(){
image(Video,0,0,600,500)
fill("purple")
stroke("red")
song1_status=song1.isPlaying()
song2_status=song2.isPlaying()
if (ScoreRightWrist>0.2){
circle(RightWristx, RightWristY, 20)
song2.stop()
if(song1_status==false){
    song1.play()
    document.getElementById("velocidad").innerHTML= "reproduciendo canción de harry potter"
}
}
if (ScoreLeftWrist>0.2){
    circle(LeftWristx, LeftWristY, 20)
    song1.stop()
    if(song2_status==false){
        song2.play()
        document.getElementById("volumen").innerHTML= "reproduciendo canción de Peter Pan"
    }
    }}


function modelLoaded(){
    console.log("Modelo_Cargado")
}
function gotPoses(results){
    if (results.length>0) {
        console.log(results)
        ScoreRightWrist=results[0].pose.keypoints[10].score
        ScoreLeftWrist=results[0].pose.keypoints[9].score
        RightWristX=results[0].pose.rightWrist.x
        LeftWristX=results[0].pose.leftWrist.x 
        RigthWristY=results[0].pose.rightWrist.y
        LeftWristY=results[0].pose.leftWrist.y
    } 
}
function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
    
}