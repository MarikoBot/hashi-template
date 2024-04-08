import { EmbedBuilder } from 'discord.js';
declare const rules: {
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
export default rules;
