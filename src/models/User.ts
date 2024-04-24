import { SuperModel, SuperModelColumn } from 'marikobot-hashi';
import { client } from '../index';

@client.db.inject('user')
export class User extends SuperModel {
  onLoaded() {
    return {
      discordId: new SuperModelColumn(String),
    };
  }
}
