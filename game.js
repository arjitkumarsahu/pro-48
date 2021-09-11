class Game{
    constructor(){}

    start(){
        if(gameState===0){

        form.display();
        femaleCop=createSprite(displayWidth/4,displayHeight/2);
        femaleCop.addImage(fCop_Img);

        femaleCop.scale=1.2;
        maleCop=createSprite(3*displayWidth/4,displayHeight/2);
        maleCop.addImage(mCop_Img);
        maleCop.scale=0.5;

        }
       drawSprites(); 
    }
    
    fplay(){

        femaleCop.destroy();
        maleCop.destroy();
  
        textSize(20);
        text("points : "+points,100,30);
        police=createSprite(displayWidth/2,200,20,20);
        police.addImage(FpoliceImg);
        police.y=World.mouseY;
        
        zombies();
        
          if(police.isTouching(zombiesGroup)){
            zombiesGroup.destroyEach();
            points+=1;
        }
        
       drawSprites();
    }
   
}