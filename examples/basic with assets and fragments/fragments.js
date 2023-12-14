const fragments = {};

fragments.siteHead = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="${variables.siteDescription}">
    <title>${variables.siteName}</title>
    
    <link rel="stylesheet" href="assets/css/app.css" />
</head>
<body>
`;

fragments.siteTail = `
</body>
</html>
`;

module.exports = {
  fragments,
};