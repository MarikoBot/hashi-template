import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` });

import { Client } from 'marikobot-hashi';

export const client: Client = new Client({ ...require('../hashi.config.json'), failIfNotExists: false });
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
