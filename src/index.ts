import app from './App';
import Config from './utils/config';
import { initMemory } from './database/memory';

const config = Config.get();

(async () => {

  const host = config.service.host;
  const port = config.service.port;

  app.listen(port, host, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log('[info]', `listening ${host}:${port}`);
  })
})()

initMemory()