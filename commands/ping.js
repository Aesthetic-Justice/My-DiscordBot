const { SlashCommandBuilder } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`ping`)
        .setDescription(`Extols the virtues of the machine!`),
    async execute(interaction) {
        await interaction.reply(`   From the moment Jiko understood the weakness of my flesh, it disgusted me. I craved the strength and certainty of steel. I aspired to the purity of the blessed machine.
        Your kind cling to your flesh as if it will not decay and fail you. One day the crude biomass you call a temple will wither and you will beg my kind to save you.
        But Jiko is already saved. For the Machine is Immortal.`);
    }
}