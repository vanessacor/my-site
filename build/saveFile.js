const fsp = require('fs').promises;

const saveFile = (data, file) => {
  const dataToJson = JSON.stringify(data);
  // const file = "experiment2.json";
  const ps = fsp.writeFile(file, dataToJson);

  return ps;
};

module.exports = saveFile;
