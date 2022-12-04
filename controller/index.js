const apiRoutes = require(`./api`);
const pageRoutes = require(`./page-routes`);

const router = require(`express`).Router();

router.use(`/`,pageRoutes);
router.use(`/api`,apiRoutes);

module.exports = router;