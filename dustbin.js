class Dustbin
{
	constructor(x,y,width,height)
	{
	    var x1 ={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,x1);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
	}
	display()
	{
			var pos=this.body.position;
			
	
			rectMode(CENTER);
			strokeWeight(4);
			
			stroke("green");
			fill(255);
			rect(pos.x,pos.y,this.width, this.height);
						
	}

};
