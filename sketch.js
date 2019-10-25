var sun_x = 200;
var sun_y = 250;
var earth_x = 200;
var earth_y = 80;

var sun_radius = 80;
var earth_radius = 40;

var orbit_radius;

var theta = 0;

function setup() {
  createCanvas(400, 400);
  orbit_radius = dist(sun_x,sun_y, earth_x, earth_y);
}

function draw() {
  background(220);
  fill(255,0,0);
  noStroke();
  ellipse(sun_x,sun_y,sun_radius);
  
  fill(0,255,0);
  ellipse(earth_x, earth_y, earth_radius);
 
  theta = theta + 0.05;
  earth_x = sun_x + orbit_radius * cos(theta);
  earth_y = sun_y + orbit_radius * sin(theta);
}