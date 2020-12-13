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
            bg = back1;
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

        this.design.mousePressed(()=>{
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
            this.slv.show(); //Buttons
            this.aslv.show();//Buttons
            this.pslv.show();//Buttons
            this.gslv.show();//Buttons

            this.slv.position(75, 5);
            this.aslv.position(350, 5);
            this.pslv.position(675, 5);
            this.gslv.position(1000, 5);
        })
        this.mainmenu.mousePressed(()=>{
            velocity = 0
            z = 0

            this.launchButton_1.hide();
            this.launchButton_2.hide();
            this.ground.y = -height - 175
            this.ground.visible = false;
            this.ground.velocityY = 0;

            this.welcome.show();
            bg = extra;
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

            this.settings.show();// How to play?
            this.info.show();
            this.playbutton.show();//Start
            this.playbutton.position(width/2 - 100, height/2)
        })
        this.select();
    }
    select(){
        this.launch.mousePressed(()=>{
            bg = back1;
            this.launchButton_1.hide();
            this.launchButton_2.hide();
            this.launch.hide();

            velocity = 0
            z = 0
            
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
        })
    }
    select_slv(){
        this.slv1.hide();
        this.aslv1.hide();
        this.pslv1.hide();
        this.gslv1.hide();

        this.r1.visible = true;
        this.r2.visible = true;
        this.r3.visible = true;
        
        this.r1.addImage(slv_02);
        this.r2.addImage(slv_01);
        this.r3.addImage(slv_03);
        this.r3.scale = 1.2

        this.ground.visible = true;
        this.ground.addImage(launchpad1)
        this.ground.x = width/2 + 200
        this.ground.scale = 0.8

        this.r1.depth += this.ground.depth
        this.r2.depth += this.ground.depth
        this.r3.depth += this.ground.depth
        
    }
}