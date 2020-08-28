{
"id": "16",
"title": "My Site",
"link": "http://vanessapoppe.me/",
"image": "https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/screenshots/my-site.png",
"tags": ["Node.js", "React", "SCSS"],
"gitHubLink": "https://github.com/vanessacor/my-site",
"date": "08/01/2020",
"deploy": "AWS - S3"
}

---

As soon as I started my webdev learning journey I built a static web site to host all the projects I was doing. It was a simple HTML page, with basic CSS, and small bits of Javascript, and it was hosted on GitHub pages.

At this point I felt that I could start tasting the waters in the job market and decided to invest in building a proper website, where I can introduce myself, as well as showcase my work.

The decision of building it with React was based only in the fact that I wanted to consolidate my React skills.

The content is written in [Markdown files](link!!! To the girth content/ folder), with a bit of "front matter" to store metadata. The content is read at build time by a little [npm script](link!!! To GitHub src file) that relies on [markdown.it](https://www.npmjs.com/package/markdown-it) to handle the markdown to html conversion and then stores it in a local json file.

This allows me to easily to keep my list of projects updated. And it was also fun to build!

It's deployed on [AWS S3](https://aws.amazon.com/s3/?nc=sn&loc=0) and distributed on [CloudFront](https://aws.amazon.com/cloudfront/?nc2=type_a).

#### What have I learnt:

- Parse markdown files and extract metadata
- AWS - host and deploy a static website on S3;
- Secure a domain using AWS ACM.
- How to use CloudFront to serve the traffic accessed through the domain.
- How to create a cloud distribution using Route 53 and CloudFront.
- Basic and simple configuration of Babel and Webpack.
