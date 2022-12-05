import Command from './commands';

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const layout = new Promise((rs, rj) => {
  clear()

  figlet('ROVER-CLI', (err: any, data: any) => {
    if (err) rj(err)

    console.log(chalk.yellow(data))
    rs(true)
  })
})

const cli = async () => {
  const inquirer = require('inquirer');
  await inquirer
    .prompt([
      {
        type: 'list',
        name: 'option',
        message: Command.getMessage(),
        choices: Command.getCommandList(),
      },
    ])
    .then(async (selected: any) => {
      await Command.exec(selected)
    })
}

layout.then(async () => {
  await cli()
})