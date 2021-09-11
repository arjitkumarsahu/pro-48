class Form{
    constructor(){
        //this.title=createElement("h2");
        this.input=createInput("Name");
        this.button=createButton("Let's Begin");
        this.greetings=createElement("h1");
        this.buttonPlay=createButton("CONTINUE");

    }
    
    hide(){
        //this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greetings.hide();
    }

    display(){
        //this.title.html("Zombie Apocalpse");
        //this.title.position(400,150);

        //image("bg",0,0,displayWidth,displayHeight)
        this.input.position(450,250);

        this.button.position(550,300);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            var name=this.input.value();
            this.greetings.html("Welcome To The New World Of Zombies, " +name);
            this.greetings.position(180,220);
            
            this.buttonPlay.position(displayWidth/2,displayHeight/2);


            
            this.buttonPlay.mousePressed(()=>{
                
            this.greetings.hide();
            this.buttonPlay.hide();
           // game.start();
            var maleB=createButton("MALE COP");
            maleB.position(3*displayWidth/4,displayHeight/2);

            var femaleB=createButton("FEMALE COP");
            femaleB.position(displayWidth/4,displayHeight/2);

            this.greetings.hide();
            this.buttonPlay.hide();

            femaleB.mousePressed(()=>{
                gameState=1;
                femaleB.hide();
                maleB.hide();
                

            })

            maleB.mousePressed(()=>{
                gameState=1;
                femaleB.hide();
                maleB.hide();
                

            })
           
            })
             
            
                
            
        })

        drawSprites();


    }
}
