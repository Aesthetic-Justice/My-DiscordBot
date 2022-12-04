const router = require(`express`).Router();
const { User } = require(`../../models/user-Index`);

//Get profile pic
router.get(`/pfp`, async (req,res) => {
    console.log(`GET profile pic`);
    try{
        const path = `https://cdn.discordapp.com/avatars/${req.params.id}/${req.params.avatar}`;
        const pfp = fetch(path)
        .then(function(response){
            return response;
        })

        res.send(pfp);

    } catch (err){
        res.status(500).json(err)
    }
})

//Make Account
router.post(`/signUp`, async (req,res)=> {
    try{
        await User.create({
            name: req.params.name,
            id: req.params.id,
            avatar: `https://cdn.discordapp.com/avatars/${req.params.id}/${req.params.avatar}`,
        });
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;