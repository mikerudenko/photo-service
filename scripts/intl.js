const fs = require('fs');
const glob = require('glob');
const parser = require('typescript-react-intl').default;

const outDir = 'src/translations';

function runner(callback) {
  let results = [];
  glob('src/**/*.@(ts|js)', (error, files) => {
    if (error) {
      throw new Error(error);
    }

    files.forEach((file) => {
      const contents = fs.readFileSync(file).toString();
      const result = parser(contents);
      results = results.concat(result);
    });

    callback(results);
  });
}

const pasteEmptyKeys = (data, englishLocale) => {
  Object.keys(englishLocale).forEach((key) => {
    if (!data[key]) {
      data[key] = '';
    }
  });

  return data;
};

const deleteUnusedKeys = (englishLocale, currentLocale) => {
  Object.keys(currentLocale).forEach((key) => {
    if (!englishLocale[key]) {
      delete currentLocale[key];
    }
  });

  return currentLocale;
};

runner((results) => {
  const englishLocale = JSON.parse(fs.readFileSync(`${outDir}/en.json`));
  const ruData = JSON.parse(fs.readFileSync(`${outDir}/ru.json`));
  const uaData = JSON.parse(fs.readFileSync(`${outDir}/ua.json`));

  results.forEach((result) => {
    englishLocale[result.id] =
      result.defaultMessage || englishLocale[result.id] || '';
  });

  const ruLocale = deleteUnusedKeys(
    englishLocale,
    pasteEmptyKeys(ruData, englishLocale),
  );
  const uaLocale = deleteUnusedKeys(
    englishLocale,
    pasteEmptyKeys(uaData, englishLocale),
  );
  fs.writeFileSync(`${outDir}/ru.json`, JSON.stringify(ruLocale, null, 2));
  fs.writeFileSync(`${outDir}/ua.json`, JSON.stringify(uaLocale, null, 2));
  fs.writeFileSync(`${outDir}/en.json`, JSON.stringify(englishLocale, null, 2));
});
