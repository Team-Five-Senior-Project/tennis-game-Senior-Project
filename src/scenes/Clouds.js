class Clouds extends Phaser.Scene {
    constructor() {
        super({
            key: 'Clouds'
        });
    }

    preload() {
        this.load.image('cloud0', 'assets/images/cloud-paddle.png');
        this.load.image('cloud1', 'assets/images/cloud-paddle.png');
    }
    create() {
        // Cloud 1 needs to move so we add physics
        this.cloud0 = this.physics.add.image(0, 540, 'cloud0'); // All the way to the left
        this.cloud0.setCollideWorldBounds(true);
        this.cloud0.setScale(5);

        // Cloud 2 needs to move so we add physics
        this.cloud1 = this.physics.add.image(1920, 540, 'cloud1'); // All the way to the right
        this.cloud1.setCollideWorldBounds(true);
        this.cloud1.setScale(5);
    }

    update() {
        var cursor = this.input.keyboard.createCursorKeys();
        // console.log(cursor)

        // Move up when up key is pressed
        if (cursor.up.isDown) {
            this.cloud0.setVelocityY(-250);
        } else if (cursor.down.isDown) {
            this.cloud0.setVelocityY(250);
        } else {
            this.cloud0.setVelocityY(0);
        }
    }
}

export default Clouds;
