const {name}="";

const getallTasks = (req,res)=>{
    const {name} = req.query
    //const {name} = req.body
    //const{name} = req.params 
    res.send(` this is ${name}`)
}
const createtasks = (req,res)=>{
    const {name,mem_id} = req.body
    res.send(`create a task of ${name} and his id is  ${mem_id}`)
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