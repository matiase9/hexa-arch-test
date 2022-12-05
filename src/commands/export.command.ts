import BaseCommand from "./base.command";
import { convertJsonToCsv } from "../helpers/convert"
import { truncateFile, existsFile} from "../helpers/fetch";

const COMMAND = {
  id: 3,
  label: 'Export CSV' 
};

const FILE_NAME_EXPORT = 'sitters.csv'

export default class ExportCommand extends BaseCommand {
  constructor() {
    super(COMMAND);
  }

  public async run() {
    
    const url = `/sitters`
    const dataJson = await this.fetchGET(url, {})

    if (dataJson) {
      if (existsFile(FILE_NAME_EXPORT)) {
        truncateFile(FILE_NAME_EXPORT)
      }
      
      convertJsonToCsv(dataJson, FILE_NAME_EXPORT)
    }
    
    console.log('Exported to ', FILE_NAME_EXPORT, '. Total sitters: ', dataJson.length, )
  }
}