// const express= require('express');
// const router =express.Router()
// const {getallTasks , createtasks, updateTask, getTasks,deletetask} = require('../controllers/tasks')

// // router.get('/',(req,res)=>{
// //     res.send(`users home page for get`)
// // })
// router.route('/').get(getallTasks).post(createtasks);
// router.route('/:ID').get(getTasks).patch(updateTask).delete(deletetask);
// module.exports=router
const express= require('express')
const router = express.Router()

const {getallTasks,getTasks,createtasks,updateTask,deletetask } =require('../controllers/tasks')

//router.route('/').get((req,res)=>{
  //  res.send("all items");
//})

router.route('/').get(getallTasks).post(createtasks);
router.route('/:id').get(getTasks).patch(updateTask).delete(deletetask);
module.exports=router;