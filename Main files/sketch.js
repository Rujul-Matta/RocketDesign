const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world = World;
var bodies = Bodies;


var playButton;
var num;
var bg, bcak1, back2, back3, htp, launchpad1, launchpad2, launchpad3;
var slv, aslv, pslv, gslv;
var gslvInfo, pslvInfo
var extra;
function preload() {
    extra = loadImage('images/image.png')
    back1 = loadImage('images/background.jpg')
    back2 = loadImage('images/bg1.png')
    back3 = loadImage('images/Table of rockets.png')
    htp = loadImage('images/How to play.png')
    launchpad1 = loadImage('images/2.png')

    slv = loadImage('images/SLV.jpg')
    aslv = loadImage('images/ASLV.jpg')
    pslv = loadImage('images/PSLV.jpg')
    gslv = loadImage('images/GSLV .jpg')

    gslvInfo = loadImage('images/GSLV.png')
    pslvInfo = loadImage('images/PSLV.png')

}
function setup() {
    createCanvas(1350,625);
    engine = Engine.create();
    world = engine.world;
    
    //Creating buttons
    // bg = back1;
    bg = extra;
    playButton = new Form();
}
function draw() {
    background(bg)
    Engine.update(engine)

    textSize(40);
    text(mouseX + "," + mouseY, width/2, height/2)
    playButton.display();
    drawSprites();
}