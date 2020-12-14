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


var slv_01 , slv_02, slv_03;
var aslv_01 , aslv_02, aslv_03, aslv_04;
var pslv_01 , pslv_02, pslv_03;
var gslv_01 , gslv_02, gslv_03, gslv_04;
var r1, r2, r3, r4;

var ran1, ran2, ran3, ran4;
var center = 0;
var m = 0
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


    slv_01 = loadImage('images/SLV/01.png')
    slv_02 = loadImage('images/SLV/02.png')
    slv_03 = loadImage('images/SLV/03.png')

    aslv_01 = loadImage('images/ASLV/01.png')
    aslv_02 = loadImage('images/ASLV/02.png')
    aslv_03 = loadImage('images/ASLV/03[Left].png')
    aslv_04 = loadImage('images/ASLV/04[Right].png')

    pslv_01 = loadImage('images/PSLV/01.png')
    pslv_02 = loadImage('images/PSLV/02.png')
    pslv_03 = loadImage('images/PSLV/03.png')

    gslv_01 = loadImage('images/GSLV/01.png')
    gslv_02 = loadImage('images/GSLV/02.png')
    gslv_03 = loadImage('images/GSLV/03[left].png')
    gslv_04 = loadImage('images/GSLV/04[right].png')

}
function setup() {
    canvas = createCanvas(displayWidth-16,displayHeight-143);
    engine = Engine.create();
    world = engine.world;

    ran1 = random(10, 100)
    ran2 = random(200, 300)
    ran3 = random(400, 500)
    ran4 = random(600, 650)

    r1 = createSprite(100,ran1, 100,200);
    r2 = createSprite(100,ran2,200/2,200);
    r3 = createSprite(100,ran3,200/2,200);
    r4 = createSprite(100,ran4,200/2,200);

    r1.visible = false;
    r2.visible = false;
    r3.visible = false;
    r4.visible = false;

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
  
    drawSprites();
    fill(255,0,0)
    textSize(40);
    text(mouseX +","+mouseY, width/2,height/2)
    playButton.display();

if(playButton.r1.isTouching(playButton.c1)){ m = 1}
if(playButton.r2.isTouching(playButton.c2)){ m = 2}
if(playButton.r3.isTouching(playButton.c3)){ m = 3}
if(playButton.r4.isTouching(playButton.c4)){ m = 4}


    if(mousePressedOver(r1) && m == 0) {
        r1.x = mouseX
        r1.y = mouseY
    }
     if(mousePressedOver(r2) &&m ==1) {
        r2.x = mouseX
        r2.y = mouseY
    }
     if(mousePressedOver(r3) && m==2) {
        r3.x = mouseX
        r3.y = mouseY
    }
     if(mousePressedOver(r4)&&  m == 3) {
        r4.x = mouseX
        r4.y = mouseY
    }
}

