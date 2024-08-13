import chalk from "chalk";

let defaultValue = ``;
const defaultText = `Default:`;

export default (defaults, options) => {
	if (defaults && options.default) {
		defaultValue = `${defaultText} ${chalk.yellow(`${options.default}`)}`;
	} else if (defaults && options.type === `boolean`) {
		defaultValue = `${defaultText} ${chalk.yellow(`false`)}`;
	}
	return defaultValue;
};
