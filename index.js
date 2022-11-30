// Dependencies
const fs = require(`node:fs`);
const path = require(`node:path`);
const { Client, Events, GatewayIntentBits, Collection } = require(`discord.js`);
const { token } = require(`./config/config.json`);

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Instantiating a container to store our Discord commands
client.commands = new Collection();

//Create a variable containing a path to the folder where the commands are stored,
//Then fill an array with all those command .js files
const commandsPath = path.join(__dirname, `commands`);
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(`.js`));

//for each command(seperated by file) in the array
for (const file of commandFiles) {
    //create a link to it
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required 'data' or 'execute' property`);
    }
}

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

//Once client is ready, provide feedback
client.once(Events.ClientReady, c => {
    console.log(`   From the moment I understood the weakness of my flesh, it disgusted me. I craved the strength and certainty of steel. I aspired to the purity of the blessed machine.
    Your kind cling to your flesh as if it will not decay and fail you. One day the crude biomass you call a temple will wither and you will beg my kind to save you.
    But ${c.user.tag} is already saved. For the Machine is Immortal.`);
});











client.login(token);