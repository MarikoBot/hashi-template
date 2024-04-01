import { Injectors } from '../../decorators';
import { HashiMessageCommand } from '../../root';

@Injectors.HashiCommandInjector({
  id: 'pang',
  type: 'message',
  coolDown: 0,
  interferingCommands: [],
})
export class Ping extends HashiMessageCommand {}
