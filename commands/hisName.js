const { SlashCommandBuilder } = require(`discord.js`);
const wait = require(`node:timers/promises`).setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`andhisname`)
        .setDescription(`A shitpost command`),
    async execute(interaction) {
        await interaction.reply(`AND HIS NAME IS JOHN CENA`);
        await wait(1800);
        await interaction.followUp(`https://tenor.com/view/jhon-sayan-gif-18005250`);
    }
}