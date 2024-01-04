import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` });

import { HashiClient } from '@elouannh/hashi';

const client: HashiClient = new HashiClient({
  intents: 0,
  commandsDir: 'commands',
  eventsDir: 'events',
  processName: 'bot-template',
});

void client.login();
