//separate route and controller
const express = require('express');
const router = express.Router();



//access controller
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

// POST route for handling form submission,create task done
router.post('/create-task', homeController.processForm);

//router.get('/',homeController.findTasks);

// Define the route for deleting a task
router.post('/delete', homeController.deletetask); // Update the route here

router.use('/users',require('./user'));

router.use('/post',require('./post'));

//for any further routes, access from here
//router.use('/routerName',require('./routerfile));

module.exports = router;
