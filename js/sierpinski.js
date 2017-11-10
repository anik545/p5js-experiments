triangles = []

function setup(){
    createCanvas(400,400)
    startT = createVector(width/2,height-sqrt((3*width*width)/4))
    startL = createVector(0,height)
    startR = createVector(width,height)
    console.log(startT,startL,startR)
    triangles[0] = new tri(startT,startL,startR)
}

function draw(){
    background(51)
    for (var i = 0; i < triangles.length; i++) {
        triangles[i].display()
    }
}

function mouseClicked(){
    next = []
    for (var i = 0; i < triangles.length; i++) {
        next = next.concat(triangles[i].split())
    }
    triangles=next
}

function tri(top,left,right){
    this.t = top
    this.l = left
    this.r = right

    this.display = function(){
        stroke(0)
        strokeWeight(0)
        triangle(this.t.x,this.t.y,this.l.x,this.l.y,this.r.x,this.r.y)
    }

    this.split = function(){
        mptr = p5.Vector.add(this.t,this.r).div(2)
        mptl = p5.Vector.add(this.t,this.l).div(2)
        mprl = p5.Vector.add(this.r,this.l).div(2)

        t1 = new tri(this.t,mptl,mptr)
        t2 = new tri(mptl,this.l,mprl)
        t3 = new tri(mptr,mprl,this.r)
        return [t1,t2,t3]
    }
}
