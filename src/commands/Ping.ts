import { Client, Command, COMMAND_END, Context } from 'marikobot-hashi';
import { ApplicationCommandOptionType, ApplicationCommandType } from 'discord.js';
import { client } from '../index';

@client.commands.inject({
  id: 'ping',
  interferingCommands: [],
  coolDown: 3,
  subcommands: [{ id: 'ping hi' }],
  subcommandGroups: [
    {
      id: 'ping group',
      subcommands: [{ id: 'ping group hello' }, { id: 'ping group world' }],
    },
  ],
  src: {
    name: 'ping',
    description: 'Replies with pong!',
    default_member_permissions: null,
    type: ApplicationCommandType.ChatInput,
    options: [
      {
        name: 'hi',
        description: 'Say hi!',
        type: ApplicationCommandOptionType.Subcommand,
      },
      {
        name: 'group',
        description: 'Group commands!',
        type: ApplicationCommandOptionType.SubcommandGroup,
        options: [
          {
            name: 'hello',
            description: 'Say hello!',
            type: ApplicationCommandOptionType.Subcommand,
          },
          {
            name: 'world',
            description: 'Say world!',
            type: ApplicationCommandOptionType.Subcommand,
          },
        ],
      },
    ],
  },
})
export class Ping extends Command {
  async callback(client: Client, ctx: Context): Promise<COMMAND_END> {
    await ctx
      .reply('https://tenor.com/view/demon-slayer-tengen-uzui-kimetsu-no-yaiba-gif-24115545')
      .catch(client.logger.clean);
    return this.end();
  }
}
