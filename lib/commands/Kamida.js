"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kamida = void 0;
const marikobot_hashi_1 = require("marikobot-hashi");
const discord_js_1 = require("discord.js");
const index_1 = require("../index");
let Kamida = class Kamida extends marikobot_hashi_1.Command {
    async callback(client, ctx) {
        await ctx
            .reply('https://tenor.com/view/demon-slayer-tengen-uzui-kimetsu-no-yaiba-gif-24115545')
            .catch(client.logger.clean);
        return this.end();
    }
};
exports.Kamida = Kamida;
exports.Kamida = Kamida = __decorate([
    index_1.client.commands.inject({
        id: 'kamida',
        interferingCommands: [],
        coolDown: 3,
        src: {
            name: 'kamida',
            description: 'I am a god!',
            default_member_permissions: null,
            type: discord_js_1.ApplicationCommandType.ChatInput,
        },
    })
], Kamida);
