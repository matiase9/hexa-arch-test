import { fetcher } from '../utils'
import Config from '../utils/config'

const config = Config.get();

const OPT_GET = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
}

const OPT_POST = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
}

export default abstract class BaseCommand {
  protected commandId: any;
  protected commandLabel: String;

  constructor(command: any) {
    this.commandId = command.id
    this.commandLabel = command.label
    this.run = this.run.bind(this);
    this.getCommand = this.getCommand.bind(this);
  }

  public abstract run(): any;

  public getCommand() {
    return {
      id: this.commandId,
      label: this.commandLabel
    };
  }

  public async fetchGET(url: string, options: {}) {
    const urlService = config.service.protocol + '://' +config.service.host + ':' +  config.service.port + '/' + config.service.version + url
    return await fetcher(urlService, { ...OPT_GET, ...options })
  }
  public async fetchPOST(url: string, options: {}) {
    const urlService = config.service.protocol + '://' +config.service.host + ':' + config.service.port + '/' + config.service.version + url
    return await fetcher(urlService, { ...OPT_POST, ...options })
  }

}