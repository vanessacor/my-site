const fsp = require("fs").promises;

findFiles = (dir) => {
  let ps = fsp.readdir(dir).then((filenames) => {
    const files = filenames.map((file) => {
      return `${dir}/${file}`;
    });
    return files;
  });

  return ps;
};

module.exports = findFiles;
