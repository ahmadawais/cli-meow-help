const chalk = require('chalk');

let defaultValue = ``;
const defaultText = `Default:`;

module.exports = (defaults, options) => {
	if (defaults && options.default) {
		defaultValue = `${defaultText} ${chalk.yellow(`${options.default}`)}`;
	} else if (defaults && options.type === `boolean`) {
		defaultValue = `${defaultText} ${chalk.yellow(`false`)}`;
	}
	return defaultValue;
};
