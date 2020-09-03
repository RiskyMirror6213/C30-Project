const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,height,1200,20);

    ground2 = new Ground(800, 350, 400, 20);
    
    //platform = new Platform(150, 305, 300, 170);

    box1 = new Box(700,320,30,40);
    box2 = new Box(730,320,30,40);
    box3 = new Box(760,320,30,40);
    box4 = new Box(790,320,30,40);
    box5 = new Box(820,320,30,40);
    box6 = new Box(850,320,30,40);
    box7 = new Box(880,320,30,40);

    box12 = new Box(730,280,30,40);
    box8 = new Box(760,280,30,40);
    box9 = new Box(790,280,30,40);
    box10 = new Box(820,280,30,40);
    box13 = new Box(850,280,30,40);

    box14 = new Box(760,240,30,40);
    box11 = new Box(790,240,30,40);
    box15 = new Box(820,240,30,40);

    box16 = new Box(790,200,30,40);

    bird = new Bird(200,300);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:250});
}

function draw(){
    background("black")
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground1.display();
    ground2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    bird.display();
    //platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if (keyCode === 32) {
        slingshot.attach(bird.body);
    }
}