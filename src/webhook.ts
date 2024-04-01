import { Client } from 'discord.js';

const client: Client = new Client({
  intents: 3276799,
});

client.once('ready', () => {
  
});

void client.login(process.env.TOKEN);