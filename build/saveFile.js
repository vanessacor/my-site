const fsp = require("fs").promises;

saveFile = (data) => {
  const dataToJson = JSON.stringify(data);
  const file = "experiment2.json";
  let ps = fsp.writeFile(file, dataToJson);

  return ps;
};

module.exports = saveFile;
