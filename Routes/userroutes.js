const express= require('express');
const router =express.Router()
const {getall} = require('../controllers/tasks')

// router.get('/',(req,res)=>{
//     res.send(`users home page for get`)
// })
router.route('/name').post(getall);


router.post('/',(req,res)=>{
    res.send(`users home page for post`)
})

router.get('/:id',(req,res)=>{
    res.send(`the id to be fetched is ${req.params.id}`)
})

router.post('/:id',(req,res)=>{
    res.send(`id to be  updtaeed is ${req.params.id}`)
})

module.exports=router