const findFiles = require("./findFiles");
const getFileData = require("./getFileData");
const saveFile = require("./saveFile");

findFiles("./content/jobs")
  .then((files) => {
    const promises = files.map((filename) => {
      return getFileData(filename);
    });
    return Promise.all(promises);
  })

  .then((arrayOfFiles) => {
    const ps = arrayOfFiles.sort(function (a, b) {
      return b.id - a.id;
    });
    return ps;
  })
  .then((dataTosave) => {
    return saveFile(dataTosave, "./data/jobs.json");
  })

  .then((result) => {
    console.log("FINISSHED!", result);
  })

  .catch((err) => {
    console.error("faILED!", err);
  });
