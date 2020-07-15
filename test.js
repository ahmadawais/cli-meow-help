const meowHelp = require('.');

const commands = {
	new: {desc: `Create a new user account`},
	duplicate: {desc: `Duplicates a user account`}
};

const flags = {
	random: {
		desc: `Prints random data`,
		type: 'boolean',
		default: true
	}
};

const helpText = meowHelp({
	name: `cli-command`,
	flags,
	commands
});

console.clear();
console.log(helpText);
