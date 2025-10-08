const Task = require('../models/tasks');


const getallTasks = (req,res)=>{
    res.send(`get all tasks`)
}
const createtasks = async  (req,res)=>{
   // const {name, age} = req.body;
    //const { id, name} = req.params;
    //const name = req.body.name;
  // res.json(req.body.name)
 // res.send(`created a task ${name}`); 
  // res.send(`create a task with name ${req.body.name} and age is ${req.body.age}`)

  const task =await Task.create(req.body);
  res.status(201).send({task})
  console.log({task});

}
const getTasks = (req,res)=>{
    //const {id} = req.params;
    //res.send(`get a task ${id} `)
    res.json({id:req.params.id});
}
const updateTask=(req,res)=>{
    const {id} = req.params;
    res.send(`updatre a task of id ${id}`)
}
const deletetask = (req,res)=>{
    const{ id} = req.params;
    res.send(`delete a task ${id}`)
}



module.exports = {
    getallTasks,
    getTasks,
    createtasks,
    updateTask,
    deletetask

}