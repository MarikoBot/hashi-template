import { HashiClient, HashiEvent } from '@elouannh/hashi';
import { BaseInteraction } from 'discord.js';

module.exports = new HashiEvent('interactionCreate').setCallbackFunction(
  (client: HashiClient, interaction: BaseInteraction) => {
    if (interaction.isChatInputCommand()) return client.detectAndLaunchCommand(interaction);
  },
);
