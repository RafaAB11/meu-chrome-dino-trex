
var trex, trex_correndo;
var solo;
var soloimg
var soloIhitboxI
function preload(){
  trex_correndo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
soloimg = loadImage ("ground2.png") ;
}

function setup(){
  createCanvas(600,200)
  
  trex = createSprite(50,160,20,50);
  trex.addAnimation("correndo", trex_correndo);
  trex.scale = 0.5;
solo = createSprite(200,180,400,20)
solo.addImage(soloimg)
soloIhitboxI=createSprite (200, 190, 400, 10);
soloIhitboxI.visible=false;
}

function draw(){
  background("white");
solo.velocityX=-20;
if(solo.x < 0){
  solo.x = solo.width/2
}

console.log (trex.y);





  if((keyDown("w") || keyDown("space") || keyDown("up")) && trex.y>=160){
    trex.velocityY = -8;
  }
 //  if(keyDown("s") || keyDown("down")){
 //     trex.velocityY = 5;
 //  }
  
  

  trex.velocityY = trex.velocityY + 0.5;
trex.collide(soloIhitboxI);
 drawSprites();
}



















































