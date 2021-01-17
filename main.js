var canvas=document.getElementById("myCanvas")
var ctx= canvas.getContext("2d")
var roverX=80
var roverY=80
var background="mars.jpg"
var roverimg="rover.png"
function add(){
    bg=new Image()
    bg.onload= uploadbackground
    bg.src=background

    rover=new Image()
    rover.onload=uploadrover
    rover.src=roverimg
}
function uploadbackground(){
    ctx.drawImage(bg, 0,0, canvas.width ,canvas.height)

}
function uploadrover(){
    ctx.drawImage(rover, roverX, roverY, 100, 100)
}
window.addEventListener("keydown",kd)
function  kd(e){
    var keyno=e.keyCode
    console.log(keyno)
    if (keyno==37){
        left()
        console.log("You have pressed left")
    }
    if (keyno==38){
        up()
        console.log("You have pressed up")
    }
    if (keyno==39){
        right()
        console.log("You have pressed right")
    }
    if (keyno==40){
        down()
        console.log("You have pressed up")
    }
}

