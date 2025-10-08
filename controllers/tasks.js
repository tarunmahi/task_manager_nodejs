const Task = require('../models/tasks');


const getallTasks =  async(req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks});
        
    } catch (error) {
        res.status(500).json({error})
    }

}
const createtasks = async  (req,res)=>{
try {
    const task =await Task.create(req.body);
    res.status(201).json(task)
    
} catch (error) {
    res.status(500).json({msg : error})
}

}
const getTasks = async(req,res)=>{

try {
   const {id:TaskId} = req.params
   const tasks = await Task.findOne({_id:TaskId})
     if(!tasks){
         return res.status(400).json({msg:`no task with id ${TaskId}`})
     }
    res.status(200).json({tasks});
 } catch (error) {
     res.status(500).json({error});
 }
}
const updateTask= async(req,res)=>{
    const {id:TaskId} = req.params;
    try {
        const tasks = await Task.findOneAndUpdate({_id:TaskId},req.body,{
            new:true,
            runValidators:true
        })
        if(!tasks){
            return res.status(400).json({msg:`no task with id ${TaskId}`})
        }
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json(error);
    }
}
const deletetask =async (req,res)=>{
    const {id:TaskId} =req.params
    try {
        const tasks =await Task.findOneAndDelete({_id:TaskId})
        if(!tasks){
           return res.status(404).json({msg :`the id ${TaskId} is not found`})
        }
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports = {
    getallTasks,
    getTasks,
    createtasks,
    updateTask,
    deletetask
}