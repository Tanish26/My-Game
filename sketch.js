var cop;
var corona;
//var human1, human2, human3, human4, human5;
var cop1, cop2, cop3, cop4, cop5; 
var bg;
var smoke;
var gameState = 1;
var copDie_img;
var coronaGroup; 
var smoke;
//group name(corona), create a group using corona = (in setup);
// add coronaGroup; 

function preload(){
  co1 = loadImage("co1.png");
  cop1 = loadAnimation("cop_1_shoot.png",  "cop_4_shoot.png", "cop_2n_shoot.png", "cop_5_shoot.png");
  bg = loadImage("city-background.png");
  copDie_img = loadAnimation("cop_die_1.png", "copi_die_2.png", "cop_die_3.png", "cop_die_4.png", "cop_die_5.png");
  smoke = loadAnimation("smoke1.png", "smoke2.png", "smoke3.png")
  //smoke = loadAnimation
}

function setup() {
  createCanvas(900, 500);
  bg1 = createSprite(500,100,1000,500);
  bg1.addImage("bg1", bg);
  bg1.x = bg1.width /2;
  bg1.scale=2.5;
  bg1.velocityX=-1;
  //human1 = createSprite();
  //human2 = createSprite();
  //human3 = createSprite();
  //human4 = createSprite();
  //human5 = createSprite();
  cop = createSprite(300, 350)
    cop.addAnimation("cop1", cop1);
    cop.addAnimation("copDie", copDie_img);
    cop.scale = 0.5;

  coronaGroup = createGroup();
}

function draw() { 
  if (gameState === 1){
    if (bg1.x < 0){
      bg1.x = bg1.width/2;
    }
    coronaSpawn();
    if (cop.isTouching(corona)){
      gameState = 0;
    }
  } 
  else if(gameState === 0){
    cop.changeAnimation("copDie", copDie_img)
  }
  drawSprites();  
}

function coronaSpawn(){
  if (frameCount%60 === 0){
  for(var i=10; i<=900;i=i+250){
  corona = createSprite(i, 200);
  corona.velocityX = 2;
  corona.velocityY = 2;
  corona.addAnimation("co1", co1);
  corona.scale = 0.1;
  coronaGroup.add(corona);
}
}
}


