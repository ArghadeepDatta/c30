class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;
  }


  display(){

    if(this.body.speed<3){
      super.display();
    }else{
      //do nothing 
      World.remove(world,this.body);
      push();
      //transperency - 0 - 255
      // ON or OFF
      //smallest unit of memory - bits - 1 byte = 8 bits 
      //fully ON byte = 255(11111111)
      //fully OFF byte = 0 (00000000)
      //gradually make something - tint
      this.visibility = this.visibility - 5;
      tint(255,this.visibility);
      image(this.image,this.body.position.x, this.body.position.y, 50,50 );
      pop();

    }
  }

};