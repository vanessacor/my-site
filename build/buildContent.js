const findFiles = require('./findFiles');
const getFileData = require('./getFileData');
const saveFile = require('./saveFile');

findFiles('./content/projects')
  .then((files) => {
    const promises = files.filter((file) => !file.includes('#')).map((filename) => getFileData(filename));

    return Promise.all(promises);
  })

  .then((arrayOfFiles) => {
    const ps = arrayOfFiles.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    return ps;
  })
  .then((dataTosave) => {
    return saveFile(dataTosave, './data/experiments.json');
  })

  .then(() => {
    console.log('FINISHED!');
  })

  .catch((err) => {
    console.error('faILED!', err);
    process.exit(3);
  });
