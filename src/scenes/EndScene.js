class EndScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'EndScene',
        });
    }

    init(data) {
        this.hasPlayer2 = data.hasPlayer2;
        this.initialTime = data.initialTime;
        this.scoreLimit = data.scoreLimit;
        this.score1 = data.score1;
        this.score2 = data.score2;
        this.numPlayers = this.hasPlayer2 ? 2 : 1;
    }

    preload() {}

    create() {
        this.gameOverText = this.add.text(this.cameras.main.centerX, 150, 'GAME OVER', {
            fontFamily: 'Raleway',
            fontSize: '100px',
        }).setOrigin(0.5);

        let winnerTextStr = null;
        if (this.score1 === this.score2) {
            winnerTextStr = 'It was a tie!';
        } else {
            switch (this.numPlayers) {
                case 1:
                    winnerTextStr = this.score1 > this.score2 ? 'Congratulations! ' : 'Nice try! ';
                    break;
                case 2:
                    winnerTextStr = `Congratulations Player ${this.score1 > this.score2 ? 1 : 2}`;
                    break;
                default:
                    break;
            }
        }
        
        this.winnerText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 100, winnerTextStr, {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5);

        this.restartText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 200, 'Main Menu', {
            fontFamily: 'Raleway',
            fontSize: '50px',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('TitleScene');
            this.scene.stop();
        });

        // reset current game
        this.resetGameText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'Reset Game', {
            fontFamily: 'Raleway',
            fontSize: '50px',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: this.initialTime,
                scoreLimit: this.scoreLimit,
            });
            this.scene.stop();
        });
    }

    update() {}
}

export default EndScene;
