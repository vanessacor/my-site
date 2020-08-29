{
"id": "9",
"title": "Calculator",
"link": "https://vanessacor.github.io/site/experiments/calculator/",
"image": "https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/screenshots/calculator.png",
"tags": ["HTML", "CSS", "JavaScript", "BDD", "Jasmine"],
"gitHubLink": "https://github.com/vanessacor/site/tree/master/experiments/calculator",
"date": "08/12/2019",
"deploy": "GitHub Pages"
}

---

The final project of [Web development 101](https://www.theodinproject.com/courses/web-development-101) was to make an on-screen calculator using JavaScript, HTML, and CSS.

This online calculador has the basic math operators but it doesn’t follow the order of operations (PEMDAS) meaning that all the operations are done by a pair of numbers being evaluated at a time.

Again I design the program by separating the bussiness logic from UI logic.

On the business side, I first created the tests (behavior-driven development) using [Jasmine](https://jasmine.github.io/). Following this approach it helped me a lot to build all the functions and also the structure of the program. This side of the program is responsible to evaluate the expression and to return a result of that evaluation.

On the UI side the program is responsible for the event handlers and updating the DOM.

#### What have I learnt:

- JavaScript - arrays methods, loop and conditional statements, debugging (dev-tools), BDD using jasmine.

#### What I would do differently:

- I would try to implement PEMDAS and would add more complex operations.
