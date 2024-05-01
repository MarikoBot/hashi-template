"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../.env` });
const marikobot_hashi_1 = require("marikobot-hashi");
exports.client = new marikobot_hashi_1.Client({ ...require('../hashi.config.json'), failIfNotExists: false });
void exports.client.connectDatabase();
const commands = require("./commands");
const events = require("./events");
const models = require("./models");
void [commands, events, models];
setTimeout(() => {
    void exports.client.db.get('user').create({
        discordId: '1146145475683164273',
    });
}, 5000);
void exports.client.login();
