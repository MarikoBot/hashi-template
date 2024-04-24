import { Client, DiscordEvent } from 'marikobot-hashi';
import { BaseInteraction } from 'discord.js';
import { client } from '../index';

@client.events.inject('interactionCreate')
export class InteractionCreate extends DiscordEvent {
  async callback(client: Client, interaction: BaseInteraction): Promise<void> {
    if (interaction.isChatInputCommand()) await client.commands.detectAndLaunchSlashCommand(interaction);
  }
}
