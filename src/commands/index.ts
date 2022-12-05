import ImportCommand from './import.command';
import SearchCommand from './search.command';
import ExitCommand from './exit.command';
import NewMemoryCommand from './new.memory.command';
import ExportCommand from './export.command';

const commandList = [
  new ImportCommand(),
  new SearchCommand(),
  new ExportCommand(),
  new NewMemoryCommand(),
  new ExitCommand()
]

const MESSAGE = "User options";

namespace Command {
  export function getCommandList() {
    return commandList.map(command => {
      return {
        key: command.getCommand().id,
        value: command.getCommand().label
      }
    })
  }

  export function getMessage() {
    return MESSAGE;
  }

  export function exec(command: any) {
    commandList.map(async commander => {
      if (command.option === commander.getCommand().label) {
        commander.run()
      }
    })
  }
}

export default Command;