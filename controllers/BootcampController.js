exports.getAllBootcamps = (req , res) => {
    res
    .status(200)
    .json({
        "success" : true,
        "data" : `todos los bootcamps`
    })
}

exports.getSingleBootcamp = (req , res) => {
    res
    .status(200)
    .json({
        "success" : true,
        "data" : `Single bootcamp`
    })
}

exports.createBootcamp = (req , res) => {
    res
    .status(201)
    .json({
        "success" : true,
        "data" : "create Bootcamp"
    })
}

exports.updateBootcamp = (req , res) => {
    res
    .status(201)
    .json({
        "success" : true,
        "data" : `update bootcamp 
        ${ req.params.id}`
    })
}

exports.deleteBootcamp = (req , res)=>{
    res
    .status(201)
    .json({
        "success" : true,
        "data" : ``
    })
}