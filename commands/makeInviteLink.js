const { SlashCommandBuilder } = require(`discord.js`);
const { BotLink } = require(`../config/config.json`)

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`invite`)
        .setDescription(`get Invite Link`),
    async execute(interaction) {
        await console.log(interaction.user);
        await interaction.reply(BotLink);
    }
}