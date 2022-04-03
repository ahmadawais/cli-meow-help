[![cli-meow-help running in a terminal](./.github/cli-meow-help.png)](./../../)

# cli-meow-help

[![DOWNLOADS](https://img.shields.io/npm/dt/cli-meow-help?label=DOWNLOADS%20%20❯&colorA=6A788D&colorB=6A788D&style=flat)](https://www.npmjs.com/package/cli-meow-help) [![Node.js CLI](https://img.shields.io/badge/-NodeCLI.com-gray.svg?colorB=6A788D&style=flat)](https://NodeCLI.com/?utm_source=FOSS) [![Learn VSCode](https://img.shields.io/badge/-VSCODE.pro-gray.svg?colorB=6A788D&style=flat)](https://VSCode.pro/?utm_source=FOSS) [![Sponsor](https://img.shields.io/badge/-Sponsor-gray.svg?colorB=6A788D&style=flat)](https://github.com/ahmadawais/sponsor?utm_source=FOSS)
[![Follow @MrAhmadAwais on Twitter](https://img.shields.io/badge/FOLLOW%20@MRAHMADAWAIS%20%E2%86%92-gray.svg?colorA=6A788D&colorB=6A788D&style=flat)](https://twitter.com/mrahmadawais/)

> Generate automatically formatted help text for [`meow`](https://github.com/sindresorhus/meow) CLI helper

<br>

[![📟](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/install.png)](./../../)

## Install

```sh
npm install meow cli-meow-help
```

<br>

[![⚙️](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/usage.png)](./../../)

## Usage

```js
const meow = require('meow');
const meowHelp = require('cli-meow-help');

const commands = {
	new: {desc: `Creates a new user account`},
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

meow(helpText, {flags});

// Now run `cli-command --help` to view the
// following auto formatted & generated help info.
```

[![cli-meow-help running in a terminal](./.github/cli-meow-help.png)](./../../)

<br />

[![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/options.png)](./../../)

## API

### meowHelp(options)

#### ❯ options

Type: `object`

Default: ↓

```js
{
	name = `(CLI name undefined)`,
	desc,
	commands = {},
	flags = {},
	examples = [],
	defaults = true,
	header,
	footer
}
```

You can specify the options below.

#### ❯ name

Type: `string`<br>
Default: `(CLI name undefined)`

The `bin` command name of the cli that's used to run the CLI. Examples: `corona` for the [corona-cli](https://github.com/AhmadAwais/corona-cli) that's installed globally or `npx corona-cli` for if `npx` is the recommended usage.

#### ❯ desc

Type: `string`<br>
Default: `undefined` (optional)

Optionally define a description text for the help message.

#### ❯ commands

Type: `string`<br>
Default: `{}` (optional)

Optionally, define a JavaScript object containing info on the CLI commands (i.e. `meow` inputs). Each command has a `desc` property to define the help text.

#### ❯ flags

Type: `string`<br>
Default: `{}`

Define CLI options (i.e. `meow` flags) just like you do with `meow` which is the `flags` JavaScript object containing each flag with an extra `desc` property to define the help text.

##### > examples

Type: `Array`<br>
Default: `[]`

List optional examples of how to use the CLI.

> Check the [test](./test.js) file for more context. Format example:

```js
const examples = [

	{
		command: `new`,
		flags: [`random`]
	}
];
```


#### ❯ defaults

Type: `string`<br>
Default: `true` (optional)

Prints out the default values of flags. Set to `false` to disable.

#### ❯ header

Type: `string`<br>
Default: `undefined` (optional)

Optionally, add additional header information.

#### ❯ footer

Type: `string`<br>
Default: `undefined` (optional)

Optionally, add additional footer information.

<br>

[![📝](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/log.png)](changelog.md)

## Changelog

[❯ Read the changelog here →](changelog.md)

<br>

<small>**KEY**: `📦 NEW`, `👌 IMPROVE`, `🐛 FIX`, `📖 DOC`, `🚀 RELEASE`, and `🤖 TEST`

> _I use [Emoji-log](https://github.com/ahmadawais/Emoji-Log), you should try it and simplify your git commits._

</small>

<br>

[![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)](./../../)

## License & Conduct

- MIT © [Ahmad Awais](https://twitter.com/MrAhmadAwais/)
- Thanks to Maarten Brakkee for initial implementation
- [Code of Conduct](code-of-conduct.md)

<br>

[![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)](./../../)

## Connect

<div align="left">
    <p><a href="https://github.com/ahmadawais"><img alt="GitHub @AhmadAwais" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To stay up to date on free & open-source software</small></p>
    <p><a href="https://twitter.com/MrAhmadAwais/"><img alt="Twitter @MrAhmadAwais" align="center" src="https://img.shields.io/badge/TWITTER-gray.svg?colorB=1da1f2&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To get #OneDevMinute daily hot tips & trolls</small></p>
    <p><a href="https://www.youtube.com/AhmadAwais"><img alt="YouTube AhmadAwais" align="center" src="https://img.shields.io/badge/YOUTUBE-gray.svg?colorB=ff0000&style=flat" /></a>&nbsp;<small><strong>(subscribe)</strong> To tech talks & #OneDevMinute videos</small></p>
    <p><a href="https://AhmadAwais.com/"><img alt="Blog: AhmadAwais.com" align="center" src="https://img.shields.io/badge/MY%20BLOG-gray.svg?colorB=4D2AFF&style=flat" /></a>&nbsp;<small><strong>(read)</strong> In-depth & long form technical articles</small></p>
    <p><a href="https://www.linkedin.com/in/MrAhmadAwais/"><img alt="LinkedIn @MrAhmadAwais" align="center" src="https://img.shields.io/badge/LINKEDIN-gray.svg?colorB=0077b5&style=flat" /></a>&nbsp;<small><strong>(connect)</strong> On the LinkedIn profile y'all</small></p>
</div>

<br>

[![👌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/sponsor.png)](https://github.com/AhmadAwais/sponsor)

## Sponsor

Me ([Ahmad Awais](https://twitter.com/mrahmadawais/)) and my incredible wife ([Maedah Batool](https://twitter.com/MaedahBatool/)) are two engineers who fell in love with open source and then with each other. You can read more [about me here](https://ahmadawais.com/about). If you or your company use any of my projects or like what I’m doing then consider backing me. I'm in this for the long run. An open-source developer advocate.

[![Ahmad on Twitter](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Follow%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/)

### [NodeCLI.com][n] — Learn to build Node.js CLI Automation

> This repository is part of the [NodeCLI.com][n] course.

After building hundreds of developer automation tools used by millions of developers, I am sharing exactly how you can do it yourself with minimum effective effort. Learn to build Node.js & JavaScript based CLI (Command Line Interface) apps. Automate the grunt work, do more in less time, impress your manager, and help the community.
→ I'm sharing it all in this online video course. [Node CLI Automation
without wasting a 1,000 hours][n] →</p>

[![Node CLI Course](https://raw.githubusercontent.com/ahmadawais/stuff/master/nodecli/featured.jpg)][n]

[![Node CLI](https://img.shields.io/badge/-NodeCLI.com%20%E2%86%92-gray.svg?colorB=488640&style=flat)][n]

[n]: https://NodeCLI.com?utm_source=github&utm_medium=referral&utm_campaign=ahmadawais/cli-meow-help

[![Awais on Twitter](https://raw.githubusercontent.com/ahmadawais/stuff/master/sponsor/sponsor.jpg)](https://github.com/AhmadAwais/sponsor)
