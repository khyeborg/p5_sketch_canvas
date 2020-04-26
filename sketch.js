let canvasWidth = 700;
let canvasHeight = 700;
let increment = 20;
let sideSpaces = 100;
let accent = 100;
let bigStroke = 3; 
let smallStroke = 1.5;
let alpha = 200;
let corWidth = 40;
let corHeight = 90;

let drawBoolean = false;
let startBoolean = true;

// secondary canvas & erase mode (hit 'E' to toggle)
let drawingCanvas;
let eraseBoolean = false;
let eraseStrokeWeight = 15;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(255);
  begin();
  
  // secondary canvas
  drawingCanvas = createGraphics(canvasWidth, canvasHeight);
}

function draw() {
  // erase the current canvas
  clear();
  background(255)
  
  // draw the grid to the main canvas again
  begin();
  
  if (mouseX > sideSpaces && mouseX < canvasWidth - sideSpaces && mouseY > sideSpaces && mouseY < canvasHeight - sideSpaces && pmouseX > sideSpaces && pmouseX < canvasWidth - sideSpaces && pmouseY > sideSpaces && pmouseY < canvasHeight - sideSpaces) {
    stroke(0);
    
    // implementing erase mode
    if (eraseBoolean == true) {
      drawingCanvas.strokeWeight(eraseStrokeWeight);
      drawingCanvas.erase();
      
      // erase secondary canvas
      drawingCanvas.line(mouseX, mouseY, pmouseX, pmouseY);
    }
    
    if (drawBoolean == true && startBoolean == false) {
      drawingCanvas.strokeWeight(3)
      drawingCanvas.noErase();
      
      // draw to the secondary canvas
      drawingCanvas.line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
  
  drawWords();
  
  // render the secondary canvas on top of the main canvas
  image(drawingCanvas, 0, 0)
}

function mouseClicked() {
    if (mouseX > sideSpaces && mouseX < canvasWidth - sideSpaces && mouseY > sideSpaces && mouseY < canvasHeight - sideSpaces && drawBoolean == false && eraseBoolean == false) {
    drawBoolean = !drawBoolean;
    startBoolean = false;
  } 

  else if (mouseX > sideSpaces && mouseX < canvasWidth - sideSpaces && mouseY > sideSpaces && mouseY < canvasHeight - sideSpaces && drawBoolean == true && eraseBoolean == false) {
    drawBoolean = !drawBoolean;
  }
}

function keyPressed() {
  if (startBoolean == false) {
    // press C
    if (keyCode == 67) {      
      // create a brand new drawingCanvas and replace the previous one
      drawingCanvas = createGraphics(canvasWidth, canvasHeight);
    }

    // press S
    if (keyCode == 83) {
      save("myArtwork.png");
    }

    // press E
    if (keyCode == 69) {
      eraseBoolean = !eraseBoolean;  
      drawBoolean = false;
    }
  }
}

function begin() {
  textSize(15);
  fill(0);
  text("(0, 0)", 78, corHeight);
  text("(100, 0)", 170, corHeight);
  text("(200, 0)", 270, corHeight);
  text("(300, 0)", 370, corHeight);
  text("(400, 0)", 470, corHeight);
  text("(500, 0)", 570, corHeight);

  text("(0, 100)", corWidth, 205);
  text("(0, 200)", corWidth, 305);
  text("(0, 300)", corWidth, 405);
  text("(0, 400)", corWidth, 505);
  text("(0, 500)", corWidth, 605);

  textSize(17.5);
  text("Press ' E ' to Erase, ' C ' to Clear Canvas, ' S ' to Save Artwork.", 100, 45);

  for (let i = sideSpaces; i <= canvasWidth - sideSpaces; i += increment) {
    if (i % accent != 0) {
      strokeWeight(smallStroke);
      stroke(190, 190, 190, alpha);
      line(i, sideSpaces, i, canvasWidth - sideSpaces);
      line(sideSpaces, i, canvasWidth - sideSpaces, i);
    }
  }

  for (let i = sideSpaces; i <= canvasWidth - sideSpaces; i += increment) {
    // color the lines
    if (i % accent == 0) {
      strokeWeight(bigStroke);
      stroke(154, 180, 179);
      line(i, sideSpaces, i, canvasWidth - sideSpaces);
      line(sideSpaces, i, canvasWidth - sideSpaces, i);
    } 
  }
}

function drawWords() {
  if (startBoolean == true) {
      noStroke();
      textSize(20);
      fill(0);
      text("Click on canvas to turn Draw Mode       /    ", 120, 640);
      fill(0, 255, 0);
      text("ON", 434, 640);
      fill(255, 0, 0);
      text("OFF", 478, 640);
      
      fill(0);
      text("Press ' E ' to turn Erase Mode       /    ", 120, 670);
      fill(0, 255, 0);
      text("ON", 389, 670);
      fill(255, 0, 0);
      text("OFF", 432, 670);
    } 
    
    else {
      noStroke();
      textSize(20);
      fill(0);
      
      if (drawBoolean == true) {
        text("Draw Mode:", 120, 640);
        fill(0, 255, 0);
        text("ON", 233, 640);
      } 
      
      else {
        text("Draw Mode:", 120, 640);
        fill(255, 0, 0);
        text("OFF", 233, 640);
      }
      
      noStroke();
      textSize(20);
      fill(0);
      
      if (eraseBoolean == true) {
        text("Erase Mode:", 120, 670);
        fill(0, 255, 0);
        text("ON", 240, 670);
      } 
      
      else {
        text("Erase Mode:", 120, 670);
        fill(255, 0, 0);
        text("OFF", 240, 670);
      }
    }
}