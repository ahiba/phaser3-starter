import Phaser from 'phaser';
import * as paths from '#/utils/paths';

class Food extends Phaser.GameObjects.Image {
  static preload(scene) {
    scene.load.image('food', paths.asset('images/snake/food.png'));
  }

  constructor(scene, x, y) {
    super(scene, x, y);

    this.setTexture('food');
    this.setPosition(x * 16, y * 16);
    this.setOrigin(0);

    this.total = 0;

    this.eatEffect = {
      frequency: 523.25,
      attack: 0.05,
      decay: 0.2,
      type: 'sine',
      volume: 3,
      pan: 0.8,
      pitchBend: 600,
      reverse: true,
      random: 100
    };

    scene.children.add(this);
  }

  eat() {
    this.total++;
    // Dynamic not found
    //new Phaser.Sound.Dynamic.FX(ctx, this.eatEffect);
  }
}

export default Food;
