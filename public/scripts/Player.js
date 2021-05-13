class Player extends MoveableObject {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.speed = Player.speed;
    this.direction = Player.direction;
    this.shootCooldown = Player.shootCooldown;
    this.readyToFire = true;
  }

  makeShooterReady() { this.readyToFire = true; }

  shoot(speed, direction) {
    if (!this.readyToFire) return;
    setTimeout(this.makeShooterReady.bind(this), this.shootCooldown);
    const bullet = new Bullet(5, 5, this);
    this.readyToFire = false;
    return bullet;
  }
}
