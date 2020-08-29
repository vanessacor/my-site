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

The challenge was to build a cash register for an imaginary coffee shop. The user can choose a category from a set list, enter a description and the price (amount).
The items are added to a list and the total amount is sum. The user can then delete items from the list and the total is updated.

Another webpage created using vanila javascript. This was my first attempt to separate business logic for UI logic. On the business side we have four functions that additems, remove items, calculate total and format currency.
The UI side is responsible for all the event handlers and DOM manipulation.

#### What have I learnt:

- DOM manipulation (create an element, set attribute, add class)
- JavaScript (arrays, events, scope, functions)
- Separate business logic from UI (event handlers, update dom) code

#### What I would do differently:

- this is defenitly a work in progress.
- I will have more features, like the possibility to edit an item, to add categories.
