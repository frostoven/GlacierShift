const fs = require('fs');

class Glacier {
  buildPage({ page, dirname }) {
    page = page.trim();
    console.log('[Glacier]', { dirname, page });
    const relativePath = './' + dirname.replace(
      new RegExp(`^${process.cwd()}/www`), '',
    );
    const buildDir = './site/' + relativePath;
    fs.mkdirSync(buildDir, { recursive: true });
    fs.writeFileSync(buildDir + '/index.html', page);
  }
}

const glacier = new Glacier();

module.exports = {
  glacier,
};
