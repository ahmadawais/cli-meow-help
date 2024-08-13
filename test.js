import meowHelp from './index.js';

const commands = {
	new: {desc: `Create a new user account`},
	duplicate: {desc: `Duplicates a user account`}
};

const flags = {
	random: {
		desc: `Prints some random data`,
		type: 'boolean',
		alias: `r`, // Old versions of meow used `shortFlag` instead of `alias`.
		default: true
	},
	more: {
		desc: `Prints more random data`,
		type: 'boolean',
		shortFlag: `m`, // Latest addition of meow.
		default: true
	}
};

const examples = [
	{
		command: `new`
	},
	{
		command: `new`,
		flags: [`random`]
	},
	{
		command: `new`,
		flags: [`random`, `more`]
	}
];

const helpText = meowHelp({
	name: `cli-command`,
	flags,
	commands,
	examples
});

console.log(helpText);
