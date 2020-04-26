var num1;
var i;
var balloon144,balloon169;
var balloon144Image,balloon169Image;
var gameState = "start";
var check  = 0;
var num = 1;
var num2 = [];
var score = 0;
function preload(){
  balloon144Image = loadImage("144.png");
  balloon169Image = loadImage("169.png");
  balloon196Image = loadImage("196.png");
  balloon289Image = loadImage("289.png");
  balloon361Image = loadImage("361.png");
  balloon484Image = loadImage("484.png");
  balloon576Image = loadImage("576.png");
  balloon629Image = loadImage("629.png");
  balloon729Image = loadImage("729.png");
  balloon900Image = loadImage("900.png");
  
}
function setup() {
  createCanvas(500,600);
  //num1 = Math.round(random(1,10));
  //num2 = Math.round(random(1,10));
 
  balloon144 = createSprite(50,20);
  balloon144.addImage("balloon144",balloon144Image);
  balloon144.scale = 0.3;
  balloon144.velocityY = +0.5;
  
  balloon169 = createSprite(100,40);
  balloon169.addImage("balloon169",balloon169Image);
  balloon169.scale = 0.3;
  balloon169.velocityY = +0.5;
  balloon196 = createSprite(150,20);
  balloon196.addImage("balloon196",balloon196Image);
  balloon196.scale = 0.3;
  balloon196.velocityY = +0.5;
  balloon361 = createSprite(200,40);
  balloon361.addImage("balloon361",balloon361Image);
  balloon361.scale = 0.3;
  balloon361.velocityY = +0.5;
  balloon484 = createSprite(250,20);
  balloon484.addImage("balloon484",balloon484Image);
  balloon484.scale = 0.3;
  balloon484.velocityY = +0.5;
  balloon576 = createSprite(300,50);
  balloon576.addImage("balloon576",balloon576Image);
  balloon576.scale = 0.3;
  balloon576.velocityY = +0.5;
  balloon629 = createSprite(350,50);
  balloon629.addImage("balloon629",balloon629Image);
  balloon629.scale = 0.3;
  balloon629.velocityY = +0.5;
  balloon729 = createSprite(400,40);
  balloon729.addImage("balloon729",balloon729Image);
  balloon729.scale = 0.3;
  balloon729.velocityY = +0.5;
  balloon900 = createSprite(450,50);
  balloon900.addImage("balloon900",balloon900Image);
  balloon900.scale = 0.3;
  balloon900.velocityY = +0.5;
  balloon289 = createSprite(500,20);
  balloon289.addImage("balloon289",balloon289Image);
  balloon289.scale = 0.3;
  balloon289.velocityY = +0.5;
  
}

function draw() {
  background(0); 
  fill('white');
  text("score: "+score,400,50);
  if(gameState==="start"){
    num1 = [12,13,17,19,22,25,27,24,30,14];
    i = Math.round(random(0,9));
   
    for(var j = 0;j<num2.length ;j++){
      if(num2[j]===i){
        check = 1;
      }

    }
    if(check===1){
      check = 0;
      gameState = "start";
    }
    else{
      gameState = "play";
      num2.push(i);
    }
    
    text(num1[i] + " x "+num1[i] + "  =  ?",250,500) ;

  }
  if(score===10){
    gameState = "end";
  }
  if(gameState==="end"){
    background("black");
 fill("white");
  text("You Win!",250,300);
  }

  

  if(gameState === "play") {
    text(num1[i] + " x "+num1[i] + "  =  ?",250,500) ;
   spawnBalloons(num1[i]);
  }
  
  drawSprites();
}

function spawnBalloons(value){
  console.log(value)
  if(value===13&&mousePressedOver(balloon169)){
    balloon169.destroy();
    score = score+1;
    gameState = "start";
  }
  if(value===12&&mousePressedOver(balloon144)){
   
    balloon144.destroy();
    score = score+1;
    gameState = "start";
  }
  if(value===14&&mousePressedOver(balloon196)){

    balloon196.destroy();
    score = score+1;
    gameState = "start";
  }
  if(value===17&&mousePressedOver(balloon289)){
  
    balloon289.destroy();
    score = score+1;
    gameState = "start";
  }
  if(value===19&&mousePressedOver(balloon361)){

    balloon361.destroy();
    score = score+1;
    gameState = "start";
  }
  if(value===22&&mousePressedOver(balloon484)){
 
    balloon484.destroy();
    score = score+1;
    gameState = "start";
  }
  if(value===24&&mousePressedOver(balloon576)){
    
    balloon576.destroy();
    score = score+1;
    gameState = "start";
  }
  if(value===25&&mousePressedOver(balloon629)){
    
    balloon629.destroy();
    score = score+1;
    gameState = "start";
  }
  if(value===27&&mousePressedOver(balloon729)){
  
    balloon729.destroy();
    score = score+1;
    gameState = "start";
  }
  if(value===30&&mousePressedOver(balloon900)){

    balloon900.destroy();
    score = score+1;
    gameState = "start";
  }
}
