const { Events } = require(`discord.js`);

//Output when ready to console
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Successfully logged in as ${c.user.tag}`);
    },
};