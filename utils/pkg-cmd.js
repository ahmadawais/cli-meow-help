'use strict';

import returnPackageUp from './pkg-up.js';

function returnPackageCommand(pkg = returnPackageUp()) {
	if (typeof pkg.bin !== 'undefined') {
		return Object.keys(pkg.bin)[0];
	} else {
		return 'meow-help';
	}
}

export default returnPackageCommand;
