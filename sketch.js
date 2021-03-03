const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var tom, slingshot;
var wlog1,wlog2;

var gameState = "onSling";
var score = 0 ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(680,320,70,70);
    box2 = new Box(940,320,70,70);
    jerry1 = new Jerry(750, 220);
    jerry1.debug=true;
    jerry3 = new Jerry(770, 220);
    jerry3.debug=true;
    jerry5 = new Jerry(790, 220);
    jerry5.debug=true;
    jerry7 = new Jerry(810, 220);
    jerry7.debug=true;
    log1 = new Log(810,260,400, PI/2);

    box3 = new Box(740,240,70,70);
    box4 = new Box(930,240,70,70);
    jerry2 = new Jerry(790, 160);
    jerry2.debug=true;
    jerry4 = new Jerry(810, 160);
    jerry4.debug=true;
    jerry6 = new Jerry(830, 160);
    jerry6.debug=true;
    jerry8 = new Jerry(850, 160);
    jerry8.debug=true;
    log3 =  new Log(810,180,400, PI/2);
    
   
    log4 = new Log(790,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    

    tom = new Tom(200,50);

    wlog1 = new Wlog(400,250,20,200);
    wlog2 = new Wlog(1100,220,20,200);

    slingshot = new SlingShot(tom.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }
    noStroke();
    textSize(35);
    fill("black");
    text("Score : "+score,width-300,50);
    Engine.update(engine);
    
    ground.display();

    log1.display();
    log3.display();

    jerry1.display();
    jerry1.score();
    jerry3.display();
    jerry3.score();
    jerry5.display();
    jerry5.score();
    jerry7.display();
    jerry7.score();


    jerry2.display();
    jerry2.score();
    jerry4.display();
    jerry4.score();
    jerry6.display();
    jerry6.score();
    jerry8.display();
    jerry8.score();

    tom.display();
    platform.display();
    wlog1.display();
    wlog2.display();

    box1.display();
    box2.display();
    box3.display();
   box4.display();
    
    
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(tom.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var dt = responseJSON.datetime;
    var hour = dt.slice(11,13);

    if(hour>=06 && hour<=19){
        bg="bg.png"
    }

    else{
        bg="bg2.jpg"
    }

    backgroundImg=loadImage(bg);
}
