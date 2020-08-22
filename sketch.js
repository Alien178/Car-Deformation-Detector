var car, wall;

var speed, weight;

var words = 0;

function setup() {
  createCanvas(1600, 400);
  speed = random(55,90);
  weight = random(400, 1500)

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;


  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = color(80, 80, 80);
  //wall.visible = false;
}

function draw() {
  background(0,0,0);
  fill("white");
  textSize(20);
  //car.collide(wall);
  if (words == 1) {
    fill("red");
    textSize(20);
    text("BAD CAR", 750, 100);
  }else if (words == 2) {
    fill("Yellow");
    textSize(20);
    text("OK CAR", 765, 100);
  }else if (words == 3) {
    fill("Green");
    textSize(20);
    text("GOOD CAR", 750, 100);
  }

  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;

    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
      car.x = 800;
      car.y = 200;
      words = 1;
      console.log(deformation);
    }

    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
      car.x = 800;
      car.y = 200;
      words = 2;
      console.log(deformation);
    }

    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0);
      car.x = 800;
      car.y = 200;
      words = 3;
      console.log(deformation);
    }
  }
  drawSprites();
}