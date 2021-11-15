const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var rabbit;
var button;

var bgImg, fruitImg, rabbitImg;

function preload()
{
  bgImg = loadImage("background.png");
  fruitImg = loadImage("melon.png");
  rabbitImg = loadImage("Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  button = createImg("cut_button.png");
  button.position(220, 30);
  button.size(50, 50);
  button.mouseClicked(drop);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rabbit = createSprite(250, 620, 100, 100);
  rabbit.addImage(rabbitImg);
  rabbit.scale = 0.2;

  rectMode(CENTER);
  imageMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
}

function draw() 
{
  image(bgImg, width / 2, height / 2, width, height);
  rope.show();
  image(fruitImg, fruit.position.x,fruit.position.y,70,70);
  Engine.update(engine);
  ground.show();
  drawSprites();
}

function drop()
{
  rope.break();
  fruit_con.detach();
  fruit_con = undefined;
}
