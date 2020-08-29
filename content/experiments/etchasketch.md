{
"id": "6",
"title": "Etch-a-Sketch",
"link": "https://vanessacor.github.io/site/experiments/etch-a-sketch/",
"image": "https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/screenshots/etch-a-sketch.png",
"tags": ["HTML", "CSS", "JavaScript"],
"gitHubLink": "https://github.com/vanessacor/site/tree/master/experiments/games/rock-paper-scissors",
"date": "05/21/2019",
"deploy": "GitHub Pages"
}

---

On my third project for [Odin Project](https://www.theodinproject.com/courses/web-development-101). I was asked to _“build a browser version of something between a sketchpad and an Etch-A-Sketch”_ to flex my DOM manipulation skills.

Because the goal was to learn DOM manipulation, the game is not draw on HTML canvas but using the createElement, appendChild and removeChild methods.

The program starts with the user choosing the number of squares per line, on input a function is called and it creates a number of squares(divs) that the user choose times 2. For example: a user chooses the 4 then 8 squares will be created, 4 will rows and other fours will columns. For each squares an event-listener is added so it can be painted when the user hovers it. The user can choose between color-off mode (the squares will be in grayscale) and color-on mode (the colors are randomized).

I had a lot of fun with this one and hope you enjoy it.

#### What have I learnt:

- HTML - DOM API, append and remove elements, setAttribute, set style and classes;
- Javascript - DevTools to debug;
- CSS - CSS Grid Layout,

#### What I would do differently:

- I believe now that this type of project would work better if it was built with canvas, but only later I found it out that you can literally draw with Javascript.
