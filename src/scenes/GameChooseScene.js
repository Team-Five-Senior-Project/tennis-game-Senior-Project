class GameChooseScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameChooseScene',
        });
    }

    init(data) {
        this.hasPlayer2 = data.hasPlayer2;
    }

    preload() {}

    create() {
        this.timedGameText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 300, 'Timed Game', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5);

        this.timedGame30SecText = this.add.text(this.cameras.main.centerX - 200, this.cameras.main.centerY - 200, '0:30', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: 30,
                scoreLimit: -1,
            });
            this.scene.stop();
        });

        this.timedGame1MinText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 200, '1:00', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: 60,
                scoreLimit: -1,
            });
            this.scene.stop();
        });

        this.timedGame1Min30SecText = this.add.text(this.cameras.main.centerX + 200, this.cameras.main.centerY - 200, '1:30', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: 90,
                scoreLimit: -1,
            });
            this.scene.stop();
        });

        this.scoredGameText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Scored Game', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5);

        this.scoredGame5Text = this.add.text(this.cameras.main.centerX - 200, this.cameras.main.centerY + 100, '5', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: -1,
                scoreLimit: 5,
            });
            this.scene.stop();
        });

        this.scoredGame10Text = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 100, '10', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: -1,
                scoreLimit: 10,
            });
            this.scene.stop();
        });

        this.scoredGame15Text = this.add.text(this.cameras.main.centerX + 200, this.cameras.main.centerY + 100, '15', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: -1,
                scoreLimit: 15,
            });
            this.scene.stop();
        });

        this.restartText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 300, 'Back to Main Menu', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('TitleScene');
            this.scene.stop();
        });
    }

    update() {}
}

export default GameChooseScene;