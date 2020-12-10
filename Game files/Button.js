class Form{
    constructor(){
        this.playbutton = createButton("Start");
        this.nameinput = createInput("Enter your name: ")
        this.info = createButton("Information")
        this.settings = createButton("How to play?")
        this.goBack = createButton("Go back");
        this.welcome = createElement("h1");

        this.pre,this.design, this.slv, this.aslv, this.pslv, this.gslv;
    }
    hide(){
        this.playbutton.hide();
        this.nameinput.hide();
        this.settings.hide();
        this.info.hide();
        this.welcome.hide();
    }
    show(){
        this.playbutton.show();
        this.nameinput.show();
        this.settings.show();
        this.info.show();
    }
    display(){
        //Player name 
        this.playbutton.position(width/2 + 75, height/2)
        this.nameinput.position(width/2-240, height/2)
        //Information button
        this.info.position(width- 185, 75)
           // Going back 
           this.goBack.position(width- 195, height- 75)
           this.goBack.hide();
        //Settings
        this.settings.position(width- 195, 5)
        
        this.info.mousePressed(()=>{
            bg = back2;
            this.hide();
            
        })
        this.goBack.mousePressed(()=>{
            bg = back1;
            this.goBack.hide();
            this.show();
        })
        this.playbutton.mousePressed(()=>{
            this.welcome.html("Welcome to learn about space rockets")
            this.welcome.position(width/2 - 200, height/2- 150);
            this.nameinput.hide();
            this.playbutton.hide();
            this.level1();
        })
    }
    level1(){
        this.pre = createButton("Launch Pre-Designed Rockets !")
        this.pre.position(width/2 - 150, height/2 + 100)

        this.design = createButton("Design your own rockets !")
        this.design.position(width/2 - 125, height/2)

        this.pre.mousePressed(()=>{
            bg = back3;
            this.hide();
            this.pre.hide();
            this.design.hide();

            this.slv = createButton("Select SLV");
            this.slv.position(75, 5);

            this.aslv = createButton("Select ASLV");
            this.aslv.position(350, 5);

            this.pslv = createButton("Select PSLV");
            this.pslv.position(675, 5);

            this.gslv = createButton("Select GSLV");
            this.gslv.position(1000, 5);
        })
    }
    
}