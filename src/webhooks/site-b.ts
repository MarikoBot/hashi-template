import { EmbedBuilder } from 'discord.js';

const siteB = {
  channel: '1218644540240695357',
  resend: false,
  payload: {
    embeds: [
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setTitle('<:MarikoArrowRight:1186296843173384233> **RÈGLEMENT**'),
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setTitle('__1. Général__')
        .setDescription(`
> 1. Restez poli, respectueux et courtois envers tout le monde (même les joueurs de Viper).
> 2. Pas de spam, pas de flood inutile.
> 3. Gardez un profil cohérent et respectueux.
> 4. La diffusion d'information personnelle d'autrui sans son consentement est interdite.
> 5. Pas de contenu NSFW ou choquant.
`),
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setTitle('__2. Vocal__')
        .setDescription(`
> 1. Restez poli, respectueux et courtois envers tout le monde (même les joueurs de Yoru).
> 2. Ne criez pas, ne soyez pas inaudibles et ne dérangez pas.
> 3. Pas de paroles choquantes ou inappropriées.
`),
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setTitle('<:MarikoArrowRight:1186296843173384233> **INFORMATIONS**'),
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setTitle('__1. Rôles__')
        .setDescription(`
> ~ Le rôle @Agent est le rôle de membre.
> ~ Le rôle @Expert est atribué aux joueurs les plus expérimentés du serveur: n'hésitez pas à leur demander conseil !
`),
      new EmbedBuilder()
        .setColor(0x6c46bc)
        .setTitle('__2. Salons__')
        .setDescription(`
> ~ La catégorie "Blabla Général" sert à discuter de manière générale, et "Panel d'Information" vous notifiera des informations sur le serveur (#📆・communauté) et de ses différentes animations (#🍙・animations)
> ~ La catégorie Valorant regroupe 5 salons: #🍾・update-news servira à notifier à chaque update, mise à jour, ... sur Valorant, #🌱・ressources notifiera différentes ressources pour s'améliorer et/ou débuter, #🍡・chat-valo sert à parler du jeu de manière générale, #🐉・méta-gameplay est là pour parler de la méta, des tierlists, ... et #🧃・partage-clip vous sert pour partager du contenu autour de Valorant.
> ~ Les salons vocaux servent à discuter et/ou jouer: n'hésitez pas à utiliser @Nero Bot#8853 pour jouer de la musique en vocal !
`),
    ],
  },
  identity: {
    name: "Règlement du Site B",
    avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F302%2Fthumb-302463.jpg&f=1&nofb=1&ipt=00f678d5268ed81e2865a7cde87f6eff2037edf089bcef8b301f417981cc295f&ipo=images',
  }
}

export default siteB;