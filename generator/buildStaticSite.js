const fs = require('fs');
const { buildConfig } = require('./buildConfig');

// Variable preparation.
const { inputDirectory, outputDirectory } = buildConfig;

if (__dirname !== process.cwd() + '/generator') {
  // This is needed to prevent complexity around require() functions.
  console.error('Please run this builder from the project root.');
  process.exit(1);
}

console.log('Working directory:', process.cwd());

// Below follows all pre-setup such as creating the right directory structure,
// and so forth.
let outputDirExists = false;
try {
  const stat = fs.statSync(inputDirectory);
  if (stat.isDirectory()) {
    outputDirExists = true;
  }
}
catch (error) {}

if (!outputDirExists) {
  console.error(
    '[Error]',
    `Please create a directory named "${inputDirectory}" and place your`,
    'project in there.',
    '\nSee the readme for links to examples.',
  );
  process.exit(1);
}

let entrypointExists = false;
try {
  const stat = fs.statSync(`${inputDirectory}/index.js`);
  if (!stat.isDirectory()) {
    entrypointExists = true;
  }
}
catch (error) {}

if (!entrypointExists) {
  console.error(
    '[Error]',
    'Please create a your entrypoint file. It should be located here:',
    `\n  ${inputDirectory}/index.js`,
    '\nSee the readme for links to examples.',
  );
  process.exit(1);
}

if (fs.existsSync(`./${outputDirectory}`)) {
  fs.rmSync(`./${outputDirectory}`, { recursive: true });
}
fs.mkdirSync(outputDirectory, { recursive: true });

// Start the process by simply importing the user's index file.
require(`../${inputDirectory}/index.js`);
