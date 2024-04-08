import { EmbedBuilder } from 'discord.js';

const rules = {
  channel: '1139195374498746389',
  resend: false,
  payload: {
    embeds: [
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setImage('https://cdn.discordapp.com/attachments/1222194590639980575/1224359714184368138/rules_embed.png?ex=661d34d7&is=660abfd7&hm=a2f8f2bf07ef21ebe54b14a78c7c4ff117f61bcea934d80f81fd247f7af16743&'),
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setTitle('<:MarikoArrowRight:1186296843173384233> __1. Server behavior and identity__')
        .setDescription(`
**a. Basement**
> All members of this server must comply with the Discord ToS. The rules are complementary to these ToS. Moreover, as the project is French, French and European legislation apply here.

**b. Be respectful**
> You must behave respectfully. Disrespect, whether by message, voice or via your profile, is forbidden. Homophobia, racism or any other form of discrimination (towards a minority or not) is forbidden.

**c. Channels use**
> We kindly ask you to respect the various channels and to use them only for the purpose for which they were originally intended.

**d. No (self-)advertisement**
> Self-promotion or advertising in any form is prohibited in the written and vocal channels and in the private messages of the members of this server.

**e. Cyber threats**
> Attacks and threats targeting a member or one of MarikoBot's projects, such as revealing personal information, cyberstalking, or any computer attack, are prohibited.

**f. No sensitive content**
> You are responsible for what you post. Please do not post spoiler, sexual or otherwise offensive content.

**g. No clutter**
> Spamming, flooding, etc. is forbidden. It also concerns mentions, emojis, stickers, etc.

**h. No sensitive topics**
> We ask you to refrain from tackling controversial subjects such as religion, politics or any other subject that may lead to negative reactions.

**i. Humor and limits**
> Humor is of course allowed. However, we ask you to keep it within tolerable limits. You are responsible, and humor is not an immunity totem. If you don't overdo it, you'll be fine.

**j. Crediting art**
> You must credit the works you post in the lounges provided for this purpose. We'll consider them yours if you don't.

**k. Speak (a correct) English**
> This server is English-speaking. Please speak English or you will be penalized. There are secondary channel categories for other languages. Also, if you don't speak English and wish to speak to the staff, please contact them in your native language and we'll answer you as best we can. Overall, we ask you to speak properly and to be understandable.

**l. Avoid personal cases**
> This server is not a psychologist's office. Please do not discuss your personal problems on this server and keep them private. If you need help, please do not hesitate to turn to your loved ones or health professionals.

**m. Avoid personal conflicts**
> Nor is this server a place to settle your disputes. If you have a problem with one or more members of the server, please contact the moderators who will be able to resolve the conflict.

**n. Voice calls behavior**
> Noise pollution (intentional or unintentional) in voice channels is to be avoided. If you don't have the right equipment, use push-to-talk or turn off your microphone when you're not speaking.

**o. Sexuality and kids**
> Mentioning, whether in a humorous way or not, paedophilia or anything close to it (lolis, etc.) are punishable without exception. This also applies to comments relating to any sexual acts.
`),
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setTitle('<:MarikoArrowRight:1186296843173384233> __2. Bots activity__')
        .setDescription(`
**a. Cheating**
> Cheating is forbidden. The use of bots, double accounts or any other process giving an advantage over the bot without the mechanics being explicitly designed for this purpose, is forbidden.

**b. Counter-productivity**
> Any attempt to hinder the growth of the bots, whether through hatred or trashtalk, is forbidden. If you're looking for help or would like to speak to the staff, you can do so by contacting one of our administrators directly. We'll be delighted to help.
`),
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setTitle('<:MarikoArrowRight:1186296843173384233> __3. Moderation and sanctions__')
        .setDescription(`
**a. Understanding**
> We ask you to show common sense and understanding towards the moderators. If you still wish to contest a decision, please contact the administrators.

**b. Sanctions are variable**
> Penalties vary according to the seriousness of the situation. There's no hard and fast rule about what you can be punished for. With a few exceptions, those responsible are first given a timeout until a final sanction is applied.

**c. Unknown penalties**
> Moderators may punish you for actions not listed in the above rules, if and only if these actions are justifiable and contrary to a healthy server environment. In such cases, the rule will be added to the server rules once the case has been dealt with.
`),
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setDescription(`
Thank you for reading this. We take it for granted that anyone who is a member of this server and/or a player of the MarikoBot bot is aware of the rules imposed on them for the use of the bot and presence on the server.

Please do not hesitate to contact the staff if you have any questions.
Have a good time on MarikoBot.
`),
    ],
  },
  identity: {
    name: "Rules",
    avatar: 'https://cdn.discordapp.com/attachments/1222194590639980575/1224359713773457468/rules_avatar.png?ex=661d34d7&is=660abfd7&hm=e5874ab38848c70b7c2e520af6ae57f9810efbd469daa9dcc27e6e7a1741100d&',
  }
}

export default rules;