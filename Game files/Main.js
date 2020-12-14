class Form{
    constructor(){
        this.ground = createSprite(width/2, -height - 175, width);
        this.ground.visible = false;

        this.rocket = createSprite(650,450,25,25);
        this.rocket.visible = false;
        
        this.playbutton = createButton("! Start the Game !");
        this.playbutton.position(width/2 + 75, height/2)

        this.nameinput = createInput("Enter your name: ")
        this.info = createButton("Information")
        this.settings = createButton("How to play?")
        this.goBack = createButton("Go back");
        
        this.slv = createButton("Select SLV");
        this.aslv = createButton("Select ASLV");
        this.pslv = createButton("Select PSLV");
        this.gslv = createButton("Select GSLV");

        this.slv1 = createButton("Select SLV");
        this.aslv1 = createButton("Select ASLV");
        this.pslv1 = createButton("Select PSLV");
        this.gslv1 = createButton("Select GSLV");

        this.slv.hide();
        this.aslv.hide();
        this.pslv.hide();
        this.gslv.hide();

        this.slv1.hide();
        this.aslv1.hide();
        this.pslv1.hide();
        this.gslv1.hide();
        this.goBack.hide();

        this.launch = createButton("Go to Designing Area")
        this.launch.position(width- 500, height-75)
        this.launch.hide();

        this.pre,this.design,this.mainmenu;

        this.slvImg = createButton("View Image")
        this.aslvImg = createButton("View Image")
        this.pslvImg = createButton("View Image")
        this.gslvImg = createButton("View Image")

        this.slvImg.hide();
        this.aslvImg.hide();
        this.pslvImg.hide();
        this.gslvImg.hide();

        this.welcome = createElement("h1");
        this.welcome.html("Welcome to space rocket designing game")
        this.welcome.position(width/2 - 400, height/2-300)
        this.welcome.style('color' , 'lightgreen')
        this.welcome.style('font-size', '50px' )

        this.launchButton_1 = createButton("! Prepare for Launch !")
        this.launchButton_2 = createButton("! Launch !")

        this.launchButton_1.hide();
        this.launchButton_2.hide();

        this.r1 = r1
        this.r2 = r2//createSprite(100,random(200, 300),10,10);
        this.r3 = r3//createSprite(100,random(400, 500),10,10);
        this.r4 = r4//createSprite(100,random(600, 650),10,10);

        this.r1.visible = false;
        this.r2.visible = false;
        this.r3.visible = false;
        this.r4.visible = false;

        this.slvGo = createButton("! Go for launch !")
        this.aslvGo = createButton("! Go for launch !")
        this.pslvGo = createButton("! Go for launch !")
        this.gslvGo = createButton("! Go for launch !")

        this.slvGo.hide();
        this.aslvGo.hide();
        this.pslvGo.hide();
        this.gslvGo.hide();

        this.c1 = createSprite(width/2, height/2,15,15);
        this.c2 = createSprite(width/2, height/2,15,15);
        this.c3 = createSprite(width/2, height/2,15,15);
        this.c4 = createSprite(width/2, height/2,15,15);

        this.c1.visible = false;
        this.c2.visible = false;
        this.c3.visible = false;
        this.c4.visible = false;
    }
    hide(){
        this.playbutton.hide();
        this.nameinput.hide();
        this.settings.hide();
        this.info.hide();
        this.welcome.hide();
    }
    hide_select(){
        this.slv.hide();
        this.aslv.hide();
        this.pslv.hide();
        this.gslv.hide();
    }
    show(){
        this.playbutton.show();
        this.nameinput.show();
        this.settings.show();
        this.info.show();
    }
    show_select(){
        this.slvImg.show();
        this.aslvImg.show();
        this.pslvImg.show();
        this.gslvImg.show(); 

        this.slvImg.position(75,500);
        this.aslvImg.position(450, 545);
        this.pslvImg.position(750, 545);
        this.gslvImg.position(1100, 500);

        //Information images 
        this.gslvImg.mousePressed(()=>{
            bg = gslvInfo
            this.goBack.position(width- 195, 25)
            this.slvImg.hide();
            this.aslvImg.hide();
            this.pslvImg.hide();
            this.gslvImg.hide();
        })
        this.pslvImg.mousePressed(()=>{
            bg = pslvInfo

            this.goBack.position(width- 195, 25)
            this.slvImg.hide();
            this.aslvImg.hide();
            this.pslvImg.hide();
            this.gslvImg.hide();
        })
    }
    display(){
        this.nameinput.position(width/2-240, height/2)
        this.info.position(width- 185, 75)
        this.settings.position(width- 195, 5)// How to play? = settings button 
        
        this.info.mousePressed(()=>{
            bg = back2;
            this.goBack.position(width - 150, height - 30)
            this.goBack.show();
            this.hide();
            this.show_select();
        })
        this.settings.mousePressed(()=>{
            bg = htp;
            this.goBack.position(width- 195, 5)
            this.goBack.show();
            this.hide();
        })
        this.goBack.mousePressed(()=>{
            bg = extra;
            this.welcome.show();
            this.goBack.hide();
            this.slvImg.hide();
        this.aslvImg.hide();
        this.pslvImg.hide();
        this.gslvImg.hide();
            this.show();
        })
        this.playbutton.mousePressed(()=>{
            bg = back1;
            this.nameinput.remove();
            this.playbutton.hide();
            this.goBack.hide();
            this.level1();
        })
        
    }
    level1(){
        this.settings.hide();//How to play?
        this.info.hide();// Information 

        this.mainmenu = createButton("Go to Main Menu")
        this.mainmenu.position(width- 230, 5);

        this.pre = createButton("Launch Pre-Designed Rockets !")
        this.pre.position(width/2 - 150, height/2 + 100)

        this.design = createButton("Design your own rockets !")
        this.design.position(width/2 - 125, height/2)

        // Launching New rocktes !! 
        this.design.mousePressed(()=>{
            this.launch.position(width- 500, height-75)
            this.level2();
        })
        // Launching Pre-Designed Rocktes !!
        this.pre.mousePressed(()=>{
            bg = back3;
            this.hide();
            this.pre.hide();
            this.design.hide();
            this.mainmenu.position(width- 220, height-75);

            this.launch.show();// Go to designing area button
            this.launch.position(width- 500, height-75)

            this.slv.show(); //Buttons
            this.aslv.show();//Buttons
            this.pslv.show();//Buttons
            this.gslv.show();//Buttons

            this.slv.position(75, 5);
            this.aslv.position(350, 5);
            this.pslv.position(675, 5);
            this.gslv.position(1000, 5);
        })
        // Go back to main menu 
        this.mainmenu.mousePressed(()=>{
            this.slvGo.hide();
            this.aslvGo.hide();
            this.pslvGo.hide();
            this.gslvGo.hide();

            ran1 = random(10, 100)
            ran2 = random(200, 300)
            ran3 = random(400, 500)
            ran4 = random(600, 650)

            r1.y = ran1
            r2.y = ran2
            r3.y = ran3
            r4.y = ran4

            r1.x = random(25,50)
            r2.x = random(25,50)
            r3.x = random(25,50)
            r4.x = random(25,50)

            bg = extra;
            velocity = 0
            z = 0

            this.launchButton_1.hide();
            this.launchButton_2.hide();
            this.ground.y = -height - 175
            this.ground.visible = false;
            this.ground.velocityY = 0;

            this.welcome.show();
            this.mainmenu.hide();
            this.pre.hide()
            this.design.hide();

            this.slv.hide();//Buttons
            this.aslv.hide();//Buttons
            this.pslv.hide();//Buttons
            this.gslv.hide();//Buttons

            this.slv1.hide();
            this.aslv1.hide();
            this.pslv1.hide();
            this.gslv1.hide();
            this.launch.hide();// Go to designing area button

            this.rocket.visible = false;

            this.r1.visible = false;
            this.r2.visible = false;
            this.r3.visible = false;
            this.r4.visible = false;

            this.settings.show();// How to play?
            this.info.show();
            this.playbutton.show();//Start
            this.playbutton.position(width/2 - 100, height/2)
        })
        this.select();
    }
    select(){
        // Going to designing area
        this.launch.mousePressed(()=>{
            this.slvGo.hide();
            this.aslvGo.hide();
            this.pslvGo.hide();
            this.gslvGo.hide();

            ran1 = random(10, 100)
            ran2 = random(200, 300)
            ran3 = random(400, 500)
            ran4 = random(600, 650)

            r1.y = ran1
            r2.y = ran2
            r3.y = ran3
            r4.y = ran4

            r1.x = random(25,50)
            r2.x = random(25,50)
            r3.x = random(25,50)
            r4.x = random(25,50)
            
            bg = back1;
            this.launchButton_1.hide();
            this.launchButton_2.hide();
            this.launch.hide();

            this.r1.visible = false;
            this.r2.visible = false;
            this.r3.visible = false;
            this.r4.visible = false;
            
            velocity = 0
            z = 0
            
            this.mainmenu.position(width- 230, 5)

            this.ground.y = -height - 175
            this.ground.visible = false;
            this.ground.velocityY = 0;
            
            this.welcome.show();
            this.pre.show();
            this.design.show();
            
            this.rocket.visible = false;
            this.slv1.hide();
            this.aslv1.hide();
            this.pslv1.hide();
            this.gslv1.hide();

            this.hide_select();
        })
        this.slv.mousePressed(()=>{
            bg = 0
            this.hide_select();

            this.rocket.visible = true;
            this.rocket.y = 300
            this.rocket.x = 675
            this.rocket.addImage(slv);
            this.rocket.scale = 2.75;

            this.launching();
            this.moving();
        })
        this.aslv.mousePressed(()=>{
            bg = 0
            this.hide_select();

            this.rocket.visible = true;
            this.rocket.y = 300
            this.rocket.x = 675
            this.rocket.addImage(aslv);
            this.rocket.scale = 2.5;

            this.launching();
            this.moving();
        })
        this.pslv.mousePressed(()=>{
            bg = 0
            this.hide_select();

            this.rocket.visible = true;
            this.rocket.y = 300
            this.rocket.x = 675
            this.rocket.addImage(pslv);
            this.rocket.scale = 1.4

            this.launching();
            this.moving();
        })
        this.gslv.mousePressed(()=>{
            bg =0
            this.hide_select();

            this.rocket.visible = true;
            this.rocket.y = 300
            this.rocket.x = 675
            this.rocket.addImage(gslv);
            this.rocket.scale = 1.4;

            this.launching();
            this.moving();
        })
    }
    launching(){
        
        this.launchButton_1.show();
        this.launchButton_2.show();

        this.launchButton_1.position(50, height/2-60)
        this.launchButton_2.position(50, height/2)

        this.launchButton_1.mousePressed(()=>{
            z = 1
        })
            // this.launchButton_2.mousePressed(()=>{
            //     this.ground.velocityY = -(velocity)
            //     z = 2
            // })
        
    }
    moving(){
        //
        this.ground.x = width/2 
        this.ground.y = -height - 175
        this.ground.visible = true;
        this.ground.addImage(launchpad1)
        this.ground.scale = 0.8
        //
    }

    level2(){
        bg = 0;
        this.launch.show();

        this.settings.hide();//How to play?
        this.info.hide();// Information 
        this.design.hide();
        this.pre.hide();
        this.welcome.hide();

        this.mainmenu.position(width- 220, height-75);
        this.slv1.position(75, height/2);
        this.aslv1.position(350, height/2);
        this.pslv1.position(675, height/2);
        this.gslv1.position(1000, height/2);

        this.slv1.show();
        this.aslv1.show();
        this.pslv1.show();
        this.gslv1.show(); 

        this.slv1.mousePressed(()=>{
            this.select_slv();
            center = 1
        })
        this.aslv1.mousePressed(()=>{
            this.select_aslv();
            center = 2
        })
        this.pslv1.mousePressed(()=>{
            this.select_pslv();
            center = 3
        })
        this.gslv1.mousePressed(()=>{
            this.select_gslv();
            center = 4
        })

    }
    select_slv(){
        this.slv1.hide();
        this.aslv1.hide();
        this.pslv1.hide();
        this.gslv1.hide();

        this.slvGo.show();
        this.slvGo.position(300, height-100);

        this.launch.position(width - 265, height-75)
        this.mainmenu.position(width - 250, height-150)
        this.r1.visible = true;
        this.r2.visible = true;
        this.r3.visible = true;
        
        this.r1.addImage(slv_01);
        this.r2.addImage(slv_02);
        this.r3.addImage(slv_03);

        this.r1.scale = 0.7
        this.r2.scale = 0.9
        this.r3.scale = 1.3

        this.ground.visible = true;
        this.ground.addImage(launchpad1)
        this.ground.x = width/2 + 200
        this.ground.scale = 0.8

        this.r1.depth += this.ground.depth
        this.r2.depth += this.ground.depth
        this.r3.depth += this.ground.depth
        
        this.c1.visible = true;
        this.c2.visible = true;
        this.c3.visible = true;
        this.c4.visible = false;

        this.c1.x = 900
        this.c1.y = 15

        this.c2.x = 900
        this.c2.y = 325

        this.c3.x = 910
        this.c3.y = 570

        this.c4.x = 900
        this.c4.y = 350

        this.slvGo.mousePressed(()=>{
            this.select_slvGo();
        })
        
    }
    select_aslv(){
        this.slv1.hide();
        this.aslv1.hide();
        this.pslv1.hide();
        this.gslv1.hide();

        this.aslvGo.show();
        this.aslvGo.position(300, height-100);

        this.launch.position(width - 265, height-75)
        this.mainmenu.position(width - 250, height-150)

        this.ground.visible = true;
        this.ground.addImage(launchpad1)
        this.ground.x = width/2 + 200
        this.ground.scale = 0.8

        this.r1.depth += this.ground.depth
        this.r2.depth += this.ground.depth
        this.r3.depth += this.ground.depth
        this.r4.depth += this.ground.depth

        this.r1.visible = true
        this.r2.visible = true
        this.r3.visible = true
        this.r4.visible = true

        this.r1.addImage(aslv_01)
        this.r2.addImage(aslv_02)
        this.r3.addImage(aslv_03)
        this.r4.addImage(aslv_04)

        this.r1.scale = 1.1;
        this.r2.scale = 1.2;
        this.r3.scale = 1.1;
        this.r4.scale = 1.1;

        this.aslvGo.mousePressed(()=>{
            this.select_aslvGo();
        })
       
    }
    select_pslv(){
        this.slv1.hide();
        this.aslv1.hide();
        this.pslv1.hide();
        this.gslv1.hide();

        this.pslvGo.show();
        this.pslvGo.position(300, height-100);

        this.launch.position(width - 265, height-75)
        this.mainmenu.position(width - 250, height-150)

        this.ground.visible = true;
        this.ground.addImage(launchpad1)
        this.ground.x = width/2 + 200
        this.ground.scale = 0.8

        this.r1.depth += this.ground.depth
        this.r2.depth += this.ground.depth
        this.r3.depth += this.ground.depth
        this.r4.depth += this.ground.depth

        this.r1.visible = true
        this.r2.visible = true
        this.r3.visible = true
        // this.r4.visible = true

        this.r1.addImage(pslv_01)
        this.r2.addImage(pslv_02)
        this.r3.addImage(pslv_03)

        this.r1.scale = 0.5
        this.r2.scale = 0.5
        this.r3.scale = 0.7
        
        this.pslvGo.mousePressed(()=>{
            this.select_pslvGo();
        })
       
    }
    select_gslv(){
        this.slv1.hide();
        this.aslv1.hide();
        this.pslv1.hide();
        this.gslv1.hide();

        this.gslvGo.show();
        this.gslvGo.position(300, height-100);

        this.launch.position(width - 265, height-75)
        this.mainmenu.position(width - 250, height-150)

        this.ground.visible = true;
        this.ground.addImage(launchpad1)
        this.ground.x = width/2 + 200
        this.ground.scale = 0.8

        this.r1.depth += this.ground.depth
        this.r2.depth += this.ground.depth
        this.r3.depth += this.ground.depth
        this.r4.depth += this.ground.depth

        this.r1.visible = true
        this.r2.visible = true
        this.r3.visible = true
        this.r4.visible = true

        this.r1.addImage(gslv_01)
        this.r2.addImage(gslv_02)
        this.r3.addImage(gslv_03)
        this.r4.addImage(gslv_04)

        this.r1.scale = 0.7;
        this.r2.scale = 0.7;
        this.r3.scale = 0.7;
        this.r4.scale = 0.7;

        this.gslvGo.mousePressed(()=>{
            this.select_gslvGo();
        })
    }

    select_slvGo(){
        bg = 0
        this.hide_select();

        this.rocket.visible = true;
        this.rocket.y = 300
        this.rocket.x = 675
        this.rocket.addImage(slv);
        this.rocket.scale = 2.75;

        this.launching();
        this.moving();

        this.r1.visible = false;
        this.r2.visible = false;
        this.r3.visible = false;
        this.r4.visible = false;

        this.slvGo.hide();
    }
    select_aslvGo(){
            bg = 0
            this.hide_select();

            this.rocket.visible = true;
            this.rocket.y = 300
            this.rocket.x = 675
            this.rocket.addImage(aslv);
            this.rocket.scale = 2.5;

            this.launching();
            this.moving();

            this.r1.visible = false;
            this.r2.visible = false;
            this.r3.visible = false;
            this.r4.visible = false;

        this.aslvGo.hide();
    }
    select_pslvGo(){
        bg = 0
        this.hide_select();

        this.rocket.visible = true;
        this.rocket.y = 300
        this.rocket.x = 675
        this.rocket.addImage(pslv);
        this.rocket.scale = 1.4

        this.launching();
        this.moving();

        this.r1.visible = false;
        this.r2.visible = false;
        this.r3.visible = false;
        this.r4.visible = false;

        this.pslvGo.hide();
    }
    select_gslvGo(){
        bg = 0
        this.hide_select();

        this.rocket.visible = true;
        this.rocket.y = 300
        this.rocket.x = 675
        this.rocket.addImage(gslv);
        this.rocket.scale = 1.4;

        this.launching();
        this.moving();

        this.r1.visible = false;
        this.r2.visible = false;
        this.r3.visible = false;
        this.r4.visible = false;

        this.gslvGo.hide();
    }
}