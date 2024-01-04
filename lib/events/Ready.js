"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hashi_1 = require("@elouannh/hashi");
module.exports = new hashi_1.HashiEvent('interactionCreate').setCallbackFunction((client) => {
    client.Logger.info('The client is connected.');
});
