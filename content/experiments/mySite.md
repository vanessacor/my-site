{
"id": "16",
"title": "My Site",
"link": "http://vanessapoppe.me/",
"image": "https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/screenshots/mybookshelf.png",
"tags": ["Node.js", "React", "", "SCSS"],
"gitHubLink": "https://github.com/vanessacor/my-site",
"date": "01/08/2020",
"deploy": "AWS"
}

---

When I started my learning journey I built a very web page to host all the projects I was doing. It was a very simple page using just HTML, CSS and a bit of Javascript was hosted on gitHub pages.
At this point I felt that I could start tasting the waters in the job market so I needed a website that was bit more than a list of projects.
The decision of building it with React was based only in the fact that I wanted to consolidate my React skills.
The content is written in Markdown and converted into a json file using javacript and [markdown.it](https://www.npmjs.com/package/markdown-it).
It's deployed on [AWS S3](https://aws.amazon.com/s3/?nc=sn&loc=0) and distributed on [CloudFront](https://aws.amazon.com/cloudfront/?nc2=type_a).

#### What have I learnt:

- AWS - host and deploy a static website on S3;
- Secure a domain using AWS ACM.
- How to use CloudFront to serve the traffic accessed through the domain.
- How to create a cloud distribution using Route 53 and CloudFront.
- Basic and simple configuration of Babel and Webpack.

#### What I would do differently:
