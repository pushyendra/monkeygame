var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var fruitGroup,obstacleGroup;
var score;
var ground;
var survivialTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  

  
  monkey=createSprite(50,320);
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.15
  
  ground=createSprite(600,370,1200,10);
  
  fruitGroup=   new Group();
  obstacleGroup=new Group();
}
function draw() {
 background('rgb(0,295,0)');
  

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  
  
 ground.velocityX=-4;

if(keyDown("space") && monkey.y>=200) {
  monkey.velocityY=-16;
}
monkey.velocityY=monkey.velocityY +0.8;
monkey.collide(ground);
  
  stroke("white");
 textSize(20)
 fill("white")
  
  
  stroke("black");
  textSize(20)
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:  " + survivalTime,100,50)

  

  foodgroup();
  obstaclegroup();
  
   
 
  
  drawSprites();
}
  function foodgroup(){
    if(frameCount %80===0){
      banana=createSprite(600,300)
      banana.addImage(bananaImage);
      banana.velocityX=-10
      banana.scale=0.2
      banana.lifetime = 100
      banana.y=Math.round(random(100,300));
      fruitGroup.add(banana);
    }
  }

   function  obstaclegroup(){
     if(frameCount %200===0){
      obstacle=createSprite(600,320);
      obstacle.addAnimation("obstacle",obstacleImage);
       obstacle.lifetime = 200;
       obstacle.scale=0.3; 
       obstacle.velocityX=-10;
       obstacle.x=Math.round(random(400,600));
       obstacleGroup.add(obstacle);
     }
   }





