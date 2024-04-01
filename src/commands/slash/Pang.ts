import { Context } from '../../base';
import { Injectors } from '../../decorators';
import { COMMAND_END, HashiClient, HashiSlashCommand } from '../../root';
import { ChatInputCommandInteraction } from 'discord.js';

@Injectors.HashiCommandInjector({
  id: 'pang',
  type: 'slash',
  coolDown: 0,
  interferingCommands: [],
  src: {
    name: 'pang',
    type: 1,
    description: 'A simple command that replies "poung".',
    default_member_permissions: null,
  },
})
export class Pang extends HashiSlashCommand {
  public callback = async (
    client: HashiClient,
    interaction: ChatInputCommandInteraction,
    context: Context,
  ): Promise<COMMAND_END> => {
    await interaction.reply(`Poung!`).catch(client.logger.clean);

    return 0;
  };
}
