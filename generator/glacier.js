const fs = require('fs');
const { buildConfig } = require('./buildConfig');

const { inputDirectory, outputDirectory } = buildConfig;

class Glacier {
  /**
   * @type {null|string}
   * @private
   */
  _assetsDir = null;

  copyAssetsDir({ dirname }) {
    if (this._assetsDir) {
      console.warn('[copyAssetsDir] Not copying assets dir a second time.');
      return;
    }
    this._assetsDir = dirname;
    if (!fs.existsSync(dirname)) {
      return console.error(
        `Cannot use assets dir "${dirname}" - directory does not exist.`,
      );
    }

    const source = dirname;
    const destination = this._getRelativeBuildDir({ dirname });
    fs.cpSync(dirname, destination, { recursive: true });
  }

  buildPage({ page, dirname }) {
    page = page.trim();
    console.log('[Glacier]', { dirname, page });
    const relativePath = this._getRelativePath({ dirname });
    const buildDir = this._getRelativeBuildDir({ dirname });
    fs.mkdirSync(buildDir, { recursive: true });
    fs.writeFileSync(buildDir + '/index.html', page);
  }

  /** maybe first have a look at how showdown works */
  scanForMdFiles() {
    //
  }

  /**
   * @param dirname
   * @return {string}
   * @private
   */
  _getRelativePath({ dirname }) {
    return './' + dirname.replace(
      new RegExp(`^${process.cwd()}/${inputDirectory}`), '',
    );
  }

  /**
   * @param dirname
   * @return {string}
   * @private
   */
  _getRelativeBuildDir({ dirname }) {
    return `./${outputDirectory}/` + this._getRelativePath({ dirname });
  }
}

const glacier = new Glacier();

module.exports = {
  glacier,
};
