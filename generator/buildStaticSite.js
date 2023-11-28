const fs = require('fs');

if (__dirname !== process.cwd() + '/generator') {
  // This is needed to prevent complexity around require() functions.
  console.error('Please run this builder from the project root.');
  process.exit(1);
}

console.log('Working directory:', process.cwd());

let wwwDirExists = false;
try {
  const stat = fs.statSync('www');
  if (stat.isDirectory()) {
    wwwDirExists = true;
  }
}
catch (error) {}

if (!wwwDirExists) {
  console.error(
    '[Error]',
    'Please create a directory named "www" and place your project in there.',
    '\nSee the readme for links to examples.',
  );
  process.exit(1);
}

let entrypointExists = false;
try {
  const stat = fs.statSync('www/index.js');
  if (!stat.isDirectory()) {
    entrypointExists = true;
  }
}
catch (error) {}

if (!entrypointExists) {
  console.error(
    '[Error]',
    'Please create a your entrypoint file. It should be located here:',
    '\n  www/index.js',
    '\nSee the readme for links to examples.',
  );
  process.exit(1);
}

if (fs.existsSync('./site')) {
  fs.rmSync('./site', { recursive: true });
}
fs.mkdirSync('site', { recursive: true });

// Start the process by simply importing the user's index file.
require('../www/index.js');
