import { Client, DiscordEvent } from 'marikobot-hashi';
import { client } from '../index';

@client.events.inject('ready')
export class Ready extends DiscordEvent {
  callback(client: Client): void {
    void client.logger.sendTo('status', { content: '<:MarikoOnline:1186296992629014558> The bot is now **online**.' });
  }
}
