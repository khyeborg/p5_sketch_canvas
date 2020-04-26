 // create a variable to hold our world object
var world;

// create variables to hold our markers
var markerHiro;
var markerZb;
var red;
var white;
var black;



// a bunch of coins
var wcircle = [];
var bcircle = [];
var rcircle = [];
var gcircle = [];


function preload() {
}

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to our two markers that we set up on the HTML side (connect to it using its 'id')
  markerHiro= world.getMarker('hiro')
  markerZb = world.getMarker('zb');
  markerWhite = world.getMarker('white');
  markerBlack = world.getMarker('black');




}


function draw() {
  // erase the background
  world.clearDrawingCanvas();
  noStroke();

  if (markerHiro.isVisible() == true) {
    // get the position of this marker
    var hiroPosition = markerHiro.getScreenPosition();

    rcircle.push(new Paint(hiroPosition.x, hiroPosition.y));
  }
  // use the markers as positional controllers
  if (markerZb.isVisible() == true) {
    // get the position of this marker
    var zbPosition = markerZb.getScreenPosition();

    gcircle.push(new Paint(zbPosition.x, zbPosition.y));
  }


  if (markerWhite.isVisible() == true) {
    // get the position of this marker
    var whitePosition = markerWhite.getScreenPosition();

    wcircle.push(new Paint(whitePosition.x, whitePosition.y));
  }
  if (markerBlack.isVisible() == true) {
    // get the position of this marker
    var blackPosition = markerBlack.getScreenPosition();

    bcircle.push(new Paint(blackPosition.x, blackPosition.y));
  }

  // draw all circles

  for (var i = 0; i < wcircle.length; i++) {
    fill(0)
    wcircle[i].display();

  }
  for (var j = 0; j < bcircle.length; j++) {
    fill(255)
    bcircle[j].display();

  }
  for (var j = 0; j < rcircle.length; j++) {
    fill(255,0,0)
    rcircle[j].display();

  }
  for (var j = 0; j < gcircle.length; j++) {
    fill(0,255, 0)
    gcircle[j].display();

  }


}


class Paint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 10;
  }


  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
