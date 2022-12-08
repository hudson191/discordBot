const { SlashCommandBuilder, EmbedBuilder } =  require ('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Returns an embed.'),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`Embed Title`)
      .setDescription(`Embed Description`)
      .setColor(0x18e1ee)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        url: `https://discord.gg/`,
        iconURL: interaction.user.displayAvatarURL(),
        name: `Embed Author`,
      })
      .addFields([
        {
          name: `Field 1`,
          value: `Field 1 Value`,
          inline: true
        },
        {
          name: `Field 2`,
          value: `Field 2 Value`,
          inline: true
        }
      ])
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag
      });
      await interaction.reply({
        embeds: [embed]
      });
  }
}