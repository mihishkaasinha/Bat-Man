const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxdrops = 200
var boyimg,bg
var drops = []
var thunder,thunderimg1,thunderimg2,thunderimg3,thunderimg4
var thunderCreatedFrame = 0;

function preload(){
   bg = loadImage("images.jpg")
   thunderimg1 = loadImage("1.png")
   thunderimg2 = loadImage("2.png")
   thunderimg3 = loadImage("3.png")
   thunderimg4 = loadImage("4.png")
}

function setup(){
   createCanvas(windowWidth/2,windowHeight)
   engine = Engine.create();
   world = engine.world;
   for(var i = 0; i<maxdrops;i++){
      drops.push(new Drop(random(0,600), random(0,400)))
   }
   umbrella = new Umbrella(width/2,350)
}

function draw(){
   background(bg)
   Engine.update(engine);
   umbrella.display()
   for(var i = 0; i < maxdrops;i++){
      drops[i].display()
      drops[i].update()
   }
   rand = Math.round(random(1,4));
   if(frameCount%80 === 0){
       thunderCreatedFrame = frameCount;
       thunder = createSprite(random(10,370), random(10,30), 10, 10);
       switch(rand){
           case 1: thunder.addImage(thunderimg1);
           break;
           case 2: thunder.addImage(thunderimg2);
           break; 
           case 3: thunder.addImage(thunderimg3);
           break;
           case 4: thunder.addImage(thunderimg4);
           break;
           default: break;
       }
       thunder.scale = 0.7;
   }

   if(thunderCreatedFrame + 10 === frameCount && thunder){
       thunder.destroy();
   }

   drawSprites()
}   

