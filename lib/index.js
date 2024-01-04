"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../.env` });
const hashi_1 = require("@elouannh/hashi");
const client = new hashi_1.HashiClient({
    intents: 0,
    commandsDir: 'commands',
    eventsDir: 'events',
    processName: 'bot-template',
});
void client.login();
