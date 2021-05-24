const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var polygon, polygonImg;
var slingshot;

function preload(){
polygonImg=loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

box1=new Box(330,235,40,40);
box2=new Box(360,235,40,40);
box3=new Box(390,235,40,40);
box4=new Box(420,235,40,40);
box5=new Box(450,235,40,40);
box6=new Box(360,195,40,40);
box7=new Box(385,195,40,40);
box8=new Box(380,155,40,40)

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot=new Slingshot(this.polygon,{x:100,y:200});
    ground = new Ground(390,300,300,20);

   
}




function draw(){
    Engine.update(engine);
background(0);

ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
slingshot.display();
imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,40,40);
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
