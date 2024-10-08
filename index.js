/**
 * Cli `meow` Helper.
 *
 * Generate automatically formatted help text for `meow` CLI helper
 *
 * @autor Awais <https://twitter.com/MrAhmadAwais/>
 */

import chalk from 'chalk';
import chalkTemplate from 'chalk-template';

import createTable from './utils/createTable.js';
import getDefaultValue from './utils/getDefaultValue.js';

const dim = chalk.dim;
const greenInverse = chalk.bold.inverse.green;
const cyanInverse = chalk.bold.inverse.cyan;
const yellowInverse = chalk.bold.inverse.yellow;

export default ({
	name = `(CLI name undefined)`,
	desc,
	commands = {},
	flags = {},
	examples = [],
	defaults = true,
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
	help += `${greenInverse(` USAGE `)} ${spacer}`;
	help += chalkTemplate`{gray $} {green ${name}} {cyan <command>} {yellow [option]}`;
	let isPlural;

	if (examples.length) {
		isPlural = examples.length > 1 ? `S` : ``;
		help += `${spacer}${chalkTemplate`{gray EXAMPLE${isPlural} }`}`;
		examples.map(ex => {
			const exFlags = ex.flags ? `--${ex.flags.join(` --`)}` : ``;
			help += chalkTemplate`\n{gray $} {green ${name}} {cyan ${ex.command}} {yellow ${exFlags}}`;
		});
	}

	// Commands.
	help += `${spacer}${cyanInverse(` COMMANDS `)} ${spacer}`;
	const tableCommands = createTable();
	const commandKeys = Object.keys(commands);

	for (const command of commandKeys) {
		let options = commands[command];
		const defaultValue = getDefaultValue(defaults, options);

		tableCommands.push([
			chalkTemplate`{cyan ${command}}`,
			`${options.desc}  ${dim(defaultValue)}`
		]);
	}
	help += tableCommands.toString();

	// Flags.
	help += `${spacer}${yellowInverse(` OPTIONS `)} ${spacer}`;
	const tableFlags = createTable();
	const flagKeys = Object.keys(flags);

	for (const flag of flagKeys) {
		let options = flags[flag];
		let alias = options.alias ? `-${options.alias}, ` : ``;
		let shortFlag = options.shortFlag ? `-${options.shortFlag}, ` : ``;
		const defaultValue = getDefaultValue(defaults, options);

		tableFlags.push([
			chalkTemplate`{yellow ${alias}${shortFlag}--${flag}}`,
			`${options.desc} ${dim(defaultValue)}`
		]);
	}

	help += tableFlags.toString();
	help += `\n`;

	if (footer) {
		help += `\n${footer}\n`;
	}

	return help;
};
