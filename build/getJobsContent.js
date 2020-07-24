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
      return new Date(b.date) - new Date(a.date);
    });
    return ps;
  })
  .then((dataTosave) => {
    return saveFile(dataTosave, "jobs.json");
  })

  .then((result) => {
    console.log("FINISSHED!", result);
  })

  .catch((err) => {
    console.error("faILED!", err);
  });
