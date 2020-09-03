{
"id": "8",
"title": "Cash Register",
"link": "https://vanessacor.github.io/site/experiments/cash-register/",
"image": "https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/screenshots/cash-register.png",
"tags": ["HTML", "CSS", "JavaScript"],
"gitHubLink": "https://github.com/vanessacor/site/tree/master/experiments/cash-register",
"date": "07/02/2019",
"deploy": "GitHub Pages"
}

---

The challenge was to build a simple cash register for an imaginary coffee shop and then add more features progressively:

- Allow the user to choose a category from a set list.
- Allow the user to delete items from the list.
- Conditionally format negative numbers.

I decide to continue using only vanila Javascript instead of learning libraries or frameworks. I wanted to have a shot at structuring the code, clearly separating the business logic for the UI side. On the business side we have a the core functions to add and remove items, and a couple of utility functions to calculate the total and format currency. The UI side is responsible for all the event handlers and the DOM manipulation. It's a very small program and very easy to read.

#### What have I learnt:

- Clean code: separating business logic from UI.
- DOM manipulation: create an element, set attribute, add class.
- JavaScript: arrays, _reduce()_, scope, functions.

#### What I would do differently:

- Add more features such as editing items and ading categories.
