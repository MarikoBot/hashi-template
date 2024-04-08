import { EmbedBuilder } from 'discord.js';
declare const siteB: {
    channel: string;
    resend: boolean;
    payload: {
        embeds: EmbedBuilder[];
    };
    identity: {
        name: string;
        avatar: string;
    };
};
export default siteB;
