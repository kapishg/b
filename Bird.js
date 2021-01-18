class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.abc= loadImage("sprites/smoke.png")
    this.Array=[]
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var ans= [this.body.position.x,this.body.position.y]
    if(this.body.position.x>275)
    this.Array.push(ans)
    for(var n = 0;n<this.Array.length;n++){
      image (this.abc,this.Array[n ][0],this.Array[n][1])
    }
  }
}
