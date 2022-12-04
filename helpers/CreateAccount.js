const { User } = require(`../models/user-Index`);

module.exports = (async (name, id, avatar) => {
    console.log(`\nid:${id},\nname:${name},\navatar:${avatar},\n`);
    try {
        await User.create({
            name: name,
            id: id,
            avatar: `https://cdn.discordapp.com/avatars/${id}/${avatar}`,
        });
        return true;
    } catch (err) {
        console.log(`${err}\n\n\n${{err}}`);
        return err;
    }
});