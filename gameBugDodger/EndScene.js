class EndScene extends Phaser.Scene {
  constructor() {
    super({ key: 'EndScene' })
  }


  create() {
    this.add.text(150, 200, 'Game Over', { fontSize: '25px', fill: '#000000' });
    this.add.text(150, 250, 'Click to Restart!', { fill: '#000000', fontSize: '20px' })
    this.add.text(150, 300, `Score: ${gameState.score}`, { fill: '#000000', fontSize: '20px' })
    this.input.on('pointerdown', () => {
      gameState.score = 0;
      this.scene.stop('EndScene');
      this.scene.start('StartScene');
    })
  }

}