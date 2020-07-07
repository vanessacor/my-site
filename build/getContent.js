const findFiles = require("./findFiles");
const getFileData = require("./getFileData");

findFiles("./build/content")
  .then((files) => {
    const promises = files.map((filename) => {
      return getFileData(filename);
    });
    return Promise.all(promises);
  })
  .then((result) => {
    console.log("FINISSHED!", result);
  })

  .catch((err) => {
    console.error("faILED!", err);
  });
