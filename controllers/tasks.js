const Task = require('../models/tasks');
const AsyncWrapper = require('../Middleware/Async_warpper')

const getallTasks =AsyncWrapper( async(req,res)=>{
        const tasks = await Task.find({})
        res.status(200).json({tasks});

})
const createtasks = AsyncWrapper(async  (req,res)=>{
    const task =await Task.create(req.body);
    res.status(201).json(task)
})
const getTasks = AsyncWrapper(async(req,res)=>{
   const {id:TaskId} = req.params
   const tasks = await Task.findOne({_id:TaskId})
     if(!tasks){
         return res.status(400).json({msg:`no task with id ${TaskId}`})
     }
    res.status(200).json({tasks});
})
const updateTask= AsyncWrapper(async(req,res)=>{
    const {id:TaskId} = req.params;
        const tasks = await Task.findOneAndUpdate({_id:TaskId},req.body,{
            new:true,
            runValidators:true
        })
        if(!tasks){
            return res.status(400).json({msg:`no task with id ${TaskId}`})
        }
        res.status(200).json({tasks})
})
const deletetask =AsyncWrapper(async (req,res)=>{
    const {id:TaskId} =req.params
        const tasks =await Task.findOneAndDelete({_id:TaskId})
        if(!tasks){
           return res.status(404).json({msg :`the id ${TaskId} is not found`})
        }
        res.status(200).json(tasks);
})
module.exports = {
    getallTasks,
    getTasks,
    createtasks,
    updateTask,
    deletetask
}