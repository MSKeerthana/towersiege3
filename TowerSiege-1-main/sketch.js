const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29;
var player,img,slingshot;

function preload() {
    img=loadImage("polygon img.png");
 
  bg=color("black");
  txtcolor=color("black");
  fetchtime();
}


function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;
   
   score=0;
   
    ground1 = new Ground(500,680,1000,20);
    ground2 = new Ground(400, 505, 400, 20);
    ground3 = new Ground(800,200,200,20);
    
    block1=new Blueblock(265,502,60,40);
    block2=new Blueblock(320,502,60,40);
    block3=new Blueblock(380,502,60,40);
    block4=new Blueblock(435,502,60,40);
    block5=new Blueblock(500,502,60,40);
    block6=new Block(290,430,60,40);
    block7=new Block(350,430,60,40);
    block8=new Block(410,430,60,40);
    block9=new Block(470,430,60,40);
    block10=new Darkblue(319,370,60,40);
    block11=new Darkblue(380,370,60,40);
    block12=new Darkblue(440,370,60,40);
    block13=new Color(350,310,60,40);
    block14=new Color(410,310,60,40);
    block15=new Grayblock(380,280,60,40);
    
    block16=new Block(740,180,60,40);
    block17=new Block(800,180,60,40);
    block18=new Block(860,180,60,40);
    block19=new Darkblue(770,140,60,40);
    block20=new Darkblue(830,140,60,40);
    block21=new Grayblock(800,100,60,40);
    
    player=new Ball(100,300,30);
    slingshot = new Slingshot(player.body,{x:100, y:300});

}
function draw(){
    background(255);
    Engine.update(engine);
    
    ellipseMode(RADIUS);
    ellipse(100,300,10);

    strokeWeight(4);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    
   block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    player.display();
    ground1.display();
   ground2.display();
   ground3.display();
   slingshot.display();
}

 //Calling score function for each block
 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();
 block15.score();
 block16.score();
 block17.score(); 
 block18.score();
 block19.score();
 block20.score();
 block21.score();
 block22.score();
 block23.score();
 block24.score();
 block25.score();

 textSize(24);
  fill(txtcolor)
  text("Score : "+score,30,360);

function mouseDragged(){
    Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode==32){
        slingshot.attach(player.body)
    }
}

async function fetchtime()
{
    var time=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var data=await time.json();
    console.log(data);
    var hour=data.datetime.slice(11,13);
    if(hour>=6&&hour<=18)
    {
      bg=color("azure");
      txtcolor=color("black")
    }
    else{
       bg=color("black")
       txtcolor=color("white")
    }
}

