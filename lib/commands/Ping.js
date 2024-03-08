"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hashi_1 = require("@elouannh/hashi");
const ping = async (client, interaction, ctx) => {
    await interaction.reply({ content: 'Pong!' }).catch(client.logger.clean);
    return ctx.command.end();
};
module.exports = new hashi_1.HashiSlashCommand('ping')
    .setDescription('A simple ping command.')
    .setCoolDown(4)
    .setCallbackFunction(ping);
