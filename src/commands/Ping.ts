import { COMMAND_END, Context, HashiClient, HashiSlashCommand } from '@elouannh/hashi';
import { ChatInputCommandInteraction } from 'discord.js';

const ping = async (
  client: HashiClient,
  interaction: ChatInputCommandInteraction,
  ctx: Context,
): Promise<COMMAND_END> => {
  await interaction.reply({ content: 'Pong!' }).catch(client.logger.clean);
  return ctx.command.end();
};

module.exports = new HashiSlashCommand('ping')
  .setDescription('A simple ping command.')
  .setCoolDown(4)
  .setCallbackFunction(ping);
