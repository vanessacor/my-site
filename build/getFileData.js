const fsp = require("fs").promises;
var md = require("markdown-it")();

getFileData = (file) => {
  let ps = fsp.readFile(file, "utf8").then((content) => {
    const [json, markdown] = content.split("---");
    const data = JSON.parse(json);
    data.description = md.render(markdown);
    return data;
  });
  return ps;
};

module.exports = getFileData;
