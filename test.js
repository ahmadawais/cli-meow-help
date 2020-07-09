const meowHelp = require('.');

const commands = {
	help: {
		desc: `Print the help info`
	}
};

const flags = {
	minimal: {
		type: 'boolean',
		alias: 'm',
		desc: `Qui consectetur blanditiis labore dolor.`
	},
	clear: {
		type: 'boolean',
		default: true,
		desc: `Maiores quis amet nisi.`
	},
	bio: {
		type: 'boolean',
		default: true,
		desc: `Prints bio`
	},
	social: {
		type: 'boolean',
		default: true,
		desc: `Display social media links`
	},
	ad: {
		type: 'boolean',
		default: true,
		desc: `Display an ad`
	},
	debug: {
		type: 'boolean',
		default: false,
		alias: 'd',
		desc: `Fugit quis commodi voluptatibus dolor`
	},
	version: {
		type: 'boolean',
		default: false,
		alias: 'v',
		desc: `Ut sit natus ipsa rerum est sed.`
	}
};
const helpText = meowHelp({
	name: `cli`,
	desc: `This is a CLI that does this and that.`,
	flags,
	commands,
	header: `This is a header`,
	footer: `This is a footer`
});

console.clear();
console.log(helpText);
