import BaseCommand from "./base.command";

const COMMAND = {
  id: 6,
  label: 'Exit' 
};

export default class ExitCommand extends BaseCommand {
  constructor() {
    super(COMMAND);
  }

  public async run() {
    console.log("Good bye");
  }
}