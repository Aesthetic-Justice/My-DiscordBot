// Dependencies
const fs = require(`node:fs`);
const path = require(`node:path`);
const { Client, Events, GatewayIntentBits, Collection } = require(`discord.js`);
const { token } = require(`./config/config.json`);

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//Create a variable containing a path to the folder where the events are stored,
//Then fill an array with all those event js files
const eventsPath = path.join(__dirname, `events`);
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(`.js`));

//for each event
for(const file of eventFiles){
    //grab the event
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    //Set the event triggers based on single-use or repeatable
    if (event.once){
        client.once(event.name, (...args) => event.execute(...args)); 
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}


// Instantiating a container to store our Discord commands
client.commands = new Collection();

//Create a variable containing a path to the folder where the commands are stored,
//Then fill an array with all those command js files
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











client.login(token);