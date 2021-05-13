class Bullet extends MoveableObject {
  constructor(width, height, rootShooter) {
    super(rootShooter.pos.x, rootShooter.pos.y, width, height);
    this.speed = Bullet.speed;
    this.direction = Bullet.direction;
    this.rootShooter = rootShooter;
  }
}
