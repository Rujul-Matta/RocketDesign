class Form{
    constructor(){
        this.rocket = createSprite(650,450,0,0);
        this.rocket.visible = false;
        
        this.playbutton = createButton("Start");
        this.playbutton.position(width/2 + 75, height/2)

        this.nameinput = createInput("Enter your name: ")
        this.info = createButton("Information")
        this.settings = createButton("How to play?")
        this.welcome = createElement("h1");
        this.goBack = createButton("Go back");
        
        this.slv = createButton("Select SLV");
        this.aslv = createButton("Select ASLV");
        this.pslv = createButton("Select PSLV");
        this.gslv = createButton("Select GSLV");

        this.slv.hide();
        this.aslv.hide();
        this.pslv.hide();
        this.gslv.hide();
        this.goBack.hide();

        this.launch = createButton("Go to Designing Area")
        this.launch.position(width- 500, height-75)
        this.launch.hide();

        this.pre,this.design,this.mainmenu;
    }
    hide(){
        // this.mainmenu.hide();
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
    display(){
 
        

        this.nameinput.position(width/2-240, height/2)
        //Information button
        this.info.position(width- 185, 75)//width- 195, height- 75
        // How to play ? 
        this.settings.position(width- 195, 5)
        
        // Mouse Pressing functions
        this.info.mousePressed(()=>{
            bg = back2;
            this.goBack.position(width - 195, height - 75)
            this.goBack.show();
            this.hide();
        })
        this.settings.mousePressed(()=>{
            bg = htp;
            this.goBack.position(width- 195, 5)
            this.goBack.show();
            this.hide();
        })
        this.goBack.mousePressed(()=>{
            bg = back1;
            this.goBack.hide();
            
            this.show();
        })
        this.playbutton.mousePressed(()=>{
            this.nameinput.hide();
            this.playbutton.hide();
            this.goBack.hide();
            this.level1();
        })
    }
    level1(){
        this.settings.hide();
        this.info.hide();

        this.mainmenu = createButton("Go to Main Menu")
        this.mainmenu.position(width- 230, 5);

        this.pre = createButton("Launch Pre-Designed Rockets !")
        this.pre.position(width/2 - 150, height/2 + 100)

        this.design = createButton("Design your own rockets !")
        this.design.position(width/2 - 125, height/2)

        this.pre.mousePressed(()=>{
            bg = back3;
            this.hide();
            this.pre.hide();
            this.design.hide();
            this.mainmenu.position(width- 220, height-75);

            this.launch.show();
            this.slv.show();
            this.aslv.show();
            this.pslv.show();
            this.gslv.show();

            this.slv.position(75, 5);
            this.aslv.position(350, 5);
            this.pslv.position(675, 5);
            this.gslv.position(1000, 5);
        })
        this.mainmenu.mousePressed(()=>{
            bg = back1;
            this.mainmenu.hide();
            this.pre.hide()
            this.design.hide();

            this.slv.hide();
            this.aslv.hide();
            this.pslv.hide();
            this.gslv.hide();
            this.launch.hide();

            this.rocket.visible = false;

            this.settings.show();
            this.info.show();
            this.playbutton.show();
            this.playbutton.position(width/2, height/2)
        })
        this.select();
    }
    select(){
        this.launch.mousePressed(()=>{
            this.pre.show();
            this.design.show();
            bg = back1;
            this.hide_select();
            this.launch.hide();
            this.rocket.visible = false;
        })
        this.slv.mousePressed(()=>{
            bg = launchpad1
            this.hide_select();

            this.rocket.visible = true;
            this.rocket.y = 300
            this.rocket.x = 675
            this.rocket.addImage(slv);
            this.rocket.scale = 2.75;
        })
        this.aslv.mousePressed(()=>{
            bg = launchpad1
            this.hide_select();

            this.rocket.visible = true;
            this.rocket.y = 300
            this.rocket.x = 675
            this.rocket.addImage(aslv);
            this.rocket.scale = 2.5;
        })
        this.pslv.mousePressed(()=>{
            bg = launchpad1
            this.hide_select();

            this.rocket.visible = true;
            this.rocket.y = 300
            this.rocket.x = 675
            this.rocket.addImage(pslv);
            this.rocket.scale = 1.4
        })
        this.gslv.mousePressed(()=>{
            bg = launchpad1
            this.hide_select();

            this.rocket.visible = true;
            this.rocket.y = 300
            this.rocket.x = 675
            this.rocket.addImage(gslv);
            this.rocket.scale = 1.4;
        })
    }
}