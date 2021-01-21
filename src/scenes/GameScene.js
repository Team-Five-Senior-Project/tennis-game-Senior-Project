class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene',
        });
    }

    init(data) {
        this.hasPlayer2 = data.hasPlayer2;
    }

    preload() {
        this.load.image('ground', 'assets/images/ground.png');
        this.load.image('player', 'assets/images/cloud-paddle.png');
    }

    create() {
        this.events.on('pause', () => {
            pauseText.setVisible(false);
        });

        this.events.on('resume', () => {
            pauseText.setVisible(true);
        });

        this.ground = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'ground');

        // temporarily allow keyboard control
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        if (this.hasPlayer2) {
            this.keyW=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.keyS=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        }

        // pause button
        let pauseText = this.add.text(this.cameras.main.centerX, 50, 'Pause');
        pauseText.setOrigin(0.5);
        pauseText.setScale(5);
        pauseText.setInteractive({ useHandCursor: true });
        pauseText.on('pointerdown', () => {
            this.scene.launch('PauseScene');
            this.scene.pause();
        });

        // set up player 1 (left)
        this.player1 = this.physics.add.sprite(0, this.cameras.main.centerY, 'player');
        this.player1.setOrigin(0.5);
        this.player1.setCollideWorldBounds(true);
        this.player1.setScale(5);
        this.player1.slider = this.plugins.get('rexSlider').add(this.player1, {
            endPoints: [
                {
                    x: this.player1.x,
                    y: 0,
                },
                {
                    x: this.player1.x,
                    y: 1080,
                },
            ],
            value: 0.5,
        });

        // set up player 2 (right)
        this.player2 = this.physics.add.sprite(1920, this.cameras.main.centerY, 'player');
        this.player2.setOrigin(0.5);
        this.player2.setCollideWorldBounds(true);
        this.player2.setScale(5);
        if (this.hasPlayer2) {
            this.player2.slider = this.plugins.get('rexSlider').add(this.player2, {
                endPoints: [
                    {
                        x: this.player2.x,
                        y: 0,
                    },
                    {
                        x: this.player2.x,
                        y: 1080,
                    },
                ],
                value: 0.5,
            });
        } else {
            // TODO: AI-controlled player ¯\_(ツ)_/¯
        }
    }

    update() {

        // player 1 keyboard controls (⬆, ⬇)
        if (this.cursorKeys.up.isDown) {
            this.player1.setVelocityY(-250);
        } else if (this.cursorKeys.down.isDown) {
            this.player1.setVelocityY(250);
        } else {
            this.player1.setVelocityY(0);
        }

        // player 2 keyboard controls (W, S)
        if (this.hasPlayer2) {
            if (this.keyW.isDown) {
                this.player2.setVelocityY(-250);
            } else if (this.keyS.isDown) {
                this.player2.setVelocityY(250);
            } else {
                this.player2.setVelocityY(0);
            }
        }

        
    }
}

export default GameScene;
