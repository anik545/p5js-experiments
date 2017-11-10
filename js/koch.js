var lines = []

function setup(){
    createCanvas(800,800)
    var start = new p5.Vector(0,height/2);
    var end = new p5.Vector(width,height/2);
    lines[0] = new KochLine(start,end);
}

function draw(){
    background(51);
    for (var i = 0; i < lines.length; i++) {
        lines[i].display()
    }
}

function mouseClicked(){
    next = []
    for (var i = 0; i < lines.length; i++) {
        next = next.concat(lines[i].split())
    }
    lines=next
}

function KochLine(start,end) {
    this.start = start;
    this.end = end;

    this.display = function() {
        stroke(255)
        line(start.x,start.y,end.x,end.y)
    }

    this.split = function(){
        var a = this.start
        var e = this.end

        console.log(a,e)
        var vec = p5.Vector.sub(this.end,this.start)
        var b = p5.Vector.add(this.start,p5.Vector.div(vec,3))
        var d = p5.Vector.add(this.start,p5.Vector.mult(vec,2/3.0))
        console.log(a,b,d,e)

        var c = this.getC()
        console.log(a,b,c,d,e)
        var l1 = new KochLine(a,b)
        var l2 = new KochLine(b,c)
        var l3 = new KochLine(c,d)
        var l4 = new KochLine(d,e)
        return [l1,l2,l3,l4]
    }

    this.getC = function(){
        a=this.start
        v=p5.Vector.sub(this.end,this.start)
        v = p5.Vector.div(v,3)
        a = p5.Vector.add(a,v)
        v = v.rotate(-radians(60))
        a = p5.Vector.add(a,v)
        return a
    }
}
