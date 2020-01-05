const program = require('commander');
const pjson = require('./package.json');
const WardServer = require('ward-server');
const path = require('path');
const git = require('simple-git');
const ora = require('ora');
const chalk = require('chalk');

program
	.version(pjson.version);

program
	.command('new <name> [directory]')
	.description('Create a new Ward project.')
	.action(function(name, directory) {
		directory = (directory) ? path.resolve(directory) : path.resolve();
		const spinner = ora('Cloning project skeleton from github').start();
		git(directory).clone('https://github.com/ColinEspinas/ward.git', path.resolve(name), ()=>{
			spinner.succeed(`Project skeleton cloned successfully`);
			console.log('Project successfully created in ' + chalk.blue.bold(path.resolve(name)));
		});
	});

program
	.command('serve [directory]')
	.description('Serve your Ward project.')
	.option("-P, --port [port]", "Which port to listen to.", 8000)
	.option("-I, --ip [ip]", "Wich IP address to serve to.", "127.0.0.1")
	.action(function(directory, options) {
		directory = (directory) ? path.resolve(directory) : path.resolve();
		const siSpinner = ora('Creating server instance').start();
		const server = new WardServer({
			path: directory,
			port: options.port,
			ip: options.ip,
			silent : true,
		});
		siSpinner.succeed('Server instance successfully created');
		const seSpinner = ora('Serve files to server').start();
		server.serve(()=>{
			seSpinner.succeed('Files successfully served');
			console.log(chalk.blueBright('Project running at ') + chalk.greenBright.underline(`http://${options.ip}:${options.port}`));
		});
	});

program.parse(process.argv);