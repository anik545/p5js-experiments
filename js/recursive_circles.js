function setup() {
  createCanvas(500, 400);
}

function draw() {
    background(51)
    drawCircle(width/2,height/2,200)
}

function drawCircle(x,y,radius){
    stroke(255)
    strokeWeight(1)
    noFill()
    ellipse(x,y,radius,radius)
    if (radius>8){
        drawCircle(x+radius/2,y,radius/2)
        drawCircle(x-radius/2,y,radius/2)
        drawCircle(x,y+radius/2,radius/2)
        drawCircle(x,y-radius/2,radius/2)
    }
}
