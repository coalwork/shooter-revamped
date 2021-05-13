class MoveableObject {
  constructor(x, y, width, height) {
    this.pos = new p5.Vector(x, y);
    this.width = width;
    this.height = height;
    this.speed = MoveableObject.speed;
    this.direction = MoveableObject.direction;
  }

  update(speed, direction) {
    if (speed !== undefined) this.speed = speed;
    if (direction !== undefined) this.direction = direction;
    this.pos.add(p5.Vector.fromAngle(this.direction).setMag(this.speed));
  }

  draw(ctx) { 
    ctx.fillRect(
      this.pos.x - this.width / 2,
      this.pos.y - this.height / 2,
      this.width,
      this.height
    );
  }
}
