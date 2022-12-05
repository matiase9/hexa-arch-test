import BaseCommand from "./base.command";

const COMMAND = {
  id: 2,
  label: 'Search' 
};

export default class SearchCommand extends BaseCommand {
  constructor() {
    super(COMMAND);
  }

  public async run() {
    const url = `/sitters`
    const dataJson = await this.fetchGET(url, {})

    console.log('Sitters: ', dataJson, 'Total imported: ', dataJson.length, )
  }
}