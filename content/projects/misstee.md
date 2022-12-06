{
"id": "12",
"title": "Misstee",
"link": "https://vanessacor.github.io/misstee/",
"image": "https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/screenshots/misstee.png",
"tags": ["HTML", "Canvas", "JavaScript", "OPP"],
"gitHubLink": "https://github.com/vanessacor/site/tree/master/experiments/games/misstee",
"date": "02/01/2020",
"deploy": "GitHub Pages"
}

---

After learning a bit on how to work with HTML `<canvas>` and [playing with it](https://vanessacor.github.io/site/experiments/canvas/night-sky/), I decided to venture into making my own game! It takes inspiration from our lovely and sweet one ear cat Misstee and her love for shrimps.

The logic is quite simple, Misstee has to try to eat all the shrimps she can while avoiding the poisoned chocolates. As the game advances the number of shrimps and chocolates on the screen increase making it more difficult to play.

The game was built using HTML5 `<canvas>`, CSS and vanilla Javascript.
I isolated the game logic in one main game class and and in a few more to represent the entities.
Each entity has its set of attributes and methods. The attributes define the characteristics and the state and the methods define the behaviour. The `Game class` is responsible for all the dynamics: instantiating all the other elements; drawing the elements; animating the elements; managing all the collisions.

There are also two other units that deal with the life cycle of the UI. One takes the user from the splash screen to the game and then to the score screen on game over. The other unit updates the score and lives during the game.

#### Annoying bug

It was a challenge to debug in canvas because a lot of things happen in a second. The game had this very annoying bug, The player would randomly lose all its lives or earn 20 points at once. It took a while to figure this out, because it seemed so random. It turned out to be a very simple mistake that I made in an `array.splice` method.

#### What have I learnt:

- JavaScript - drawing and animating on `<canvas>`. OOP, classes and methods.
