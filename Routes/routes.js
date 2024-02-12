const express = require('express')
const router = express.Router()
const userController = require ('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const multerConfig = require('../Middleware/multerMiddleware')

// route for register
router.post('/register',userController.register)
//  login
router.post('/login',userController.login)
// router specific middleware
// add project
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)

// getHomeProjects
router.get('/home-projects',projectController.getHomeProjects)

// getAllProjects
router.get('/all-projects',jwtMiddleware,projectController.getAllProjects)

// getUserProjects
router.get('/user-projects',jwtMiddleware,projectController.getUserProjects)

// edit project
router.put('/project/edit/:pid',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProject)

// remove project
router.delete('/project/remove/:pid',jwtMiddleware,projectController.removeProject)

// updateUser
router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)



module.exports = router