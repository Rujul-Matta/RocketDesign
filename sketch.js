const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world = World;
var bodies = Bodies;


var playButton;
var bg, bcak1, back2, back3;
function preload() {
    back1 = loadImage('images/background.jpg')
    back2 = loadImage('images/bg1.png')
    back3 = loadImage('images/Table of rockets.png')
}
function setup() {
    createCanvas(1350,625);
    engine = Engine.create();
    world = engine.world;
    
    //Creating buttons
    bg = back1;
    playButton = new Form();
}
function draw() {
    background(bg)
    Engine.update(engine)

    textSize(40);
    text(mouseX + "," + mouseY, width/2, height/2)
    playButton.display();
}