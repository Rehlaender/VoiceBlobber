var express = require('express');
var router = express.Router();

/* GET home page. */

var voiceform_controller = require('../controllers/voiceformController');

// form page
router.get('/', voiceform_controller.index);

/* POST request speaking. */
router.post('/create', voiceform_controller.post_voice);

/* GET request for speaking. */
router.get('/get', voiceform_controller.get_voice);


module.exports = router;
