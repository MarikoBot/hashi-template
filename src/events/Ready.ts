import { HashiClient, HashiEvent } from '@elouannh/hashi';
import { BaseInteraction } from 'discord.js';

module.exports = new HashiEvent('interactionCreate').setCallbackFunction((client: HashiClient) => {
  client.Logger.info('The client is connected.');
});
