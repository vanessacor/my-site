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

On my third project for [Odin Project](https://www.theodinproject.com/courses/web-development-101) I was asked to _“build a browser version of something between a sketchpad and an Etch-A-Sketch”_ to flex my DOM manipulation skills.

Because the goal was to learn DOM manipulation, the game is not drawn on HTML `<canvas>` but by using the `createElement()`, `appendChild()` and `removeChild(_)` methods.

The program starts with the user choosing the number of squares per line. When the `input` event is triggered it creates a grid with the right number of divs. An event listener is added to each square so it can be painted when the user hovers it. The user can choose between color-off mode (the squares will be in grayscale) and color-on mode (the colors are randomized).

I had a lot of fun with this one and I hope you enjoy it!

#### What I learnt:

- HTML: DOM API, append and remove elements, `setAttribute()`, setting style and classes on elements;
- Javascript: using Chrome DevTools to debug;
- CSS: more Grid and layout techniques,

#### What I would do differently:

- I believe now that this type of project would work better if it was built with the HTML canvas element.
- Validate the user input before creating the grid because despite the input having max 100, you can still type larger numbers, which will probably end up crashing the browser.
