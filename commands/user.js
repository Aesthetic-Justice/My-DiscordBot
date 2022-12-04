const { SlashCommandBuilder } = require('discord.js');
const createAccount = require(`../helpers/CreateAccount`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information about the user.'),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        const name = interaction.user.username;
        const id = interaction.user.id;
        const avatar = interaction.user.avatar;
        await interaction.reply(`initiating account creation`);
        await console.log(interaction.user);
        const result = await createAccount(name,id,avatar);
        if(result == true ){
        await interaction.followUp(`account created successfully!, thank you ${name}!`);
        } else {
            await interaction.followUp(`Uh Oh ${name}!\nLooks like I made a fucky wucky and something went wrong, and your account failed to be created.`);
        }
    },
};