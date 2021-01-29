const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup(){
    createCanvas(1200, 600);
	engine = Engine.create();
    world = engine.world;

    ground = new platform(600,400,600,15);

    Block1 = new block4(600,370,45,45);
    Block2 = new block4(555,370,45,45);
    Block3 = new block4(510,370,45,45);
    Block4 = new block4(465,370,45,45);
    Block5 = new block4(645,370,45,45);
    Block6 = new block4(690,370,45,45);
    Block7 = new block4(735,370,45,45);
    Block8 = new block3(510,325,45,45);
    Block9 = new block3(555,325,45,45);
    Block10 = new block3(600,325,45,45);
    Block11 = new block3(645,325,45,45);
    Block12 = new block3(690,325,45,45);
    Block13 = new block2(555,280,45,45);
    Block14 = new block2(600,280,45,45);
    Block15 = new block2(645,280,45,45);
    Block16 = new block1(600,235,45,45);

    polygon = new hexagon();
    slingShot = new slingshot(polygon.body,{x:200,y:400});
    
}
function draw(){
    Engine.update(engine);
    ground.display();
    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    Block8.display();
    Block9.display();
    Block10.display();
    Block11.display();
    Block12.display();
    Block13.display();
    Block14.display();
    Block15.display();
    Block16.display();
    polygon.display();
    slingShot.display();

    textSize(30);
    fill("white");
    text("Drag the Hexagonal Stone and release it, to launch it towards the blocks.",200,50)
}
function mouseDragged(){
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingShot.fly()
}
function keyPressed(){
if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:100,y:400});
    slingShot.attach(polygon.body);
}
}
