class Chain {
    constructor(body1,body2){
        var options ={
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.5,
            length: 20,
        }
        this.connect=Constraint.create(options);
        World.add(world,this.connect);
    } 
    display(){
    
        var point_a = this.connect.bodyA.position;
        var point_b = this.connect.bodyB.position;
        strokeWeight (4);
        line(point_a.x,point_a.y,point_b.x,point_b.y);

    }
}