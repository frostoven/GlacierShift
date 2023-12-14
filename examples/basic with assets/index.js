const { variables } = require('./variables');
const { glacier } = require('../generator/glacier');

// This line copies the assets directory to the site directory.
glacier.copyAssetsDir({ dirname: __dirname + '/assets' });

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

  <h3>${variables.easterEgg}</h3>
  <img src="assets/img/wave.png">

</body>
</html>
`;

glacier.buildPage({ page, dirname: __dirname });
