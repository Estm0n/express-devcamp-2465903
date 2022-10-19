const express = require('express')
const router = express.Router()

router.get('/' , (req, res)=>{
    res
    .status(200)
    .json({
        "success" : true,
        "data" : "aqui se van a mostrar todos los cursos"
})
})

router.get('/:id' , (req , res)=>{
    res
    .status(200)
    .json({
        "success" : true,
        "data" : `aqui se va a mostrar el curso cuyo id es ${req.params.id}`
    })
})

router.post('/' , (req , res)=>{
    res
    .status(201)
    .json({
        "success" : true,
        "data" : "aqui se va a crear un nuevo curso"
    })
})

router.put('/:id' , (req , res)=>{
    res
    .status(201)
    .json({
        "success" : true,
        "data" : "aqui se va a actualizar un nuevo curso"
    })
})

router.delete('/:id', (req , res)=>{
    res
    .status(201)
    .json({
        "success" : true,
        "data" : "aqui se va a borrar un curso"
    })
})

module.exports = router