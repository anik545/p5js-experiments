var theta;

function setup(){
    createCanvas(400,400)
}

function draw(){
    background(51)
    translate(width/2,height)
    stroke(255)
    theta = (map(mouseX,0,width,0,PI/2))
    var len = (map(mouseY,0,height,200,0))
    branch(len,5)
}

function branch(len,w){
    strokeWeight(w)
    line(0,0,0,-len)
    translate(0,-len)

    w*=0.8
    len*=0.66

    if (len>2) {
        push()
        rotate(theta)
        branch(len,w)
        pop()

        push()
        rotate(-theta)
        branch(len,w)
        pop()
    }
}
