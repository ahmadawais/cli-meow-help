/**
 * Cli `meow` Helper.
 *
 * Generate automatically formatted help text for `meow` CLI helper
 *
 * @author Awais <https://twitter.com/MrAhmadAwais/>
 */

const chalk = require('chalk');

const createTable = require('./utils/createTable');
const getDefaultValue = require('./utils/getDefaultValue');

const dim = chalk.dim;
const grayInverse = chalk.bold.inverse.gray;
const greenInverse = chalk.bold.inverse.green;
const cyanInverse = chalk.bold.inverse.cyan;
const yellowInverse = chalk.bold.inverse.yellow;

module.exports = ({
	name,
	desc,
	commands = {},
	flags = {},
	examples = [],
	defaults = false,
	header,
	footer
}) => {
	let help = '';
	const spacer = `\n\n`;

	if (header) {
		help += `${header}${spacer}`;
	}

	if (desc) {
		help += `${desc}${spacer}`;
	}

	// Usage.
	if (name) {
		help += `${greenInverse(` USAGE `)} ${spacer}`;
		help += chalk`{gray $} {green ${name}} {cyan <command>} {yellow [option]}`;
	}

	if (examples.length) {
		isPlural = examples.length > 1 ? `S` : ``;
		help += `${spacer}${chalk`{gray EXAMPLE${isPlural} }`}`;
		examples.map(ex => {
			const exFlags = ex.flags ? `--${ex.flags.join(` --`)}` : ``;
			help += chalk`\n{gray $} {green ${name}} {cyan ${ex.command}} {yellow ${exFlags}}`;
		});
	}

	// Commands.
	const commandKeys = Object.keys(commands);
	if (commandKeys.length) {
		help += `${spacer}${cyanInverse(` COMMANDS `)} ${spacer}`;
		const tableCommands = createTable();

		for (const command of commandKeys) {
			let options = commands[command];
			const defaultValue = defaults ? getDefaultValue(defaults, options) : '';

			tableCommands.push([
				chalk`{cyan ${command}}`,
				`${options.desc}  ${dim(defaultValue)}`.trim();
			]);
		}
		help += tableCommands.toString();
	}

	// Flags.
	const flagKeys = Object.keys(flags);
	if (flagKeys.length) {
		help += `${spacer}${yellowInverse(` OPTIONS `)} ${spacer}`;
		const tableFlags = createTable();

		for (const flag of flagKeys) {
			let options = flags[flag];
			let alias = options.alias ? `-${options.alias}, ` : ``;
			const defaultValue = defaults ? getDefaultValue(defaults, options) : '';

			tableFlags.push([
				chalk`{yellow ${alias}--${flag}}`,
				`${options.desc} ${dim(defaultValue)}`.trim();
			]);
		}

		help += tableFlags.toString();
	}

	help += `\n`;

	if (footer) {
		help += `\n${footer}\n`;
	}

	return help;
};
