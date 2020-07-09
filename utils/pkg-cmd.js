'use strict';

const returnPackageUp = require('./pkg-up');

function returnPackageCommand(pkg = returnPackageUp()) {
	if (typeof pkg.bin !== 'undefined') {
		return Object.keys(pkg.bin)[0];
	} else {
		return 'meow-help';
	}
}

module.exports = returnPackageCommand;
