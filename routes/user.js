const { Router } = require('express');
const {userController_get, userController_post} = require('../controllers/userController');
const router = Router();

router.get('/', userController_get);
router.post('/:id', userController_post);


module.exports = router;