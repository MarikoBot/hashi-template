import { EmbedBuilder } from 'discord.js';

const rules = {
  channel: '1139631766009823273',
  resend: true,
  payload: {
    embeds: [
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setImage('https://cdn.discordapp.com/attachments/1222194590639980575/1226956717791907860/readme_banner.png?ex=6626a77d&is=6614327d&hm=3cebe8822cc5aa6703d094eac3f19cd90233eac2c4c669d821bdc31a8aaff36f&'),
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setTitle('<:MarikoArrowRight:1186296843173384233> (<:MarikoAdmin:1186296827419557949>) __Bot Commands Privileges__')
        .setDescription(`
**If you use the bot, you might encounter an error message while trying to call a command. In this case, it can mostly be because of a sanction (like a banishment), but you can anyway ask a moderator why you got this message.**

If you want to understand the structure of the **\`privileges code\`**, let's introduce bits privileges.

> **<:MarikoCross:1191675946353299456> If you are not used with bit fields, the bellow instructions will be not clear at all. This is not necessary to understand the bot. It's here on an additional information purpose for the most curious of you.**
`),
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setTitle('1. How it works')
        .setDescription(`
Commands privileges are made with a byte composed of 8 bits, where which one designs a precise privilege (forbidden channel, role, unique user...). Let's call that **\`b\`**.

Now, we initialize **\`a\`** that depicts the amount of bits enabled for your privileges issues. For example, if you are not in an unique guild, and if you are a forbidden user, **\`a\`**'s value is **2**.

Let's make **\`a\`** and **\`b\`** together to get our privileges issue's code: it's **\`ab\`**. For example, if your are not in a **\`uniqueChannel (1 << 0)\`** and if you are a **\`forbiddenUser (1 << 7)\`**, the privileges code will be **\`2\`** (2 missing) + **\`129\`**, so **\`2129\`**.

### Table of bits (for each privilege)

\`\`\`fix
Privilege         |  Value
                  |
forbiddenUsers    |  128 (1 << 7)
uniqueUsers       |  64  (1 << 6)
forbiddenGuilds   |  32  (1 << 5)
uniqueGuilds      |  16  (1 << 4)
forbiddenRoles    |  8   (1 << 3)
uniqueRoles       |  4   (1 << 2)
forbiddenChannels |  2   (1 << 1)
uniqueChannels    |  1   (1 << 0)
\`\`\`
Note that command privileges are **not** the same thing as the blacklist.
`),
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setTitle('2. Bypassing')
        .setDescription(`
The above privileges are ranked by order of priority. For example, if you are a **\`uniqueUsers\`** but you are in a **\`forbiddenChannels\`**, you will nevertheless bypass and we able to execute the command.
`),
    ],
  },
  identity: {
    name: "Readme",
    avatar: 'https://cdn.discordapp.com/attachments/1222194590639980575/1226956717418479626/readme_avatar.png?ex=6626a77d&is=6614327d&hm=f9d23c5d00cf9ada94a6a05bcc71b2bc03b310104ae55e94ba5c3628f8584b66&',
  }
}

export default rules;