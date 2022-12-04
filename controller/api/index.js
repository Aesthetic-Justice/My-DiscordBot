const router = require(`express`).Router();

const apiRoutes = require(`./digimonDB-routes`);
const userRoutes = require(`./user-routes`);

router.use(`/db`, apiRoutes);
router.use(`/user`, userRoutes);

module.exports = router;