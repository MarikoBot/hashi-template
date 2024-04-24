"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ping = void 0;
const marikobot_hashi_1 = require("marikobot-hashi");
const discord_js_1 = require("discord.js");
const index_1 = require("../index");
let Ping = class Ping extends marikobot_hashi_1.Command {
    async callback(client, ctx) {
        await ctx
            .reply('https://tenor.com/view/demon-slayer-tengen-uzui-kimetsu-no-yaiba-gif-24115545')
            .catch(client.logger.clean);
        return this.end();
    }
};
exports.Ping = Ping;
exports.Ping = Ping = __decorate([
    index_1.client.commands.inject({
        id: 'ping',
        interferingCommands: [],
        coolDown: 3,
        subcommands: [{ id: 'ping hi' }],
        subcommandGroups: [
            {
                id: 'ping group',
                subcommands: [{ id: 'ping group hello' }, { id: 'ping group world' }],
            },
        ],
        src: {
            name: 'ping',
            description: 'Replies with pong!',
            default_member_permissions: null,
            type: discord_js_1.ApplicationCommandType.ChatInput,
            options: [
                {
                    name: 'hi',
                    description: 'Say hi!',
                    type: discord_js_1.ApplicationCommandOptionType.Subcommand,
                },
                {
                    name: 'group',
                    description: 'Group commands!',
                    type: discord_js_1.ApplicationCommandOptionType.SubcommandGroup,
                    options: [
                        {
                            name: 'hello',
                            description: 'Say hello!',
                            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
                        },
                        {
                            name: 'world',
                            description: 'Say world!',
                            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
                        },
                    ],
                },
            ],
        },
    })
], Ping);
