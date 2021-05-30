class Stone {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5,
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 140;
      this.height = 20;
      World.add(world, this.body);
    };

    display()
    {
      
        var stonepos=this.body.position;		
        push();
        translate(stonepos.x, stonepos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("brown");
        fill("red");

        rect(0,0,this.width , this.height)
        pop();
    };
  };