'use strict';

const path = require('path');
const readPkgUp = require('read-pkg-up');

function returnPackageUp(parentModule = module.parent) {
	// Prevent caching of this module so module.parent is always accurate
	delete require.cache[__filename];

	if (parentModule !== null) {
		return readPkgUp.sync({
			cwd: path.dirname(parentModule.filename)
		}).package;
	} else {
		return {};
	}
}

module.exports = returnPackageUp;
