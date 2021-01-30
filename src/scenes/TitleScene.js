
class TitleScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'TitleScene',
        });
    }

    preload() {
        // TODO: replace the main screen background image
        this.load.image('bg', 'assets/images/Scene2.png');
        this.load.image('logo', 'assets/images/logo.png');
this.load.image('Oneplayer', 'assets/images/Oneplayer.png');
    }

    create() {
        this.bg = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bg');

		
let logo = this.add.image(950, 250, 'logo')

let graphics = this.add.graphics({
x: logo.x - logo.width / 2,
y: logo.y - logo.height / 2
})
.fillStyle(0xffff00, 0.75)
.setTexture('logo', undefined, 1)
.fillRect(0, 0, logo.width, logo.height)

this.tweens.add({
targets: graphics,
alpha: 0,
ease: 'Cubic.easeOut',
duration: 500,
repeat: -1,
yoyo: true
});

let button = this.add.image(650, 650, 'Oneplayer')
function create() {

    game.stage.backgroundColor = '#182d3b';



    button = game.add.button(game.world.centerX - 10, 400, 'Oneplayer', actionOnClick, this, 2, 1, 0);

    button.onInputOver.add(over, this);
button.on('pointerdown', () => {
            this.scene.start('GameScene', {
                hasPlayer2: false,
            });
        });

}

function up() {
    console.log('button up', arguments);
}



function actionOnClick () {

    background.visible =! background.visible;

}



        let startText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 50, 'Select Your Game');
        startText.setOrigin(0.5);
        startText.setScale(5);

        let onePlayerText = this.add.text(this.cameras.main.centerX - 300, this.cameras.main.centerY + 50, 'One Player');
        onePlayerText.setOrigin(0.5);
        onePlayerText.setScale(4);
        onePlayerText.setInteractive({
            useHandCursor: true,
        });
        onePlayerText.on('pointerdown', () => {
            this.scene.start('GameScene', {
                hasPlayer2: false,
            });
        });

        let twoPlayerText = this.add.text(this.cameras.main.centerX + 300, this.cameras.main.centerY + 50, 'Two Players');
        twoPlayerText.setOrigin(0.5);
        twoPlayerText.setScale(4);
        twoPlayerText.setInteractive({
            useHandCursor: true,
        });
        twoPlayerText.on('pointerdown', () => {
            this.scene.start('GameScene', {
                hasPlayer2: true,
			









		
		
		});
	});
    }

    update() {
        // 
    }
}

export default TitleScene;
