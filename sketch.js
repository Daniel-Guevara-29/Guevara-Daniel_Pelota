let posXCircle = 10;
let posY;
let diametro; 
let radio;
let circleColor;
let isBlackBackground = true;


function setup() {
  createCanvas(windowWidth, windowHeight);


  posX = windowWidth / 2;
  posY = windowHeight / 2; 
 
  diametro = 50;
  radio = diametro /  2;
  circleColor = color (0, 255, 0);




}

function draw() {
  if (isBlackBackground) {
    background(0); // Fondo negro
  } else {
    background(255); // Fondo blanco
  }
  

  posX -= 10;
  if(posX < -radio) {
  diametro = random(10, 100);
  radio = diametro / 2;
    posX = windowWidth + radio;

    if (isBlackBackground) {
      circleColor = color(0, 0, 255);
    } else {
      circleColor = color(0, 255, 0);
    }
    isBlackBackground = !isBlackBackground;
  }


  fill(circleColor);
  circle(posX, posY, diametro);

  print(posX);
    

  }

  
  

  
