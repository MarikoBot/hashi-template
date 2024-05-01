import { Client, Command, COMMAND_END, Context } from 'marikobot-hashi';
import { ApplicationCommandOptionType, ApplicationCommandType } from 'discord.js';
import { client } from '../index';

@client.commands.inject({
  id: 'kamida',
  interferingCommands: [],
  coolDown: 3,
  src: {
    name: 'kamida',
    description: 'I am a god!',
    default_member_permissions: null,
    type: ApplicationCommandType.ChatInput,
  },
})
export class Kamida extends Command {
  async callback(client: Client, ctx: Context): Promise<COMMAND_END> {
    await ctx
      .reply('https://tenor.com/view/demon-slayer-tengen-uzui-kimetsu-no-yaiba-gif-24115545')
      .catch(client.logger.clean);
    return this.end();
  }
}
