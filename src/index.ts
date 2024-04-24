import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` });

import { Client } from 'marikobot-hashi';

export const client: Client = new Client({
  intents: 3276799,
  projectName: 'Hashi-Template',
  configChannels: {
    status: '1228631187459670046',
  },
  mongoose: {
    dbName: 'hashi-plate',
    connectionURI: 'mongodb://127.0.0.1:27017/',
    connectOptions: { dbName: 'hashi-plate', family: 4 },
  },
});
void client.connectDatabase();

import * as commands from './commands';
import * as events from './events';
import * as models from './models';
void [commands, events, models];

setTimeout(() => {
  void client.db.get('user').create({
    discordId: '1146145475683164273',
  });
}, 5000);

void client.login();
