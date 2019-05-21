var BarrelScene = new Phaser.Class({
    Extends: Phaser.Scene,

    platform: null,
    BigDDDD: null,

    initialize: function BarrelScene () {
        Phaser.Scene.call(this, {key: 'BarrelScene'})
    },

    preload: function() {
        this.load.image('BigD', 'assets/BigD.jpg');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('BigH', 'assets/hero.jpg');
        this.load.image('Barrel', 'assets/barrel.png');
    },



    create: function () {


        function hitBomb (Hero, barrel)
        {


            alert("You died");
            alert("Reloading site so you can play again");

            gameOver = true;
            
            location.reload();
            
            
        }


        console.log('You found a easter egg!');
        this.cursors = this.input.keyboard.createCursorKeys();
        this.Hero = this.physics.add.sprite(500, 390, 'BigH').setScale(0.1);
        this.player = this.physics.add.sprite(750, -100, 'BigD').setScale(0.25);

        function win () {


            alert("You Win!!");
            alert("Restart to try again")
        }


        this.tweens.add({
            targets: this.player,
            x:650,
            duration:340,
            ease:'Expo.InOut',
            repeat:-1,
            yoyo:true,

        });

        function barrelLife (scene)
        {
            scene.barrel = scene.physics.add.sprite(scene.player.body.x, scene.player.body.y, 'Barrel').setScale(0.07);
            scene.barrel.body.velocity.x=-250;
            scene.barrel.body.bounce.set(1,0);
            scene.physics.add.collider(scene.Hero, scene.barrel, hitBomb, null, this);
            scene.barrel.setCollideWorldBounds(true);
            scene.physics.add.collider(scene.platforms, scene.barrel);
        }

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(510, 400, 'ground').setScale(2, 1).refreshBody();
        this.platforms.create(220, 250, 'ground').setScale(2,1).refreshBody();
        this.platforms.create(500, 130, 'ground').setScale(1.5).refreshBody();
        this.physics.add.collider(this.platforms, this.player);
        this.physics.add.collider(this.platforms, this.Hero);
        this.physics.add.collider(this.player, this.Hero, win, null, this);

        this.time.addEvent({

            delay: 2000,

            callback: barrelLife,

            args: [this],

            loop: true,

        });
        barrelLife(this);



        this.Hero.setCollideWorldBounds(true);


    },



    update: function () {

        if (this.cursors.left.isDown)
        {

            this.Hero.setVelocityX(-290);

        } else if (this.cursors.right.isDown)
        {
            this.Hero.setVelocityX(+290);

        } else {
            this.Hero.setVelocityX(0);
        }
        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.Hero.setVelocityY(-490);
        }
    },


});
