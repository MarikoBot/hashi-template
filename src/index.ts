import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` });

/*
import { HashiClient } from '@elouannh/hashi';

const client: HashiClient = new HashiClient({
  intents: 3276799,
  processName: 'BOT-TEMPLATE',
  mongoose: {
    dbName: 'dev',
    connectionURI: 'http://localhost:27017/',
    connectOptions: { dbName: 'dev' },
  },
});

client.serviceManager.enable('AutomaticRole');

void client.login();
*/
import { Client } from 'discord.js';

const client = new Client({ intents: 3276799 });

client.once('ready', () => console.log('client is ready'));

client.login(process.env.TOKEN);

setTimeout(() => client.on('messageCreate', () => console.log('test')), 10000);
