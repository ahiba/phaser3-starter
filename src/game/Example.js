import Phaser from 'phaser';

export default class Example extends Phaser.Scene {
  create() {
    console.log('create calld');
    const logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    });
  }

  preload() {
    console.log('preload calld');
    this.load.image('logo', '/APPVER/images/logo.png');
  }
}
