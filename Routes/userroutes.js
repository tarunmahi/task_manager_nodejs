const express= require('express');
const router =express.Router()
const {getallTasks , createtasks, updateTask, getTasks,deletetask} = require('../controllers/tasks')

// router.get('/',(req,res)=>{
//     res.send(`users home page for get`)
// })
router.route('/').get(getallTasks).post(createtasks);
router.route('/:ID').get(getTasks).patch(updateTask).delete(deletetask);
module.exports=router