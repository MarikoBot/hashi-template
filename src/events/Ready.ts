import { HashiClient, HashiEvent } from '@elouannh/hashi';

module.exports = new HashiEvent('interactionCreate').setCallbackFunction((client: HashiClient) => {
  client.logger.info('The client is connected.');
});
