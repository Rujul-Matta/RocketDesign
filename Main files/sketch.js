const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world = World;
var bodies = Bodies;
var canvas

var playButton;
var num;
var bg, bcak1, back2, back3, htp, launchpad1, ani;
var slv, aslv, pslv, gslv;
var gslvInfo, pslvInfo
var extra;

var velocity = 0, score,z = 0
var complete;

function preload() {
    extra = loadImage('images/start.png')
    back1 = loadImage('images/background.jpg')
    back2 = loadImage('images/bg1.png')
    back3 = loadImage('images/Table of rockets.png')
    htp = loadImage('images/How to play.png')
    launchpad1 = loadImage('images/rocket background.jpg')

    slv = loadImage('images/SLV.jpg')
    aslv = loadImage('images/ASLV.jpg')
    pslv = loadImage('images/PSLV.jpg')
    gslv = loadImage('images/GSLV .jpg')

    gslvInfo = loadImage('images/GSLV.png')
    pslvInfo = loadImage('images/PSLV.png')
    complete = loadImage('images/complete.png')
}
function setup() {
    canvas = createCanvas(displayWidth-16,displayHeight-143);
    engine = Engine.create();
    world = engine.world;
    bg = extra;
    playButton = new Form();
    
}
function draw() {
    background(bg)
    Engine.update(engine)
    
    if(z == 1){
        velocity -= 1
    }
    if(playButton.ground.y >= 1500 && z == 2){
        bg = complete
        playButton.rocket.visible = false;
        playButton.launchButton_1.hide();
        playButton.launchButton_2.hide();
        z = 3
    }
    if(velocity> 150){
        velocity = 15
    }
    playButton.launchButton_2.mousePressed(()=>{
        playButton.ground.velocityY = -(velocity)
        z = 2
    })
    console.log("velocity = "+ velocity)
    drawSprites();
    playButton.display();
    
}