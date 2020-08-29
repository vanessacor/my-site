{
"id": "4",
"title": "Rock Paper Scissors",
"link": "https://vanessacor.github.io/site/experiments/games/rock-paper-scissors/",
"image": "https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/screenshots/rock-paper-scissors.png",
"tags": ["HTML", "CSS", "JavaScript"],
"gitHubLink": "https://github.com/vanessacor/site/tree/master/experiments/games/rock-paper-scissors",
"date": "03/14/2019",
"deploy": "GitHub Pages"
}

---

This was another assignment for the [Odin Project](https://www.theodinproject.com/courses/web-development-101). I was asked to create the classic game of Rock Paper Scissors that would be played on the console. I decided that this was a chance for me to integrate everything I had learned to that point. I built this game using HTML, CSS and Vanilla JavaScript.

In terms of UI it's the classic RPS game, here the user plays against the computer.

The game programe is wrapped in a main function that is called when the page is load. This sets up all the variables and add the event-listeners to the elements. When the user clicks on one of the choices button, a function is called that first disables all the buttons and then set a timeout and last it runs a game round. A timeout is triggered so the user has the "feeling" of time. The round finishes when both computer and user choices are displayed and the score is updated and all the buttons are enable again. The next round is now ready and waiting for the user to make the next move. In every round the program checks the score and if one of the players reaches 5 points the game is over and the winner is announced. A reset button is displayed so the user can start a new game.

I learnt so much javascript doing this project. I remember how hard it was for me to understand some of the core concepts of JS (arguments, parameters, template literals) and after this project I felt like suddenly everything made sense (well... maybe not everything).

I am really proud of myself and have to thank the help of [Andre](https://andretorgal.com/) and the coaches from [CodeBar Barcelona](https://codebar.io/barcelona).

#### What I have learnt:

- JavaScript - conditional operators, functions (declaration, parameters and return value), arrow functions, loops, template literals, set time out;
- CSS - media-queries,

#### What I would do differently:

- I definitely would separate the business logic from UI logic, that's a distinction that I wasn't aware of at the time
