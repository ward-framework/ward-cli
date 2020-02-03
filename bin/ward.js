#!/usr/bin/env node

const program = require('commander');
const pjson = require('../package.json');
const WardServer = require('ward-server');
const path = require('path');
const git = require('simple-git');
const ora = require('ora');
const chalk = require('chalk');

program
	.version(pjson.version)
	.name("ward");

program
	.command('new <name> [directory]')
	.description('Create a new Ward project.')
	.action(function(name, directory) {
		directory = (directory) ? path.resolve(directory) : path.resolve();
		const spinner = ora('Cloning project skeleton from github').start();
		try {
			git(directory).clone('https://github.com/ward-framework/ward.git', path.resolve(directory, name), (err)=>{
				if (err) {
					spinner.fail("Failed to clone the project skeleton");
					console.error(chalk.red("Error : ") + err.message);
				}
				else {
					spinner.succeed(`Project skeleton cloned successfully`);
					rrSpinner = ora('Removing remote origin from new project').start();
					git(path.resolve(directory, name)).removeRemote('origin', (err)=>{
						if (err) {
							spinner.fail("Failed to remove remote origin from new project");
							console.error(chalk.red("Error : ") + err.message);
						}
						else {
							rrSpinner.succeed('Remote origin removed from new project');
							console.log('Project successfully created in ' + chalk.blue.bold(path.resolve(name)));
						}
					});
				}
			});
		}
		catch(err) {
			spinner.fail("Failed to create a new project");
			console.error(chalk.red("Error : ") + err.message);
		}
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