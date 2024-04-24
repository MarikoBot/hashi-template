"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionCreate = void 0;
const marikobot_hashi_1 = require("marikobot-hashi");
const index_1 = require("../index");
let InteractionCreate = class InteractionCreate extends marikobot_hashi_1.DiscordEvent {
    async callback(client, interaction) {
        if (interaction.isChatInputCommand())
            await client.commands.detectAndLaunchSlashCommand(interaction);
    }
};
exports.InteractionCreate = InteractionCreate;
exports.InteractionCreate = InteractionCreate = __decorate([
    index_1.client.events.inject('interactionCreate')
], InteractionCreate);
