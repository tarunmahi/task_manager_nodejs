
const noroute = (req,res)=>res.status(500).send(`no such route present`);
module.exports=noroute
