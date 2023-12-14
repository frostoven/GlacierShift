const { variables } = require('./variables');
const { glacier } = require('../generator/glacier');

const page = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="${variables.siteDescription}">
    <title>${variables.siteName}</title>
</head>
<body>
  <h1>Welcome to ${variables.siteName}!</h1>
</body>
</html>
`;

glacier.buildPage({ page, dirname: __dirname });
