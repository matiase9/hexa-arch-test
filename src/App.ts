import * as express from 'express';

import apiV1 from './api/v1';
import Config from './utils/config'

const config = Config.get();

class App {
  public express: any;

  constructor() {
    this.express = express();
    this.setMiddlewares();
    this.setRoutes();
  }

  private setMiddlewares(): void {
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json({limit: config.service.database.limitTransfer}));
  }

  private setRoutes(): void {
    this.express.use('/' + config.service.version, apiV1);
  }
}

const app = new App();

export default app.express;