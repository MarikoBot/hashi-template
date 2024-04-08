import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` });

import webhook from './webhook';

webhook();

// import { HashiClient } from 'marikobot-hashi';
//
// const client: HashiClient = new HashiClient({
//   intents: 3276799,
//   processName: 'Hashi-template',
//   mongoose: {
//     dbName: 'dev',
//     connectionURI: 'http://localhost:27017/',
//     connectOptions: { dbName: 'dev' },
//   },
// });
//
// void client.login();
