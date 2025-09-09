const getallTasks = (req,res)=>{
    res.send(`get all tasks`)
}
const createtasks = (req,res)=>{
    res.send(`create a task`)
}
const getTasks = (req,res)=>{
    res.send(`get a task`)
}
const updateTask=(req,res)=>{
    res.send(`updatre a task`)
}
const deletetask = (req,res)=>{
    res.send(`delete a task`)
}



module.exports = {
    getallTasks,
    getTasks,
    createtasks,
    updateTask,
    deletetask

}