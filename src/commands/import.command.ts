import { convertCsvToJson } from "../helpers/convert"
import BaseCommand from "./base.command"

const COMMAND = {
  id: 1,
  label: 'Import CSV'
};

// this is for the exercise, it should be sent by param
const filePath = 'reviews.csv';

export default class ImportCommand extends BaseCommand {
  constructor() {
    super(COMMAND);
  }

  public async run() {
    const dataJson = await convertCsvToJson(filePath);
    const url = `/sitters/save`

    let opts = {
      body: JSON.stringify(dataJson)
    }
    await this.fetchPOST(url, opts)
    console.log('Imported from ', filePath, '. Total entries: ', dataJson.length, )
  }
}
