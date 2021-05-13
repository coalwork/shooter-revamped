const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const bullets = [];

const keysPressed = new Proxy({}, {
  get(target, prop, receiver) {
    if (target[prop] === undefined) return false;
    return Reflect.get(target, prop, receiver);
  }
});

const controls = {
  KeyH: 'this.update(this.speed, Math.PI)',
  KeyL: 'this.update(this.speed, 0)',
  KeyK: 'if (!this.readyToFire) return; bullets.push(this.shoot())'
};

const player = new Player(
  canvas.width / 2,
  canvas.height * 7 / 8,
  40,
  40
);

function draw() {
  for (let code in keysPressed) {
    if (!(code in controls) || !keysPressed[code]) continue;
    Function(controls[code] || '').call(player);
  }

  player.pos.x = constrain(
    player.pos.x,
    player.width / 2,
    canvas.width - player.width / 2
  );

  ctx.fillStyle = '#111';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  bullets.forEach(bullet => {
    bullet.update();

    ctx.fillStyle = '#FFF';
    bullet.draw(ctx);
  });

  ctx.fillStyle = '#FFF';
  player.draw(ctx);
}

document.addEventListener('keydown', ({ code }) => {
  keysPressed[code] = true;
});

document.addEventListener('keyup', ({ code }) => {
  keysPressed[code] = false;
});

setInterval(draw, 1000 / 60); // 60 fps
