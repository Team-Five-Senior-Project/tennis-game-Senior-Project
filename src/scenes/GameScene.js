import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene',
        });
    }

    init(data) {
        this.hasPlayer2 = data.hasPlayer2;
        this.initialTime = data.initialTime;
        this.scoreLimit = data.scoreLimit;
    }

    preload() {
        this.load.image('ground', 'assets/images/ground.png');
        this.load.image('player', 'assets/images/cloud-paddle.png');
        this.load.image('ball', 'assets/images/ball.png');
    }

    create() {
        this.events.on('pause', () => {
            this.pauseText.setVisible(false);
        });

        this.events.on('resume', () => {
            this.pauseText.setVisible(true);
        });

        this.ground = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'ground');

        // TODO: conditionally load timer text
        if (this.initialTime > 0) {
            this.timer = this.initialTime;
            this.timeText = this.add.text(this.cameras.main.centerX, 75, this.formatTime(this.timer), {
                fontFamily: 'Raleway',
                fontSize: '75px',
            });
            this.timeText.setOrigin(0.5);
            this.timedEvent = this.time.addEvent({
                delay: 1000,
                callback: () => {
                    if (this.timer > 0) {
                        this.timer -= 1;
                        this.timeText.setText(this.formatTime(this.timer));
                    }
                    if (this.timer === 0) {
                        this.scene.launch('EndScene', {
                            hasPlayer2: this.hasPlayer2,
                            initialTime: this.initialTime,
                            score1: this.score1,
                            score2: this.score2,
                        });
                        this.scene.stop();
                    }
                },
                callbackScope: this,
                loop: true,
            });
        }

        // temporarily allow keyboard control
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        if (this.hasPlayer2) {
            this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        }

        // pause button
        this.pauseText = this.add.text(this.cameras.main.centerX, 150, 'Pause', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        });
        this.pauseText.setOrigin(0.5);
        this.pauseText.setInteractive({
            useHandCursor: true,
        });
        this.pauseText.on('pointerdown', () => {
            this.scene.launch('PauseScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: this.initialTime,
            });
            this.scene.pause();
        });

        // set up player 1 (left)
        this.player1 = this.physics.add.sprite(0, this.cameras.main.centerY, 'player')
            .setOrigin(0.5)
            .setCollideWorldBounds(true)
            .setScale(5);
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
        this.player2 = this.physics.add.sprite(1920, this.cameras.main.centerY, 'player')
            .setOrigin(0.5)
            .setCollideWorldBounds(true)
            .setScale(5);
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
        }

        // Ball oject
        this.ball = this.physics.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'ball')
            .setScale(2)
            .setCollideWorldBounds(true)
            .setBounce(1);

        // initialize player positions and ball movement
        this.reset();

        // Collider function player 1
        this.hitTHePlayer1 = (ball) => {
            this.moveVelocityX = this.moveVelocityX + 10;
            this.moveVelocityX = this.moveVelocityX * (-1); // Change direction after contatct 
            ball.setVelocityX(this.moveVelocityX);
            
            this.moveVelocityY = Phaser.Math.Between(-1000, 1000); // Give a random Y direction when it hits the player
            if (this.moveVelocityY < 0) {
                ball.setVelocityY(this.moveVelocityY);
            } else {
                this.moveVelocityY = this.moveVelocityY + 10;
                ball.setVelocityY(this.moveVelocityY);
            }
        };

        // Collider function player 1
        this.hitTHePlayer2 = (ball) => {
            this.moveVelocityX = this.moveVelocityX + 10;
            this.moveVelocityX = this.moveVelocityX * (-1); // Change direction after contatct 
            ball.setVelocityX(this.moveVelocityX);

            this.moveVelocityY = Phaser.Math.Between(-1000, 1000); // Give a random Y direction when it hits the player
            if (this.moveVelocityY < 0) {
                ball.setVelocityY(this.moveVelocityY);
            } else {
                this.moveVelocityY = this.moveVelocityY + 10;
                ball.setVelocityY(this.moveVelocityY);
            }
        };
        
        // Add collider function
        this.physics.add.collider(this.ball, this.player1, this.hitTHePlayer1);
        this.physics.add.collider(this.ball, this.player2, this.hitTHePlayer2);

        // player 1 score
        this.score1 = 0;
        this.score1Text = this.add.text(50, 50, this.score1, {
            fontFamily: 'Raleway',
            fontSize: '5em',
            fill: '#000',
        });
        this.score1Text.setOrigin(0.5);

        // player 2 score
        this.score2 = 0;
        this.score2Text = this.add.text(this.cameras.main.width - 50, 50, this.score2, {
            fontFamily: 'Raleway',
            fontSize: '5em',
            fill: '#000',
        });
        this.score2Text.setOrigin(0.5);
    }

    update() {
        // player 1 keyboard controls (⬆, ⬇)
        if (this.cursorKeys.up.isDown) {
            this.player1.setVelocityY(-500);
        } else if (this.cursorKeys.down.isDown) {
            this.player1.setVelocityY(500);
        } else {
            this.player1.setVelocityY(0);
        }

        // player 2 keyboard controls (W, S)
        if (this.hasPlayer2) {
            if (this.keyW.isDown) {
                this.player2.setVelocityY(-500);
            } else if (this.keyS.isDown) {
                this.player2.setVelocityY(500);
            } else {
                this.player2.setVelocityY(0);
            }
        }

        // logic to control computer player
        if (!this.hasPlayer2) {
            if (this.ball.y > this.player2.y) {
                this.player2.setVelocityY(250);
            } else if (this.ball.y < this.player2.y) {
                this.player2.setVelocityY(-250);
            }
        }

        // player 1 scores
        if (this.ball.x === this.cameras.main.width - this.ball.width) {
            this.score1 += 1;
            this.score1Text.setText(this.score1);
            this.reset();
        }

        // player 2 scores
        if (this.ball.x === this.ball.width) {
            this.score2 += 1;
            this.score2Text.setText(this.score2);
            this.reset();
        }

        if (this.scoreLimit > 0) {
            if (this.score1 >= this.scoreLimit) {
                this.scene.launch('EndScene', {
                    hasPlayer2: this.hasPlayer2,
                    initialTime: this.initialTime,
                    score1: this.score1,
                    score2: this.score2,
                });
                this.scene.stop();
            }

            if (this.score2 >= this.scoreLimit) {
                this.scene.launch('EndScene', {
                    hasPlayer2: this.hasPlayer2,
                    initialTime: this.initialTime,
                    score1: this.score1,
                    score2: this.score2,
                });
                this.scene.stop();
            }
        }
    }

    formatTime(seconds) {
        // Minutes
        const minutes = Math.floor(seconds / 60);
        // Seconds
        let partInSeconds = seconds % 60;
        // Adds left zeros to seconds
        partInSeconds = partInSeconds.toString().padStart(2, '0');
        // Returns formated time
        return `${minutes}:${partInSeconds}`;
    }

    reset() {
        // ball movement
        this.moveVelocityX = 800;
        this.moveVelocityY = 100;
        this.ball.setVelocityX(this.moveVelocityX);
        this.ball.setVelocityY(this.moveVelocityY);

        this.ball.x = this.cameras.main.width / 2;
        this.ball.y = this.cameras.main.height / 2;

        // TODO delay before starting new round?
    }
}

export default GameScene;
