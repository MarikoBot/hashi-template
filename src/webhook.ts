import { Channel, Client, Collection, Message, TextChannel, Webhook } from 'discord.js';
import * as fs from 'fs';

export default function webhook(): void {
  const client: Client = new Client({
    intents: 3276799,
  });

  async function loadWebhooks(filename: string): Promise<void> {
    const webhookData = require(`./webhooks/${filename}`).default;

    if (!webhookData.resend) return;

    const channel: Channel = await client.channels.fetch(webhookData.channel);

    if (!channel.isTextBased()) return;
    if (!(channel instanceof TextChannel)) return;

    const webhooks: Collection<string, Webhook> = await channel.fetchWebhooks();
    const messages: Collection<string, Message> = await channel.messages.fetch();

    if (webhooks.size) webhooks.forEach((wh: Webhook): void => {
      messages.forEach((msg: Message) => msg.author.id === wh.id ? msg.delete() : void 0);
      wh.delete("Auto remove before recreating.")
    });

    let webhook: Webhook = await channel.createWebhook({
      reason: "Creation of webhook.", ...webhookData.identity
    });
    
    await webhook.send(webhookData.payload).catch(console.error);
  }

  client.once('ready', (): void => {
    fs.readdirSync('src/webhooks').forEach((file: string) => loadWebhooks(file));
  });

  void client.login(process.env.TOKEN);
}
