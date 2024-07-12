const express = require("express");
const router=express.Router()
const {getTasks,getsingleTasks,updateTasks,deleteTasks,addTasks}=require('../controllers/tasks')
router.route('/').get(getTasks).post(addTasks)
router.route('/:id').get(getsingleTasks).patch(updateTasks).delete(deleteTasks)

module.exports = router


