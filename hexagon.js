class hexagon
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
        this.radius = radius;
        
		
        this.body=Bodies.circle(100,270,40,options);
        this.image = loadImage("polygon.png");
 		World.add(world, this.body);

	}
	display()
	{
            var pos = this.body.position;
            		
			imageMode(CENTER);
			image(this.image,pos.x,pos.y,60,60);
			
			
	}

}