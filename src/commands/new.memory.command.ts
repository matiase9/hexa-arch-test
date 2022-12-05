import BaseCommand from "./base.command";

const COMMAND = {
  id: 4,
  label: 'New memory' 
};

export default class NewMemoryCommand extends BaseCommand {
  constructor() {
    super(COMMAND);
  }

  public async run() {
    const url = `/sitters/remove`
    await this.fetchGET(url, {})
    
    console.log('New memory')
  }
}